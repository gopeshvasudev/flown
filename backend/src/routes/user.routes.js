import express from "express";
import userModel from "../models/user.models.js";
import HttpError from "../utils/errorClass.js";

const router = express.Router();

router.get("/profile", authenticateUser, async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await userModel.findById(_id).select("-password");

    if (!user) {
      throw new HttpError(404, "User not found");
    }

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.log(`Get profile error: ${error.message}`);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
});

export default router;
