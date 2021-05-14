const { gql } = require("apollo-server");

const typeDefs = gql`
  type PostWithPage implements Pagination{
    docs: [Post]
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
  }
`;

module.exports = typeDefs;
