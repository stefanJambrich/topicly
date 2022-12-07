import express, { Express } from 'express';
import dotenv from 'dotenv';
import { isLoggedIn } from './middleware/loggedIn.middleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const cors = require('cors');
const session = require('express-session');

const db = require('./db.connector');
const authorize = require('./middleware/authorize.middleware');
const authRouter = require('./routes/auth.route');
const postRouter = require('./routes/post.route');
const searchRouter = require('./routes/search.route');
const userRouter = require('./routes/user.route');

app.use(express.json());
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));

app.use('/api/auth', authRouter);
app.use(authorize);
app.use(isLoggedIn);

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/search', searchRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});