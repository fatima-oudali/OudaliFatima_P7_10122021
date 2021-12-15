//importation du package jsonwebtoken pour vérifier les token
const jwt = require('jsonwebtoken'); 

//importation pour l'utilisation des variables d'environnements
require("dotenv").config(); 

// création du middleware qui protège les routes sélectionnées et vérifie que l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes.
module.exports = (req,res, next) => {
    try {
        //on récupère le token dans le header de la requête autorisation
        const token = req.headers.authorization.split(' ')[1]; //on récupère uniquement le deuxième élément du tableau
        //vérifier qu'il s'agit d'un token valable
        const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`);
        //vérifier que s'il y a un userId qui est envoyé avec la requête, que ce userId correspond bien à celui qui est encodé dans le token
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable !';
        }else {
            next(); //passer la requête au middleware suivant
        }
    } catch (error) {
        res.status(401).json({error: error | 'Requête non authentifiée !'})
    }
}