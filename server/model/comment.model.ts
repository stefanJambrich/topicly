import { STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Comment = sequelize.define('comment', {
    commentId: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false
    },
    userId: STRING,
    text: TEXT
});

module.exports = Comment;