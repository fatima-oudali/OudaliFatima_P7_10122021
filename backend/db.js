const mysql = require("mysql");

//Connexion à Mysql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "groupomania",
});
db.connect();

module.exports = db;