import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./config/database.connection.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/v1/auth", authRouter);

//Starting the server and connecting to DB
connectToDatabase();
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
