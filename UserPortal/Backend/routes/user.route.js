import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  register,
  updateUser,
  login,
} from "../controllers/user.controller.js";
import { validateBody } from "../Middleware/validate.middleware.js";
import {
  userLoginSchema,
  userUpdateSchema,
} from "../Validator/user.validator.js";

const router = Router();

router.post("/register", register);

router.get("/all", getUsers);

router.get("/single/:id", getUser);

router.patch("/update/:id", validateBody(userUpdateSchema), updateUser);

router.delete("/delete/:id", deleteUser);

router.post("/login", validateBody(userLoginSchema), login);
export default router;
