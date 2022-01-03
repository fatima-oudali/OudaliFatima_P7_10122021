const fs = require("fs");
const db = require('../db');

//appel de toutes les sauces avec request et response, et next pour passer au prochain controller
exports.getAllPost = (req, res, next) => {
 db.query('SELECT * FROM post', ( err, result) => {
     if (err) {
         console.log(err);
     }
     res.status(200).json(result);
 })
};

// exports.createPost = (req, res, next) => {
//     const contenu = req.body.contenu;

//   db.query('INSERT INTO post (contenu) VALUES ?',
//   [contenu],
//   (err, result) => {
//       if(err) {
//           console.log(err);
//       } else {
//         res.status(200).json({ message: "valeurs insérées" });
//       }
//   }
//   );
// };

exports.createPost = (req, res, next) => {
  const contenu = req.body.contenu;
  const userId = req.body.userId;

  db.query(
    "INSERT INTO post (contenu, user_id) VALUES (?, ?)",
    [contenu, userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ message: "valeurs insérées" });
      }
    }
  );
};

exports.modifyPost = (req, res, next) => {
  const id = req.body.id;
  const contenu = req.body.contenu;

  db.query('UPDATE post SET contenu = ? WHERE id = ?', 
  [contenu, id],
  (err, result) => {
      if (err) {
          console.log(err);
      } else {
        res.status(200).json({ message: "post modifié !" });
      }
  })
};

exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  db.query('DELETE FROM post WHERE id =?', id, (err, result) => {
      if (err) {
          console.log(err);
      } else {
        res.status(200).json({ message: "post supprimé !" });
      }
  })
};

exports.getOnePost = (req, res, next) => {
 const id = req.body.id;
 db.query('SELECT * FROM post WHERE id = ?', id, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.status(200).json(result);
    }
 })
};
