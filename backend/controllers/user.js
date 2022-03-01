//importation des packages
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");
require("dotenv").config(); //importation pour l'utilisation des variables d'environnements



//l'enregistrement de nouveaux utilisateurs
exports.signup = (req, res, next) => {
  if (!req.body.pseudo || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ error: "Pseudo or Email or password missing" });
  }
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const pseudo = req.body.pseudo;
      const email = req.body.email;
      const password = hash;
      db.query(
        "INSERT INTO user (pseudo, email, password) VALUES (?, ?, ?)",
        [pseudo, email, password],
        (error) => {
          if (error) {
            res.status(400).json({ error });
          } else {
            res.status(200).json({ message: "inscription ok" });
          }
        }
      );
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const userId = req.params.id;
  db.query("SELECT * FROM user WHERE email =? ", [email], (err, result) => {
    if (err || !result.length) {
      return res.status(401).json({ error: { email: "Email non trouvé" } });
    }

    

    const user = result[0];
    bcrypt.compare(req.body.password, user.password).then((valid) => {
      if (!valid) {
        return res
          .status(401)
          .json({ error: { password: "Mot de passe incorrect !" } });
      }
      res.status(200).json({
        userId: user.id,
        pseudo: user.pseudo,
        isAdmin: user.isAdmin,
        token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, `${process.env.JWT_SECRET}`, {
          expiresIn: "24h",
        }),
      });
    });
  });
};

exports.getAllUser = (req, res, next) => {
  db.query('SELECT * FROM user', ( err, result) => {
      if (err) {
          console.log(err);
      }
      res.status(200).json(result);
  })
 };

 exports.getOneUser = (req, res, next) => {
  const id = req.params.id;
  db.query('SELECT * FROM user WHERE id = ?', id, (err, result) => {
     if (err) {
         console.log(err);
     } else {
         res.status(200).json(result);
     }
  })
 };
 
 exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  db.query('DELETE FROM user WHERE id =?', id, (err, result) => {
      if (err) {
          console.log(err);
      } else {
        res.status(200).json({ message: "utilisateur supprimé !" });
      }
  })
};
