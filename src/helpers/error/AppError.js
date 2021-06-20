module.exports = class AppError extends Error {
  constructor(message, code = 500) {
    super(message);
    this.message = message;
    this.code = code;
  }
};
