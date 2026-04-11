# Phase 2 Minimal Utility Prompt Assumptions v1

## Assumptions

1. `Verified`: A bounded contained prompt surface is materially different enough from the existing notice and action-group proofs to justify one separate utility-family proof.
2. `Inference`: A prompt proof can stay utility-only if it remains neutral, short-form, and non-promotional.
3. `Verified`: The verified shared section shell remains sufficient and must not be edited for this slice.
4. `Inference`: One prompt section and one neutral template host are sufficient to validate the pattern in isolation.
5. `Inference`: Neutral CSS primitives for contained spacing, alignment, and action-row rhythm can land in `project/assets/stone-base.css` without reopening global styling architecture.
6. `Verified`: Hebrew and English locale coverage for the new section can remain structurally aligned inside one bounded change set.
7. `Verified`: No blocks, no runtime JS, no new snippets, and no protected-surface edits are required if the prompt scope remains constrained.
8. `Inference`: A utility prompt should not need more than restrained native actions because broader action systems would drift into conversion or support territory.

## Assumption Risks

- `Inference`: If execution needs promotional framing or urgency language to feel distinct, the slice is likely too broad.
- `Inference`: If execution needs icons, badges, or support states, the slice is drifting outside the utility family proof.
- `Inference`: If execution cannot differentiate from notice plus action group without page-composition behavior, the slice should be replanned.

## Validation Notes

- `Verified`: Implementation must prove structural difference through contained prompting, not through broader feature growth.
- `Verified`: Any need to reopen `project/snippets/stone-section-shell.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/layout/theme.liquid` invalidates this assumption set for the bounded slice.
