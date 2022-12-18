import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { graphqlHTTP } = require('express-graphql');

const db = require('./db.connector');
const graphql = require('./helper/graphql.helper');
const authorize = require('./middleware/authorize.middleware');
const authRouter = require('./routes/auth.route');
const postRouter = require('./routes/post.route');
const searchRouter = require('./routes/search.route');
const userRouter = require('./routes/user.route');
const bookmarkRouter = require('./routes/bookmark.route');
const followerRouter = require('./routes/follower.route');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRouter);

app.use(authorize);

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/search', searchRouter);
app.use('/api/bookmark', bookmarkRouter);
app.use('/api/follow', followerRouter);
app.use('/graphql', graphqlHTTP({
  schema: graphql,
  graphiql: true
}));  

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});