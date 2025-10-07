import { Router } from 'express';
import { sendContactEmail } from '../controllers/contactController.js';

const router = Router();

// POST /api/contact
router.post('/', sendContactEmail);

export default router;
