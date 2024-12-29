import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cookieParser())
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  });


import userRouter from "./routes/user.routes.js"
app.use("/api/v1/users", userRouter)

export {app}