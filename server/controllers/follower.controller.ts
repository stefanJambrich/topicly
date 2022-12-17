import { Request, Response } from "express";

const User = require('../model/user.model');
const Follower = require('../model/follower.model');

export const follow = async (req: Request, res: Response) => {
    const data = req.body;

    if (!data.userId || !data.followerId) return res.status(400).send('Missing data');

    const user = User.findOne({ where: { userId: data.userId } });
    if(!user) return res.status(404).send('Invalid user');

    const follower = User.findOne({ where: { userId: data.followerId } });
    if(!follower) return res.status(404).send('Invalid follower');

    const follow = await Follower.create({
        userId: user.id,
        followerId: follower.id
    });

    await Follower.sync();
}