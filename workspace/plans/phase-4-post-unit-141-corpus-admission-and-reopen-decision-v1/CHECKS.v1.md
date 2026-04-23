# Phase 4 Post-UNIT-141 Corpus Admission And Reopen Decision Checks v1

- `Verified`: Read the required state, handoff, and `UNIT-142` package surfaces before editing.
- `Verified`: Inspect the actual local corpus under `shopify_theme_dom/`, including top-level corpus metadata and at least one concrete homepage evidence file.
- `Verified`: Inspect the actual `project/` runtime surface and confirm which canonical host templates are present or absent.
- `Verified`: Compare exactly these outcomes: remain paused, reopen homepage-first only, and reopen collection/PDP directly.
- `Verified`: Answer the mandatory decision question explicitly inside the package.
- `Verified`: Admit the corpus only as evidence, not as runtime authority.
- `Verified`: Keep `collection companion`, `PDP companion`, `collection behavior`, `PDP support behavior`, `collection-template starter structure`, and `PDP-template starter structure` explicit and fail-closed unless proven otherwise.
- `Verified`: If the evidence does not justify one exact next lane, record that no later unit is approved.
- `Verified`: Verify that no `project/` runtime files changed.
- `Verified`: Run `git diff --name-only -- project`.
- `Verified`: Run `node HARNESS/checks/check-state-artifacts.mjs`.
- `Verified`: Run `node HARNESS/checks/check-next-action-scope.mjs`.
- `Verified`: Run `node HARNESS/checks/check-plan-exists.mjs`.
- `Verified`: Run `node HARNESS/checks/check-handoff-completeness.mjs`.
- `Verified`: Run `node HARNESS/checks/check-approval-state.mjs`.
- `Verified`: Run `node HARNESS/checks/check-lock-state.mjs`.
- `Verified`: Run `node HARNESS/checks/harness-check.mjs`.
