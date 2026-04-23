# Phase 4 Collection Host Product Grid Runtime Boundary Checks v1

- `Verified`: Keep this package docs-only in `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`.
- `Verified`: State exact future runtime files before implementation.
- `Verified`: Keep collection companion, archive controls, banner/explainer/editorial drift, PDP, search, cart, preset, hardening, product-card edits, and JavaScript domains blocked.
- `Verified`: Verify that no `project/` runtime file changed during `UNIT-156`.
- `Verified`: Run `git diff --name-only -- project`.
- `Verified`: Run `node HARNESS/checks/check-state-artifacts.mjs`.
- `Verified`: Run `node HARNESS/checks/check-next-action-scope.mjs`.
- `Verified`: Run `node HARNESS/checks/check-plan-exists.mjs`.
- `Verified`: Run `node HARNESS/checks/check-handoff-completeness.mjs`.
- `Verified`: Run `node HARNESS/checks/check-approval-state.mjs`.
- `Verified`: Run `node HARNESS/checks/check-lock-state.mjs`.
- `Verified`: Run `node HARNESS/checks/harness-check.mjs`.
