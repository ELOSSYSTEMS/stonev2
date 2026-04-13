# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-114` Author the shoppable-media drawer boundary package.

## Objective

- `Verified`: Define the smallest honest drawer-style interaction boundary for the shoppable-media family after the verified focus proof.
- `Verified`: Keep the unit docs-only.
- `Verified`: Define exact allowed and disallowed surfaces before any future runtime drawer work is considered.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-shoppable-media-focus-frontier-review-v1/PLAN.v1.md`

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

Stop if the boundary package starts authorizing runtime edits directly, hides global overlay behavior inside vague drawer language, or cannot define an exact bounded drawer-style interaction model with explicit stop conditions. Fail closed instead of normalizing expansion.
