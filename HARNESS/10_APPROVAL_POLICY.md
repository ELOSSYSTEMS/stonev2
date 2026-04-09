# Stone V2 Approval Policy

## Approval States

- `Verified`: `APPROVED` means the bounded unit may execute within its declared file scope and checks.
- `Verified`: `CONDITIONALLY_APPROVED` means only clarification or documentation work may proceed while the stated conditions remain true.
- `Verified`: `BLOCKED` means execution must stop until the missing evidence or decision is supplied.

## Approval Gates

- `Verified`: A bounded unit requires explicit approval state in `state/ORCHESTRATION_STATE.md` and `state/NEXT_ACTION.md`.
- `Verified`: Ambiguous scope, hidden runtime expansion, or missing required checks should force `BLOCKED`.
- `Verified`: Security-sensitive, destructive, billing-sensitive, compliance-sensitive, or production-risky work must fail closed without stronger evidence.
- `Inference`: Documentation-only canon work can remain `APPROVED` when the user has already supplied the bounded target and source documents.

## Phase Discipline

- `Verified`: Phase 0 approval covers harness population and repo canon only.
- `Verified`: Phase 1 approval covers architecture canon artifacts such as section-family ledgers, settings taxonomy, bilingual schema strategy, and bounded planning outputs.
- `Verified`: Phase 2 and later runtime work requires its own bounded approval state and must not be inferred from earlier documentation approval.

## Evidence Expectations

- `Verified`: Approval claims should cite user instruction, repo files, or explicit state.
- `Verified`: Completed units should update ledger, progress, session log, and handoff evidence before approval moves on.
