# NEXT_ACTION

## Status

- `Verified`: Approval State: CONDITIONALLY_APPROVED
- `Verified`: Execution Class: browser/preview verification; explicit Shopify preview target authorization required
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-009` is the next candidate unit, but only as browser/preview verification of the `UNIT-SA-007` mobile navigation drawer proof; do not run Shopify preview commands until the owner confirms store and target.

## Objective

- `Verified`: Preserve `UNIT-SA-008` verification/frontier review as complete.
- `Verified`: Verify the mobile drawer in a browser preview before any broader Phase 3B behavior is considered.
- `Verified`: Keep cart drawer, search drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, preset composition, and Shopify publish operations blocked.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Path:` `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-006.v1.md`

## Allowed Files Or Surfaces

- `workspace/qa/reports/unit-sa-007-mobile-drawer-report.md`
- `workspace/qa/reports/unit-sa-009-*`
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

Stop before `theme dev`, browser preview, Shopify remote mutation, or screenshot capture unless the owner confirms the store and preview target; stop immediately if the preview target is live, requires `--allow-live`, or would broaden into cart drawer, search drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, preset composition, publish, or delete operations.
