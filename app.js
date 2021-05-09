const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const dataSources = require("./graphql/datasource");
const context = require("./graphql/context");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
});

module.exports = apolloServer;
