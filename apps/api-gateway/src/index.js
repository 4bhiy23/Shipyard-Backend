/**
 * Shipyard API Gateway — Entry Point
 *
 * Bootstraps the Express application with security middleware,
 * CORS, request logging, route mounting, and error handling.
 */

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import config from './config/index.js';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();

// ── Security ──────────────────────────────────────────
app.use(helmet());

// ── CORS ──────────────────────────────────────────────
app.use(cors(config.cors));

// ── Body Parsing ──────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ── Request Logging ───────────────────────────────────
app.use(morgan(config.env === 'production' ? 'combined' : 'dev'));

// ── Routes ────────────────────────────────────────────
app.use('/api', routes);

// ── Root ──────────────────────────────────────────────
app.get('/', (_req, res) => {
  res.json({
    name: 'Shipyard API Gateway',
    version: '0.1.0',
    docs: '/api/health',
  });
});

// ── Error Handling (must be last) ─────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

// ── Start Server ──────────────────────────────────────
app.listen(config.port, () => {
  console.log(`\n  ⚓ Shipyard API Gateway`);
  console.log(`  ├─ Environment : ${config.env}`);
  console.log(`  ├─ Port        : ${config.port}`);
  console.log(`  └─ URL         : http://localhost:${config.port}\n`);
});

export default app;
