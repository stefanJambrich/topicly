import PostType from "./post.type";

const graphql = require('graphql');
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

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        userId: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        nickname: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        description: { type: GraphQLString },
        post: {
            type: new GraphQLList(PostType),
            resolve(parent: any, args: any) {
                return Post.findAll({ where: { userId: parent.userId }});
            }
        }
    })
});

export default UserType;