# Phase 4 Global Shell And Navigation Reopen Boundary Checks v1

- `Verified`: Keep all edits docs-only in `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`.
- `Verified`: Compare stay-homepage-only, bounded shell reopen, and broad theme-shell reopen.
- `Verified`: Record shell surfaces admissible now versus blocked later surfaces.
- `Verified`: Preserve the `UNIT-143` through `UNIT-145` homepage-first override history.
- `Verified`: Keep `UNIT-147` through `UNIT-151` blocked unless a predecessor explicitly approves those lanes.
- `Verified`: Verify that no `project/` runtime files changed during `UNIT-146`.
- `Verified`: Run `git diff --name-only -- project`.
- `Verified`: Run `node HARNESS/checks/check-state-artifacts.mjs`.
- `Verified`: Run `node HARNESS/checks/check-next-action-scope.mjs`.
- `Verified`: Run `node HARNESS/checks/check-plan-exists.mjs`.
- `Verified`: Run `node HARNESS/checks/check-handoff-completeness.mjs`.
- `Verified`: Run `node HARNESS/checks/check-approval-state.mjs`.
- `Verified`: Run `node HARNESS/checks/check-lock-state.mjs`.
- `Verified`: Run `node HARNESS/checks/harness-check.mjs`.
