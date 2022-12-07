import express  from "express";
import { createPost, deletePost, editPost, getAllPosts } from "../controllers/post.controller";

const router = express.Router();

router.get('/all', getAllPosts);
router.post('/new', createPost);
router.put('/:postId', editPost);
router.delete('/:postId', deletePost);

module.exports = router;