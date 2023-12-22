var mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'strugo_db'
}


module.exports = {
    connection: mysql.createConnection(config)
}