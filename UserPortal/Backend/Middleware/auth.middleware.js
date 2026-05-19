import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/index.js";
import UserModel from "../models/User.model.js";
import ErrorResponse from "../utils/ErrorResponse.util.js";

export const authenticate = async (req, res, next) => {
  let token = req.cookies.token;
  if (!token)
    return next(new ErrorResponse("Please Login to access this resource", 401));

  let decodedToken = jwt.verify(token, JWT_SECRET_KEY);
  console.log("decodedToken: ", decodedToken);
  // { payload: 'var', iat: 1768290784, exp: 1768377184 }

  let myUser = await UserModel.findOne({ name: decodedToken.payload });
  if (!myUser) return next(new ErrorResponse("invalid session", 401));

  req.myUser = myUser;
  next();
};
