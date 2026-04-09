# Stone V2 State Model

## State Directory Purpose

- `Verified`: `state/` is the canonical governed state package for Stone V2.
- `Verified`: The state package is separate from `workspace/` so the active control files remain easy to read and validate.

## Canonical Files

- `Verified`: `state/ORCHESTRATION_STATE.md` stores phase, approval, lock, and active reference state.
- `Verified`: `state/STATUS.md` stores the current snapshot, canonical inputs, constraints, and open risks.
- `Verified`: `state/NEXT_ACTION.md` stores the single approved bounded unit.
- `Verified`: `state/FEATURE_STATUS.md` stores the unit ledger and evidence trail.
- `Verified`: `state/PROGRESS.md` stores the current operational summary and verification verdict.
- `Verified`: `state/SESSION_LOG.md` stores append-only execution evidence by session.

## Authority Rules

- `Verified`: `NEXT_ACTION.md` is authoritative for the one active bounded unit.
- `Verified`: `ORCHESTRATION_STATE.md` is authoritative for approval status and write-lock state.
- `Verified`: `FEATURE_STATUS.md`, `PROGRESS.md`, and `SESSION_LOG.md` must be updated after meaningful plan, build, verify, or handoff work.
- `Inference`: `STATUS.md` provides the shortest high-level orientation for a new session before deeper reads begin.

## State Integrity Rules

- `Verified`: The state package must be readable before execution continues.
- `Verified`: The state package must use explicit file scopes, checks, and stop conditions.
- `Verified`: Contradictions between state files should be treated as blocking defects.
- `Inference`: Small deterministic checks are preferred over broad state automation for this repo phase.
