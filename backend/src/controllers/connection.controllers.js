import HttpError from "../utils/errorClass.js";
import userModel from "../models/user.models.js";
import connectionModel from "../models/connection.models.js";

const sendConnectionRequestHandler = async (req, res) => {
  try {
    const user = req.user;
    const { _id: userId, genderPreference, agePreference } = user;
    const { letterMessage } = req.body;

    //Finding the users who matches the creteria
    const users = await userModel
      .find({
        _id: { $ne: userId },
        $or: [
          {
            $and: [
              { gender: genderPreference },
              { genderPreference: user.gender },
            ],
          },
          { genderPreference: "both" },
        ],
        age: {
          $gte: agePreference.fromAge,
          $lte: agePreference.toAge,
        },
      })
      .select("_id agePreference");

    if (!users || users.length === 0) {
      throw new HttpError(404, "No matching user found");
    }

    //Creating a random index and picking up the user according to that random index
    const randomIndex = Math.floor(Math.random() * users.length);
    let randomUser = users[randomIndex];

    //Checking if the random user's age preference is matching the creteria or not.
    if (
      randomUser.agePreference.fromAge > user.age ||
      randomUser.agePreference.toAge < user.age
    ) {
      throw new HttpError(404, "No matching user found");
    }

    //If everything goes well then creating a new connection request
    const newConnection = await connectionModel.create({
      fromUser: userId,
      toUser: randomUser._id,
      status: "send",
      letterMessage,
    });

    return res.status(200).json({
      success: true,
      message: "Letter send successfully",
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

const getSendedConnectionRequestsHandler = async (req, res) => {
  try {
    const user = req.user;

    const connectionRequests = await connectionModel
      .find({ status: "send", fromUser: user._id })
      .populate("toUser", "nickName username photoUrl");

    return res.status(200).json({
      success: true,
      message: "Requests fetched successfully",
      connectionRequests,
    });
  } catch (error) {
    console.log("Get connection requests error: " + error.message);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export { sendConnectionRequestHandler, getSendedConnectionRequestsHandler };
