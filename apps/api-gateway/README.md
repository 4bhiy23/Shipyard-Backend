# API Gateway

> Centralized communication hub for the Shipyard platform

## Purpose

The API Gateway serves as the **single entry point** for all client-facing HTTP requests. It is responsible for:

- **Authentication & Authorization** — Validating JWT tokens and enforcing role-based access control (RBAC) for Org Admins, Managers, and Engineers.
- **Request Routing** — Directing incoming requests to the appropriate internal service handlers.
- **Rate Limiting** — Protecting downstream services from abuse.
- **Request Validation** — Ensuring incoming payloads conform to expected schemas before processing.
- **Error Handling** — Providing consistent, structured error responses.
- **CORS Management** — Configuring cross-origin policies for the web dashboard.

## Architecture (Clean Layers)

```
src/
├── config/          # Environment variables, app settings
├── controllers/     # Thin HTTP handlers — extract request, call service, send response
├── middleware/       # Cross-cutting concerns (auth, logging, errors)
├── routes/          # Express Router definitions — maps URLs to controllers
├── services/        # Business logic and domain use cases
├── models/          # Data entities and database schemas (planned)
├── validators/      # Input validation schemas (planned)
└── index.js         # Application bootstrap
```

## Endpoints

| Method | Path                   | Description                          |
| ------ | ---------------------- | ------------------------------------ |
| `GET`  | `/api/health`          | Service health check                 |
| `GET`  | `/api/health/detailed` | Detailed health with uptime & memory |

## Running

```bash
# From workspace root
npm run dev:gateway

# Or directly
node --watch apps/api-gateway/src/index.js
```

Default port: `5001` (configurable via `PORT` env var)
