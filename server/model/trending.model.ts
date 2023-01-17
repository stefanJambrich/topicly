import { INTEGER, STRING, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Trending = sequelize.define('trending', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    tag: STRING,
    numberOfPosts: INTEGER
}, {
    timestamps: false
});

module.exports = Trending;