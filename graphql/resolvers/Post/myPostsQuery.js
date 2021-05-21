const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

async function myPostsQuery({ page, limit }, { dataSources, auth }) {
  const pagingOption = {
    page,
    limit,
  };

  const query = {
    author: ObjectId(auth._id),
  };

  try {
    const result = await dataSources.posts.getAggregatePostsWithPagenation({ pagingOption, query });
    return {
      docs: result.docs,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
    };
  } catch (error) {
    console.log(error);
  }
}

module.exports = myPostsQuery;
