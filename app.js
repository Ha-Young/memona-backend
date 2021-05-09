const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const dataSources = require("./graphql/datasource");
const { verifyJWTToken } = require("./utils/jwtToken");
const extractToken = require("./utils/extractToken");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req }) => {
    const token = extractToken(req);

    if (!token) {
      return { auth: undefined };
    }

    const auth = verifyJWTToken(token);

    return { auth };
  },
});

module.exports = apolloServer;
