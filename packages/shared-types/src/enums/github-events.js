/**
 * GitHub Event Types
 *
 * Enumerates the GitHub webhook event types that the
 * Sync Engine is designed to handle.
 */

export const GitHubEventType = Object.freeze({
  PUSH: 'push',
  PULL_REQUEST: 'pull_request',
  PULL_REQUEST_REVIEW: 'pull_request_review',
  ISSUES: 'issues',
  ISSUE_COMMENT: 'issue_comment',
  CREATE: 'create', // Branch or tag created
  DELETE: 'delete', // Branch or tag deleted
  RELEASE: 'release',
  PING: 'ping',
});
