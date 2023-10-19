const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'rapearl',
});

module.exports = db;
