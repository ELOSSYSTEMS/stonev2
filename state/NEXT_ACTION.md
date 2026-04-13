# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-118` Author the shoppable-media overlay boundary package.

## Objective

- `Verified`: Define the smallest honest overlay-style interaction boundary for the shoppable-media family after the verified drawer proof.
- `Verified`: Keep the unit docs-only.
- `Verified`: Define exact allowed and disallowed surfaces before any future runtime overlay work is considered.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-shoppable-media-drawer-frontier-review-v1/PLAN.v1.md`

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

Stop if the boundary package starts authorizing runtime edits directly, hides modal or quick-view behavior inside vague overlay language, or cannot define an exact bounded overlay-style interaction model with explicit stop conditions. Fail closed instead of normalizing expansion.
