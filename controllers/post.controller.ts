import { Request, Response } from "express";

const Post = require('../model/post.model');
const User = require('../model/user.model');

interface Post {
    postId: string,
    title: string,
    picture: string,
    description: string,
    like: number
}

export const getAllPosts = async (req: Request, res: Response) => {
    const posts = await Post.find();

    return res.status(200).send(JSON.stringify(posts));
}

export const createPost = async (req: Request, res: Response) => {
    const data = req.body;

    if (!data) return res.status(400).send('Missing post content');
    if (!data.userId) return res.status(400).send('Missing user UUID    ')

    const user = await User.findOne({
        where: {
            userId: data.userId
        }
    });

    if (!user) return res.status(400).send('Invalid user');

    const post = await Post.create({
        title: data.title,
        picture: data.picture,
        description: data.description,
        like: data.like,
        userId: user.id
    });

    await Post.sync();
    return res.status(200).send('Post created successfully');
}