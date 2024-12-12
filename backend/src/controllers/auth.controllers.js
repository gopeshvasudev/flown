import userModel from "../models/user.models.js";
import { createAccessToken, createRefreshToken } from "../utils/tokens.js";
import bcrypt from "bcrypt";

const signupHandler = async (req, res) => {
  try {
    const { username, email, password, age } = req.body;

    // checking if the user already exists or not
    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(409).json({
        success: false,
        message: "User exists already",
      });
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
    });

    // Creating refresh and access token
    const refreshToken = createRefreshToken({ _id: newUser._id });
    const accessToken = createAccessToken({
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
    });

    //Setting refresh token in a cookie and sending access token with a response
    return res
      .status(200)
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

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { signupHandler };
