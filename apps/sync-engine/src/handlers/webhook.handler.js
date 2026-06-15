/**
 * GitHub Webhook Handler
 *
 * Receives incoming GitHub webhook payloads, logs them,
 * and dispatches to the appropriate event processor.
 *
 * In production, this should:
 * 1. Verify the webhook signature (X-Hub-Signature-256)
 * 2. Parse the event type from X-GitHub-Event header
 * 3. Dispatch to domain-specific handlers
 * 4. Enqueue long-running jobs to a background worker
 */

/**
 * POST /webhooks/github
 * Receives and logs GitHub webhook events.
 */
export function handleGitHubWebhook(req, res) {
  const event = req.headers['x-github-event'] || 'unknown';
  const deliveryId = req.headers['x-github-delivery'] || 'none';

  console.log(`\n  📨 Webhook received`);
  console.log(`  ├─ Event    : ${event}`);
  console.log(`  ├─ Delivery : ${deliveryId}`);
  console.log(`  └─ Payload  : ${JSON.stringify(req.body).substring(0, 200)}...`);

  // ── Event Dispatch ────────────────────────────────
  switch (event) {
    case 'push':
      console.log(`  ⤷ Push to ${req.body?.ref || 'unknown branch'}`);
      break;
    case 'pull_request':
      console.log(`  ⤷ PR #${req.body?.number} — ${req.body?.action}`);
      break;
    case 'issues':
      console.log(`  ⤷ Issue #${req.body?.issue?.number} — ${req.body?.action}`);
      break;
    case 'ping':
      console.log(`  ⤷ Ping from GitHub — webhook configured successfully`);
      break;
    default:
      console.log(`  ⤷ Unhandled event type: ${event}`);
  }

  res.status(200).json({
    received: true,
    event,
    deliveryId,
    timestamp: new Date().toISOString(),
  });
}
