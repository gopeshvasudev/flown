import HttpError from "../utils/errorClass.js";
import userModel from "../models/user.models.js";
import connectionModel from "../models/connection.models.js";

const sendConnectionRequestHandler = async (req, res) => {
  try {
    const user = req.user; // Current user
    const { _id, genderPreference, agePreference } = user;
    const { letterMessage } = req.body;

    // 1. Validate genderPreference
    if (!["male", "female", "both"].includes(genderPreference)) {
      throw new HttpError(400, "Invalid gender preference");
    }

    // 2. Validate agePreference
    if (!agePreference || !agePreference.fromAge || !agePreference.toAge) {
      throw new HttpError(400, "Invalid age preference");
    }

    if (!letterMessage) {
      throw new HttpError(401, "Message must not be empty");
    }

    // 3. Aggregate to find matching users
    const filteredUsers = await userModel.aggregate([
      {
        $match: {
          _id: { $ne: _id }, // Exclude current user
          age: { $gte: agePreference.fromAge, $lte: agePreference.toAge }, // Age range filter
          $or: [
            { gender: genderPreference }, // Match current user's gender preference
            { genderPreference: "both" }, // Accept users open to all genders
          ],
        },
      },
    ]);

    // 4. Handle case where no users are found
    if (filteredUsers.length === 0) {
      throw new HttpError(404, "No suitable users found for connection.");
    }

    // Pick the first user for simplicity (you can add logic to randomize or pick best match)
    const toUser = filteredUsers[0]._id;

    // 5. Check if a connection already exists
    const existingConnection = await connectionModel.findOne({
      $or: [
        { fromUser: _id, toUser },
        { fromUser: toUser, toUser: _id },
      ],
    });

    if (existingConnection) {
      throw new HttpError(400, "Connection request already sent.");
    }

    // 6. Create a connection request
    const newConnection = await connectionModel.create({
      fromUser: _id,
      toUser: toUser,
      status: "send", // Initial status
    });

    return res.status(200).json({
      success: true,
      message: "Connection request sent successfully.",
      connection: newConnection,
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
