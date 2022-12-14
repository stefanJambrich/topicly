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

const BookmarkType = new GraphQLObjectType({
    name: "Bookmark",
    fields: () => ({
        bookmarkId: { type: GraphQLString }
    })
})

export default BookmarkType;