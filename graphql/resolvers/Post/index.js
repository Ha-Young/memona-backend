const postsQuery = require("./postsQuery");
const createPostMutation = require("./createPostMutation");

const resolvers = {
  Query: {
    posts: (_, args, { dataSources }) => postsQuery(args, dataSources),
  },
  Post: {
    author: async ({ author }, __, { dataSources }) => {
      return await dataSources.users.getUser(author);
    },
  },
  Mutation: {
    createPost: (_, args, { dataSources }) => {
      return createPostMutation(args, dataSources);
    },
  },
};

module.exports = resolvers;
