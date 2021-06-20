const { v4: uuid } = require("uuid");
const baseFake = require("./baseFake");

class OrderFake extends baseFake {
  constructor() {
    super();
  }
}

module.exports = OrderFake;
