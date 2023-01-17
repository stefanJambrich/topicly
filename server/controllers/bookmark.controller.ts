import { Request, Response } from "express";

const Bookmark = require('../model/bookmark.model');
const User = require('../model/user.model');

export const getBookmark = async (req: Request, res: Response) => {
    const { bookmarkId } = req.params;

    if (!bookmarkId) return res.status(400).send('Missing datat');

    const bookmark = await Bookmark.findOne({ where: { bookmarkId: bookmarkId }});

    return res.status(200).send(bookmark);
}

export const getBookmarks = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;

    const user = await User.findOne({ where: { id: userId }});
    const bookmarks = await Bookmark.findAll({ where: { usersTableId: user.dataValues.id }});

    return res.status(200).send(bookmarks);
}

export const newBookmark = async (req: Request, res: Response) => {
    const data = req.body;
    const userId = req.cookies.userId;

    if (!data.postId) return res.status(400).send('Missing data');

    const bookmark = await Bookmark.findOne({
        where: {
            bookmarkId: data.bookmarkId
        }
    });

    if (bookmark) return res.status(409).send('Bookmark already exists');

    await Bookmark.create({
        usersTableId: userId,
        postId: data.postId
    });

    await Bookmark.sync();
    return res.status(200).send('Bookmark created successfully');
}

export const deleteBookmark = async (req: Request, res: Response) => {
    const bookmarkId = req.body;

    const bookmark = await Bookmark.delete({
        where: {
            bookmarkId: bookmarkId
        }
    });

    return res.status(200).send('Post deleted succesfully');
}