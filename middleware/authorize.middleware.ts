import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken');

export const authorize = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) return res.status(403).send('No token was provided');

    jwt.verify(token, process.env.SECRET, (err: string, decoded: string) => {
        if (err) return res.status(401).send('Unathuorized access');
        next();
    })
}