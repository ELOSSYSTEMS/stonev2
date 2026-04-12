# Phase 2 Minimal Trust Testimonial Assumptions v1

## Assumptions

1. `Verified`: A bounded static testimonial proof is materially different enough from the completed FAQ, reassurance-lane, trust-help-prompt, and trust-logo-rail proofs to justify one separate fifth trust-and-support proof.
2. `Inference`: A testimonial proof can stay bounded and low-risk if it remains static, restrained, quote-led, and non-JS.
3. `Verified`: The verified shared section shell remains sufficient and must not be edited for this slice.
4. `Inference`: One trust testimonial section and one neutral template host are sufficient to validate the pattern in isolation.
5. `Inference`: Neutral CSS primitives for quote-card spacing and restrained attribution treatment can land in `project/assets/stone-base.css` without reopening global styling architecture.
6. `Verified`: Hebrew and English locale coverage for the new section can remain structurally aligned inside one bounded change set.
7. `Verified`: No block files, no runtime JS, no new snippets, and no protected-surface edits are required if the trust testimonial scope remains constrained to a small static quote stack inside the section file.
8. `Inference`: A fifth trust-and-support proof should not need stars, ratings, review aggregates, avatars, guarantees, or motion systems because those would broaden the slice beyond a bounded testimonial proof.

## Assumption Risks

- `Inference`: If execution needs star ratings, avatars, or review metrics to make the testimonial proof feel credible, the slice is likely too broad.
- `Inference`: If execution needs carousel or slider behavior to feel complete, the slice is likely too broad.
- `Inference`: If execution cannot stay visually restrained without broader styling work, the slice should be replanned.

## Validation Notes

- `Verified`: Implementation must prove a trust-and-support testimonial through restrained static quote presentation, not through review systems or ratings semantics.
- `Verified`: Any need to reopen `project/snippets/stone-section-shell.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/layout/theme.liquid` invalidates this assumption set for the bounded slice.
