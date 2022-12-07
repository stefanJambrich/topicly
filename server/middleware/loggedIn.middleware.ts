import { NextFunction, Request, Response } from "express";

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.loggedIn) return next();

    return res.status(406).send('Already logged in');
}