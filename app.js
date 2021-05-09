const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const dataSources = require("./graphql/datasource");
const { verifyJWTToken } = require("./utils/jwtToken");
const extractToken = require("./utils/extractToken");
const UserModel = require("./models/User");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: async ({ req }) => {
    const token = extractToken(req);

    if (!token) {
      return { user: undefined };
    }

    const verifiedResult = verifyJWTToken(token);

    const user = await UserModel.find({ email: verifiedResult.email });

    return { user };
  },
});

module.exports = apolloServer;
