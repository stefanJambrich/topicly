import { STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

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
    description: TEXT
});

module.exports = User;