const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ping: String
    users: [User]
    loginUser: User
    posts(page: Int, limit: Int, area: String, season: String): [Post]
    areas: [Area]
    myArea(lat: Float, lng: Float): Area
  }
`;

module.exports = typeDefs;
