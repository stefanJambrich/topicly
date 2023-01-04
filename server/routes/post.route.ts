import express  from "express";
import { createPost, deletePost, editPost, getPost, getPostsFromUser } from "../controllers/post.controller";

const router = express.Router();

router.get('/:postId', getPost);
router.get('/user/:userId', getPostsFromUser);

router.post('/new', createPost);
router.put('/:postId', editPost);
router.delete('/:postId', deletePost);

module.exports = router;