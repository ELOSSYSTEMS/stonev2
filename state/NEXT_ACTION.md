# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-runtime-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-018` Author one bounded planning unit for the next Phase 2 runtime slice after verified utility action group completion.

## Objective

- `Verified`: Define the next smallest useful runtime slice after the verified utility action group proof without broadening into homepage, preset, collection, PDP, blog, hero, story, trust, or merchandising work.
- `Verified`: Keep `UNIT-018` documentation-only and limited to planning artifacts, state updates, and handoff updates only.

## Plan Reference

- `Path:` `workspace/plans/`

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

Stop if planning requires runtime edits under `project/`, protected-surface changes, multiple future slices, preset wiring, page-composition work, or any broadening beyond one bounded next-unit package; replan instead of expanding scope.
