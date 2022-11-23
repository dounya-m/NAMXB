const error = require("Error");

function AppError() {
  (msg, statusCode) => {
    super(msg);

    this.statusCode = statusCode;
    this.error = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    error.captureStackTrace(this, this.constructor);
  };
}
module.exports = { AppError };
