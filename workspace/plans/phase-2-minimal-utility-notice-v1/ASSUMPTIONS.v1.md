# Phase 2 Minimal Utility Notice Assumptions v1

## Assumptions

1. `Verified`: A bounded contained notice surface is materially different enough from the existing open richtext utility section to justify one separate utility-family proof.
2. `Inference`: A notice proof can stay utility-only if it remains neutral, short-form, and non-promotional.
3. `Verified`: The verified shared section shell remains sufficient and must not be edited for this slice.
4. `Inference`: One notice section and one neutral template host are sufficient to validate the pattern in isolation.
5. `Inference`: Neutral CSS primitives for contained spacing, border, and restrained background treatment can land in `project/assets/stone-base.css` without reopening global styling architecture.
6. `Verified`: Hebrew and English locale coverage for the new section can remain structurally aligned inside one bounded change set.
7. `Verified`: No blocks, no runtime JS, no new snippets, and no protected-surface edits are required if the notice scope remains constrained.
8. `Inference`: A utility notice should not need actions, icons, or severity-state semantics because those would either duplicate prior proofs or broaden into alert/promo territory.

## Assumption Risks

- `Inference`: If execution needs icons, badges, or multiple message variants to feel distinct, the slice is likely too broad.
- `Inference`: If execution depends on calls to action to justify the section, it is drifting back into action-group territory.
- `Inference`: If execution cannot differentiate from open richtext without trust, promo, or support semantics, the slice should be replanned.

## Validation Notes

- `Verified`: Implementation must prove structural difference through contained notice treatment, not through broader feature growth.
- `Verified`: Any need to reopen `project/snippets/stone-section-shell.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/layout/theme.liquid` invalidates this assumption set for the bounded slice.
