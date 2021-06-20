const Order = require("../entity/order");
const OrderService = require("../services/OrderService");
const OrderRepository = require("../repositories/OrderRepository");
const service = new OrderService(OrderRepository);

class OrderController {
  async index(req, res) {
    const orders = await service.find();
    return res.json(orders);
  }

  async show(req, res) {
    const { id } = req.params;
    const order = await service.findById(id);

    if (!order) {
      return res.status(404).json({ error: "Order not found." });
    }

    return res.json(order);
  }

  async store(req, res) {
    const { name, address } = req.body;

    const order = new Order({ name, address });

    await service.save(order);

    return res.json(order);
  }

  async delete(req, res) {
    const { id } = req.params;
    await service.delete(id);
    return res.status(204).send();
  }

  async update(req, res) {
    const { id } = req.params;
    const order = await service.update(id, req.body);
    return res.json(order);
  }
}
module.exports = new OrderController();
