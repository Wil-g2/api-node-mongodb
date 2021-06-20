const Order = require("../../models/orders");
const mongoBase = require("./MongoBase");

class OrderMongo extends mongoBase {
  constructor(model) {
    super(model);
  }
}

module.exports = new OrderMongo(Order);
