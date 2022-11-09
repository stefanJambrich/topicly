import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const db = require('./db.connector');

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});