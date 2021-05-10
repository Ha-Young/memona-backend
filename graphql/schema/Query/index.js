const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ping: String
    users: [User]
    loginUser: User
    areas: [Area]
    myArea(lat: Float, lng: Float): Area
  }
`;

module.exports = typeDefs;
