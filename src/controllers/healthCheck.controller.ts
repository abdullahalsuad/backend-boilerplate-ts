import type { Request, Response } from "express";

export const healthCheck = (_req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is working!",
    timestamp: new Date().toISOString(),
  });
};
