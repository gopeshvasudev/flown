import express from "express";

import { authenticateUser } from "../middlewares/auth.middlewares.js";
import {
  getSendedConnectionRequestsHandler,
  sendConnectionRequestHandler,
} from "../controllers/connection.controllers.js";

const router = express.Router();

//Send connection request route
router.post("/send", authenticateUser, sendConnectionRequestHandler);

router.get(
  "/:requestType",
  authenticateUser,
  getSendedConnectionRequestsHandler
);

export default router;
