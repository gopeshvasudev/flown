import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.models.js";
import { createAccessToken, createRefreshToken } from "../utils/tokens.js";
import HttpError from "../utils/errorClass.js";
import { validateSignupData } from "../utils/validation.js";

const signupHandler = async (req, res) => {
  try {
    validateSignupData(req);

    const { username, email, password, age, gender } = req.body;

    // checking if the user already exists or not
    const user = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (user) {
      throw new HttpError(400, "User already exist");
    }

    //Encrypting the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a new user
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
      age,
      gender,
    });

    // Creating refresh and access token
    const refreshToken = createRefreshToken({ _id: newUser._id });
    const accessToken = createAccessToken({
      _id: newUser._id,
      email: newUser.email,
    });

    //Setting refresh token in a cookie and sending access token with a response
    return res
      .status(201)
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .json({
        success: true,
        message: "User created successfully",
        accessToken: accessToken,
      });
  } catch (error) {
    console.log("Sign up error: ", error.message);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const signinHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Checking if the user exist or not
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new HttpError(404, "Invalid credentials");
    }

    //Checking if the password is correct or not
    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
      throw new HttpError(401, "Invalid credentials");
    }

    //Creating access and refresh tokens
    const refreshToken = createRefreshToken({ _id: user._id });
    const accessToken = createAccessToken({
      _id: user._id,
      email: user.email,
    });

    return res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .json({
        success: true,
        message: "Login successful",
        accessToken,
      });
  } catch (error) {
    console.log("Sign in error: ", error.message);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const refreshTokenHandler = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    //Checking if the refresh token exist or not in the cookie
    if (!refreshToken) {
      throw new HttpError(404, "Token not found");
    }

    //Verifying the token
    const decodedData = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY);

    if (!decodedData) {
      throw new HttpError(401, "Invalid token");
    }

    //If the token is verified then fetch the user
    const user = await userModel.findById(decodedData._id);

    //creating a new access token and sending it in the response
    const accessToken = createAccessToken({
      _id: user._id,
      username: user.username,
      email: user.email,
    });

    return res.status(200).json({
      success: true,
      message: "New access token created",
      accessToken,
    });
  } catch (error) {
    console.log("Refresh token error: ", error.message);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export { signupHandler, signinHandler, refreshTokenHandler };
