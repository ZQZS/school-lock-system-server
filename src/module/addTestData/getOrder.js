const dbPool = require("../../database/dbPool.js");
const tool = require("../help/tool.js");

// const sql ="select * from order_user_apply";
// const sql ="select * from user";
// const sql ="select * from init_place_setting LIMIT 10";
const sql ="select * from init_power_role_setting LIMIT 10";
const selectUserPasswordAndRoleSql = `select * from (select * from user where user_no = ?) as a left join (select * from init_power_role_setting) as b on a.user_power = b.power`
/**获取月总预约量*/
const getMonthAllOrderSql = `SELECT COUNT(*) as number FROM order_user_apply WHERE order_time_start >? AND order_time_end <? GROUP BY order_place_id `
/**获取月地点预约量，进行排行*/
const getMonthPlaceOrderSql = `select * from place_order_user_number where year_and_month = ? order by ordered_user_number desc`
/**获取用户、姓名、角色和已使用时间，把已使用时间进行排行，结果可用于计算人群使用时间*/
const getMonthUserOrderSql =`Select * from (select * from (select * from user where user_no = ?) as a left join (select * from init_power_role_setting) as b on a.user_power = b.power) as c right join (select * from user_used_order_time where year_and_month = ?) as d on c.user_no = d.user_no order by used_time desc`
/**获取用户平均使用时间*/
const getUserAvgUsedTime = `SELECT year_and_month, AVG(used_time) from user_used_order_time GROUP BY year_and_month`

/**分页获取用户信息 */
const selectUserInfoPage = `SELECT * FROM user LIMIT ?,?`
/**添加用户信息 */
const addUserSql ="INSERT INTO `user` VALUES (:user_no, :user_name, :user_phone,:user_password,:user_power)";
/**更改用户信息 */
const updateUserInfo = `UPDATE user SET user_no = ?, user_name = ?, user_phone = ?, user_password = ?, user_power = ? WHERE user_no = ?`
/**删除用户信息 */
const deleteUser = `DELETE FROM user WHERE user_no = ?`

/**分页获取地方信息 */
const selectPlaceInfoPage = `SELECT * FROM init_place_setting LIMIT ?,?`
/**添加地方信息 */
const addPlaceSql ="INSERT INTO init_place_setting ( place_id ,  place_name ,  place_label ,  place_introduction ,  place_early_open_time ) VALUES (?, ?, ?, ?, ?)";
/**更改地方信息 */
const updatePlaceInfo = `UPDATE init_place_setting  SET  place_id  = ?,  place_name  = ?,  place_label  = ?,  place_introduction  = ?,  place_early_open_time  = ? WHERE place_id  = ?`
/**删除地方信息 */
const deletePlace = `DELETE FROM init_place_setting  WHERE  place_id  = ?`

/**分页获取角色信息 */
const selectRoleInfoPage = `SELECT * FROM init_power_role_setting LIMIT ?,?`
/**添加角色信息 */
const addRoleSql ="INSERT INTO init_power_role_setting ( power ,  role ,  hours ,  power_list ) VALUES (?, ?, ?, ?)";
/**更改角色信息 */
const updateRoleInfo = `UPDATE init_power_role_setting  SET  power  = ?,  role  = ?,  hours  = ?,  power_list  = ? WHERE power  = ?`
/**删除角色信息 */
const deleteRole = `DELETE FROM init_power_role_setting  WHERE  power  = ?`
/**更改设置 */
const updateSettingInfoSql = `UPDATE init_book_time_setting  SET  cells  = ?,  start_time  = ?,  cell_time  = ?,  early_open_time  = ?,  is_register_open  = ? WHERE  cells  = ? `

const updateApprovalOrderSql = `UPDATE order_user_apply  SET  order_state  = ? WHERE  order_id  = ?`

async function addUser() {
  let conn;
  try {
    conn = await dbPool.getConnection();

    const res = await conn.query({
      sql,
    });
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    throw err;
  } finally {
    console.log("正在关闭链接");
    if (conn) return conn.end();
  }
}
addUser();
