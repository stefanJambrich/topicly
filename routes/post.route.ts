import express  from "express";
import { createPost, getAllPosts } from "../controllers/post.controller";

const router = express.Router();

router.get('/all', getAllPosts);
router.post('/new', createPost);

module.exports = router;