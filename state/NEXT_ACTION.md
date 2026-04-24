# NEXT_ACTION

## Status

- `Verified`: Approval State: CONDITIONALLY_APPROVED
- `Verified`: Execution Class: bounded runtime implementation only after explicit owner authorization
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-021` is conditionally approved only as cart route host runtime, after explicit owner authorization.

## Objective

- `Verified`: Preserve `UNIT-SA-020` as complete for docs-only cart route host boundary authoring.
- `Verified`: Execute only the display-only cart route host candidate defined by `UNIT-SA-020`, and only after explicit owner authorization.
- `Verified`: Keep cart quantity updates, cart item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, snippets, config, runtime locales, preset composition, and Shopify publish operations blocked.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Path:` `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-020.v1.md`

## Allowed Files Or Surfaces

- `project/templates/cart.json`
- `project/sections/stone-main-cart.liquid`
- `project/assets/stone-base.css`
- `project/locales/en.schema.json`
- `project/locales/he.default.schema.json`
- `workspace/qa/reports/unit-sa-021-*`
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

Stop if explicit owner authorization for `UNIT-SA-021` is absent, if the repo has unclassified dirty `project/**` files, or if the next step requires cart quantity updates, cart item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack implementation, overlay group, theme blocks, snippets, config, runtime locales, preset composition, Shopify preview/dev/push/publish/delete operations, `--allow-live`, or any file outside the `UNIT-SA-021` allowed surfaces.
