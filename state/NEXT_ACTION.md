# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-117` Author the post-shoppable-media-drawer frontier review.

## Objective

- `Verified`: Re-evaluate the shoppable-media family after the verified first drawer-style proof.
- `Verified`: Decide whether the next honest move is another bounded shoppable-media expansion, a pause, or a shift to a different governed planning problem.
- `Verified`: Keep this next unit docs-only and fail closed on runtime widening.

## Plan Reference

- `Path:` `workspace/plans/phase-3-shoppable-media-drawer-boundary-v1/PLAN.v1.md`

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

Stop if the frontier review needs runtime edits, JS authorization beyond the bounded section-scoped drawer model, protected-surface authorization, or any attempt to authorize a new slice without a precise distinctness case, explicit surface rules, and exact stop conditions. Fail closed instead of normalizing expansion.
