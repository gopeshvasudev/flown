import express from "express";

import { authenticateUser } from "../middlewares/auth.middlewares.js";
import {
  getSendedConnectionRequestsHandler,
  sendConnectionRequestHandler,
  sendConnectionResponseHandler,
} from "../controllers/connection.controllers.js";

const router = express.Router();

//Send connection request route
router.post("/send", authenticateUser, sendConnectionRequestHandler);

//Get sent and received letters
router.get(
  "/:requestType",
  authenticateUser,
  getSendedConnectionRequestsHandler
);

//Send connection response
router.post(
  "/:requestType/:requestId",
  authenticateUser,
  sendConnectionResponseHandler
);

export default router;
