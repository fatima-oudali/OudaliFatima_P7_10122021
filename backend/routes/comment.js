const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');


router.post("/", auth, commentCtrl.createComment);

router.put("/:id", auth, commentCtrl.modifyComment);

router.delete("/:id", auth, commentCtrl.deleteComment);

router.get("/:id", auth, commentCtrl.getOneComment);

router.get("/", auth, commentCtrl.getAllComment);


module.exports = router;