# NEXT_ACTION

## Status

- `Verified`: Approval State: APPROVED
- `Verified`: Execution Class: bounded shell/navigation runtime proof implementation
- `Verified`: Priority: high

## Approved Unit

- `Verified`: `UNIT-152` passed and now admits only `UNIT-153` as the exact seven-file no-JS global shell/navigation runtime proof; keep `UNIT-147` through `UNIT-151` blocked until predecessor checks explicitly approve their domains.

## Objective

- `Verified`: Execute `UNIT-153` only inside the exact runtime boundary from `workspace/plans/phase-4-global-shell-navigation-runtime-proof-v1/HANDOFF.v1.md`.
- `Verified`: Add a no-JS global header/footer/navigation proof without reopening broader theme-shell authority.
- `Verified`: Preserve that `UNIT-152` admitted only seven runtime files.
- `Verified`: Keep `project/assets/stone-runtime.js` untouched.
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

Fail closed if `UNIT-153` needs files outside the exact seven-file runtime boundary, edits JavaScript, adds or changes collection/product/blog/article/search/list-collections/cart templates, implements search results or predictive search, implements cart drawer or checkout-sensitive behavior, encodes collection/archive or PDP behavior, or turns shell/navigation proof into broad theme completion authority.
