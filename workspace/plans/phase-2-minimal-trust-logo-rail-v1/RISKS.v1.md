# Phase 2 Minimal Trust Logo Rail Risks v1

## Primary Risks

1. `Inference`: Semantic drift, where a restrained logo rail turns into a testimonial, ratings, or guarantee system.
2. `Inference`: Interaction drift, where the rail starts requiring marquee or slider behavior to feel complete.
3. `Inference`: Visual drift, where the section begins demanding broader campaign framing or heavy styling to justify itself.
4. `Inference`: Protected-surface drift, where the section starts demanding shared-shell, runtime-JS, global-settings, or layout-level edits.
5. `Inference`: Scope creep, where implementation introduces helper snippets, files under `project/blocks/`, or extra templates to make the proof system feel more complete.
6. `Inference`: Locale drift, where Hebrew and English schema additions stop matching structurally because of rushed naming or extra options.

## Mitigations

- `Verified`: Keep the implementation inside the approved five runtime files only.
- `Verified`: Keep the trust logo rail static, restrained, and non-JS.
- `Verified`: Reject testimonials, ratings, guarantees, marquees, sliders, and custom JS inside this slice.
- `Verified`: Reuse `stone-section-shell` unchanged and stop immediately if that becomes insufficient.
- `Verified`: Check locale subtree parity before accepting the unit.
- `Verified`: Stop and re-evaluate if the proof cannot stay credible without broader motion or campaign framing.

## Failure Triggers

- `Verified`: Any protected-surface edit.
- `Verified`: Any second section or second template.
- `Verified`: Any `project/blocks/` addition.
- `Verified`: Any custom JS-driven behavior.
- `Verified`: Any testimonial, rating, guarantee, contact-form, marquee, slider, or support-escalation vocabulary in the section or template.
