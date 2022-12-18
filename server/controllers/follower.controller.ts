import { Request, Response } from "express";

const User = require('../model/user.model');
const Follower = require('../model/follower.model');

export const follow = async (req: Request, res: Response) => {
    const data = req.body;

    console.log(data.userId)

    if (!data.userId || !data.followerId) return res.status(400).send('Missing data');

    const user = await User.findOne({ where: { userId: data.userId } });
    if(!user) return res.status(404).send('Invalid user');

    const follower = await User.findOne({ where: { userId: data.followerId } });
    if(!follower) return res.status(404).send('Invalid follower');

    console.log(user);
    console.log(follower);

    const follow = await Follower.create({
        followerId: user.id,
        userId: follower.id
    });

    await Follower.sync();
    return res.status(200).send('Followed successfully');
}