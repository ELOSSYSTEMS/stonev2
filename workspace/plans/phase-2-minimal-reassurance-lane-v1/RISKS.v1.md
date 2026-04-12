# Phase 2 Minimal Reassurance Lane Risks v1

## Primary Risks

1. `Inference`: Semantic drift, where a restrained reassurance lane turns into a testimonial, logo, rating, or service-guarantee system.
2. `Inference`: Design drift, where the lane starts requiring icons, badges, or decorative proof treatments to feel valid.
3. `Inference`: Protected-surface drift, where the section starts demanding shared-shell, runtime-JS, global-settings, or layout-level edits.
4. `Inference`: Scope creep, where implementation introduces helper snippets, files under `project/blocks/`, or extra templates to make the reassurance system feel more complete.
5. `Inference`: Locale drift, where Hebrew and English schema additions stop matching structurally because of rushed naming or extra options.

## Mitigations

- `Verified`: Keep the implementation inside the approved five runtime files only.
- `Verified`: Keep the reassurance lane restrained, text-led, and non-promissory.
- `Verified`: Reject logos, testimonials, ratings, icons, badges, contact flows, guarantees, and custom JS inside this slice.
- `Verified`: Reuse `stone-section-shell` unchanged and stop immediately if that becomes insufficient.
- `Verified`: Check locale subtree parity before accepting the unit.

## Failure Triggers

- `Verified`: Any protected-surface edit.
- `Verified`: Any second section or second template.
- `Verified`: Any `project/blocks/` addition.
- `Verified`: Any custom JS-driven behavior.
- `Verified`: Any testimonial, logo, rating, contact, support-escalation, or campaign vocabulary in the section or template.
