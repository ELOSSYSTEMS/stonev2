# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-125` Author the post-shoppable-media-motion-story frontier review.

## Objective

- `Verified`: Record the honest post-verification verdict for the first motion-aware shoppable-media proof.
- `Verified`: Determine whether the motion-story lane is locally exhausted or whether another bounded step is justified.
- `Verified`: Keep the next approved action docs-only until a new boundary is explicitly authorized by evidence.

## Plan Reference

- `Path:` `workspace/plans/phase-3-shoppable-media-motion-boundary-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `workspace/plans/`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Fail closed if the frontier review attempts to approve new runtime work without a fresh bounded distinctness case, or if it normalizes broader motion-system scope beyond the verified motion-story proof.
