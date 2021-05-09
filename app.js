const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

console.log("typeDefs", typeDefs);
console.log("resolvers", resolvers);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = apolloServer;
