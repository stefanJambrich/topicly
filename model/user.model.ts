import { STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Post = require('./post.model');
const Story = require('./story.model');
const Bookmark = require('./bookmark.model');
const Followers = require('./followers.model');

const User = sequelize.define("user", {
    userId: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false
    },
    firstName: STRING(64),
    lastName: STRING(64),
    nickname: STRING(64),
    email: STRING(255),
    password: STRING(255),
    description: TEXT
});

User.hasMany(Post);
User.hasMany(Story);
User.hasMany(Followers);
Followers.hasMany(User);

User.hasOne(Bookmark);
Post.hasOne(Bookmark);

Post.belongsTo(User);
Story.belongsTo(User);
Bookmark.belongsTo(User);
Bookmark.belongsTo(Post);
Followers.belongsTo(User);
User.belongsTo(Followers);

module.exports = User;