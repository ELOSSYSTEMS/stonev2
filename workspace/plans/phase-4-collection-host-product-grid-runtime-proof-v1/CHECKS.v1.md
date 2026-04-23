# Phase 4 Collection Host Product Grid Runtime Proof Checks v1

- `Verified`: Run `git diff --name-only -- project`.
- `Verified`: Confirm project diff is limited to the exact five-file boundary.
- `Verified`: Parse `project/templates/collection.json`.
- `Verified`: Parse `project/locales/he.default.schema.json`.
- `Verified`: Parse `project/locales/en.schema.json`.
- `Verified`: Check locale parity for `sections.stone_main_collection`.
- `Verified`: Confirm `project/assets/stone-runtime.js` is unchanged.
- `Verified`: Confirm `project/snippets/stone-product-card.liquid` is unchanged.
- `Verified`: Confirm no product, blog, article, search, list-collections, or cart template is added.
- `Verified`: Run `node HARNESS/checks/check-state-artifacts.mjs`.
- `Verified`: Run `node HARNESS/checks/check-next-action-scope.mjs`.
- `Verified`: Run `node HARNESS/checks/check-plan-exists.mjs`.
- `Verified`: Run `node HARNESS/checks/check-handoff-completeness.mjs`.
- `Verified`: Run `node HARNESS/checks/check-approval-state.mjs`.
- `Verified`: Run `node HARNESS/checks/check-lock-state.mjs`.
- `Verified`: Run `node HARNESS/checks/harness-check.mjs`.
