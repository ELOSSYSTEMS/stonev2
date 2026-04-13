# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-106` Author the shoppable-media controlled boundary package.

## Objective

- `Verified`: Formalize the next honest higher-boundary planning problem for Stone V2 shoppable media.
- `Verified`: Keep the work docs-only.
- `Verified`: Do not authorize runtime implementation until exact allowed and disallowed surfaces are explicit.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-merchandising-controlled-expansion-proposal-v1/PLAN.v1.md`

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

Stop if the boundary package starts authorizing runtime edits directly, assumes JS or protected-surface access without making them explicit boundary questions, or tries to reopen small merchandising runtime slices. Fail closed instead of normalizing expansion.
