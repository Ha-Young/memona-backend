const querys = require("./Query");
const mutations = require("./Mutation");
const user = require("./User");

const typeDefs = [
  querys,
  mutations,
  user
];

module.exports = typeDefs;
