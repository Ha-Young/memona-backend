const Area = require("../models/Area");

const jsonAreas = require("./Area.json");

module.exports = function saveDB() {
  console.log("area json data save db...");
  const promises = [];

  for (const area of jsonAreas.Area) {
    promises.push(Area.updateOne({ name: area.name }, area, { upsert: true }));
  }

  return Promise.all(promises);
};
