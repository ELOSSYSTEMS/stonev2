# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded shell/navigation runtime proof verification
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-153` passed and now admits only `UNIT-154` as the verification/frontier review for the exact seven-file no-JS global shell/navigation runtime proof.

## Objective

- `Verified`: Verify that `UNIT-153` changed only the exact seven approved runtime files.
- `Verified`: Verify that `project/assets/stone-runtime.js` stayed untouched.
- `Verified`: Verify JSON validity and bilingual locale parity for admitted shell keys.
- `Verified`: Verify that no collection, product, blog, article, search, list-collections, or cart template was added.
- `Verified`: Decide whether the next honest step remains shell proof verification/frontier review rather than collection/PDP/search/preset reopening.
- `Verified`: Keep collection/archive behavior, PDP behavior, search-results behavior, predictive search, cart drawer behavior, checkout-sensitive behavior, preset realization, and hardening out of scope.

## Plan Reference

- `Path:` `workspace/plans/phase-4-global-shell-navigation-runtime-proof-v1/HANDOFF.v1.md`

## Allowed Files Or Surfaces

- `project/layout/theme.liquid`
- `project/snippets/stone-global-header.liquid`
- `project/snippets/stone-global-footer.liquid`
- `project/assets/stone-base.css`
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
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Stop Condition

Fail closed if `UNIT-154` finds project drift outside the exact seven-file shell proof boundary, JSON invalidity, locale parity failure, JavaScript changes, added canonical host templates, search-results or predictive-search behavior, cart drawer or checkout-sensitive behavior, collection/archive behavior, PDP behavior, or evidence too weak to route a next unit.
