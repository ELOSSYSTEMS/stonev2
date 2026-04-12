# Phase 2 Minimal Trust Help Prompt Assumptions v1

## Assumptions

1. `Verified`: A bounded trust help prompt is materially different enough from the completed trust FAQ and reassurance-lane proofs to justify one separate third trust-and-support proof.
2. `Inference`: A trust help prompt can stay bounded and low-risk if it remains short-form, native-link-only, and non-JS.
3. `Verified`: The verified shared section shell remains sufficient and must not be edited for this slice.
4. `Inference`: One trust help prompt section and one neutral template host are sufficient to validate the pattern in isolation.
5. `Inference`: Neutral CSS primitives for restrained prompt spacing and action grouping can land in `project/assets/stone-base.css` without reopening global styling architecture.
6. `Verified`: Hebrew and English locale coverage for the new section can remain structurally aligned inside one bounded change set.
7. `Verified`: No block files, no runtime JS, no new snippets, and no protected-surface edits are required if the trust help prompt scope remains constrained to short text and native links inside the section file.
8. `Inference`: A third trust-and-support proof should not need logos, testimonials, ratings, guarantees, or contact-form behavior because those would broaden the slice beyond a bounded help prompt.

## Assumption Risks

- `Inference`: If execution cannot stay materially distinct from `stone-utility-prompt`, the slice may not justify a separate trust-family section.
- `Inference`: If execution needs richer support-state behavior or form handling, the slice is likely too broad.
- `Inference`: If execution needs proof assets such as logos or testimonials to feel credible, the slice is drifting outside the planned proof.

## Validation Notes

- `Verified`: Implementation must prove a trust-and-support help prompt through restrained text and native links, not through form workflows or proof systems.
- `Verified`: Any need to reopen `project/snippets/stone-section-shell.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/layout/theme.liquid` invalidates this assumption set for the bounded slice.
