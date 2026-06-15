# Infrastructure

> Containerization, CI/CD, and Infrastructure-as-Code configurations

## Contents

| Directory | Purpose |
|-----------|---------|
| `docker/` | Dockerfiles for each service |
| `ci/` | GitHub Actions workflow definitions |
| `terraform/` | Infrastructure-as-Code (future) |

## Docker

Each service has its own Dockerfile following a multi-stage build pattern for optimized production images.

## CI/CD

GitHub Actions workflows handle:
- Linting and formatting checks on PRs
- Automated testing
- Docker image builds
- Deployment to staging/production (planned)
