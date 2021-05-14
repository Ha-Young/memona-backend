const myAreaQuery = require("./myAreaQuery");

const resolvers = {
  Query: {
    areas: async (_, __, { dataSources }) => {
      const area = await dataSources.areas.getAreas();

      return area;
    },
    myArea: (_, args, { dataSources }) => myAreaQuery(args, dataSources),
  },
};

module.exports = resolvers;
