import { Request, Response } from "express";

const Story = require('../model/story.model');
const User = require('../model/user.model');

export const createStory = async (req: Request, res: Response) => {
    const data = req.body;

    if (!data) return res.status(400).send('Missing story content');
    if (!data.userId) return res.status(400).send('Missing user UUID');

    const user = await User.findOne({
        where: {
            userId: data.userId
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