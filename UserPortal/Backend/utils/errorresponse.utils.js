class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

// throw new ErrorResponse("hi", 404);

export default ErrorResponse;
