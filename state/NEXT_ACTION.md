# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-015` Author one bounded planning unit for the next Phase 2 runtime slice after verified utility layout composition.

## Objective

- `Verified`: Define the next smallest useful Phase 2 runtime slice after the verified utility-only two-region composition proof without touching `project/` runtime files in this unit.
- `Verified`: Keep `UNIT-015` limited to `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md` only.

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

Stop if the planning unit needs any `project/` runtime edit, any protected-surface edit, or any file outside `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`; stop if the next slice cannot be expressed as one bounded runtime unit and replan instead of broadening scope.
