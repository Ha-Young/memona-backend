const { gql } = require("apollo-server");

const typeDefs = gql`
  type PostWithPage {
    docs: [Post]
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
  }
`;

module.exports = typeDefs;
