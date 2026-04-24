# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded Shopify upload repair
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-188` is approved as the next bounded upload-repair unit: decide and implement Hebrew runtime locale parity for keys now covered in English.

## Objective

- `Verified`: Add `project/locales/he.default.json` with the same runtime key structure as `project/locales/en.default.json`.
- `Verified`: Preserve the separate preset-composition hard block from `UNIT-184`.
- `Verified`: Do not push to Shopify, change schema locale files, or clean unrelated files in this unit.

## Plan Reference

- `Path:` `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md`

## Allowed Files Or Surfaces

- `project/locales/he.default.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`
- `workspace/verify/unit-188/`

## Required Checks

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Stop if Hebrew runtime parity requires product copy decisions beyond direct Hebrew fallback labels, Shopify push, or preset-composition decisions.
