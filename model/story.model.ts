import { STRING, UUID, UUIDV4 } from 'sequelize';
import { sequelize } from '../db.connector';

const Story = sequelize.define('story', {
    storyId: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false
    },
    picture: STRING(255)
})

module.exports = Story;