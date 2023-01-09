import { Request, Response } from "express";

const Post = require('../model/post.model');
const User = require('../model/user.model');
const Follower = require('../model/follower.model');
const UserFollower = require('../model/userFollower.model');

interface Post {
    postId: string,
    title: string,
    picture: string,
    description: string,
    like: number
}

export const getPost = async (req: Request, res: Response) => {
    const { postId } = req.params;

    if (!postId) return res.status(400).send('Missing data');

    const post = await Post.findOne({ where: { postId: postId }});

    return res.status(200).send(post);
}

export const getPostsFromUser = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;

    const user = await User.findOne({ where: { userId: userId}});
    if (!user) return res.status(404).send('User was not found');
    const posts = await Post.findAll({ where: { usersTableId: user.dataValues.id }});

    return res.status(200).send(posts);
}

export const getFeed = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const posts = [];

    const currUser = await User.findOne({ where: { userId: userId}});
    if(!currUser) return res.status(404).send('This user doesnt exist');

    const followers = await UserFollower.findAll({ where: { usersTableId: currUser.dataValues.id }});
    
    for (let i = 0; i < followers.length; i++) {
        const follower = await Follower.findOne({ where: { id: followers[i].dataValues.followerEntityId }, include: User });
        const followerPosts = await Post.findAll({ where: { usersTableId: follower.usersTable.dataValues.id }});

        posts.push(...followerPosts);
        return res.status(200).send(posts);
    }
}

export const createPost = async (req: Request, res: Response) => {
    const data = req.body;
    const userId = req.cookies.userId;

    if (!data) return res.status(400).send('Missing post content');

    const user = await User.findOne({
        where: {
            userId: userId
        }
    });

    if (!user) return res.status(400).send('Invalid user');

    const post = await Post.create({
        title: data.title,
        picture: req.file?.originalname,
        description: data.description,
        like: data.like,
        usersTableId: user.id
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