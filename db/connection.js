// import all necessary dependencies
const mysql = require("mysql2");

// connect to database 
const db = mysql.createConnection(
    {
        host: "us-cdbr-east-05.cleardb.net",
        // your mysql username
        user: "bf8306e143c5c3",
        // your mysql password
        password: "f5b24d4a",
        database: "heroku_ae8597f4fa4d8ed"
    },
    console.log("Connected to the election database")
);

module.exports = db;