// const config = require("config");
const mysql = require("mysql");

//Create Connections

const connectDB = mysql.createConnection({
    host: "localhost",
    user: "userapp",
    password: "admin",
    database: "projet_stage",
});
connectDB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connection done");
});


module.exports = connectDB;


