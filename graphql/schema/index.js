const querys = require("./Query");
const mutations = require("./Mutation");
const user = require("./User");
const post = require("./Post");

const typeDefs = [
  querys,
  mutations,
  user,
  post
];

module.exports = typeDefs;
