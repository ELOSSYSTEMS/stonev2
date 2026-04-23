# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded collection host/product-grid runtime proof implementation
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-156` passed and now admits only `UNIT-157` as the exact five-file no-JS collection host/product-grid runtime proof.

## Objective

- `Verified`: Execute `UNIT-157` only inside the exact runtime boundary from `workspace/plans/phase-4-collection-host-product-grid-runtime-proof-v1/HANDOFF.v1.md`.
- `Verified`: Add one canonical collection host template and one native collection main section.
- `Verified`: Render native collection title, description, product count, product grid through existing `stone-product-card`, empty state, native pagination, and optional no-JS sort.
- `Verified`: Keep `project/assets/stone-runtime.js` untouched.
- `Verified`: Keep `project/snippets/stone-product-card.liquid` untouched.
- `Verified`: Keep collection companion, archive controls beyond native pagination/sort, banner/explainer/editorial drift, PDP, search, cart, preset realization, and hardening out of scope.

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

Fail closed if `UNIT-157` needs files outside the exact five-file runtime boundary, edits JavaScript, edits `stone-product-card`, adds product/blog/article/search/list-collections/cart templates, implements collection companion behavior, implements archive controls beyond native pagination/sort, or admits PDP/search/cart/preset/hardening domains.
