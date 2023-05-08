const dbPool = require("../../../database/dbPool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  /** 查询用户列表 */
  const userSql = `select user_no,hours from (SELECT * FROM user WHERE user_no = ?) as a left join (select * from init_power_role_setting) as b on a.user_power = b.power `;
  /** 查询用户已使用时间 */
  const usedTimeSql = `select * from user_used_order_time where user_no = ? AND year_and_month = ?`;

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

    const [userRes] = await conn.query(userSql, [req.session.user]);
    const [usedTimeRes] = await conn.query(usedTimeSql, [
      req.session.user,
      tool.getNowYearMonth(),
    ]);
    const surplusTime = userRes.hours - usedTimeRes.used_time;
    res.send({
      data: { hours: surplusTime },
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
