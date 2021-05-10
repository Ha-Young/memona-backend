const resolvers = {
  Query: {
    areas: async (_, __, { dataSources }) => {
      const area = await dataSources.areas.getAreas();

      return area;
    },
  },
};

module.exports = resolvers;
