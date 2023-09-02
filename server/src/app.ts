import express from "express";
import connectDB from "./config/Database/connection";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const app = express();
const port = 3001;

import userRouter from "./routes/user";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());


app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
app.use("/api", userRouter);

connectDB();
