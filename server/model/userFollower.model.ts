import { INTEGER, STRING } from "sequelize";
import { sequelize } from "../db.connector";

const Follower = require('./follower.model');
const User = require('./user.model');

const UserFollower = sequelize.define('users_followers', {
}, {
    timestamps: false
});

module.exports = UserFollower;