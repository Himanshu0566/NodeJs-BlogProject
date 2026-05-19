import mongoose from "mongoose";
import { MONGODB_URL } from "./index.js";

const connectDB = async function () {
  await mongoose.connect(MONGODB_URL);
  //   await mongoose.connect("mongodb://127.0.0.1:27017/user-portal");
  console.log("Database connected");
};

export default connectDB;
