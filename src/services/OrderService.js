class OrderServices {
  constructor(model) {
    this.model = model;
  }
  async save(order) {
    return this.model.save(order);
  }

  async find() {
    return this.model.find();
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async delete(id) {
    this.model.delete(id);
  }

  async update(id, data) {
    return this.model.update(id, data);
  }
}

module.exports = OrderServices;
