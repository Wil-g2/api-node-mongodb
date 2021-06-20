const AppError = require("./AppError");

module.exports = class NotFound extends AppError {
  constructor(message = "") {
    super(message, 404);
  }
};
