import express, { Request, Response }  from "express";
import { createStory } from "../controllers/story.controller";
import { upload } from "../middleware/fileType.middleware";

const router = express.Router();
const multer = require('multer');

router.post('/new', upload.single('storyImg'), createStory);

module.exports = router;