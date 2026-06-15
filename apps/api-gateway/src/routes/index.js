/**
 * Route Registry
 *
 * Central hub that mounts all route modules onto the Express app.
 * Each domain gets its own route file to keep things modular.
 */

import { Router } from 'express';
import healthRoutes from './health.routes.js';

const router = Router();

// ── Health ────────────────────────────────────────────
router.use('/health', healthRoutes);

// ── Future Routes ────────────────────────────────────
// router.use('/auth',      authRoutes);
// router.use('/orgs',      orgRoutes);
// router.use('/workflows', workflowRoutes);
// router.use('/engineers', engineerRoutes);

export default router;
