const myAreaQuery = require("../Area/myAreaQuery");

async function postsQuery({ filter, page, limit, area, season, year, lat, lng }, dataSources) {
  const pagingOption = {
    page,
    limit,
  };

  let areaName = area;

  if (!areaName && !(lat && lng)) {
    // todo. error
    throw new Error("parameter area or (lat, lng) must needed");
  }

  if (!areaName) {
    const { name } = await myAreaQuery({ lat, lng }, dataSources);
    areaName = name;
  }

  const query = {
    area: areaName,
  };

  if (season) {
    query.season = season;
  }

  if (year) {
    query.year = year;
  }

  try {
    const result = await dataSources.posts.getRandomPostsWithPagenation({ filter, pagingOption, query });
    console.log(result);
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

module.exports = postsQuery;
