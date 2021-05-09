const User = require("../../../models/User");

const resolvers = {
  Query: {
    async users(parent, args){
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
};

module.exports = resolvers;
