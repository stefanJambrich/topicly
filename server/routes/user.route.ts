import express  from "express";
import { editUser } from "../controllers/user.controller";

const router = express.Router();

router.put('/:userId', editUser);

module.exports = router;