import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {

}

export const register = (req: Request, res: Response) => {
    interface User {
        firstName: string,
        lastName: string,
        nickname: string,
        email: string,
        password: string
    }

    const { firstName, lastName, nickname, email, password } = req.body as User;
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!firstName || !lastName || !nickname || !email || !password) {
        res.status(400).send('Missing info');
    }

    if (!passRegex.test(password)) {
        res.status(400).send('Password is not valid');
    }

    
}

