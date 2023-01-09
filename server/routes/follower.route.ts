import express  from "express";
import { follow, getFollowing } from "../controllers/follower.controller";

const router = express.Router();

router.get('/following', getFollowing);
router.post('/', follow);

module.exports = router;