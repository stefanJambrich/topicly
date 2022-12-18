import { INTEGER,  } from 'sequelize';
import { sequelize } from '../db.connector';

const Followers = sequelize.define('followers', {}, {
    timestamps: false
})

module.exports = Followers;