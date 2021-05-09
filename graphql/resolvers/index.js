const user = require("./User");

const ping = {
  Query: {
    ping: () => "pong",
  },
};

const resolvers = [
  ping,
  user
];

module.exports = resolvers;
