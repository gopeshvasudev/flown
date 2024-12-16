import mongoose from "mongoose";

const connectionSchema = new mongoose.Schema(
  {
    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    toUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: "String",
      enum: {
        values: ["send", "accepted", "rejected"],
        message: "Invalid status type",
      },
    },
  },
  { timestamps: true }
);

const Connection = mongoose.model("Connection", connectionSchema);
export default Connection;
