const db = require("../db");

exports.getAllComment = (req, res, next) => {
  db.query("SELECT * FROM comment", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result);
  });
};

exports.createComment = (req, res, next) => {
  const contenu = req.body.contenu;
  const user_id = req.body.user_id;
  const post_id = req.body.post_id;
 
  //    const id = req.body.id;

  db.query(
    `INSERT INTO comment (contenu, user_id, post_id) VALUES (?, ?, ?)`,
    [contenu, user_id, post_id],
    (err, result) => {
      console.log(result);
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ message: "valeurs insérées" });
      }
    }
  );
};

exports.modifyComment = (req, res, next) => {
  const id = req.params.id;
  const contenu = req.body.contenu;
  

  db.query(
    `UPDATE comment SET  contenu = ? WHERE id = ${id}`,
    [contenu, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ message: "commentaire modifié !" });
      }
    }
  );
};

exports.deleteComment = (req, res, next) => {
  const id = req.params.id;
  db.query("DELETE FROM comment WHERE id =?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "commentaire supprimé !" });
    }
  });
};

exports.getOneComment = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT * FROM comment WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
};
