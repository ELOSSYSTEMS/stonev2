# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded Shopify upload repair
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-187` is approved as the next bounded upload-repair unit: add English runtime locale coverage for keys referenced by Liquid.

## Objective

- `Verified`: Fix only the missing `project/locales/en.default.json` runtime translation coverage recorded in `workspace/audits/shopify-theme-upload-errors-2026-04-24.md`.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.
- `Verified`: Do not push to Shopify, implement Hebrew runtime parity, or clean non-locale Theme Check warnings in this unit.

## Plan Reference

- `Path:` `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/locales/en.default.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `workspace/verify/unit-187/`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if runtime locale repair requires copy decisions beyond direct English fallbacks, Hebrew runtime parity decisions, Shopify push, or preset-composition decisions.
