const querys = require("./Query");
const mutations = require("./Mutation");
const user = require("./User");
const post = require("./Post");
const area = require("./Area");

const typeDefs = [
  querys,
  mutations,
  user,
  post,
  area
];

module.exports = typeDefs;
