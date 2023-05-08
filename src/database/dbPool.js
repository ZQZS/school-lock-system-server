const mariadb = require("mariadb");
module.exports = pool = mariadb.createPool({
  host: "localhost",
  port: 3306,
  database: "school_lock_system",
  user: "root",
  password: "123456",
  connectionLimit: 10,
});
