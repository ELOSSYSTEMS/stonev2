# Phase 2 Minimal Trust Testimonial Risks v1

## Primary Risks

1. `Inference`: Semantic drift, where a restrained testimonial proof turns into a ratings surface, review aggregate, or guarantee system.
2. `Inference`: Interaction drift, where the testimonial proof starts requiring carousel, slider, or marquee behavior to feel complete.
3. `Inference`: Presentation drift, where the section begins demanding avatars, media, or broader campaign framing to justify itself.
4. `Inference`: Protected-surface drift, where the section starts demanding shared-shell, runtime-JS, global-settings, or layout-level edits.
5. `Inference`: Scope creep, where implementation introduces helper snippets, files under `project/blocks/`, or extra templates to make the proof system feel more complete.
6. `Inference`: Locale drift, where Hebrew and English schema additions stop matching structurally because of rushed naming or extra options.

## Mitigations

- `Verified`: Keep the implementation inside the approved five runtime files only.
- `Verified`: Keep the trust testimonial static, restrained, and non-JS.
- `Verified`: Reject stars, ratings, review aggregates, guarantees, avatars, carousels, sliders, marquees, and custom JS inside this slice.
- `Verified`: Reuse `stone-section-shell` unchanged and stop immediately if that becomes insufficient.
- `Verified`: Check locale subtree parity before accepting the unit.
- `Verified`: Stop and re-evaluate if the proof cannot stay credible without broader motion or review semantics.

## Failure Triggers

- `Verified`: Any protected-surface edit.
- `Verified`: Any second section or second template.
- `Verified`: Any `project/blocks/` addition.
- `Verified`: Any custom JS-driven behavior.
- `Verified`: Any star, rating, review-aggregate, guarantee, avatar, carousel, slider, or support-escalation vocabulary in the section or template.
