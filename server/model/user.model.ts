import { STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Post = require('./post.model');
const Story = require('./story.model');
const Bookmark = require('./bookmark.model');
const Follower = require('./follower.model');

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
}, {
    timestamps: false
});

User.hasMany(Post);
User.hasMany(Story);
User.hasMany(Follower, {
    foreignKey: 'followerId'
});
Follower.belongsTo(User);

Follower.hasOne(User, {
    foreignKey: 'followerId'
});
User.belongsTo(Follower)

User.hasOne(Bookmark);
Post.hasOne(Bookmark);

Post.belongsTo(User);
Story.belongsTo(User);
Bookmark.belongsTo(User);
Bookmark.belongsTo(Post);

module.exports = User;