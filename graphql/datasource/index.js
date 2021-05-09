const Users = require("./Users");
const UserModel = require("../../models/User");

function dataSources() {
  return {
    users: new Users(UserModel),
  };
}

module.exports = dataSources;
