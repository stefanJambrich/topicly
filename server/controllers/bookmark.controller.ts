import { Request, Response } from "express";

const Bookmark = require('../model/bookmark.model');

export const getBookmark = async (req: Request, res: Response) => {
    const { bookmarkId } = req.params;

    if (!bookmarkId) return res.status(400).send('Missing datat');

    const bookmark = await Bookmark.findOne({ where: { bookmarkId: bookmarkId }});

    return res.status(200).send(bookmark);
}

export const newBookmark = async (req: Request, res: Response) => {
    const data = req.body;

    if (!data.userId || !data.postId) return res.status(400).send('Missing data');
    

    const bookmark = await Bookmark.findOne({
        where: {
            bookmarkId: data.bookmarkId
        }
    });

    if (bookmark) return res.status(409).send('Bookmark already exists');

    await Bookmark.create({
        userId: data.userId,
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