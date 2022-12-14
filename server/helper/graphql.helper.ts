import UserType from "./types/user.type";

const graphql = require('graphql');
const User = require('../model/user.model');

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
                return User.findOne({ where: { userId: args.userId }});
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent: any, args: any) {
                return User.findAll();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})