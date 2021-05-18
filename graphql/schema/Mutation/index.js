const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    login(type: String, token: String, email: String, password: String): String
    createPost(input: PostInput!, file: Upload): Post!
  }
`;

module.exports = typeDefs;
