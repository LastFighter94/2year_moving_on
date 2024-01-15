const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "lcontrol"
})

// именно с помощью объекта pool будем делать запросы к базе данных

module.exports = pool
