import { INTEGER, STRING } from 'sequelize';
import { sequelize } from '../db.connector';

const Trending = sequelize.define('trending', {
    tag: STRING,
    numberOfPosts: INTEGER
}, {
    timestamps: false
});

module.exports = Trending;