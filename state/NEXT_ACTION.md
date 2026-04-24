# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: blocked owner-input unit
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-183` passed by authoring the preset assignment decision package, and now admits only `UNIT-184` as a blocked owner-input unit; no runtime work is approved.

## Objective

- `Verified`: Stop autonomous work until owner inputs are supplied or the hard block is explicitly overridden.
- `Verified`: Missing inputs are exact template mutation policy, exact per-preset PDP and collection section order/settings, starter content defaults, collection filter defaults, and global preset selector runtime behavior.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-collection-filter-runtime-boundary-v1/`
- `workspace/plans/phase-4-preset-capability-composition-boundary-v1/`
- `workspace/plans/phase-4-preset-assignment-decision-v1/`
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

Fail closed unless the owner supplies the missing runtime composition inputs or explicitly overrides this hard block.
