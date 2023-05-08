const dbPool = require("../../../database/dbPool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;

  const selectUserInfoPage = `UPDATE user SET user_phone = ? WHERE user_no = ?`;
  const selectUserPasswordInfoPage = `UPDATE user SET user_phone = ?, user_password = ? WHERE user_no = ?`;
  const selectUserPassword = `select * from user where user_no = ?`;
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
      console.log("sql:", error);
      res.send({
        loginInfo: { data: {}, msg: "账号已过期，请重新登录" },
      });
      return;
    }
    if (req.body.user_password === "") {
      const userInfoRes = await conn.query(selectUserInfoPage, [
        req.body.user_phone,
        req.session.user,
      ]);
    } else {
      const [userInfo] = await conn.query(selectUserPassword, [
        req.session.user,
      ]);
      if (userInfo.user_password != req.body.oldPassword) {
        res.send({
          error: {
            data: {},
            msg: "旧密码错误",
          },
        });
        return;
      }
      const userInfoRes = await conn.query(selectUserPasswordInfoPage, [
        req.body.user_phone,
        req.body.user_password,
        req.session.user,
      ]);
    }
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
