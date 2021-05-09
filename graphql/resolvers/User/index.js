const { verifyGoogleToken } = require("../../../auth");
const { LOGIN_TYPE } = require("../../../constants");
const User = require("../../../models/User");
const { signJWTToken } = require("../../../utils/jwtToken");

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
      let loginUser;

      switch (type) {
        case LOGIN_TYPE.GOOGLE: {
          loginUser = await verifyGoogleToken(token);
          break;
        }
        default: {
          loginUser = {
            email,
            password,
          };
        }
      }

      const found = await User.findOne({ email: loginUser.email });

      if (!found) {
        const newUser = await User.create({
          ...loginUser,
        });

        console.log("newUser", newUser);
      }

      const jwtToken = await signJWTToken({ email: loginUser.email });

      return jwtToken;
    },
  },
};

module.exports = resolvers;
