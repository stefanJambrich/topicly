import express  from "express";
import { editUser, getUser } from "../controllers/user.controller";

const router = express.Router();

router.get('/:userId', getUser);
router.put('/:userId', editUser);

module.exports = router;