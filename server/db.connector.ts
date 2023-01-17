import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'topicly',
    `${process.env.DB_USERNAME}`,
    `${process.env.DB_PASS}`, {
        host: 'localhost',
        dialect: 'mysql',
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
    await sequelize.sync({ force: true });
    console.log('juchs');
})();