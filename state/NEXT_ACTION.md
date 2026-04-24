# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: exact four-file no-JS collection filter runtime proof
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-179` passed by authoring the collection filter runtime boundary, and now admits only `UNIT-180` as the exact four-file no-JS collection filter runtime proof.

## Objective

- `Verified`: Implement native collection filters/facets only inside the exact four approved runtime files.
- `Verified`: Add the approved `show_filters` setting, native filter form, CSS, and bilingual labels.
- `Verified`: Keep final preset assignment, predictive search, JavaScript filtering, recommendations, cart/checkout behavior, and hardening out of scope.

## Plan Reference

- `Path:` `workspace/handoff/CURRENT_HANDOFF.md`

## Allowed Files Or Surfaces

- `workspace/plans/phase-4-collection-filter-runtime-boundary-v1/`
- `project/sections/stone-main-collection.liquid`
- `project/assets/stone-base.css`
- `project/locales/en.schema.json`
- `project/locales/he.default.schema.json`
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

Fail closed if `UNIT-180` edits files outside the exact four approved runtime files, assigns final preset collection composition, opens predictive search or JavaScript filtering, creates per-preset collection architecture, edits product cards, changes templates/snippets/JavaScript, or reopens cart/checkout/billing-sensitive behavior, recommendations, or hardening.
