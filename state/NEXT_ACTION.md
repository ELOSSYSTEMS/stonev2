# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: runtime-foundation-verification
- `Verified`: Priority: high

## Approved Unit

- `UNIT-005` Verify the bounded Phase 2 minimal runtime foundation implementation slice.

## Objective

- `Verified`: Confirm that `UNIT-004` stayed inside the approved seven-file runtime boundary, remained foundation-only, and passed the required governed checks without authorizing new runtime implementation.

## Plan Reference

- `Not required`: verification unit against the completed `UNIT-004` runtime slice.

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

Stop if verification requires any runtime edit, any runtime file outside the approved list, or any expansion into `project/sections/`, `project/blocks/`, `project/templates/`, `project/snippets/`, section-family work, preset work, homepage work, collection work, PDP work, or polished storefront implementation.
