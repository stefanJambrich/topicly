import BookmarkType from "./types/bookmark.type";
import PostType from "./types/post.type";
import UserType from "./types/user.type";

const graphql = require('graphql');
const User = require('../model/user.model');
const Post = require('../model/post.model');
const Bookmark = require('../model/bookmark.model');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { userId: { type: GraphQLString }},
            resolve(parent: any, args: any) {
                return User.findOne({ where: { userId: args.userId } });
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent: any, args: any) {
                return User.findAll();
            }
        },
        post: {
            type: PostType,
            args: { postId: { type: GraphQLString } },
            resolve(parent: any, args: any) {
                return Post.findOne({ where: { postId: args.postId} });
            }
        }, 
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent: any, args: any) {
                return Post.findAll();
            }
        },
        bookmarks: {
            type: new GraphQLList(BookmarkType),
            resolve(parent: any, args: any) {
                return Bookmark.findAll();
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})