import express  from "express";
import { editUser, getUser } from "../controllers/user.controller";
import { upload } from "../middleware/fileType.middleware";

const router = express.Router();

router.get('/', getUser);
router.put('/',upload.single('avatar') ,editUser);

module.exports = router;