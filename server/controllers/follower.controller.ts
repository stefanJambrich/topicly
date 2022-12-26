import { Request, Response } from "express";

const User = require('../model/user.model');
const Follower = require('../model/follower.model');
const UserFollower = require('../model/userFollower.model');

export const follow = async (req: Request, res: Response) => {
    const data = req.body;

    console.log(data.userId)
    console.log(data.followerId)

    if (!data.userId || !data.followerId) return res.status(400).send('Missing data');

    const user = await User.findOne({where: { userId: data.userId }});
    const userF = await User.findOne({ where: { userId: data.followerId }});
    const follower = await Follower.create({
        usersTableId: userF.dataValues.id
    });
    const userFollower = await UserFollower.create({
        usersTableId: user.dataValues.id,
        followerEntityId: follower.dataValues.id
    })
    
    return res.status(200).send("Juch")
}