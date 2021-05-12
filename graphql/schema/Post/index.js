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
    # comments: [Comment]
    # likes: [Like]
  }

  type PointGeoJson {
    type: String
    coordinates: [Float]
  }
`;

module.exports = typeDefs;
