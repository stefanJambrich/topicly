import express, { Express, Request } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const cors = require('cors');
const cookieParser = require('cookie-parser');

const db = require('./db.connector');
const authorize = require('./middleware/authorize.middleware')
const authRouter = require('./routes/auth.route');
const postRouter = require('./routes/post.route');
const searchRouter = require('./routes/search.route');
const userRouter = require('./routes/user.route');
const bookmarkRouter = require('./routes/bookmark.route');
const followerRouter = require('./routes/follower.route');
const storyRouter = require('./routes/story.route');
const commentRouter = require('./routes/comment.route');

const Follower = require('./model/follower.model');
const User = require('./model/user.model');

app.use(express.json());
app.use(cors<Request>({ origin: `${process.env.ORIGIN}`, credentials: true }));
app.use(cookieParser());

app.use('/api/auth', authRouter);

app.use(authorize);

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/search', searchRouter);
app.use('/api/bookmark', bookmarkRouter);
app.use('/api/follow', followerRouter);
app.use('/api/story', storyRouter);
app.use('/api/comment', commentRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});