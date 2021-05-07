const dotenv = require("dotenv");
dotenv.config();

const createConnection = require("./db");
const currentApp = require("./app");

const { STAGE } = process.env;

const PORT = 4000;

(async () => {
  console.log(`Stage "${STAGE}" is initializing...`);

  await createConnection();

  const graphQLServer = currentApp.listen(PORT).then(({ url }) => {
    console.log(`
      🚀  Server is running! ${url}
      📭  Query at playground: ${url}
      📭  Query at apollo studio: https://studio.apollographql.com/dev
    `);
  });
})();
