const graphql = require('graphql');

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
        like: { type: GraphQLInt }
    })
})

export default PostType;