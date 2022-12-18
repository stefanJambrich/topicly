import express  from "express";
import { follow } from "../controllers/follower.controller";

const router = express.Router();

router.post('/', follow);

module.exports = router;