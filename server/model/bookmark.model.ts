import { UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Bookmark = sequelize.define('bookmark', {
    bookmarkId: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Bookmark;