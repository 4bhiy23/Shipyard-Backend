/**
 * Global Error Handler Middleware
 *
 * Catches all unhandled errors in the Express pipeline and returns
 * a consistent JSON error response. Must be registered LAST in the
 * middleware chain (Express identifies error handlers by their 4-arg signature).
 */

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, _req, res, _next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[ERROR] ${statusCode} — ${message}`);
  if (statusCode === 500) {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    error: {
      status: statusCode,
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
}

/**
 * 404 Not Found Handler
 *
 * Catches requests that don't match any defined route.
 */
export function notFoundHandler(req, res) {
  res.status(404).json({
    error: {
      status: 404,
      message: `Route not found: ${req.method} ${req.originalUrl}`,
    },
  });
}
