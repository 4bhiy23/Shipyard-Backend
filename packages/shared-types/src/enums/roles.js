/**
 * User Roles
 *
 * Defines the role-based access control (RBAC) hierarchy
 * for the Shipyard platform as specified in the PRD.
 *
 * Hierarchy:
 *   ORG_ADMIN > MANAGER > ENGINEER
 *
 * Org Admins:  Full platform access, user management, org settings
 * Managers:    Team oversight, workflow configuration, reporting
 * Engineers:   Personal dashboard, task management, PR workflows
 */

export const UserRole = Object.freeze({
  ORG_ADMIN: 'org_admin',
  MANAGER: 'manager',
  ENGINEER: 'engineer',
});

/**
 * Role hierarchy level — higher number = more permissions.
 */
export const RoleLevel = Object.freeze({
  [UserRole.ENGINEER]: 1,
  [UserRole.MANAGER]: 2,
  [UserRole.ORG_ADMIN]: 3,
});

/**
 * Check if a role has at least the required permission level.
 * @param {string} userRole - The user's current role
 * @param {string} requiredRole - The minimum required role
 * @returns {boolean}
 */
export function hasPermission(userRole, requiredRole) {
  return (RoleLevel[userRole] || 0) >= (RoleLevel[requiredRole] || 0);
}
