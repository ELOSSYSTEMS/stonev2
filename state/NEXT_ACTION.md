# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-122` Author the shoppable-media motion boundary package.

## Objective

- `Verified`: Define the smallest honest motion-aware or video-aware boundary for the shoppable-media family after the verified overlay proof.
- `Verified`: Keep the unit docs-only.
- `Verified`: Define exact allowed and disallowed surfaces before any future runtime motion work is considered.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-shoppable-media-overlay-frontier-review-v1/PLAN.v1.md`

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

Stop if the boundary package starts authorizing runtime edits directly, hides autoplay or broader media-runtime behavior inside vague motion language, or cannot define an exact bounded motion-aware interaction model with explicit stop conditions. Fail closed instead of normalizing expansion.
