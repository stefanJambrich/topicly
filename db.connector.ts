import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'topicly',
    `${process.env.DB_USERNAME}`,
    `${process.env.DB_PASS}`, {
        host: 'aws.connect.psdb.cloud',
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
);

const User = require('./model/user.model');
 
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
    console.log('juch')
})();