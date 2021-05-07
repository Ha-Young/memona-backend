const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    ping: String
  }
`;
module.exports = typeDefs;
