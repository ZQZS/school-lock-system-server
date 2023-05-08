const dbPool = require("../../../database/dbPool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  /** 查询订单列表 */
  const selectIsRegisterSql = `SELECT is_register_open FROM init_book_time_setting limit 1`;

  conn = await dbPool.getConnection();
  try {
    const d = new Date();
    const [selectIsRegisterRes] = await conn.query(selectIsRegisterSql);
    res.send({
      data: selectIsRegisterRes,
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
