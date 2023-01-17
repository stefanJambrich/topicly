import { UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Bookmark = sequelize.define('bookmark', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
}, {
    timestamps: false
});

module.exports = Bookmark;