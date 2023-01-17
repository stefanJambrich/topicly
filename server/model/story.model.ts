import { STRING, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Story = sequelize.define('story', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    picture: STRING(255)
})

module.exports = Story;