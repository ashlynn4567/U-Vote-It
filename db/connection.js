// import all necessary dependencies
const mysql = require("mysql2");

// connect to database 
const db = mysql.createConnection(
    {
        host: "localhost" || "0.0.0.0",
        // your mysql username
        user: "root",
        // your mysql password
        password: "",
        database: "election"
    },
    console.log("Connected to the election database")
);

module.exports = db;