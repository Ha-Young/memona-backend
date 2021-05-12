const resolvers = {
  Query: {
    posts: (_, args, { dataSources }) => postsQuery(args, dataSources),
  },
  Post: {
    author: async ({ author }, __, { dataSources }) => {
      return await dataSources.users.getUser(author);
    },
  },
};

async function postsQuery({ page, limit, area, season }, dataSources) {
  console.log("posts query");

  const pagingOption = {
    page,
    limit,
  };

  const query = {
    area,
    season,
  };

  try {
    const result = await dataSources.posts.getRandomPostsWithPagenation({ pagingOption, query });

    console.log(result);

    console.log("return", {
      ...result.docs,
      hasNextPage: result.hasNextPage,
    });

    // todo. hasNextPage랑 같이 리턴 할 방법을 모색해야됨. (gql Union 쓰면 될듯?)
    return result.docs;
  } catch (error) {
    console.log(error);
  }
}

module.exports = resolvers;
