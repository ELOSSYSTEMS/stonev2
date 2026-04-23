# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only PDP host/behavior runtime boundary
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-159` passed and now admits only `UNIT-160` as docs-only PDP host/behavior runtime-boundary authoring.

## Objective

- `Verified`: State one exact future PDP host/product-form runtime boundary or stop in a governed block.
- `Verified`: Keep this unit docs-only.
- `Verified`: Decide whether a later no-JS PDP proof can be constrained to one canonical product host, one main product section, shared CSS, and bilingual labels.
- `Verified`: Keep `PDP companion`, recommendations, complementary products, AJAX cart, cart drawer behavior, quick add, quick view, subscriptions, pickup/inventory complexity, dynamic media galleries, search, preset realization, and hardening blocked.

## Plan Reference

- `Path:` `workspace/plans/phase-4-pdp-host-behavior-runtime-boundary-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-pdp-host-behavior-runtime-boundary-v1/`
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

Fail closed if `UNIT-160` attempts project runtime edits, cannot state an exact future runtime file boundary, treats `PDP companion` as resolved, admits JavaScript or cart-drawer behavior, weakens product-form/cart-path risk, or routes directly into implementation without a bounded proof unit.
