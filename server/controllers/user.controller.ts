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

export const editUser = async(req: Request, res: Response) => {
    const data = req.body as IUser;
    const {userId} = req.params;

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
        description: data.description
    }, {
        where: {
            postId: userId
        }
    })

    await User.sync();
    return res.status(400).send('User updated succesfully');
}