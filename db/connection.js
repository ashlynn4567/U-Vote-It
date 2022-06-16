// import all necessary dependencies
const mysql = require("mysql2");

// connect to database 
const db = mysql.createConnection(
    {
        port: process.env.PORT || 3001
    },
    console.log("Connected to the election database")
);

module.exports = db;