const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    username: String!
    nickname: String
    avatar: String
    # posts: [Post]
    # friends: [User]
  }
`;

module.exports = typeDefs;
