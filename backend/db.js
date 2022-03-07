const mysql = require("mysql");

//Connexion à Mysql
const db = mysql.createConnection({
    
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASS}`,
    database: `${process.env.DB_NAME}`,
    
    
});
db.connect();

module.exports = db;

