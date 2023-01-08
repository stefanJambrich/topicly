import express  from "express";
import { deleteBookmark, getBookmark, newBookmark } from "../controllers/bookmark.controller";

const router = express.Router();

router.get('/:bookmarkId', getBookmark);
router.post('/new', newBookmark);
router.delete('/:bookmarkId', deleteBookmark);

module.exports = router;