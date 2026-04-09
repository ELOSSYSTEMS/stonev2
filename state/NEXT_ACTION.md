# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: runtime-foundation-planning
- `Verified`: Priority: high

## Approved Unit

- `UNIT-003` Create the bounded Phase 2 minimal runtime foundation plan package.

## Objective

- `Verified`: Derive a documentation-only plan for the minimal Shopify runtime foundation from the completed canon artifacts before any runtime implementation begins.

## Plan Reference

- `Not required`: This unit creates the governed plan package itself.

## Allowed Files Or Surfaces

- `workspace/plans/`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`

## Stop Condition

Stop if the unit expands into runtime implementation under `project/`, requires new canon artifacts outside the bounded planning scope, or needs surfaces outside the allowed list.
