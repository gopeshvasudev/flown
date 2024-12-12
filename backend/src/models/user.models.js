import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      min: 3,
      max: 50,
      trim: true,
    },

    nickName: {
      type: String,
      min: 3,
      max: 50,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      require: true,
      min: 10,
      max: 50,
      trim: true,
    },

    password: {
      type: String,
      unique: true,
      require: true,
      min: 8,
    },

    age: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
