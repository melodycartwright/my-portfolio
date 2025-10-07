import type { Request, Response, NextFunction } from "express";
import { Resend } from "resend";

export const sendContactEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Contact API hit", req.body);
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
  const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL || RESEND_FROM_EMAIL;

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
    return res.status(500).json({
      message: "Resend credentials are not set in environment variables.",
    });
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { name, email, message } = req.body;
    const mailData = {
      from: RESEND_FROM_EMAIL,
      to: RESEND_TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    await resend.emails.send(mailData);
    console.log("Mail sent!");
    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Mail send error:", error);
    next(error);
  }
};
