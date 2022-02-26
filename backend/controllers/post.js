const fs = require("fs");
const db = require('../db');


exports.getAllPost = (req, res, next) => {
 db.query('SELECT * FROM post', ( err, result) => {
     if (err) {
         console.log(err);
     }
     res.status(200).json(result);
 })
};


exports.createPost = (req, res, next) => {
  const contenu = req.body.contenu;
  const user_id = req.body.user_id;
  const id = req.params.id;
  

  let image = null;

  if (req.file) {
    image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
  }

  db.query(
    `INSERT INTO post (contenu, user_id, image) VALUES (?, ?, ?)`,
    [contenu, user_id, image],
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
  const id = req.params.id;
  const contenu = req.body.contenu;
  // const img = req.body.images;

  let image = req.body.images;

  if (req.file) {
    image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
  }

  db.query(`UPDATE post SET  contenu = ? WHERE id = ${id}`, 
  [contenu, id, image],
  (err) => {
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
 const id = req.params.id;
 db.query('SELECT * FROM post WHERE id = ?', id, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.status(200).json(result);
    }
 })
};
