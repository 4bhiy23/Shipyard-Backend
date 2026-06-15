# Shipyard — Backend Services

> Engineering Operations & Intelligence Platform — Server-Side Infrastructure

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Architecture

Shipyard's backend follows **Domain-Driven Design (DDD)** with a clean separation of concerns across two micro-services and a shared types package.

```
Shipyard-Backend/
├── apps/
│   ├── api-gateway/       → Centralized HTTP API, Auth & Routing
│   └── sync-engine/       → Two-way GitHub Synchronization
├── packages/
│   └── shared-types/      → Common domain enums, interfaces & contracts
├── infra/                 → Docker, CI/CD, and IaC configs
└── scripts/               → Database migrations & seed utilities
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js 20+ |
| Framework | Express 5 |
| Language | JavaScript (ES2022+) |
| Auth | JWT + GitHub OAuth (planned) |
| Database | PostgreSQL (planned) |
| Containerization | Docker |
| CI/CD | GitHub Actions |

## Quick Start

```bash
# Install all workspace dependencies
npm install

# Start the API Gateway (default: http://localhost:5001)
npm run dev:gateway

# Start the Sync Engine (default: http://localhost:5002)
npm run dev:sync
```

## Services

### API Gateway (`apps/api-gateway`)
The centralized entry point for all client-facing requests. Handles authentication, authorization, request validation, rate limiting, and routes requests to appropriate service handlers.

### Sync Engine (`apps/sync-engine`)
The core synchronization service that maintains a two-way data flow with GitHub. Receives webhooks, processes repository events, and maps them to Shipyard's internal workflow state machine.

### Shared Types (`packages/shared-types`)
Common domain definitions shared across services — workflow state enums, role definitions, and interface contracts that ensure type safety across service boundaries.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

MIT © Shipyard Contributors
