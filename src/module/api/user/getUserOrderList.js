const dbPool = require("../../../database/dbPool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  /** 查询订单列表 */
  const selectOrderUserApplySql = `SELECT * FROM (SELECT * FROM order_user_apply WHERE order_user_no = ? ORDER BY order_id desc LIMIT 20) AS a LEFT JOIN (SELECT place_id,place_name,place_label FROM init_place_setting) AS b ON a.order_place_id = b.place_id`;
  /** 更新用户申请预约订单状态 */
  const updateOrderUserApplySql = `UPDATE order_user_apply SET order_state = ? WHERE order_id = ?`;
  conn = await dbPool.getConnection();
  try {
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
      console.log(error);
      res.send({
        loginInfo: { data: {}, msg: "账号已过期，请重新登录" },
      });
      return;
    }

    const selectOrderUserApplyRes = await conn.query(selectOrderUserApplySql, [
      req.session.user,
    ]);
    let overDateList = [];
    for (let i in selectOrderUserApplyRes) {
      if (
        d.getTime() >= selectOrderUserApplyRes[i].order_time_end &&
        ![0, 4, 5].includes(selectOrderUserApplyRes[i].order_state)
      ) {
        selectOrderUserApplyRes[i].order_state = 5;
        overDateList.push([
          selectOrderUserApplyRes[i].order_state,
          selectOrderUserApplyRes[i].order_id,
        ]);
      }
    }
    res.send({
      data: selectOrderUserApplyRes,
      msg: "success",
    });
    if (overDateList.length > 0) {
      const updateOrderUserApplyRes = await conn.batch(
        updateOrderUserApplySql,
        overDateList
      );
    }
  } catch (error) {
    console.log(req.session.user, ":", error);
    res.send({
      loginInfo: { data: {}, msg: "服务器错误" },
    });
  } finally {
    if (conn) conn.end();
  }
};
