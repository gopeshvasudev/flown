import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./config/database.connection.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connectToDatabase();

//Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from flown");
});

//Routes
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
