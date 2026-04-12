# Phase 2 Minimal Trust Logo Rail Assumptions v1

## Assumptions

1. `Verified`: A bounded static logo rail is materially different enough from the completed FAQ, reassurance-lane, and trust-help-prompt proofs to justify one separate fourth trust-and-support proof.
2. `Inference`: A logo-rail proof can stay bounded and low-risk if it remains static, restrained, and non-JS.
3. `Verified`: The verified shared section shell remains sufficient and must not be edited for this slice.
4. `Inference`: One trust logo rail section and one neutral template host are sufficient to validate the pattern in isolation.
5. `Inference`: Neutral CSS primitives for mark containers and restrained rail spacing can land in `project/assets/stone-base.css` without reopening global styling architecture.
6. `Verified`: Hebrew and English locale coverage for the new section can remain structurally aligned inside one bounded change set.
7. `Verified`: No block files, no runtime JS, no new snippets, and no protected-surface edits are required if the trust logo rail scope remains constrained to static logo items inside the section file.
8. `Inference`: A fourth trust-and-support proof should not need testimonials, ratings, guarantees, or motion systems because those would broaden the slice beyond a bounded logo rail.

## Assumption Risks

- `Inference`: If execution needs marquee motion or slider behavior to make the rail feel credible, the slice is likely too broad.
- `Inference`: If execution needs quotes, ratings, or guarantee copy to feel distinct, the slice is drifting outside the planned proof.
- `Inference`: If execution cannot stay visually restrained without broader styling work, the slice should be replanned.

## Validation Notes

- `Verified`: Implementation must prove a trust-and-support logo rail through restrained static brand-proof presentation, not through testimonial or review systems.
- `Verified`: Any need to reopen `project/snippets/stone-section-shell.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/layout/theme.liquid` invalidates this assumption set for the bounded slice.
