import FollowerType from "./follower.type";
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

const userFollower = GraphQLInt({
    name: 'UserFollower',
    fields: () => ({
        usersTableId: { type: GraphQLInt},
        followerEntityId: { type: GraphQLInt},
        user: {
            type: UserType,
            resolve(parent: any, args: any) {
                return User.findOne({ where: { id: parent.usersTableId}})
            }
        },
        follower: {
            type: GraphQLList(FollowerType),
            resolve(parent: any, args: any) {
                return User.findAll({ where: { id: parent.followerEntityId}})
            }
        }
    })
})