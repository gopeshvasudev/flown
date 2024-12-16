import jwt from "jsonwebtoken";
import HttpError from "../utils/errorClass.js";
import userModel from "../models/user.models.js";

const authenticateUser = async (req, res, next) => {
  try {
    // Fetching the token from the header
    const authHeader = req.header("Authorization");

    // Checking if the token exists or not
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new HttpError(401, "Access token is missing or malformed");
    }

    // Spliting the token to the Bearer
    const token = authHeader.split(" ")[1];

    // Verifying the token and sending in the request
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decodedData) {
      throw new HttpError(403, "Invalid token");
    }

    const user = await userModel.findById(decodedData._id).select("-password");

    if (!user) {
      throw new HttpError(404, "User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(`Authentication middleware error: ${error.message}`);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Authentication failed",
    });
  }
};

export { authenticateUser };
