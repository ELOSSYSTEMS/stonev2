# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: runtime PDP capability proof
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-175` passed by authoring the PDP capability runtime boundary, and now admits only `UNIT-176` as exact five-file no-JS PDP capability proof.

## Objective

- `Verified`: Implement one shared optional PDP size chart section.
- `Verified`: Implement one shared optional PDP spec sheet section.
- `Verified`: Add neutral CSS and bilingual schema labels.
- `Verified`: Keep product template mutation, final preset assignment, collection filters, cart/checkout behavior, recommendations, JavaScript, and hardening out of scope.

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

Fail closed if `UNIT-176` changes product templates, other templates, snippets, JavaScript, `stone-main-product`, final preset assignment, collection filters, cart/checkout/billing-sensitive behavior, recommendations, hardening, or any runtime file outside the exact five-file boundary.
