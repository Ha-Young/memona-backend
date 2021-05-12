
const { verifyGoogleToken } = require("../../../utils/socialLoginAuth");
const { LOGIN_TYPE } = require("../../../constants");
const { signJWTToken } = require("../../../utils/jwtToken");
const authCheck = require("../authCheck");

const resolvers = {
  Query: {
    users: async (_, __, { dataSources, auth }) => {
      try {
        authCheck(auth);

        const user = await dataSources.users.getUsers();

        return user;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    loginUser: async (_, __, { dataSources, auth }) => {
      authCheck(auth);

      const user = await dataSources.users.getUser(auth._id);

      return user;
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

  let user = await userDataSource.getUserByQuery({ email: loginUser.email });

  if (!user) {
    const newUser = await userDataSource.createUser({
      ...loginUser,
    });

    user = newUser;
  }

  const jwtToken = await signJWTToken({ _id: user._id });

  return jwtToken;
}

module.exports = resolvers;
