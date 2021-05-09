const { gql } = require("apollo-server");

const typeDefs = gql`
  type Area {
    _id: ID!
    name: String!
    location: PolygonGeoJson!
  }

  type PolygonGeoJson {
    type: String!
    coordinates: [[[Float]]]
  }
`;

module.exports = typeDefs;
