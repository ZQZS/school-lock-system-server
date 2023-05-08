const dbPool = require("../../../database/dbPool.js");
module.exports = selectTimeFindPlace = async function (req, res, next) {
  let conn;
  const orderIncludeSqlPark = {
    first: `(order_time_start>=? AND order_time_end>=?  AND order_time_start < ? AND order_state in (1,3))`, //[start,end,end]
    second: `(order_time_start<=? AND order_time_end>? AND order_time_end < ? AND order_state in (1,3))`, //[start,start,end]
    third: `(order_time_start>=? AND order_time_end<=? AND order_state in (1,3))`, //[start,end]
    four: `(order_time_start<=? AND order_time_end>? AND order_time_start < ? AND order_time_end>=? AND order_state in (1,3))`, //[start,start,end,end]
  };
  /**think: 根据发送时间段，首先在order_user_apply 比较时间戳找出已经该时段被预约的房间，然后再做减集，得出没有被预约的房间 */
  let orderedPlaceSql = `SELECT place_id,place_name,place_label,place_introduction FROM init_place_setting WHERE place_id in (SELECT place_id FROM init_place_setting EXCEPT SELECT order_place_id FROM order_user_apply WHERE ${orderIncludeSqlPark.first} OR ${orderIncludeSqlPark.second} OR ${orderIncludeSqlPark.third} OR ${orderIncludeSqlPark.four})`;
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

    const start = req.body.start,
      end = req.body.end;

    const orderPlaceListRes = await conn.query(orderedPlaceSql, [
      ...[start, end, end],
      ...[start, start, end],
      ...[start, end],
      ...[start, start, end, end],
    ]);
    res.send({
      data: orderPlaceListRes,
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
