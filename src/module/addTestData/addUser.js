const dbPool = require("../../database/dbPool.js");
const tool = require("../help/tool.js");

const sql =
  "INSERT INTO `user` VALUES (:user_no, :user_name, :user_phone,:user_password,:user_power)";
async function addUser() {
  let conn;
  try {
    conn = await dbPool.getConnection();
    console.log("链接成功");
    let dataArray = [];
    console.log("正在创建用户");
    for (let i = 0; i < 20; i++) {
        dataArray.push({
          user_no: tool.getNumber(10) - 0,
          user_name: tool.getName(),
          user_phone: tool.getNumber(11),
          user_password: tool.getNanoid(6),
          user_power: "1",
        });
    }
    console.log("正在添加用户");
    const res = await conn.batch(
      {
        namedPlaceholders: true,
        sql,
      },
      dataArray
    );
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    throw err;
  } finally {
    console.log("正在关闭链接");
    if (conn) return conn.end();
  }
}
addUser();
