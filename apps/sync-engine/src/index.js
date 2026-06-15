/**
 * Shipyard Sync Engine — Entry Point
 *
 * Bootstraps the webhook receiver server that listens for
 * GitHub events and processes them into Shipyard domain events.
 */

import express from 'express';
import { handleGitHubWebhook } from './handlers/webhook.handler.js';

const app = express();
const PORT = process.env.SYNC_PORT || 5002;

// ── Body Parsing ──────────────────────────────────────
// Raw body needed for webhook signature verification
app.use(express.json({ limit: '5mb' }));

// ── Health Check ──────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: 'sync-engine',
    timestamp: new Date().toISOString(),
  });
});

// ── Webhook Receiver ──────────────────────────────────
app.post('/webhooks/github', handleGitHubWebhook);

// ── Start Server ──────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  🔄 Shipyard Sync Engine`);
  console.log(`  ├─ Port    : ${PORT}`);
  console.log(`  └─ Webhook : http://localhost:${PORT}/webhooks/github\n`);
});

export default app;
