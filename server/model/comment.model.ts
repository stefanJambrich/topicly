import { STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Comment = sequelize.define('comment', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userId: STRING,
    text: TEXT
});

module.exports = Comment;