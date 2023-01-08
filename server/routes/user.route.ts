import express  from "express";
import { editUser } from "../controllers/user.controller";
import { upload } from "../middleware/fileType.middleware";

const router = express.Router();

router.put('/:userId',upload.single('avatar') ,editUser);

module.exports = router;