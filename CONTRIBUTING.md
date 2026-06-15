# Contributing to Shipyard Backend

Thank you for your interest in contributing to Shipyard! This document provides guidelines and information for contributors.

## Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
3. **Install** dependencies: `npm install`
4. **Create a branch** for your feature: `git checkout -b feat/your-feature-name`

## Development Workflow

```bash
# Start the API Gateway in watch mode
npm run dev:gateway

# Start the Sync Engine in watch mode
npm run dev:sync

# Run linting
npm run lint

# Format code
npm run format
```

## Branch Naming Convention

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feat/` | New feature | `feat/github-webhook-receiver` |
| `fix/` | Bug fix | `fix/auth-token-expiry` |
| `docs/` | Documentation | `docs/api-gateway-readme` |
| `refactor/` | Code refactoring | `refactor/middleware-chain` |
| `test/` | Adding tests | `test/health-endpoint` |
| `chore/` | Tooling/config | `chore/eslint-config` |

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short summary>

<optional body>
```

**Examples:**
- `feat(gateway): add health check endpoint`
- `fix(sync): handle webhook signature verification`
- `docs(readme): update quick start guide`

## Code Style

- **Linting**: ESLint with the project's configuration
- **Formatting**: Prettier with the project's configuration
- **Naming**: camelCase for variables/functions, PascalCase for classes, kebab-case for files

## Pull Request Process

1. Ensure your code passes all lint checks: `npm run lint`
2. Ensure code is properly formatted: `npm run format:check`
3. Update relevant `README.md` files if you've changed functionality
4. Fill out the PR template completely
5. Request review from at least one maintainer

## Project Structure

Each service follows a consistent internal structure:

```
src/
├── config/         # Environment and app configuration
├── controllers/    # HTTP request handlers (thin layer)
├── middleware/     # Express middleware (auth, logging, errors)
├── routes/         # Route definitions
├── services/       # Business logic and domain operations
├── models/         # Data models and entities
└── index.js        # Application entry point
```

## Questions?

Open a GitHub Issue with the `question` label and we'll get back to you.
