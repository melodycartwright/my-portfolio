import { Router } from "express";
import { sendContactEmail } from "../controllers/contactController.js";
import { validateContact } from "../middleware/validateContact.js";

const router = Router();

// POST /api/contact with validation
router.post("/", validateContact, sendContactEmail);

export default router;
