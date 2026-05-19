import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/index";

export const generateJwtToken = (payload) => {
  return jwt.sign({ payload }, JWT_SECRET_KEY, { expiresIn: "1d" });
};
