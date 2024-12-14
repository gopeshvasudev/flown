import validator from "validator";
import HttpError from "./errorClass.js";

const validateSignupData = (req) => {
  const { username, email, password, age, gender } = req.body;

  const sanitizedFields = ["username", "email", "password", "age", "gender"];

  Object.keys(req.body).forEach((field) => {
    if (!sanitizedFields.includes(field)) {
      throw new HttpError(400, `Invalid Field: ${field}`);
    }
  });

  // Validate username
  if (!username || !validator.isLength(username, { min: 4, max: 30 })) {
    throw new HttpError(
      400,
      "Username length must be between 4 and 30 characters"
    );
  }
  if (!validator.isAlphanumeric(username)) {
    throw new HttpError(400, "Username must contain only letters and numbers");
  }

  // Validate email
  if (!email || !validator.isEmail(email)) {
    throw new HttpError(400, "Please enter a valid email");
  }

  // Validate password
  if (!password || !validator.isLength(password, { min: 8 })) {
    throw new HttpError(400, "Password must be at least 8 characters long");
  }
  if (!validator.isStrongPassword(password)) {
    throw new HttpError(
      400,
      "Password must contain lowercase, uppercase, number or symbol"
    );
  }

  // Validate age (optional example)
  if (!age) throw new HttpError(400, "Please enter a age");
  if (age && !validator.isInt(age.toString(), { min: 13 })) {
    throw new HttpError(400, "Age must be 13");
  }

  // Validate gender (optional example)
  const validGenders = ["male", "female", "other"];
  if (gender && !validGenders.includes(gender.toLowerCase())) {
    throw new HttpError(400, "Please enter a valid gender");
  }
};

const validateProfileEditData = (req) => {
  const { photoUrl, interests } = req.body;

  const sanitizedFields = [
    "nickName",
    "bio",
    "photoUrl",
    "interests",
    "isUsernameUpdatedOnce",
  ];

  //Sanitizing the data
  Object.keys(req.body).forEach((field) => {
    if (!sanitizedFields.includes(field)) {
      throw new HttpError(400, `Invalid field: ${field}`);
    }
  });

  //Profile photo validation
  if (!validator.isURL(photoUrl)) {
    throw new HttpError(400, "Please upload a valid image");
  }

  //Interests length validation
  if (interests.length > 5) {
    throw new HttpError(400, "Only five interests can add");
  }
};

export { validateSignupData, validateProfileEditData };
