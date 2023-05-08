const dbPool = require("../../database/dbPool.js");
const tool = require("../help/tool.js");

const sql =
  "INSERT INTO `init_place_setting` (`place_id`, `place_name`, `place_label`, `place_introduction`, `place_early_open_time`) VALUES (:place_id, :place_name, :place_label, :place_introduction, :place_early_open_time) ";
async function addUser() {
  let conn;
  try {
    conn = await dbPool.getConnection();
    console.log("链接成功");
    let dataArray = [];
    console.log("正在创建用户");
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 5; j++)
        dataArray.push({
          place_id : `xxl2${i}0${j}`,
          place_name:`行2-${i}0${j}`,
          place_label:`2号行政楼${i}楼${i}0${j}房`,
          place_introduction: `2号行政楼${i}楼${i}0${j}房，拥有办公桌${i>3?"，网线接口":""}${j>3?"，黑板":""}`,
          place_early_open_time: 7,
        });
    }
    console.log("正在添加用户",dataArray);
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
