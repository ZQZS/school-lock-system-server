const dbPool = require("../../../database/dbPool.js");
const judge = require("../../help/requireJudge.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  /**think: 根据发送时间段，首先在order_user_apply 比较时间戳找出已经该时段被预约的房间，然后再做减集，得出没有被预约的房间 */
  if (!judge(req.body)) {
    // console.log(res);
    res.send({
      error: { data: {}, msg: "错误，填写不能为空" },
    });
    return;
  }
  const placeOrderTimeListSql = `SELECT order_time_end,order_time_start FROM order_user_apply WHERE order_place_id = ? AND order_time_start >=? AND order_state in (1,3)`;
  const d = new Date()
   console.log(req.session);
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

    const placeOrderTimeListRes = await conn.query(placeOrderTimeListSql,[req.body.place_id,d.getTime()])
    
    res.send({
      data: placeOrderTimeListRes,
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
