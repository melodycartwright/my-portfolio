import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

// Define Zod schema for contact form
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

// Middleware to validate request body
export function validateContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten().fieldErrors });
  }
  next();
}
