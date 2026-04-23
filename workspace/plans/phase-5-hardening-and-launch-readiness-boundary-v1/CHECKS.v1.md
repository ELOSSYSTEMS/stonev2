# Phase 5 Hardening And Launch-Readiness Boundary Checks v1

- `Verified`: Create all five planning artifacts inside `workspace/plans/phase-5-hardening-and-launch-readiness-boundary-v1/`.
- `Verified`: Keep all edits docs-only in `workspace/plans/`, `state/`, and `workspace/handoff/CURRENT_HANDOFF.md`.
- `Verified`: Record final QA surfaces, evidence expectations, and hard launch blockers.
- `Verified`: Verify that no `project/` runtime files changed.
- `Verified`: Run `git diff --name-only -- project`.
- `Verified`: Run `node HARNESS/checks/check-state-artifacts.mjs`.
- `Verified`: Run `node HARNESS/checks/check-next-action-scope.mjs`.
- `Verified`: Run `node HARNESS/checks/check-plan-exists.mjs`.
- `Verified`: Run `node HARNESS/checks/check-handoff-completeness.mjs`.
- `Verified`: Run `node HARNESS/checks/check-approval-state.mjs`.
- `Verified`: Run `node HARNESS/checks/check-lock-state.mjs`.
- `Verified`: Run `node HARNESS/checks/harness-check.mjs`.
