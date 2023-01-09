import { Request, Response } from "express";

const Story = require('../model/story.model');
const User = require('../model/user.model');
const UserFollower = require('../model/userFollower.model');
const Follower = require('../model/follower.model');

export const getStory = async (req: Request, res: Response) => {
    const { storyId } = req.body;
    if(!storyId) return res.status(400).send('Missing story id');

    const story = await Story.findOne({ where: { storyId: storyId}});
    if(!story) return res.status(404).send('No story was found');
    return res.status(200).send(story);
}

export const getStories = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const story = [];
    
    if(!userId) return res.status(400).send('Missing data');

    const currUser = await User.findOne({ where: { userId: userId}});
    if(!currUser) return res.status(404).send('This user doesnt exist');

    const followers = await UserFollower.findAll({ where: { usersTableId: currUser.dataValues.id }});
    
    for (let i = 0; i < followers.length; i++) {
        const follower = await Follower.findOne({ where: { id: followers[i].dataValues.followerEntityId }, include: User });
        const followerStories = await Story.findAll({ where: { usersTableId: follower.usersTable.dataValues.id }});

        story.push(...followerStories);
        return res.status(200).send(story);
    }
}

export const createStory = async (req: Request, res: Response) => {
    const data = req.body;
    const userId = req.cookies.userId;

    if (!data) return res.status(400).send('Missing story content');

    const user = await User.findOne({
        where: {
            userId: userId
        }
    });

    if (!user) return res.status(400).send('Invalid user');

    const story = await Story.create({
        picture: req.file?.originalname,
        usersTableId: user.dataValues.id
    });

    await Story.sync();
    return res.status(200).send('Story created successfully');
}