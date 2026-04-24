# NEXT_ACTION

## Status

- `Verified`: Approval State: CONDITIONALLY_APPROVED
- `Verified`: Execution Class: browser/preview verification only after explicit store and preview target authorization
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-016` is conditionally approved only as search drawer browser preview proof, after explicit store and preview target authorization.

## Objective

- `Verified`: Preserve `UNIT-SA-015` as complete for local search drawer shell implementation.
- `Verified`: Prove in browser preview that the search drawer opens from the header trigger, closes by close control and `Escape`, traps focus, restores focus, locks and unlocks scroll, submits to the route-based search path, and preserves RTL placement.
- `Verified`: Keep cart drawer, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, preset composition, and Shopify publish operations blocked unless a later docs-only boundary explicitly narrows them.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Path:` `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-014.v1.md`

## Allowed Files Or Surfaces

- `workspace/qa/reports/unit-sa-016-*`
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

Stop if explicit store and preview target authorization for `UNIT-SA-016` is absent, if the resolved preview target is live, if a command would require `--allow-live`, or if the next step requires runtime edits, cart drawer, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, preset composition, Shopify publish, delete operations, or any file outside the `UNIT-SA-016` verification surfaces.
