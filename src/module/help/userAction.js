const dbPool = require("../../database/dbPool.js");
module.exports = addUserAction = async function (userNo, ipInfo, action) {
  const addUserActionSql = `INSERT INTO user_action(user_no, click_action, time, user_ip) VALUES (?, ?, ?, ?)`;
  const conn = await dbPool.getConnection();
  const d = new Date();
  try {
    const result = await conn.query(addUserActionSql, [
      userNo,
      action,
      d.getTime(),
      ipInfo.ip,
    ]);
  } catch (error) {
    console.log(error);
  }finally{
    if (conn) conn.end();
  }
};
