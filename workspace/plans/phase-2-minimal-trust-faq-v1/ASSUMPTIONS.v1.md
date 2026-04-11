# Phase 2 Minimal Trust FAQ Assumptions v1

## Assumptions

1. `Verified`: A bounded FAQ stack is materially different enough from the completed utility-family proofs to justify one separate first trust-and-support proof.
2. `Inference`: A FAQ proof can stay bounded and low-risk if it remains neutral, short-form, and does not imply a broader support workflow.
3. `Verified`: The verified shared section shell remains sufficient and must not be edited for this slice.
4. `Inference`: One FAQ section and one neutral template host are sufficient to validate the pattern in isolation.
5. `Inference`: Neutral CSS primitives for summary-content rhythm and restrained borders can land in `project/assets/stone-base.css` without reopening global styling architecture.
6. `Verified`: Hebrew and English locale coverage for the new section can remain structurally aligned inside one bounded change set.
7. `Verified`: No blocks files, no runtime JS, no new snippets, and no protected-surface edits are required if the FAQ scope remains constrained to native disclosure semantics inside the section file.
8. `Inference`: A first trust-and-support proof should not need testimonials, logos, icons, contact flows, or service guarantees because those would broaden the slice beyond a bounded FAQ stack.

## Assumption Risks

- `Inference`: If execution needs custom JS to manage disclosure state, the slice is likely too broad.
- `Inference`: If execution needs contact actions or support escalation to feel meaningful, the slice is drifting outside the planned proof.
- `Inference`: If execution cannot stay distinct from broader trust/support sections without extra files or richer semantics, the slice should be replanned.

## Validation Notes

- `Verified`: Implementation must prove family transition through one restrained FAQ stack, not through a broader trust/support system.
- `Verified`: Any need to reopen `project/snippets/stone-section-shell.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/layout/theme.liquid` invalidates this assumption set for the bounded slice.
