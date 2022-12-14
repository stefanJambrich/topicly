import PostType from "./post.type";
import UserType from "./user.type";

const graphql = require('graphql');
const User = require('../../model/user.model');
const Post = require('../../model/post.model');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

const BookmarkType = new GraphQLObjectType({
    name: "Bookmark",
    fields: () => ({
        bookmarkId: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent: any, args: any) {
                return User.findOne({ where: { userId: parent.userId } })
            }
        },
        post: {
            type: PostType,
            resolve(parent: any, args: any) {
                return Post.findOne({ where: { postId: parent.postId } })
            }
        }
    })
})

export default BookmarkType;