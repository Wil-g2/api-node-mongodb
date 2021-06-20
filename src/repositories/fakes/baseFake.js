const { v4: uuid } = require("uuid");
const NotFound = require("../../helpers/error/NotFound");

class baseFake {
  constructor() {
    this.model = [];
  }

  async find() {
    return this.model;
  }

  async findById(id) {
    const model = this.model.find((item) => item._id === id);
    return model;
  }

  async save(data) {
    const newModel = { _id: uuid(), ...data };
    this.model.push(newModel);
    return newModel;
  }

  async delete(id) {
    const model = this.findById(id);
    if (!model) {
      throw new NotFound("Documento not found");
    }

    this.model.splice(model, 1);
  }

  async update(id, data) {
    const itemIndex = this.model.findIndex((item) => item._id === id);

    if (itemIndex < 0) {
      throw new NotFound("Documento not found");
    }
    const model = this.model[itemIndex];
    Object.assign(model, data);
    this.model[itemIndex] = model;

    return model;
  }
}

module.exports = baseFake;
