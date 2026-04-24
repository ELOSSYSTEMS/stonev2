# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded Shopify upload repair
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-186` is approved as the next bounded upload-repair unit: repair the Shopify-rejected blank default for `stone_brand_name`.

## Objective

- `Verified`: Fix only the `settings_schema.json` blank-default blocker recorded in `workspace/audits/shopify-theme-upload-errors-2026-04-24.md`.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.
- `Verified`: Do not repair runtime locale coverage, push to Shopify, or clean Theme Check warnings in this unit.

## Plan Reference

- `Path:` `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/config/settings_schema.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `workspace/verify/unit-186/`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if the schema repair requires broader settings architecture changes, locale edits, Shopify push, or preset-composition decisions.
