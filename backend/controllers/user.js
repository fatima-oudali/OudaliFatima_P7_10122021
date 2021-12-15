//importation des packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
require("dotenv").config(); //importation pour l'utilisation des variables d'environnements



//l'enregistrement de nouveaux utilisateurs
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
       const email = req.body.email;
       const password = hash;
       db.query('INSERT INTO user (email, password) VALUES (?, ?)', 
       [email, hash],
       (err, result) => {
           if(err) {
               console.log(err);
           } else {
               console.log(result);
           }
       }) 
    })
    .catch(error => res.status(500).json({error}));
};

//connecter des utilisateurs existants
exports.login = (req, res, next) => {
    const email = req.body.email;
    db.query('SELECT * FROM user WHERE email =?', [email], (err, result) => {
        
    })
};