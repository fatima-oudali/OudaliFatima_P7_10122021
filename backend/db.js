const mysql = require("mysql");

//Connexion à Mysql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "groupomania",
});
db.connect();
// db.connect((err) => {
//     if(!err)
//     console.log('connexion db réussie !');
//     else
//     console.log('échec de la connexion db \n Error : '+ JSON.stringify(err, undefined, 2));
// });

module.exports = db;