# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded editorial/search host runtime proof verification
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-165` passed and now admits only `UNIT-166` as verification/frontier review for the exact nine-file no-JS editorial/search host runtime proof.

## Objective

- `Verified`: Verify that `UNIT-165` changed only the exact nine approved runtime files.
- `Verified`: Verify that `project/assets/stone-runtime.js` stayed untouched.
- `Verified`: Verify JSON validity, section schema validity, and bilingual locale parity for `sections.stone_main_blog`, `sections.stone_main_article`, and `sections.stone_main_search`.
- `Verified`: Verify that no predictive-search, search suggestion, search merchandising, JavaScript result behavior, broader editorial-family growth, cart, preset, or hardening behavior was added.
- `Verified`: Decide the next honest lane without reopening predictive search, preset, or hardening prematurely.

## Plan Reference

- `Path:` `workspace/plans/phase-4-editorial-search-host-runtime-proof-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `project/templates/blog.json`
- `project/templates/article.json`
- `project/templates/search.json`
- `project/sections/stone-main-blog.liquid`
- `project/sections/stone-main-article.liquid`
- `project/sections/stone-main-search.liquid`
- `project/assets/stone-base.css`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
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

Fail closed if `UNIT-166` finds project drift outside the exact nine-file editorial/search proof boundary, JSON or section-schema invalidity, locale parity failure, JavaScript changes, predictive-search/search-suggestion/search-merchandising behavior, broader editorial-family growth, or evidence too weak to route a next unit.
