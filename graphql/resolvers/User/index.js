const User = require("../../../models/User");
const { verifyGoogleToken } = require("../../../auth");
const { LOGIN_TYPE } = require("../../../constants");
const { signJWTToken } = require("../../../utils/jwtToken");

const resolvers = {
  Query: {
    users: async (_, __, { dataSources }) => {
      try {
        const user = await dataSources.users.getUsers();

        return user;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  User: {
    friends: async ({ friends }, __, { dataSources }) => {
      return await dataSources.users.getUsersByIds(friends);
    },
  },
  Mutation: {
    login: (parent, args) => loginMutation(parent, args),
  },
};

async function loginMutation(parent, { type, token, email, password }) {
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
}

module.exports = resolvers;
