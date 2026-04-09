# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: architecture-canon
- `Verified`: Priority: high

## Approved Unit

- `UNIT-002` Create the phase-1 canon pack for section families, settings taxonomy, and bilingual schema strategy.

## Objective

- `Verified`: Derive the next governed architecture artifacts from the five canonical docs before runtime implementation expands.

## Plan Reference

- `Not required`: This is a bounded documentation-first canon unit and may create its governed plan package as part of execution.

## Allowed Files Or Surfaces

- `workspace/specs/`
- `workspace/plans/`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`

## Stop Condition

Stop if the unit expands into Shopify runtime implementation, requires uncanonized locale or schema execution details, or needs surfaces outside the allowed list.
