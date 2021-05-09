const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const Users = require("./graphql/datasource/Users");
const UserModel = require("./models/User");

console.log("typeDefs", typeDefs);
console.log("resolvers", resolvers);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new Users(UserModel),
  }),
});

module.exports = apolloServer;
