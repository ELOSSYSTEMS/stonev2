# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only PDP capability boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-173` passed by authoring the section/block stabilization frontier, and now admits only `UNIT-174` as docs-only PDP capability boundary authoring.

## Objective

- `Verified`: Decide the shared PDP capability model before any preset-specific PDP composition.
- `Verified`: Decide whether apparel size chart and electronics spec sheet require dedicated shared sections, reuse existing utility/trust sections, or remain blocked.
- `Verified`: Define which PDP capabilities are common, preset-selective, or blocked.
- `Verified`: Keep runtime edits blocked from this docs-only unit.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-section-block-stabilization-frontier-v1/`
- `workspace/plans/phase-4-pdp-capability-boundary-v1/`
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

Fail closed if `UNIT-174` attempts runtime edits, assigns final preset content, builds size chart/spec sheet UI directly, creates per-preset architecture, reopens cart/checkout/billing-sensitive behavior, or jumps to collection filters before the PDP capability boundary is complete.
