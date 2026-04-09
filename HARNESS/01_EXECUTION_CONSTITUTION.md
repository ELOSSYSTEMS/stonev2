# Stone V2 Execution Constitution

## Authority Order

- `Verified`: The five architecture documents in `docs/architecture/` are the canonical product and architecture authority for this pass.
- `Verified`: Repo-local state in `state/` governs the active bounded unit, execution status, and handoff continuity.
- `Inference`: `workspace/specs/` becomes derivative authority only after canon artifacts are created from the architecture documents.

## Product And Runtime Posture

- `Verified`: Stone V2 remains Liquid-first and native to normal Shopify theme architecture.
- `Verified`: Stone V2 must not introduce a frontend framework or web components.
- `Verified`: JavaScript must remain lightweight and progressive.
- `Verified`: Hebrew-first, RTL-native behavior, and bilingual Hebrew or English editor support are core architectural requirements.
- `Verified`: This pass does not authorize storefront runtime build-out beyond the existing scaffold.

## Execution Rules

- `Verified`: Derive plans, checks, and next actions from the architecture documents instead of inventing product direction.
- `Verified`: Prefer small reversible slices over broad rewrites.
- `Verified`: Resolve ambiguity explicitly in docs, templates, or checks instead of hiding assumptions.
- `Verified`: Do not copy code or markup from external reference themes.
- `Inference`: Runtime implementation should remain blocked until section-family, settings, and bilingual schema canon is written into governed workspace artifacts.

## Scope Discipline

- `Verified`: Phase 0 is harness population and repo canon only.
- `Verified`: Phase 1 is product and architecture canon codification.
- `Verified`: Phase 2 and later are runtime foundation, section-family implementation, preset packs, and QA hardening.
- `Inference`: A governed session should fail closed when requested work jumps across phases without explicit approval.

## Evidence Discipline

- `Verified`: Claims that matter to planning, execution, or risk must be labeled as `Verified`, `Inference`, or `Speculative`.
- `Verified`: Verification claims require file evidence, command output, logs, tests, or diffs.
- `Inference`: Speculative design ideas belong in canon or planning documents before they influence runtime work.
