# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded PDP host/product-form runtime proof verification
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-161` passed and now admits only `UNIT-162` as verification/frontier review for the exact five-file no-JS PDP host/product-form runtime proof.

## Objective

- `Verified`: Verify that `UNIT-161` changed only the exact five approved runtime files.
- `Verified`: Verify that `project/assets/stone-runtime.js` stayed untouched.
- `Verified`: Verify that `project/snippets/stone-product-card.liquid` stayed untouched.
- `Verified`: Verify JSON validity, section schema validity, and bilingual locale parity for `sections.stone_main_product`.
- `Verified`: Verify that no AJAX cart, cart drawer, recommendation, complementary-product, subscription, pickup/inventory, search, preset, or hardening behavior was added.
- `Verified`: Decide the next honest lane without reopening PDP companion, search, cart, preset, or hardening prematurely.

## Plan Reference

- `Path:` `workspace/plans/phase-4-pdp-host-behavior-runtime-proof-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `project/templates/product.json`
- `project/sections/stone-main-product.liquid`
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

Fail closed if `UNIT-162` finds project drift outside the exact five-file PDP proof boundary, JSON or section-schema invalidity, locale parity failure, JavaScript changes, product-card snippet changes, AJAX/cart-drawer behavior, recommendation/complementary/subscription/pickup behavior, or evidence too weak to route a next unit.
