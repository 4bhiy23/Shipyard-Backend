/**
 * Health Controller
 *
 * Thin handler layer — extracts request data, delegates to service logic,
 * and formats the HTTP response. Controllers should contain NO business logic.
 */

/**
 * GET /api/health
 * Basic liveness probe.
 */

import type { Request, Response } from 'express';

export function getHealth(_req: Request, res: Response) {
  res.status(200).json({
    status: 'healthy',
    service: 'api-gateway',
    timestamp: new Date().toISOString(),
  });
}

/**
 * GET /api/health/detailed
 * Detailed readiness check with uptime and memory usage.
 */
export function getHealthDetailed(_req: Request, res: Response) {
  const memoryUsage = process.memoryUsage();

  res.status(200).json({
    status: 'healthy',
    service: 'api-gateway',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    memory: {
      heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`,
      heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`,
      rss: `${Math.round(memoryUsage.rss / 1024 / 1024)}MB`,
    },
    version: process.env.npm_package_version || '0.1.0',
  });
}
