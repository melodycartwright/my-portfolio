import type { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";

export const sendContactEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return res
      .status(500)
      .json({
        message: "Email credentials are not set in environment variables.",
      });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: `Portfolio Contact <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    next(error);
  }
};
