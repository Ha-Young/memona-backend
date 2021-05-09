const { verifyGoogleToken } = require("../../../auth");
const { LOGIN_TYPE } = require("../../../constants");
const User = require("../../../models/User");

const resolvers = {
  Query: {
    async users(parent, args) {
      try {
        const user = await User.find();
        console.log("user", user);
        return user;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  Mutation: {
    login: async (parent, { type, token, email, password }) => {
      console.log("login mutation!", type, token);
      let loginUser;

      switch (type) {
        case LOGIN_TYPE.GOOGLE: {
          loginUser = await verifyGoogleToken(token);
          console.log("google user", loginUser);
          break;
        }
        default: {
          loginUser = {
            email,
            password,
          };
        }
      }
    },
  },
};

module.exports = resolvers;
