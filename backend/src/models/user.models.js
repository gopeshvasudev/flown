import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minLength: 3,
      maxLength: 30,
      trim: true,
    },

    isUsernameChangedOnce: {
      type: Boolean,
      default: false,
    },

    nickName: {
      type: String,
      minLength: 3,
      maxLength: 30,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      minLength: 10,
      maxLength: 50,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 8,
    },

    age: {
      type: Number,
      required: true,
      min: 13,
    },

    gender: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender must be male, female or others");
        }
      },
    },

    bio: {
      type: String,
      trim: true,
      maxLength: 1111,
    },

    photoUrl: {
      type: String,
      trim: true,
      default: function () {
        if (this.gender === "male") {
          return "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?w=740";
        } else if (this.gender === "female") {
          return "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2944.jpg?t=st=1734156891~exp=1734160491~hmac=a1a09b51bfc2758d2fe7df72e5d7d6585d90b417dbf88ed415c10c25443de1f3&w=740";
        } else {
          return "https://cdn.vectorstock.com/i/500p/48/31/emo-avatar-vector-4304831.jpg";
        }
      },
    },

    interests: [],
  },
  { timestamps: true }
);

userSchema.methods.validatePassword = async function (userInputPassword) {
  const isValidPassword = await bcrypt.compare(
    userInputPassword,
    this.password
  );

  return isValidPassword;
};

const User = mongoose.model("User", userSchema);
export default User;
