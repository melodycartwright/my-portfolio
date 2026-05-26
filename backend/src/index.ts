import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import contactRouter from "./routes/contact.js";

const app = express();

app.use(helmet());
const allowedOrigins = [
  "https://melodycartwright.netlify.app",
  "http://localhost:5173",
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Contact form route
app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
