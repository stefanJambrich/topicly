import { Request, Response } from "express";

const Post = require('../model/post.model');

export const getAllPosts = async (req: Request, res: Response) => {
    const posts = await Post.find();

    return res.status(200).send(JSON.stringify(posts));
}