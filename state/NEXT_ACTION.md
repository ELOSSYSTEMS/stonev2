# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded collection host/product-grid runtime proof verification
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-157` passed and now admits only `UNIT-158` as verification/frontier review for the exact five-file no-JS collection host/product-grid runtime proof.

## Objective

- `Verified`: Verify that `UNIT-157` changed only the exact five approved runtime files.
- `Verified`: Verify that `project/assets/stone-runtime.js` stayed untouched.
- `Verified`: Verify that `project/snippets/stone-product-card.liquid` stayed untouched.
- `Verified`: Verify JSON validity and bilingual locale parity for `sections.stone_main_collection`.
- `Verified`: Verify that no product, blog, article, search, list-collections, or cart template was added.
- `Verified`: Decide the next honest lane without reopening PDP/search/cart/preset/hardening domains prematurely.

## Plan Reference

- `Path:` `workspace/plans/phase-4-collection-host-product-grid-runtime-proof-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `project/templates/collection.json`
- `project/sections/stone-main-collection.liquid`
- `project/assets/stone-base.css`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
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

Fail closed if `UNIT-158` finds project drift outside the exact five-file collection proof boundary, JSON invalidity, locale parity failure, JavaScript changes, product-card snippet changes, added blocked canonical host templates, collection companion drift, archive controls beyond native pagination/sort, or evidence too weak to route a next unit.
