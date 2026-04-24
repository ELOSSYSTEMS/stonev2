# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: PDP capability proof verification
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-176` passed by implementing the exact five-file no-JS PDP capability proof, and now admits only `UNIT-177` as verification/frontier review.

## Objective

- `Verified`: Verify that `UNIT-176` changed only the exact five approved runtime files.
- `Verified`: Confirm locale JSON validity, section schema validity, and PDP capability locale parity.
- `Verified`: Confirm no product template, other template, snippet, JavaScript, or `stone-main-product` drift.
- `Verified`: Decide the next honest lane without assigning final preset composition.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `project/sections/stone-pdp-size-chart.liquid`
- `project/sections/stone-pdp-spec-sheet.liquid`
- `project/assets/stone-base.css`
- `project/locales/en.schema.json`
- `project/locales/he.default.schema.json`
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

Fail closed if `UNIT-177` finds product template, other template, snippet, JavaScript, `stone-main-product`, final preset assignment, collection filter, cart/checkout/billing-sensitive behavior, recommendation, hardening, or unapproved runtime-file drift.
