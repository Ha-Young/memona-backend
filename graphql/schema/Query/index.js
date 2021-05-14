const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ping: String
    users: [User]
    loginUser: User
    posts(page: Int, limit: Int, area: String, season: String): PostWithPage
    areas: [Area]
    myArea(lat: Float, lng: Float): Area
  }
`;

module.exports = typeDefs;
