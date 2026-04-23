# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded no-JS editorial/search host runtime proof
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-164` passed and now admits only `UNIT-165` as the exact nine-file no-JS editorial/search host runtime proof.

## Objective

- `Verified`: Implement canonical blog, article, and search host templates with one main section each.
- `Verified`: Keep the implementation inside the exact nine approved runtime files.
- `Verified`: Include no-JS blog article listing, article rendering, search form/results, basic empty states, and native pagination.
- `Verified`: Keep JavaScript, predictive search, search suggestions, search merchandising, broader editorial-family growth, cart, preset realization, and hardening blocked.

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

Fail closed if `UNIT-165` changes any project file outside the exact nine-file editorial/search proof boundary, adds JavaScript or predictive search, adds search suggestions or merchandising, expands editorial families beyond host completion, cannot preserve JSON validity and bilingual locale parity, or weakens the no-JS host boundary.
