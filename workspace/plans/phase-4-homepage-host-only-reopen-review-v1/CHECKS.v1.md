# Phase 4 Homepage Host-Only Reopen Review Checks v1

- `Verified`: Create the package only under `workspace/plans/phase-4-homepage-host-only-reopen-review-v1/`.
- `Verified`: Compare only `remain paused` versus `homepage-host-only reopen`.
- `Verified`: Use exact local file evidence from `shopify_theme_dom/` and `project/templates/`.
- `Verified`: Record whether `project/templates/index.json` is a justified exact file boundary.
- `Verified`: Keep `project/layout/theme.liquid`, `project/config/settings_schema.json`, collection hosts, PDP hosts, blog/article hosts, and search hosts out of scope unless forced by evidence.
- `Verified`: If the evidence is still too broad, keep the repo paused and do not edit state files.
- `Verified`: Run `git diff --name-only -- project`.
- `Verified`: Run `node HARNESS/checks/check-state-artifacts.mjs`.
- `Verified`: Run `node HARNESS/checks/check-next-action-scope.mjs`.
- `Verified`: Run `node HARNESS/checks/check-plan-exists.mjs`.
- `Verified`: Run `node HARNESS/checks/check-handoff-completeness.mjs`.
- `Verified`: Run `node HARNESS/checks/check-approval-state.mjs`.
- `Verified`: Run `node HARNESS/checks/check-lock-state.mjs`.
- `Verified`: Run `node HARNESS/checks/harness-check.mjs`.
