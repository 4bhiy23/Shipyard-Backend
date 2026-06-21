/**
 * Application Configuration
 *
 * Centralizes all environment-driven configuration.
 * In production, these values should come from environment variables.
 */

import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 5001,
  env: process.env.NODE_ENV || 'development',

  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  },

  database_url: process.env.DATABASE_URL,

  better_auth: {
    secret: process.env.BETTER_AUTH_SECRET || 'default_secret',
    url: process.env.BETTER_AUTH_URL || 'http://localhost:5001',
  },

  // Future: Database, Redis, JWT secrets, GitHub OAuth, etc.
  // db: { host: process.env.DB_HOST, ... },
  // github: { clientId: process.env.GITHUB_CLIENT_ID, ... },
};

export default config;
