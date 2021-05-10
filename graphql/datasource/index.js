const Users = require("./Users");
const Areas = require("./Areas");
const UserModel = require("../../models/User");
const AreaModel = require("../../models/Area");
const KakaoAPI = require("./KakaoAPI");

function dataSources() {
  return {
    users: new Users(UserModel),
    areas: new Areas(AreaModel),
    kakaoAPI: new KakaoAPI(),
  };
}

module.exports = dataSources;
