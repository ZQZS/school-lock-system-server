const dbPool = require("../../../database/dbPool.js");
const judge = require("../../help/requireJudge.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  if (!judge(req.body)) {
    // console.log(res);
    res.send({
      error: { data: {}, msg: "错误，填写不能为空" },
    });
    return;
  }
  const selectUserInfoSql = `select user_no from user WHERE user_no  = ?`;
  const addUserInfo = `INSERT INTO user  (user_no, user_name, user_phone,user_password,user_power) VALUES (?,?,?,?,?)`;

  const d = new Date();

  try {
    conn = await dbPool.getConnection();

    const selectRes = await conn.query(selectUserInfoSql, [req.body.userNo]);
    if (selectRes.length > 0) {
      res.send({
        error: { data: {}, msg: "已存在用户账号" },
      });
      return;
    }
    const result = await conn.query(addUserInfo, [
      req.body.userNo,
      req.body.userName,
      req.body.phone,
      req.body.password,
      1,
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
