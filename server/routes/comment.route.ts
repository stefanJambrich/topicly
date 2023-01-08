import express  from "express";
import { createComment, deleteComment, getCommentsForPost } from "../controllers/comment.controller";

const router = express.Router();

router.get('/', getCommentsForPost);
router.post('/new', createComment);
router.delete('/', deleteComment);

module.exports = router;