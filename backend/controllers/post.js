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
  const id = req.params.id;
  const img =`${req.protocol}://${req.get("host")}/images/${
    req.file.filename}`

  db.query(
    `INSERT INTO post ( contenu, id) VALUES (?, ?, ${id})`,
    [ contenu, id],
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

  db.query(`UPDATE post SET  contenu = ? WHERE id = ${id}`, 
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
 const id = req.params.id;
 db.query('SELECT * FROM post WHERE id = ?', id, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.status(200).json(result);
    }
 })
};
