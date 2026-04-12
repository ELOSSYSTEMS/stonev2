# Phase 2 Minimal Reassurance Lane Assumptions v1

## Assumptions

1. `Verified`: A bounded reassurance lane is materially different enough from the completed trust FAQ proof to justify one separate second trust-and-support proof.
2. `Inference`: A reassurance proof can stay bounded and low-risk if it remains text-led, short-form, and non-promissory.
3. `Verified`: The verified shared section shell remains sufficient and must not be edited for this slice.
4. `Inference`: One reassurance-lane section and one neutral template host are sufficient to validate the pattern in isolation.
5. `Inference`: Neutral CSS primitives for cue grouping and restrained lane treatment can land in `project/assets/stone-base.css` without reopening global styling architecture.
6. `Verified`: Hebrew and English locale coverage for the new section can remain structurally aligned inside one bounded change set.
7. `Verified`: No blocks files, no runtime JS, no new snippets, and no protected-surface edits are required if the reassurance scope remains constrained to short text cues inside the section file.
8. `Inference`: A second trust-and-support proof should not need logos, testimonials, ratings, contact flows, or guarantees because those would broaden the slice beyond a bounded reassurance lane.

## Assumption Risks

- `Inference`: If execution needs icons or badges to make the lane feel meaningful, the slice is likely too broad.
- `Inference`: If execution needs logo or testimonial content to feel distinct, the slice is drifting outside the planned proof.
- `Inference`: If execution cannot stay distinct from FAQ behavior without richer systems or extra files, the slice should be replanned.

## Validation Notes

- `Verified`: Implementation must prove a second trust-and-support behavior through a restrained reassurance lane, not through broader proof systems.
- `Verified`: Any need to reopen `project/snippets/stone-section-shell.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/layout/theme.liquid` invalidates this assumption set for the bounded slice.
