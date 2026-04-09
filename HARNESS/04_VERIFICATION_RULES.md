# Stone V2 Verification Rules

## Verification Order

- `Verified`: Run the narrowest useful check first, then broader checks if the narrow check passes or exposes a real need.
- `Verified`: Do not claim completion without evidence from files, command output, or a check result.
- `Inference`: For harness-only work, local markdown and state consistency checks are the correct first-line verification.

## Phase 0 Required Verification

- `Verified`: Confirm all required harness docs, templates, checks, state files, and workspace seeds exist.
- `Verified`: Confirm `state/NEXT_ACTION.md` defines exactly one bounded unit with explicit file scope and checks.
- `Verified`: Confirm `workspace/handoff/CURRENT_HANDOFF.md` contains a usable resume package.
- `Verified`: Confirm `README.md` explains repo shape and the canonical input rule.

## Phase 1 And Later Verification Targets

- `Inference`: Phase 1 canon work should verify section-family coverage, settings vocabulary consistency, bilingual schema strategy completeness, and roadmap alignment.
- `Inference`: Phase 2 and later runtime work should add Liquid, schema, locale, RTL, and progressive JavaScript verification appropriate to the changed files.

## Failure Conditions

- `Verified`: Verification fails if state files are missing, malformed, or contradictory.
- `Verified`: Verification fails if a next action expands beyond its declared file scope.
- `Verified`: Verification fails if handoff omits current state, changed surfaces, open assumptions, or a bounded next step.
- `Inference`: Verification should fail closed when runtime work appears before canon artifacts justify it.

## Minimum Local Commands

- `Verified`: `node HARNESS/checks/check-state-artifacts.mjs`
- `Verified`: `node HARNESS/checks/check-next-action-scope.mjs`
- `Verified`: `node HARNESS/checks/check-plan-exists.mjs`
- `Verified`: `node HARNESS/checks/check-handoff-completeness.mjs`
- `Verified`: `node HARNESS/checks/check-approval-state.mjs`
- `Verified`: `node HARNESS/checks/check-lock-state.mjs`
- `Verified`: `node HARNESS/checks/harness-check.mjs`
