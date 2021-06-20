const routes = require("express").Router();

const orderRoutes = require('./order.routes');
routes.use('/orders', orderRoutes)

module.exports = routes;
