import express  from "express";
import { createPost, deletePost, editPost, getFeed, getPost, getPostsFromUser } from "../controllers/post.controller";

const router = express.Router();

router.get('/feed', getFeed); //This needs to be on this exact line, otherwise it doesnt work :)
router.get('/:postId', getPost);
router.get('/user/:userId', getPostsFromUser);

router.post('/new', createPost);
router.put('/:postId', editPost);
router.delete('/:postId', deletePost);

module.exports = router;