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

    // 3. Aggregate to find a random matching user
    const [randomUser] = await userModel.aggregate([
      {
        $match: {
          _id: { $ne: _id }, // Exclude current user
          age: { $gte: agePreference.fromAge, $lte: agePreference.toAge },
          $or: [
            {
              $and: [
                { gender: genderPreference }, // Match mutual gender preference
                { genderPreference: user.gender },
              ],
            },
            { genderPreference: "both" },
          ],
        },
      },
      { $sample: { size: 1 } }, // Randomly pick one user
    ]);

    if (!randomUser) {
      throw new HttpError(404, "No suitable users found for connection.");
    }

    const toUser = randomUser._id;

    // 4. Check for existing connection
    const existingConnection = await connectionModel.findOne({
      $or: [
        { fromUser: _id, toUser },
        { fromUser: toUser, toUser: _id },
      ],
    });

    if (existingConnection) {
      throw new HttpError(400, "Connection request already sent.");
    }

    // 5. Create a connection request
    const newConnection = await connectionModel.create({
      fromUser: _id,
      toUser,
      status: "pending",
      letterMessage,
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
