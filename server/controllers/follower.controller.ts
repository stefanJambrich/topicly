import { Request, Response } from "express";

const User = require('../model/user.model');
const Follower = require('../model/follower.model');
const UserFollower = require('../model/userFollower.model');

export const follow = async (req: Request, res: Response) => {
    const data = req.body;

    if (!data.userId || !data.followerId) return res.status(400).send('Missing data');

    const user = await User.findOne({where: { userId: data.userId }});
    if(!user) return res.status(404).send('User was not found')

    const userF = await User.findOne({ where: { userId: data.followerId }});
    if(!userF) return res.status(404).send('User was not found')

    const follower = await Follower.findOrCreate({ where: { usersTableId: userF.dataValues.id }, defaults: {
        usersTableId: userF.dataValues.id
    }});

    const following = await UserFollower.findOne({ where: {
        usersTableId: user.dataValues.id,
        followerEntityId: follower[0].dataValues.id
    }});

    if(following) {
        following.destroy();
        await Follower.destroy({ where: { usersTableId: userF.dataValues.id }})
        return res.status(200).send('Succesfully unfollowed')
    }

    const userFollower = await UserFollower.create({
        usersTableId: user.dataValues.id,
        followerEntityId: follower[0].dataValues.id
    });
    return res.status(200).send("Succesfully followed");
}

export const getFollowersOfUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const followers = [];

    if(!userId) return res.status(400).send('Missing params');

    const user = await User.findOne({ where: { userId: userId }});
    if(!user) return res.status(404).send('User was not found');

    const userFollowers = await UserFollower.findAll({ where: { usersTableId: user.dataValues.id }});
    if(!userFollowers) return res.status(404).send('User is not following this specific user');

    for (let i = 0; i < userFollowers.length; i++) {
        followers[i] = await Follower.findOne({ where: { id: userFollowers[0].dataValues.followerEntityId }, include: User})
    }

    return res.status(200).send(followers);
}

