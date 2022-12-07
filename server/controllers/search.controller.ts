import { Request, Response } from "express";
import { Op } from "sequelize";

const Post = require('../model/post.model');

export const search =async (req: Request, res: Response) => {
    const data = req.body;

    if(!data) ('No data was provided');

    const searchResult = await Post.findAll({
        where: {
            [Op.or]: [
                {[Op.like]: {
                    firstName: {[Op.like]: `%${data}%`}
                }},
                {[Op.like]: {
                    lastName: {[Op.like]: `%${data}%`}
                }},
                {[Op.like]: {
                    nickname: {[Op.like]: `%${data}%`}
                }}
            ]
        }
    })

    if (!searchResult) return res.status(404).send('No data was found');

    return res.status(200).send(JSON.stringify(searchResult));
}