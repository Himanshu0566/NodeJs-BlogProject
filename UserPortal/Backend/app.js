// console.log(process.env);

import express from "express";
import connectDB from "./config/database.config.js";
import { PORT } from "./config/index.js";
import { errorHandle } from "./Middleware/errorHndle.middleware.js";
import userRoutes from "./routes/user.route.js";

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("working");
});

app.use(errorHandle);

app.listen(PORT, (err) => {
  if (err) console.log("error occurred while starting the server");
  console.log("Server Running", process.env.PORT);
});
