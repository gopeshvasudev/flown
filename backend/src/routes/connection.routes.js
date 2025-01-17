import express from "express";

import { authenticateUser } from "../middlewares/auth.middlewares.js";
import {
  getSendedConnectionRequestsHandler,
  sendConnectionRequestHandler,
} from "../controllers/connection.controllers.js";

const router = express.Router();

//Send connection request route
router
  .route("/send")
  .post(authenticateUser, sendConnectionRequestHandler)
  .get(authenticateUser, getSendedConnectionRequestsHandler);

export default router;
