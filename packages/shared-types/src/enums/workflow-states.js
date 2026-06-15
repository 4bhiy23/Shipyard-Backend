/**
 * Workflow States
 *
 * Defines the Engineering Workflow State Machine.
 * These states represent the lifecycle of a work item from
 * creation through deployment, driven by GitHub activity.
 *
 * State Transitions:
 *   BACKLOG → IN_PROGRESS (branch created / first commit)
 *   IN_PROGRESS → IN_REVIEW (pull request opened)
 *   IN_REVIEW → CHANGES_REQUESTED (review: changes requested)
 *   CHANGES_REQUESTED → IN_REVIEW (new commits pushed)
 *   IN_REVIEW → APPROVED (review: approved)
 *   APPROVED → MERGED (pull request merged)
 *   MERGED → RELEASED (tagged release / deployment)
 */

export const WorkflowState = Object.freeze({
  BACKLOG: 'backlog',
  IN_PROGRESS: 'in_progress',
  IN_REVIEW: 'in_review',
  CHANGES_REQUESTED: 'changes_requested',
  APPROVED: 'approved',
  MERGED: 'merged',
  RELEASED: 'released',
});

/**
 * Returns true if a transition from `from` to `to` is valid.
 */
export function isValidTransition(from, to) {
  const transitions = {
    [WorkflowState.BACKLOG]: [WorkflowState.IN_PROGRESS],
    [WorkflowState.IN_PROGRESS]: [WorkflowState.IN_REVIEW],
    [WorkflowState.IN_REVIEW]: [WorkflowState.CHANGES_REQUESTED, WorkflowState.APPROVED],
    [WorkflowState.CHANGES_REQUESTED]: [WorkflowState.IN_REVIEW],
    [WorkflowState.APPROVED]: [WorkflowState.MERGED],
    [WorkflowState.MERGED]: [WorkflowState.RELEASED],
  };

  return transitions[from]?.includes(to) ?? false;
}
