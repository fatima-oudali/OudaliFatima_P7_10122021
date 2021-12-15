//Importation du module router d'express
const express = require("express");
const router = express.Router();

//Définition des chemins qui serviront pour le router 
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');


//Chaque router a son CRUD (create, read, update, delete) avec son chemin et ses droits
router.post("/", auth, multer, postCtrl.createPost);

router.put("/:id", auth, multer, postCtrl.modifyPost);

router.delete("/:id", auth, postCtrl.deletePost);

router.get("/:id", auth, postCtrl.getOnePost);

router.get("/", auth, postCtrl.getAllPost);






//Exportation
module.exports = router;
