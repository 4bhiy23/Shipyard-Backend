# Shared Types

> Common domain definitions shared across all Shipyard services

## Purpose

This package serves as the **single source of truth** for domain concepts that cross service boundaries. By centralizing these definitions, we ensure consistency between the API Gateway, Sync Engine, and any future services.

## Contents

### Enums

| Enum | Description |
|------|-------------|
| `WorkflowState` | Engineering workflow lifecycle states (Backlog → In Progress → Review → Merged → Released) |
| `UserRole` | Platform roles (Org Admin, Manager, Engineer) |
| `GitHubEventType` | Supported GitHub webhook event types |

### Interfaces (Planned)

Type contracts for domain entities shared between services.

## Usage

```javascript
import { WorkflowState, UserRole } from '@shipyard/shared-types';
import { GitHubEventType } from '@shipyard/shared-types/enums';
```
