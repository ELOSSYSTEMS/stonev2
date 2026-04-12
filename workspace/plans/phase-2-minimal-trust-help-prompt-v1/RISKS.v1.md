# Phase 2 Minimal Trust Help Prompt Risks v1

## Primary Risks

1. `Inference`: Structural overlap, where the planned trust help prompt collapses into a thin restyle of the verified utility prompt.
2. `Inference`: Semantic drift, where a restrained help prompt expands into contact-form, service-escalation, or guarantee behavior.
3. `Inference`: Proof-system drift, where the prompt starts demanding logos, testimonials, ratings, or other heavier trust signals.
4. `Inference`: Protected-surface drift, where the section starts demanding shared-shell, runtime-JS, global-settings, or layout-level edits.
5. `Inference`: Scope creep, where implementation introduces helper snippets, files under `project/blocks/`, or extra templates to make the support pattern feel more complete.
6. `Inference`: Locale drift, where Hebrew and English schema additions stop matching structurally because of rushed naming or extra options.

## Mitigations

- `Verified`: Keep the implementation inside the approved five runtime files only.
- `Verified`: Keep the trust help prompt restrained, native-link-only, and non-JS.
- `Verified`: Reject contact forms, logos, testimonials, ratings, guarantees, service frameworks, and custom JS inside this slice.
- `Verified`: Reuse `stone-section-shell` unchanged and stop immediately if that becomes insufficient.
- `Verified`: Check locale subtree parity before accepting the unit.
- `Verified`: Stop and re-evaluate if the structure cannot stay meaningfully distinct from the verified utility prompt.

## Failure Triggers

- `Verified`: Any protected-surface edit.
- `Verified`: Any second section or second template.
- `Verified`: Any `project/blocks/` addition.
- `Verified`: Any custom JS-driven behavior.
- `Verified`: Any testimonial, logo, rating, guarantee, contact-form, or support-escalation vocabulary in the section or template.
- `Verified`: Any implementation that is not materially distinct enough from `stone-utility-prompt` to justify a separate trust-family proof.
