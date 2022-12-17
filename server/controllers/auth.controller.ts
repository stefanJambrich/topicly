import { Request, Response } from "express";
const bcrypt = require('bcrypt');
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

export const login = async (req: Request, res: Response) => {
    interface User {
        email: string,
        password: string
    }

    const data = req.body as User;
    const user = await User.findOne({
        where: {
            email: data.email
        }
    });

    if (!user) {
        return res.status(404).send('User with that email desnt exist');
    }

    bcrypt.compare(data.password, user.password, (err: string, result: string) => {
        if (!result) {
            return res.status(403).send('Incorrect password');
        }

        const token = jwt.sign(user.dataValues, process.env.SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });

        res.status(200).cookie("token", token, {httpOnly: true}).send("Succesfully logged in");
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

export const logout = async (req: Request, res: Response) => {
    res.clearCookie('token');
    return res.status(200).send('Successfully logged out');
}

export const authorization = (req: Request, res: Response) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(403).json('No token');
    }
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return res.status(200).send(data);
    } catch {
      return res.status(403);
    }
}