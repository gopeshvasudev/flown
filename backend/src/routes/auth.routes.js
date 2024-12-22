import express from "express";
import {
  logoutHandler,
  refreshTokenHandler,
  signinHandler,
  signupHandler,
} from "../controllers/auth.controllers.js";
import { authenticateUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

//Signup route
router.post("/signup", signupHandler);

//Signin route
router.post("/signin", signinHandler);

router.post("/refresh-token", refreshTokenHandler);

router.post("/logout", authenticateUser, logoutHandler);

export default router;
