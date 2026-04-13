# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-105` Author the post-merchandising controlled-expansion proposal.

## Objective

- `Verified`: Formalize the next honest higher-boundary planning problem after the bounded merchandising runway.
- `Verified`: Keep the work docs-only.
- `Verified`: Do not authorize runtime implementation until a larger boundary is made explicit.

## Plan Reference

- `Path:` `workspace/plans/phase-3-post-curated-product-frontier-review-v1/PLAN.v1.md`

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

Stop if the proposal starts authorizing runtime edits directly, tries to smuggle in another small merchandising runtime slice, or weakens the earlier disallowed-scope rules. Fail closed instead of normalizing expansion.
