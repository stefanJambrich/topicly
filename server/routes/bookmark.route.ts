import express  from "express";
import { deleteBookmark, getAllBookmarks, newBookmark } from "../controllers/bookmark.controller";

const router = express.Router();

router.get('/all', getAllBookmarks);
router.post('/new', newBookmark);
router.delete('/:bookmarkId', deleteBookmark);

module.exports = router;