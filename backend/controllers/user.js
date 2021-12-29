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
               res.status(400).json({error})
           } else {
               res.status(200).json(result);
           }
       }) 
    })
    .catch(error => res.status(500).json({error}));
};

//connecter des utilisateurs existants
exports.login = (req, res, next) => {
    const email = req.body.email;
    db.query('SELECT * FROM user WHERE email =?', [email], (err, result) => {
        User.findOne({email: req.body.email})
    .then(user => {
        if (!user) {
            return res.status(401).json({error: {email: 'Email incorrect !'}});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid){
                return res.status(401).json({error: {password: 'Mot de passe incorrect !'}})
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign (
                    {userId: user.id},
                    `${process.env.JWT_SECRET}`,
                    {expiresIn: '24h'}
                )
            })
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
    })
};