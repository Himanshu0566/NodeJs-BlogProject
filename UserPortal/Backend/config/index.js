import dotenv from "dotenv";

dotenv.config({ quiet: true });
export const PORT = process.env.PORT || 9000;
export const MONGODB_URL = process.env.MONGODB_URL;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;


