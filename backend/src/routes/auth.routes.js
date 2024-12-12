import express from "express";
import { signupHandler } from "../controllers/auth.controllers.js";

const router = express.Router();

//Routes
router.post("/signup", signupHandler);

export default router;
