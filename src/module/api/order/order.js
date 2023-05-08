const dbPool = require("../../../database/dbPool.js");
const judge = require("../../help/requireJudge.js");
const tool = require("../../help/tool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  if (!judge(req.body)) {
    // console.log(res);
    res.send({
      error: { data: {}, msg: "错误，填写不能为空" },
    });
    return;
  }
  if (req.body.start >= req.body.end) {
    res.send({
      error: { data: {}, msg: "错误，预约时间错误" },
    });
    return;
  }
  let conn;
  const addOrderSql = `INSERT INTO order_user_apply (order_place_id, order_user_no, order_time_start, order_time_end, order_state, order_apply_reason, order_ordering_time, order_last_updateing_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const selectPlaceSql = `SELECT order_place_id FROM order_user_apply WHERE order_place_id=? AND order_time_start<=? AND order_time_end>=? AND order_state in (1,3)`;
  /** 查询用户列表 */
  const userSql = `select user_no,hours from (SELECT * FROM user WHERE user_no = ?) as a left join (select * from init_power_role_setting) as b on a.user_power = b.power `;
  /** 查询用户已使用时间 */
  const usedTimeSql = `select * from user_used_order_time where user_no = ? AND year_and_month = ?`;

  const updateUsedTimeSql = `UPDATE user_used_order_time SET used_time = ? WHERE user_no = ? AND year_and_month = ?`;

  const selectPlaceOrderUserNumberSql = `select * from  place_order_user_number where place_id =? and year_and_month = ?`;

  const updatePlaceOrderUserNumberSql = `UPDATE place_order_user_number SET ordered_user_number = ? WHERE place_id = ? AND year_and_month = ?`;

  const addPlaceOrderUserNumberSql = `INSERT INTO place_order_user_number (place_id, year_and_month, ordered_user_number) VALUE (?, ?, 1)`;

  const selectSettingSql = `select examine from init_book_time_setting limit 1`;
  try {
    conn = await dbPool.getConnection();
    const d = new Date();
    try {
      const sessionSql = `select * from user_session where user_no = ? AND session = ?`;
      const sessionRes = await conn.query(sessionSql, [
        req.session.user,
        req.session.session,
      ]);
      if (sessionRes.length === 0 || sessionRes[0]?.over_date < d.getTime()) {
        res.send({
          loginInfo: { data: {}, msg: "账号已过期，请重新登录" },
        });
        return;
      }
    } catch (error) {
      res.send({
        loginInfo: { data: {}, msg: "账号已过期，请重新登录" },
      });
      return;
    }

    const selectPlaceRes = await conn.query(selectPlaceSql, [
      req.body.place_id,
      req.body.start,
      req.body.end,
    ]);
    if (selectPlaceRes.length > 0) {
      console.log(selectPlaceRes);
      res.send({
        error: { data: {}, msg: "失败，已被预约" },
      });
      return;
    }

    const [userRes] = await conn.query(userSql, [req.body.user_no]);
    const [usedTimeRes] = await conn.query(usedTimeSql, [
      req.body.user_no,
      tool.getNowYearMonth(),
    ]);

    const futureUseTime = tool.getBetweenTimeAsHour(
      req.body.start,
      req.body.end
    );
    let surplusTime = userRes.hours - usedTimeRes.used_time;
    if (surplusTime - futureUseTime < 0) {
      res.send({ error: { data: {}, msg: "失败，剩余时间不足" } });
      return;
    }
    const [selectSetting] = await conn.query(selectSettingSql);
    let state = 1;
    if (selectSetting.examine == 0) {
      state = 3;
    }
    const addOrderRes = await conn.query(addOrderSql, [
      req.body.place_id,
      req.body.user_no,
      req.body.start,
      req.body.end,
      state,
      req.body.apply_reason,
      d.getTime(),
      d.getTime(),
    ]);

    const selectPlaceOrderUserNumberRes = await conn.query(
      selectPlaceOrderUserNumberSql,
      [req.body.place_id, tool.getNowYearMonth()]
    );
    if (selectPlaceOrderUserNumberRes.length === 0) {
      await conn.query(addPlaceOrderUserNumberSql, [
        req.body.place_id,
        tool.getNowYearMonth(),
      ]);
    } else {
      let nowOrderedNumber =
        selectPlaceOrderUserNumberRes[0].ordered_user_number - 0 + 1;
      await conn.query(updatePlaceOrderUserNumberSql, [
        nowOrderedNumber,
        req.body.place_id,
        tool.getNowYearMonth(),
      ]);
    }

    const updateUsedTimeRes = await conn.query(updateUsedTimeSql, [
      usedTimeRes.used_time - 0 + futureUseTime,
      req.body.user_no,
      tool.getNowYearMonth(),
    ]);

    console.log("add ok:", addOrderRes, " used: ", futureUseTime);
    res.send({
      data: {},
      msg: "success",
    });
  } catch (error) {
    console.log(req.session.user, ":", error);
    res.send({
      loginInfo: { data: {}, msg: "服务器错误" },
    });
  } finally {
    if (conn) conn.end();
  }
};
