//importation des packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config(); //importation pour l'utilisation des variables d'environnements



//l'enregistrement de nouveaux utilisateurs
exports.signup = (req, res, next) => {
    //La fonction hash de bcrypt crypte le mdp avec un algorithme unidirectionnel, d'une manière quasi indécryptable
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        
    })
    .catch(error => res.status(500).json({error}));
};

//connecter des utilisateurs existants
exports.login = (req, res, next) => {
    
};