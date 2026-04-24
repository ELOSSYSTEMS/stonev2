# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only boundary authoring
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-020` is approved only as docs-only cart route host boundary authoring.

## Objective

- `Verified`: Preserve `UNIT-SA-019` as complete for cart drawer shell browser behavior proof.
- `Verified`: Record and decide the boundary implication of direct `/cart` returning `404` during preview proof.
- `Verified`: Keep cart route template runtime, cart quantity updates, cart item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack, overlay group, theme blocks, snippets, config, runtime locales, preset composition, and Shopify publish operations blocked unless the docs-only boundary explicitly narrows a later unit.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Not required`: `UNIT-SA-020` creates the docs-only plan artifact.

## Allowed Files Or Surfaces

- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-020.v1.md`
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

Stop if the next step requires `project/**` edits, Shopify preview/dev/push/publish/delete operations, cart route template runtime, cart quantity updates, cart item removal, add-to-cart behavior, checkout mutation, AJAX cart, cart JavaScript, predictive search, modal stack implementation, overlay group, theme blocks, snippets, config, runtime locales, preset composition, or any file outside the `UNIT-SA-020` docs-only boundary surfaces.
