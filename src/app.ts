import express from "express";
import type { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes import
import healthCheckRouter from "./routes/healthCheckRouter.router.js";

const app: Application = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(cookieParser());

// routes declaration
app.use("/api/v1/health-check", healthCheckRouter);

export default app;
