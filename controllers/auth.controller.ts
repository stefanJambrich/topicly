import { Request, Response } from "express";
const bcrypt = require('bcrypt');
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const tokenList: any = {};

export const login = async (req: Request, res: Response) => {
    interface User {
        email: string,
        password: string
    }

    const { email, password } = req.body as User;
    const user = await User.findOne({
        where: {
            email: email
        }
    });

    if (!user) {
        return res.status(404).send('User with that email doesnt exist');
    }

    bcrypt.compare(password, user.password, (err: string, result: string) => {
        if (!result) {
            return res.status(403).send('Incorrect password');
        }

        const token = jwt.sign(user, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
        const refreshToken = jwt.sign(user, process.env.REFRESH_SECRET, { expiresIn: process.env.REFRESH_EXPIRATION });
        const response = {
            "status": "Logged in",
            "token": token,
            "refreshToken": refreshToken
        }
        tokenList[refreshToken] = response;

        return res.status(200).send(response);
    })

}

export const register = async (req: Request, res: Response) => {
    interface IUser {
        firstName: string,
        lastName: string,
        nickname: string,
        email: string,
        password: string
    }

    let { firstName, lastName, nickname, email, password } = req.body as IUser;
    const passRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    const userCheck = await User.findOne({
        where: {
            email: email
        }
    })

    if (userCheck) {
        return res.status(409).send('User with that email already exists');
    }

    if (!firstName || !lastName || !nickname || !email || !password) {
        return res.status(400).send('Missing info');
    }

    if (!passRegex.test(password)) {
        return res.status(400).send('Password is not valid');
    }

    await bcrypt.hash(password, 10, async (err: string, result: string) => {
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            nickname: nickname,
            email: email,
            password: result
        });

        await User.sync();
        return res.status(200).send("User created succesfully!");
    });
}

export const token = (req: Request, res: Response) => {
    const data = req.body;

    if (!data.refreshToken && !(data.refreshToken in tokenList)) {
        return res.status(404).send('Invalid or missing token')
    }
    if (!data.userId || !data.username) {
        return res.status(400).send('Missing userId and nickname')
    }

    const user = {
        "userId": data.userId,
        "username": data.nickname
    }
    const token = jwt.sign(user, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });
    const response = {
        "token": token
    }

    tokenList[data.refreshToken].token = token;
    res.status(200).send('Token refreshed successfully');
}