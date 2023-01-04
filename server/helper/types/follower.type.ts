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

const FollowerType = new GraphQLObjectType({
    name: 'Follower',
    fields: () => ({
        id: { type:  GraphQLInt},
        usersTableId: { type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent: any, args: any) {
                return User.findOne({ where: { id: parent.id}})
            }
        }
    })
})

export default FollowerType;