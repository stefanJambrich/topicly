import { STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Post = require('./post.model');
const Story = require('./story.model');
const Bookmark = require('./bookmark.model');
const Follower = require('./follower.model');
const UserFollower = require('./userFollower.model');
const Comment = require('./comment.model');

const User = sequelize.define("usersTable", {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
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
Post.hasMany(Comment);
User.hasOne(Follower);
User.hasOne(Bookmark);
Post.hasOne(Bookmark);

Post.belongsTo(User);
Story.belongsTo(User);
Bookmark.belongsTo(User);
Bookmark.belongsTo(Post);
Follower.belongsTo(User);
Comment.belongsTo(Post);

User.belongsToMany(Follower, { through: UserFollower });
Follower.belongsToMany(User, { through: UserFollower });

module.exports = User;