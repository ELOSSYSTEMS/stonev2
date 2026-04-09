# Stone V2 Subagent Rules

## Default Policy

- `Verified`: Stone V2 uses a single-writer default for repo mutations.
- `Verified`: Subagents must not be used to bypass the bounded unit or approval rules in `state/`.
- `Inference`: Read-heavy evidence gathering is safer than parallel writing during early canon and scaffold phases.

## Allowed Uses

- `Verified`: Read-only repo exploration on clearly separate questions is allowed when it reduces ambiguity.
- `Verified`: Documentation synthesis or review support is allowed only when the parent session retains final responsibility for the canonical output.
- `Inference`: Parallel write work is only appropriate after explicit file partitioning and approval state make it safe.

## Blocked Uses

- `Verified`: Do not run parallel writers against overlapping harness, state, or workspace canon files.
- `Verified`: Do not delegate approval decisions, lock decisions, or source-of-truth interpretation away from the parent session.
- `Verified`: Do not use subagents to broaden scope beyond the active bounded unit.

## Coordination Rules

- `Verified`: The parent session must integrate and verify all delegated findings before finalizing the repo state.
- `Inference`: For the current repo maturity, subagent usage should remain rare until the architecture canon exists in governed workspace artifacts.
