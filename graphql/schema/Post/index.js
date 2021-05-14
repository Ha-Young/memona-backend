const { gql } = require("apollo-server");

const typeDefs = gql`
  type Post {
    _id: ID!
    author: User
    content: String
    postImageUrl: String
    location: PointGeoJson
    isAnonymous: Boolean
    area: String
    season: String
    year: String
    # comments: [Comment]
    # likes: [Like]
  }

  input PostInput {
    author: ID!
    content: String
    postImageFile: Upload!
    location: PointGeoJsonInput!
    isAnonymous: Boolean!
    area: String!
    season: String!
    year: String!
  }

  type PointGeoJson {
    type: String
    coordinates: [Float]
  }

  input PointGeoJsonInput {
    type: String
    coordinates: [Float]
  }
`;

module.exports = typeDefs;
