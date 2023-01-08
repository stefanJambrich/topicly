import { Request, Response } from "express";

const Post = require('../model/post.model');
const Comment = require('../model/comment.model');
const User = require('../model/user.model');

interface RequestType {
    userId: string,
    postId: string,
    text: string
}

export const getCommentsForPost = async (req: Request, res: Response) => {
    const { postId } = req.body;
    if(!postId) return res.status(400).send('Missing data');

    const post = await Post.findOne({ where: { postId: postId }});
    if(!post) return res.status(404).send('This post doesnt exist');

    const comments = await Comment.findAll({ where: { postId: post.dataValues.id }});

    return res.status(200).send(comments);
}

export const createComment = async (req: Request, res: Response) => {
    const data = req.body as RequestType;
    if(!data) return res.status(400).send('Missing data');

    const user = await User.findOne({ where: { userId: data.userId }});
    const post = await Post.findOne({ where: { postId: data.postId }});

    if(!user || !post) return res.status(404).send('User or post not found');

    await Comment.create({
        userId: user.dataValues.id,
        postId: post.dataValues.id,
        text: data.text
    });

    await Comment.sync();
    return res.status(200).send('Comment created');
}

export const deleteComment = async (req: Request, res: Response) => {
    const { commentId } = req.body;

    await Comment.destroy({ where: { commentId: commentId }});
    return res.status(200).send('Comment delted');
}