const orderRoutes = require('express').Router();
const OrderController = require("../controllers/OrderController");
const { celebrate, Segments, Joi } = require("celebrate");

orderRoutes.get("/", OrderController.index);
orderRoutes.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  OrderController.show
);
orderRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      address: Joi.string().required(),
    },
  }),
  OrderController.store
);
orderRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  OrderController.delete
);
orderRoutes.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      address: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  OrderController.update
);

module.exports = orderRoutes;