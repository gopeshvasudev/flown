import jwt from "jsonwebtoken";

const createAccessToken = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "10m",
    });

    return token;
  } catch (error) {
    console.log("Access token creating error: ", error.message);
    return null;
  }
};

const createRefreshToken = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    return token;
  } catch (error) {
    console.log("Refresh token creating error: ", error.message);
    return null;
  }
};

export { createAccessToken, createRefreshToken };
