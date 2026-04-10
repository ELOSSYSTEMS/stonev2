# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: phase-2-next-runtime-slice-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-009` Author one bounded planning unit for the next Phase 2 runtime slice after minimal section runtime substrate verification.

## Objective

- `Verified`: Define the next smallest useful Phase 2 runtime slice after the verified minimal section runtime substrate without editing `project/` runtime files or broadening into unplanned storefront work.

## Plan Reference

- `Not required`: this unit should author the next bounded plan package.

## Allowed Files Or Surfaces

- `workspace/plans/`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if planning requires edits under `project/`, if the proposed unit broadens beyond one bounded Phase 2 slice, or if the plan starts authorizing homepage, preset, collection, PDP, blog or editorial, merchandising, or polished storefront implementation without a separately bounded package.
