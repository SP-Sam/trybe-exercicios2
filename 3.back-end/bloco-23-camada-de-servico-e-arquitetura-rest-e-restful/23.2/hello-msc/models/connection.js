const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'samuel',
  password: 'spsamuel',
  database: 'model_example'
});

module.exports = connection;