import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const cors = require('cors');

const db = require('./db.connector');
const authRouter = require('./routes/auth.route');

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});