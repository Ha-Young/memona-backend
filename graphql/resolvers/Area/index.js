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
    locations: {
      $geoIntersects: {
        $geometry: { type: "Point", coordinates: [lng, lat] },
      },
    },
  };

  const area = await dataSources.areas.getAreaByQuery(geoIntersectQuery);

  console.log("area", area);
}

module.exports = resolvers;
