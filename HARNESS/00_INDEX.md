# Stone V2 Harness Index

## Purpose

- `Verified`: This index defines the governed harness surfaces for the Stone V2 repository.
- `Verified`: The harness exists to keep planning, execution, verification, and handoff bounded and deterministic.

## Canonical Inputs

- `Verified`: The five files in `docs/architecture/` are the authoritative inputs for first-pass canon, planning, and checker intent.
- `Verified`: The build roadmap requires Phase 0 harness foundation before broader theme implementation.
- `Inference`: Later plans should continue to treat these documents as upstream authority until superseded by governed canon artifacts in `workspace/specs/`.

## Controlled Surfaces

- `Verified`: `HARNESS/` contains repo-local governance documents, templates, and checks.
- `Verified`: `state/` contains the canonical orchestration, status, progress, feature ledger, session log, and next action files.
- `Verified`: `workspace/` contains working artifacts such as intake, specs, plans, build records, verification reports, handoffs, QA reports, decisions, notes, docs, and logs.
- `Verified`: `project/` is the Shopify runtime root and remains scaffold-only in this pass.

## Required Workflow

- `Verified`: Read `docs/architecture/` before creating plans, checks, or runtime work.
- `Verified`: Read `state/` before starting implementation or verification work.
- `Verified`: Keep one bounded approved unit in `state/NEXT_ACTION.md`.
- `Verified`: Update `state/FEATURE_STATUS.md`, `state/PROGRESS.md`, and `state/SESSION_LOG.md` at the end of each governed execution slice.
- `Inference`: Treat `workspace/specs/` as the immediate destination for Phase 1 canon artifacts such as the section-family ledger and settings taxonomy.

## Local Governance Documents

- `Verified`: `HARNESS/01_EXECUTION_CONSTITUTION.md`
- `Verified`: `HARNESS/04_VERIFICATION_RULES.md`
- `Verified`: `HARNESS/05_HANDOFF_RULES.md`
- `Verified`: `HARNESS/07_STATE_MODEL.md`
- `Verified`: `HARNESS/08_NEXT_ACTION_RULES.md`
- `Verified`: `HARNESS/09_SUBAGENT_RULES.md`
- `Verified`: `HARNESS/10_APPROVAL_POLICY.md`

## Templates

- `Verified`: `HARNESS/templates/` provides the canonical seed templates for intake, plans, verification, handoff, status, next action, feature status, progress, session logging, and orchestration state.
- `Inference`: Templates should stay small and reusable so the harness derives structure without overbuilding the runtime.

## Checks

- `Verified`: `node HARNESS/checks/harness-check.mjs`
- `Verified`: `node HARNESS/checks/check-state-artifacts.mjs`
- `Verified`: `node HARNESS/checks/check-next-action-scope.mjs`
- `Verified`: `node HARNESS/checks/check-plan-exists.mjs`
- `Verified`: `node HARNESS/checks/check-handoff-completeness.mjs`
- `Verified`: `node HARNESS/checks/check-approval-state.mjs`
- `Verified`: `node HARNESS/checks/check-lock-state.mjs`
