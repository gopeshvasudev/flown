import express from "express";
import {
  signinHandler,
  signupHandler,
} from "../controllers/auth.controllers.js";
import HttpError from "../utils/errorClass.js";

const router = express.Router();

//Signup route
router.post("/signup", signupHandler);

//Signin route
router.post("/signin", signinHandler);

export default router;
