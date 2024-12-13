import express from "express";
import {
  refreshTokenHandler,
  signinHandler,
  signupHandler,
} from "../controllers/auth.controllers.js";

const router = express.Router();

//Signup route
router.post("/signup", signupHandler);

//Signin route
router.post("/signin", signinHandler);

router.post("/refresh-token", refreshTokenHandler);

export default router;
