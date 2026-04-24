# NEXT_ACTION

## Status

- `Verified`: Approval State: CONDITIONALLY_APPROVED
- `Verified`: Execution Class: bounded runtime implementation only after exact-unit owner authorization
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-015` is conditionally approved only as search drawer shell runtime after explicit owner authorization for that exact unit.

## Objective

- `Verified`: Preserve `UNIT-SA-014` as the completed docs-only Phase 3B second-drawer candidate boundary.
- `Verified`: Add only a search drawer shell that reuses the shared drawer primitive and submits to Shopify's route-based search.
- `Verified`: Keep cart drawer, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, preset composition, and Shopify publish operations blocked unless a later docs-only boundary explicitly narrows them.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Path:` `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-014.v1.md`

## Allowed Files Or Surfaces

- `project/sections/stone-search-drawer.liquid`
- `project/sections/stone-header-main.liquid`
- `project/assets/stone-base.css`
- `project/locales/en.schema.json`
- `project/locales/he.default.schema.json`
- `workspace/qa/reports/unit-sa-015-search-drawer-report.md`
- `workspace/qa/reports/unit-sa-015-*.png`
- `workspace/verify/unit-sa-015/**`
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

Stop if exact owner authorization for `UNIT-SA-015` is absent, or if the next step requires cart drawer, predictive search, search JavaScript, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locales, preset composition, Shopify publish, live-theme mutation, delete operations, or any file outside the `UNIT-SA-014` allowed future write set.
