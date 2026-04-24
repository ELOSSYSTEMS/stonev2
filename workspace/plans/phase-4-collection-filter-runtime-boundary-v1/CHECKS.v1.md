# Phase 4 Collection Filter Runtime Boundary Checks v1

- `Verified`: Keep the unit docs-only.
- `Verified`: State exact future runtime files.
- `Verified`: State filter type scope.
- `Verified`: State protected surfaces.
- `Verified`: Verify no `project/` runtime files changed.
- `Verified`: Run `git diff --name-only -- project`.
- `Verified`: Run `node HARNESS/checks/check-state-artifacts.mjs`.
- `Verified`: Run `node HARNESS/checks/check-next-action-scope.mjs`.
- `Verified`: Run `node HARNESS/checks/check-plan-exists.mjs`.
- `Verified`: Run `node HARNESS/checks/check-handoff-completeness.mjs`.
- `Verified`: Run `node HARNESS/checks/check-approval-state.mjs`.
- `Verified`: Run `node HARNESS/checks/check-lock-state.mjs`.
- `Verified`: Run `node HARNESS/checks/harness-check.mjs`.
