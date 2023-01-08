import { INTEGER } from "sequelize";
import { sequelize } from "../db.connector";

const Follower = sequelize.define('followerEntity', {}, {
    timestamps: false
})

module.exports = Follower;