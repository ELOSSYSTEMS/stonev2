# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only section/block stabilization frontier
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-172` passed by recording the owner decision, and now admits only `UNIT-173` as docs-only section/block stabilization frontier authoring.

## Objective

- `Verified`: Audit and classify the existing section/block surface before adding preset-specific composition.
- `Verified`: Define a stabilization frontier for PDP preset differences such as apparel size chart and electronics spec sheet without implementing those sections yet.
- `Verified`: Define a stabilization frontier for collection preset differences such as filters and collection controls without implementing those controls yet.
- `Verified`: Keep runtime edits blocked from this docs-only unit.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-section-block-stabilization-frontier-v1/`
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

Fail closed if `UNIT-173` attempts runtime edits, assigns final preset content, builds size chart/spec sheet/filter UI directly, creates per-preset architecture, reopens cart/checkout/billing-sensitive behavior, or skips the section/block stabilization inventory.
