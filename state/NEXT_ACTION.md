# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-110` Author the shoppable-media interaction boundary package.

## Objective

- `Verified`: Formalize the smallest honest interaction-aware boundary for future shoppable-media work.
- `Verified`: Keep the work docs-only.
- `Verified`: Do not authorize runtime implementation until explicit interaction rules and exact surfaces are defined.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-shoppable-media-story-frontier-review-v1/PLAN.v1.md`

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

Stop if the boundary package starts authorizing runtime edits directly, hides JS or protected-surface exceptions inside vague wording, or tries to force another non-JS shoppable-media runtime slice. Fail closed instead of normalizing expansion.
