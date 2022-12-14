import UserType from "./user.type";

const graphql = require('graphql');
const User = require('../../model/user.model');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        postId: { type: GraphQLString },
        title: { type: GraphQLString },
        picture: { type: GraphQLString },
        description: { type: GraphQLString },
        like: { type: GraphQLInt },
        user: {
            type: UserType,
            resolve(parent: any, args: any) {
                return User.findOne({ where: { userId: parent.userId } })
            }
        }
    })
})

export default PostType;