const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ping: String
    users: [User]
    loginUser: User
  }
`;

module.exports = typeDefs;
