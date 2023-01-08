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

const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        commentId: { type: GraphQLString },
        userId: { type: GraphQLString },
        text: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent: any, args: any) {
                return User.findOne({ where: { userId: parent.userId }})
            }
        },
    })
})

export default CommentType;