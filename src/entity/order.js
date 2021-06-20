class Order {
  constructor({ name, address }) {
    this.name = name;
    this.address = address;
    this.date = new Date();
  }
}

module.exports = Order;
