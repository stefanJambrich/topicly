import { Request, Response } from "express";

const User = require('../model/user.model');

interface User {
    firstName: string,
    lastName: string,
    nickaname: string,
    email: string,
    password: string,
    description: string
}

export const getUser = async (req: Request, res: Response) => {
    const { userId } = req.params
 
    const user = await User.findOne({
        where: {
            userId: userId
        }
    });

    if (!user) return res.status(404).send('Invalid user');

    return res.status(200).send(JSON.stringify(user));
}