/* eslint-disable no-useless-constructor */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; //help to seprate out with programming error

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
