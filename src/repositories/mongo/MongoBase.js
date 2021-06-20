const NotFound = require("../../helpers/error/NotFound");

class MongoBase {
  constructor(model) {
    this.model = model;
  }
  async find() {
    return this.model.find();
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async save(data) {
    const model = new this.model({ ...data });
    model.save();
    return model;
  }

  async delete(id) {
    const model = this.model.findById(id);
    if (!model) {
      throw new NotFound("Documento not found");
    }
    await model.deleteOne({ _id: id });
  }

  async update(id, date) {
    return this.model.findOneAndUpdate({ _id: id }, date, { new: true });
  }
}

module.exports = MongoBase;
