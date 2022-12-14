import express  from "express";
import { deleteBookmark, newBookmark } from "../controllers/bookmark.controller";

const router = express.Router();

router.post('/new', newBookmark);
router.delete('/:bookmarkId', deleteBookmark);

module.exports = router;