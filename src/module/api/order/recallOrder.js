const dbPool = require("../../../database/dbPool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  /**think: 根据发送时间段，首先在order_user_apply 比较时间戳找出已经该时段被预约的房间，然后再做减集，得出没有被预约的房间 */
  const placeDetailSql = `UPDATE order_user_apply SET  order_state = ?,order_last_updateing_time =? WHERE order_id = ?`;
  const placeOrderNumberSql = `UPDATE place_order_user_number SET ordered_user_number = ordered_user_number-1  WHERE place_id = ? AND year_and_month = ?`;
  const userUsedTimeSql = `UPDATE user_used_order_time SET used_time = used_time-? WHERE user_no = ? AND year_and_month = ?`;
  const d = new Date();
  try {
    conn = await dbPool.getConnection();
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

    const placeRes = await conn.query(placeDetailSql, [
      0,
      d.getTime(),
      req.body.order_id,
    ]);
    const placeOrderNumber = await conn.query(placeOrderNumberSql, [
      req.body.place_id,
      `${d.getFullYear()}-${d.getMonth() + 1}`,
    ]);
    const userUsedTime = await conn.query(userUsedTimeSql, [
      req.body.used_time,
      req.session.user,
      `${d.getFullYear()}-${d.getMonth() + 1}`,
    ]);
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
