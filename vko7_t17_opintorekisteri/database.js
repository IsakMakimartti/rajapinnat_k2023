const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'test_user1',
  password: 'xxxx',
  database: 'test_db1'
});
module.exports = connection;