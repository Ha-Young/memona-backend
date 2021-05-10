const resolvers = {
  Query: {
    areas: async (_, __, { dataSources }) => {
      const area = await dataSources.areas.getAreas();

      return area;
    },
    myArea: (_, args, { dataSources }) => myAreaQuery(args, dataSources),
  },
};

async function myAreaQuery({ lat, lng }, dataSources) {
  const geoIntersectQuery = {
    location: {
      $near: {
        $geometry: { type: "Point", coordinates: [lng, lat] },
        $maxDistance: 0,
      },
    },
  };

  const area = await dataSources.areas.getAreaByQuery(geoIntersectQuery);

  return area;
}

module.exports = resolvers;
