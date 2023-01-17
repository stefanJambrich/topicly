import { Request, Response } from "express";

const User = require('../model/user.model');
const Follower = require('../model/follower.model');
const UserFollower = require('../model/userFollower.model');

export const follow = async (req: Request, res: Response) => {
    const data = req.body;
    const userId = req.cookies.userId;

    if (!data.followerId) return res.status(400).send('Missing data');

    const follower = await Follower.findOrCreate({ where: { usersTableId: data.followerId }, defaults: {
        usersTableId: userId
    }});

    const following = await UserFollower.findOne({ where: {
        usersTableId: userId,
        followerEntityId: follower[0].dataValues.id
    }});

    if(following) {
        following.destroy();
        await Follower.destroy({ where: { usersTableId: data.followerId }})
        return res.status(200).send('Succesfully unfollowed')
    }

    const userFollower = await UserFollower.create({
        usersTableId: userId,
        followerEntityId: follower[0].dataValues.id
    });
    return res.status(200).send("Succesfully followed");
}

export const getFollowing = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const followers = [];

    if(!userId) return res.status(400).send('Missing params');

    const userFollowers = await UserFollower.findAll({ where: { usersTableId: userId }});
    if(!userFollowers) return res.status(404).send('User is not following this specific user');

    for (let i = 0; i < userFollowers.length; i++) {
        followers[i] = await Follower.findOne({ where: { id: userFollowers[0].dataValues.followerEntityId }, include: User})
    }

    return res.status(200).send(followers);
}

