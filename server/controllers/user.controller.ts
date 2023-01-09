import { Request, Response } from "express";

const User = require('../model/user.model');

interface IUser {
    firstName: string,
    lastName: string,
    nickaname: string,
    email: string,
    password: string,
    description: string
}

export const getUser = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;

    const user = await User.findOne({ userId: userId });
    return res.status(200).send(user);
}

export const editUser = async(req: Request, res: Response) => {
    const data = req.body as IUser;
    const userId = req.cookies.userId;

    if (!data) return res.status(400).send('No data were sent');
    
    const user = await User.findOne({
        where: {
            postId: userId
        }
    });

    if (!user) return res.status(404).send('Invalid user id');

    await User.update({
        firstName: data.firstName,
        lastName: data.lastName,
        nickname: data.nickaname,
        description: data.description,
        picture: req.file?.originalname
    }, {
        where: {
            postId: userId
        }
    })

    await User.sync();
    return res.status(400).send('User updated succesfully');
}