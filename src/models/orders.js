const mongoose = require("mongoose");

const Order = mongoose.model("Order", {
  name: String,
  address: String,
  date: Date,
});

module.exports = Order;
