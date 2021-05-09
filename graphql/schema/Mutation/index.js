const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    login(type: String, token: String, email: String, password: String): String
  }
`;

module.exports = typeDefs;
