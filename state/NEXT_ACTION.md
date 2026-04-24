# NEXT_ACTION

## Status

- `Verified`: Approval State: CONDITIONALLY_APPROVED
- `Verified`: Execution Class: browser/preview verification only after explicit store and preview target authorization
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-013` is conditionally approved only as browser preview regression proof for the shared drawer primitive, after explicit store and preview target authorization.

## Objective

- `Verified`: Preserve `UNIT-SA-012` as complete for local shared drawer primitive generalization.
- `Verified`: Prove in browser preview that the existing mobile navigation drawer still opens, closes, traps focus, restores focus, locks and unlocks scroll, preserves desktop trigger/nav behavior, and preserves RTL right-side placement.
- `Verified`: Keep search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, locales, preset composition, and Shopify publish operations blocked unless a later docs-only boundary explicitly narrows them.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Path:` `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-011.v1.md`

## Allowed Files Or Surfaces

- `workspace/qa/reports/unit-sa-013-*`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`
- Shopify preview command only after explicit store and preview target authorization

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if explicit store and preview target authorization for `UNIT-SA-013` is absent, if the resolved preview target is live, if a command would require `--allow-live`, or if the next step requires runtime edits, search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, locales, preset composition, Shopify publish, delete operations, or any file outside the `UNIT-SA-013` verification surfaces.
