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
  let query;
  const contenu = req.body.contenu;
  let image;

  if (req.file) {
    image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    db.query('SELECT * FROM post WHERE id =?', [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if(result[0].image !== null) {
          const filename = result[0].image.split("/images/")[1];
          fs.unlink(`images/${filename}`, (error) => console.log(error))
        }
      }
    })
  }

  if (contenu && image) {
    query = `UPDATE post SET contenu = '${contenu}', image = '${image}' WHERE id = ${id}`;
  } else if (contenu && !image) {
    query = `UPDATE post SET contenu = '${contenu}' WHERE id = ${id}`;
  } else if (!contenu && image) {
    query = `UPDATE post SET image = '${image}' WHERE id = ${id}`;
  }

  db.query(query, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "post modifié !" });
    }
  });
};

exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  let image = req.file;
  
  db.query('SELECT * FROM post WHERE id =?', [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if(result[0].image !== null) {
        const filename = result[0].image.split("/images/")[1];
        fs.unlink(`images/${filename}`, (error) => console.log(error))
      }
    }
  })
  
  db.query('DELETE FROM post WHERE id =?', id, (err, result) => {
      if (err) {
          console.log(err);
      } else {
        res.status(200).json({ message: "post supprimé !" });
        
      }
    })
  };

  exports.deleteImage = (req, res, next) => {
    const id = req.params.id;
    let image = req.file;
    
    db.query('SELECT * FROM post WHERE id =?', [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if(result[0].image !== null) {
          const filename = result[0].image.split("/images/")[1];
          fs.unlink(`images/${filename}`, (error) => console.log(error))
        }
      }
    })

  }

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
