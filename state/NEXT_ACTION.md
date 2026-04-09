# NEXT_ACTION

## Status

- `Verified`: Approval State: CONDITIONALLY_APPROVED
- `Verified`: Execution Class: runtime-foundation-implementation
- `Verified`: Priority: high

## Approved Unit

- `UNIT-004` Execute the bounded Phase 2 minimal runtime foundation implementation slice.

## Objective

- `Verified`: Implement only the minimal runtime foundation defined by the approved plan package, without entering section-family, preset-pack, homepage, collection, PDP, or polished storefront work.

## Plan Reference

- `Path:` `workspace/plans/phase-2-minimal-runtime-foundation-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/layout/theme.liquid`
- `project/assets/stone-tokens.css`
- `project/assets/stone-base.css`
- `project/assets/stone-runtime.js`
- `project/config/settings_schema.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if the unit needs any runtime file outside the approved list, enters `project/sections/`, `project/blocks/`, `project/templates/`, or `project/snippets/`, or begins section-family, preset-pack, homepage, collection, PDP, or polished storefront implementation.
