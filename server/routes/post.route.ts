import express  from "express";
import { createPost, deletePost, editPost } from "../controllers/post.controller";

const router = express.Router();

router.post('/new', createPost);
router.put('/:postId', editPost);
router.delete('/:postId', deletePost);

module.exports = router;