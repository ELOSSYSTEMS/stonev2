# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded no-JS PDP host/product-form runtime proof
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-160` passed and now admits only `UNIT-161` as the exact five-file no-JS PDP host/product-form runtime proof.

## Objective

- `Verified`: Implement one canonical `product.json` host and one main PDP section.
- `Verified`: Keep the implementation inside the exact five approved runtime files.
- `Verified`: Include product title, vendor/type metadata, static media display, current variant price, product description, native variant selection when needed, local quantity input, unavailable/sold-out messaging, and one standard no-JS Shopify product form.
- `Verified`: Keep JavaScript, AJAX cart, cart drawer behavior, product-card snippet edits, PDP companion sections, recommendations, complementary products, subscriptions, pickup/inventory complexity, search, preset realization, and hardening blocked.

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

Fail closed if `UNIT-161` changes any project file outside the exact five-file PDP proof boundary, adds JavaScript, edits `project/snippets/stone-product-card.liquid`, adds AJAX cart or cart drawer behavior, adds recommendation/complementary/subscription/pickup behavior, cannot preserve JSON validity and bilingual locale parity, or weakens the no-JS product-form boundary.
