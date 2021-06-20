const AppError = require("../helpers/error/AppError");
const { isCelebrateError } = require("celebrate");

module.exports = (err, request, response, next) => {
  if (isCelebrateError(err)) {
    const errorBody = err.details?.get("body");

    return response.status(400).json({
      statusCode: 400,
      message: errorBody.details,
    });
  }

  if (err instanceof AppError) {
    return response.status(err.code).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};
