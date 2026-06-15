/**
 * Application Configuration
 *
 * Centralizes all environment-driven configuration.
 * In production, these values should come from environment variables.
 */

const config = {
  port: process.env.PORT || 5001,
  env: process.env.NODE_ENV || 'development',

  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  },

  // Future: Database, Redis, JWT secrets, GitHub OAuth, etc.
  // db: { host: process.env.DB_HOST, ... },
  // github: { clientId: process.env.GITHUB_CLIENT_ID, ... },
};

export default config;
