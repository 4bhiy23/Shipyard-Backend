/**
 * Shared Types — Package Entry Point
 *
 * Re-exports all shared domain definitions for convenient importing.
 */

export {
  WorkflowState,
  isValidTransition,
  UserRole,
  RoleLevel,
  hasPermission,
  GitHubEventType,
} from './enums/index.js';
