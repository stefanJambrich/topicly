import { INTEGER, STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Post = sequelize.define("post", {
    postId: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false
    },
    title: STRING(128),
    picture: STRING,
    description: TEXT,
    like: INTEGER
})

module.exports = Post;