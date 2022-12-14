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

export const createPost = async (req: Request, res: Response) => {
    const data = req.body;

    if (!data) return res.status(400).send('Missing post content');
    if (!data.userId) return res.status(400).send('Missing user UUID');

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

export const editPost = async (req: Request, res: Response) => {
    interface IPost{
        title: string,
        picture: string,
        decription: string,
        like: number
    }

    const data = req.body as IPost;
    const {postId} = req.params;

    if (!data) return res.status(400).send('No data were sent');
    
    const post = await Post.findOne({
        where: {
            postId: postId
        }
    });

    if (!post) return res.status(404).send('Invalid post id');

    await Post.update({
        title: data.title ? data.title : post.title,
        description: data.decription ? data.decription : post.decription,
        picture: data.picture ? data.picture : post.picture,
        like: data.like ? data.like : post.like
    }, {
        where: {
            postId: postId
        }
    })

    await Post.sync();
    return res.status(400).send('Post updated succesfully');
}

export const deletePost = async (req: Request, res: Response) => {
    const { postId } = req.params;

    await Post.destroy({
        where: {
            postId: postId
        }
    });

    return res.status(200).send('Post deleted succesfully');
}