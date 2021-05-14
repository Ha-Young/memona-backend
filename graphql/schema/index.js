const querys = require("./Query");
const mutations = require("./Mutation");
const user = require("./User");
const post = require("./Post");
const postWithPage = require("./PostWithPage");
const area = require("./Area");

const typeDefs = [
  querys,
  mutations,
  user,
  post,
  postWithPage,
  area
];

module.exports = typeDefs;
