import express from "express";
import userModel from "../models/user.models.js";
import HttpError from "../utils/errorClass.js";
import { authenticateUser } from "../middlewares/auth.middlewares.js";
import { validateProfileEditData } from "../utils/validation.js";

const router = express.Router();

router
  .route("/details")
  .get(authenticateUser, async (req, res) => {
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
  })
  .patch(authenticateUser, async (req, res) => {
    try {
      const { _id } = req.user;

      //Fetching the user
      const user = await userModel.findById(_id);

      if (!user) {
        throw new HttpError(404, "User not found");
      }

      //Validation
      validateProfileEditData(req);

      Object.keys(req.body).forEach((field) => {
        user[field] = req.body[field];
      });

      await user.save();
      return res.status(200).json({
        success: true,
        message: `${user.username} your profile updated successfully`,
      });
    } catch (error) {
      console.log(`Update profile details error: ${error.message}`);

      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  });

export default router;
