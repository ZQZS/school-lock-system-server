const dbPool = require("../../../database/dbPool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  /**think: 根据发送时间段，首先在order_user_apply 比较时间戳找出已经该时段被预约的房间，然后再做减集，得出没有被预约的房间 */
  const placeDetailSql = `select * from (select * from order_user_apply where order_id = ? ) a left join (select * from init_place_setting) b on a.order_place_id = b.place_id `;
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

    const [placeRes] = await conn.query(placeDetailSql, [req.body.order_id]);
    res.send({
      data: placeRes,
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
