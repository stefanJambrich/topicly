import express  from "express";
import { follow, getFollowersOfUser } from "../controllers/follower.controller";

const router = express.Router();

router.get('/:userId', getFollowersOfUser);
router.post('/', follow);

module.exports = router;