import Hapi from "hapi";
import knex from "./config/knex";

import { root, notas } from "./routes";

const server = new Hapi.Server({
  port: process.env.PORT || 8000
});

const init = async () => {
  server.route([].concat(root, notas));

  await server.start();
  console.log("Server is running");
};

init();