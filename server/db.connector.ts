import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'topicly',
    `${process.env.DB_USERNAME}`,
    `${process.env.DB_PASS}`, {
        host: '192.168.0.183',
        port: 3386,
        dialect: 'mariadb',
        dialectOptions: {
            ssl: false
        },
    }
);

const User = require('./model/user.model');
const Trending = require('./model/trending.model');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('database connection successful');
    } catch (error) {
        console.log('database connection failed');
    }
})();

(async () => {
    await sequelize.sync();
    console.log('juch');
})();