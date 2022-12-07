import { Request, Response } from "express";
import { Op } from "sequelize";

const User = require('../model/user.model');

export const search = async (req: Request, res: Response) => {
    const data = req.query.search;

    if(!data) ('No data was provided');

    const searchResult = await User.findAll({
        where: {
            [Op.or]: [
                {firstName: {[Op.like]: `%${data}%`}},
                {lastName: {[Op.like]: `%${data}%`}},
                {nickname: {[Op.like]: `%${data}%`}}
            ]
        }
    })

    if (!searchResult) return res.status(404).send('No data was found');

    return res.status(200).send(JSON.stringify(searchResult));
}