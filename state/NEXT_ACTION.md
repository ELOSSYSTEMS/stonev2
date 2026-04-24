# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: docs-only boundary authoring
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-017` is approved only as docs-only Phase 3B post-search-drawer boundary authoring.

## Objective

- `Verified`: Preserve `UNIT-SA-016` as complete for search drawer browser preview proof.
- `Verified`: Author the smallest safe next Phase 3B boundary after search drawer preview proof.
- `Verified`: Decide whether the next runtime candidate should be cart drawer shell only, another drawer regression/proof lane, or a stop condition, without implementing runtime behavior.
- `Verified`: Keep cart drawer runtime, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, preset composition, and Shopify publish operations blocked unless the docs-only boundary explicitly narrows a later unit.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Not required`: `UNIT-SA-017` creates the docs-only plan artifact.

## Allowed Files Or Surfaces

- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-017.v1.md`
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

Stop if the next step requires `project/**` edits, Shopify preview/dev/push/publish/delete operations, cart drawer runtime implementation, predictive search, search JavaScript, modal stack implementation, overlay group, theme blocks, templates, snippets, config, runtime locales, preset composition, or any file outside the `UNIT-SA-017` docs-only boundary surfaces.
