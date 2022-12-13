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

const BookmarkType = GraphQLObjectType({
    name: "Bookmark",
    fields: () => ({
        
    })
})