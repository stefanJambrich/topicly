import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const cors = require('cors');

const db = require('./db.connector');
const authorize = require('./middleware/authorize.middleware');
const authRouter = require('./routes/auth.route');
const postRouter = require('./routes/post.route');

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
//app.use(authorize);

app.use('/api/post', postRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});