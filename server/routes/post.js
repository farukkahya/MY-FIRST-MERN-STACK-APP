const express = require('express');
const { getPosts, createPost, updatePost, deletePost, } = require('../controllers/post');


const router = express.Router();

router.get("/getPosts",getPosts)
router.post("/createPost",createPost)
router.patch("/updatePost/:id",updatePost)
router.delete("/deletePost/:id",deletePost)

module.exports = router;