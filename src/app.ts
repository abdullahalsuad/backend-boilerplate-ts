import express from "express";
import type { Application } from "express";
import cors from "cors";

// routes import
import healthCheckRouter from "./routes/healthCheckRouter.router.js";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// routes declaration
app.use("/api/v1/health-check", healthCheckRouter);

export default app;
