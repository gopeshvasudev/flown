import express from "express";
import { signupHandler } from "../controllers/auth.controllers.js";
import HttpError from "../utils/errorClass.js";

const router = express.Router();

//Routes
router.post("/signup", signupHandler);

export default router;
