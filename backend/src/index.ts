import dotenv from "dotenv";
dotenv.config();

import express from "express";

import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
// import mongoSanitize from "express-mongo-sanitize";
// import xss from "xss-clean";
//import mongoose from "mongoose";
import contactRouter from "./routes/contact.js";
import { validateContact } from "./middleware/validateContact.js";

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
// app.use(mongoSanitize());
// app.use(xss());

//mongoose
//   .connect(process.env.MONGO_URI || "", { dbName: "portfolio" })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// Contact form route
app.use("/api/contact", validateContact, contactRouter);

// TODO: Add routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
