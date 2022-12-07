import { sequelize } from '../db.connector';

const Followers = sequelize.define('followers', {})

module.exports = Followers;