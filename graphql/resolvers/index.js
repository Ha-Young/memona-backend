const user = require("./User");
const area = require("./Area");

const ping = {
  Query: {
    ping: () => "pong",
  },
};

const resolvers = [
  ping,
  user,
  area
];

module.exports = resolvers;
