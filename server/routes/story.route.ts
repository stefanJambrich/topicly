import express from "express";
import { createStory, getStories, getStory } from "../controllers/story.controller";
import { upload } from "../middleware/fileType.middleware";

const router = express.Router();
const multer = require('multer');

router.get('/', getStory);
router.get('/all', getStories);
router.post('/new', upload.single('storyImg'), createStory);

module.exports = router;