import HttpError from "../utils/errorClass.js ";
import userModel from "../models/user.models.js";
import connectionModel from "../models/connection.models.js";

const sendConnectionRequestHandler = async (req, res) => {
  try {
    const fromUser = req.user._id;
    const { connectionWhomToSend } = req.body;
    const allowedOptions = ["male", "female", "both"];

    // Validate connectionWhomToSend
    if (!allowedOptions.includes(connectionWhomToSend)) {
      throw new HttpError(
        400,
        "Only 'male', 'female', or 'both' are allowed as options."
      );
    }

    let genderFilter = {};

    // Build gender filter based on input
    if (connectionWhomToSend === "male") {
      genderFilter = { gender: { $in: ["male", "others"] } };
    } else if (connectionWhomToSend === "female") {
      genderFilter = { gender: { $in: ["female", "others"] } };
    } else if (connectionWhomToSend === "both") {
      genderFilter = {}; // No filter for "both" - include all users
    }

    // Find a random user based on the filter
    const users = await userModel.aggregate([
      { $match: genderFilter }, // Apply filter (empty object does nothing for "both")
      { $sample: { size: 1 } }, // Random sampling using MongoDB aggregation
    ]);

    if (users.length === 0) {
      throw new HttpError(404, "No users available for connection.");
    }

    const toUser = users[0]._id;

    if (Object.toString(toUser) === Object.toString(fromUser)) {
      throw new HttpError(400, "This user seems to be you");
    }

    // Check if a connection already exists
    const existingConnection = await connectionModel.findOne({
      $or: [
        { fromUser, toUser },
        { fromUser: toUser, toUser: fromUser },
      ],
    });

    if (existingConnection) {
      throw new HttpError(400, "Connection already exists.");
    }

    // Create a new connection request
    await connectionModel.create({
      fromUser,
      toUser,
      status: "send",
    });

    return res.status(201).json({
      success: true,
      message: "Request sent successfully.",
    });
  } catch (error) {
    console.error("Send connection request error:", error.message);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error.",
    });
  }
};

export { sendConnectionRequestHandler };
