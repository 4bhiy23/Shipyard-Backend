# Sync Engine

> Core logic for two-way GitHub Synchronization

## Purpose

The Sync Engine is the **heart of Shipyard's data pipeline**. It maintains a bidirectional data flow between GitHub and Shipyard's internal state, ensuring that every code change, pull request, and issue update is accurately reflected in the platform's workflow intelligence.

## Responsibilities

- **Webhook Ingestion** — Receives and validates GitHub webhook events (push, pull_request, issues, etc.)
- **Event Processing** — Transforms raw GitHub events into Shipyard domain events
- **State Synchronization** — Updates the Engineering Workflow State Machine based on GitHub activity
- **GitHub API Adapter** — Wraps the GitHub REST/GraphQL API for outbound operations
- **Background Workers** — Processes long-running sync jobs asynchronously (planned)

## Architecture

```
src/
├── config/       # Engine-specific configuration
├── handlers/     # Webhook event handlers (one per event type)
├── services/     # Orchestration logic and state transitions
├── adapters/     # External API clients (GitHub, etc.)
├── models/       # Domain models (PR, Issue, Repository)
├── workers/      # Background job processors (planned)
└── index.js      # Application bootstrap
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/webhooks/github` | Receive GitHub webhook events |
| `GET`  | `/health` | Service liveness check |

## Running

```bash
# From workspace root
npm run dev:sync

# Or directly
node --watch apps/sync-engine/src/index.js
```

Default port: `5002` (configurable via `SYNC_PORT` env var)
