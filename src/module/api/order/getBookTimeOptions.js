const dbPool = require("../../../database/dbPool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  /** 查询用户列表 */
  const selectBookTimeOptionSql = `SELECT * FROM init_book_time_setting`;

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

    const [bookTimeOption] = await conn.query(selectBookTimeOptionSql);
    res.send({
      data: bookTimeOption,
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
