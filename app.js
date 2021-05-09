const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const dataSources = require("./graphql/datasource");

console.log("typeDefs", typeDefs);
console.log("resolvers", resolvers);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

module.exports = apolloServer;
