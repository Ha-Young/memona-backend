const Users = require("./Users");
const Areas = require("./Areas");
const UserModel = require("../../models/User");
const AreaModel = require("../../models/Area");

function dataSources() {
  return {
    users: new Users(UserModel),
    areas: new Areas(AreaModel),
  };
}

module.exports = dataSources;
