export const errorHandle = (err, req, res, next) => {
  err.message = err.message || "Something went wrong";
  err.statusCode = err.statusCode || 500;

  if (err.name === "ValidationError") {
    err.statusCode = 400;
    err.message = "Something is Missing";
  } else if (err.code === 11000) {
    //TODO TO show what key is dublicate with KEY name
    // err.statusCode = 409;
    // err.message = "already exists";
  } else if (err.name === "CastError") {
    err.statusCode = 404;
    err.message = "Invalid userID";
  } else if (err.name === "MulterError") {
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      err.statusCode = 400;
      err.message = "You can only upload One Image";
    }
  } else if (err.name === "MulterError") {
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      err.statusCode = 400;
      err.message = "You can only upload One Image";
    }
  } else if (err.name === "Limit FIle size") {
    err.statusCode = 400;
    err.message = "File size Exides";
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errObject: err,
  });
};
