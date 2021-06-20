const express = require("express");
require("express-async-errors");
const routes = require("./routes");
const cors = require("cors");
const helmet = require("helmet");
const errorHandle = require("./middlewares/handleError");
require("./database");

class App {
  constructor() {
    this.server = express();
    this.init();
  }

  init() {
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(helmet());
  }

  routes() {
    this.server.use(routes);
    this.server.use(errorHandle);
  }
}

module.exports = new App().server;
