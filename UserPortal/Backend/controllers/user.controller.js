import UserModel from "../models/User.model.js";
import asyncHandler from "express-async-handler";
import ErrorResponse from "../utils/errorresponse.utils.js";
import { generateJwtToken } from "../utils/jwt.utils.js";
export const register = async (req, res, next) => {
  const { name, age, email, isMarried, password } = req.body;
  let newUser = await UserModel.create({
    name,
    age,
    email,
    isMarried,
    password,
  });
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: newUser,
  });
};

export const getUsers = async (req, res, next) => {
  try {
    const allUser = await UserModel.find();
    if (allUser.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No user found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      count: allUser.length,
      data: allUser,
    });
  } catch (error) {
    next(error);
  }

  // const allUser = await UserModel.find({});
  // return res.json(allUser);
}; //TODO try it using try catch method amd using if else

export const getUser = async (req, res, next) => {
  try {
    let userID = req.params.id;
    let user = await UserModel.findById(userID);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Found successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    let userID = req.params.id;
    let updateUser = await UserModel.findByIdAndUpdate(userID, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).json({
        success: false,
        message: "Cant Update User",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Updated successfully",
      data: updateUser,
    });
  } catch (error) {
    next(error);
  }
};
//TODO try options as well {new:true}

export const deleteUser = async (req, res, next) => {
  try {
    let userID = req.params.id;
    let deleteUser = await UserModel.findByIdAndDelete(userID);
    if (!deleteUser) {
      return res.status(404).json({
        success: false,
        message: "Cant Delete User",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Deleted successfully",
      data: deleteUser,
    });
  } catch (error) {
    next(error);
  }
};
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser = await UserModel.findOne({ email });
  if (!existingUser) throw new ErrorResponse("Invalid Credentials", 404);

  let isMatched = await existingUser.compairPasword(password);
  if (!isMatched) return next(new ErrorResponse("Invalid credentials", 400));
  let token = generateJwtToken(existingUser.name);
  console.log("token:", token);

  res.cookie("token", token, {
    maxAge: 10 * 50 * 1000,
    secure: true,
  });
  res.status(200).json({
    success: true,
    message: "User logged in",
    token,
  });
});

export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("token");
});
