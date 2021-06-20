require("dotenv/config");

const OrderMongo = require("./mongo/OrderMongo");
const OrderFake = require("../repositories/fakes/order");

const orderRepository =
  process.env.NODE_ENV === "test" ? OrderFake : OrderMongo;

module.exports = orderRepository;
