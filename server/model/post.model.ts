import { INTEGER, STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Post = sequelize.define("post", {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: STRING(128),
    picture: STRING,
    description: TEXT,
    like: INTEGER
}, {
    timestamps: false
})

module.exports = Post;