import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'topicly',
    `${process.env.DB_USERNAME}`,
    `${process.env.DB_PASS}`, {
        host: `${process.env.DB_URL}`,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
);