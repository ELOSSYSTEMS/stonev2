# NEXT_ACTION

## Status

- `Verified`: Approval State: CONDITIONALLY_APPROVED
- `Verified`: Execution Class: bounded runtime implementation only after exact-unit owner authorization
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-SA-012` is conditionally approved only as shared drawer primitive generalization and mobile drawer regression proof, after explicit owner authorization for that exact unit.

## Objective

- `Verified`: Preserve `UNIT-SA-011` as the completed docs-only Phase 3B next-slice boundary.
- `Verified`: Generalize the existing drawer primitive without adding a second drawer surface.
- `Verified`: Preserve the mobile navigation drawer behavior proven by `UNIT-SA-009` and repaired by `UNIT-SA-010`.
- `Verified`: Keep search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, locales, preset composition, and Shopify publish operations blocked unless a later docs-only boundary explicitly narrows them.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.

## Plan Reference

- `Path:` `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-011.v1.md`

## Allowed Files Or Surfaces

- `project/assets/stone-drawer.js`
- `project/sections/stone-header-main.liquid`
- `project/sections/stone-mobile-navigation-drawer.liquid`
- `project/assets/stone-base.css`
- `workspace/qa/reports/unit-sa-012-drawer-primitive-report.md`
- `workspace/qa/reports/unit-sa-012-*.png`
- `workspace/verify/unit-sa-012/**`
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

Stop if exact owner authorization for `UNIT-SA-012` is absent, or if the next step requires search drawer, cart drawer, predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, locales, preset composition, Shopify publish, live-theme mutation, delete operations, or any file outside the `UNIT-SA-011` allowed future write set.
