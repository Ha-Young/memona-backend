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
    login: (_, args, { dataSources }) => loginMutation(args, dataSources.users),
  },
};

async function loginMutation({ type, token, email, password }, userDataSource) {
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

  const found = await userDataSource.getUser({ email: loginUser.email });

  if (!found) {
    const newUser = await userDataSource.createUser({
      ...loginUser,
    });

    console.log("newUser", newUser);
  }

  const jwtToken = await signJWTToken({ email: loginUser.email });

  return jwtToken;
}

module.exports = resolvers;
