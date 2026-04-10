# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-012` Author one bounded planning unit for the next Phase 2 runtime slice after utility block stack verification.

## Objective

- `Verified`: Define the next smallest useful Phase 2 runtime slice after the verified minimal utility block stack without touching `project/` runtime files in this unit.
- `Verified`: Keep `UNIT-012` limited to planning, state, and handoff surfaces only.

## Plan Reference

- `Not required`: this next unit is itself the planning step.

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

Stop if planning requires runtime edits, protected-surface changes, broader runtime implementation, more than one bounded next runtime slice, or any expansion beyond `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`; record the issue precisely and replan instead of broadening scope.
