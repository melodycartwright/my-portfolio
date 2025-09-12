import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pino from 'pino';
import pinoHttp from 'pino-http';
import contactRouter from './routes/contact.routes.js';

const app = express();

//basic security +parsers
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

//logging
const logger = pino({transport: { target: 'pino-pretty' }});
app.use(pinoHttp({ logger }));

//CORS: lock to frontend (env)
const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';
app.use(cors({ origin: FRONTEND_URL }));

//routes
app.use('/api/contact', contactRouter);

export default app;

