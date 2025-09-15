import express from "express";
import type { Router } from "express";

import { healthCheck } from "../controllers/healthCheck.controller.js";

const router: Router = express.Router();
router.get("/", healthCheck);

export default router;
