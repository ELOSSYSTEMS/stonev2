# Phase 2 Minimal Trust FAQ Risks v1

## Primary Risks

1. `Inference`: Semantic drift, where a restrained FAQ stack turns into a broader customer-support surface, contact prompt, or service-guarantee module.
2. `Inference`: Interaction drift, where native disclosure is replaced by custom JS, tabs, popovers, or animated support UX.
3. `Inference`: Protected-surface drift, where the section starts demanding shared-shell, runtime-JS, global-settings, or layout-level edits.
4. `Inference`: Scope creep, where implementation introduces helper snippets, files under `project/blocks/`, or extra templates to make the FAQ system feel more complete.
5. `Inference`: Locale drift, where Hebrew and English schema additions stop matching structurally because of rushed naming or extra options.

## Mitigations

- `Verified`: Keep the implementation inside the approved five runtime files only.
- `Verified`: Keep the FAQ bounded, neutral, and low-ceremony, with native disclosure semantics only.
- `Verified`: Reject contact flows, testimonials, logo proofs, service guarantees, and custom JS inside this slice.
- `Verified`: Reuse `stone-section-shell` unchanged and stop immediately if that becomes insufficient.
- `Verified`: Check locale subtree parity before accepting the unit.

## Failure Triggers

- `Verified`: Any protected-surface edit.
- `Verified`: Any second section or second template.
- `Verified`: Any `project/blocks/` addition.
- `Verified`: Any custom JS-driven behavior.
- `Verified`: Any testimonial, logo, contact, support-escalation, or campaign vocabulary in the section or template.
