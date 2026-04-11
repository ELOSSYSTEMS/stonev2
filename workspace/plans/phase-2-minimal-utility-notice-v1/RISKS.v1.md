# Phase 2 Minimal Utility Notice Risks v1

## Primary Risks

1. `Inference`: Semantic drift, where a neutral notice turns into a promo, trust, support, or campaign surface.
2. `Inference`: Redundancy drift, where the slice becomes an unbounded variant of the existing utility richtext section instead of a bounded contained-emphasis proof.
3. `Inference`: Protected-surface drift, where the section starts demanding shared-shell, runtime-JS, global-settings, or layout-level edits.
4. `Inference`: Scope creep, where implementation introduces blocks, icons, severity states, or extra templates to make the notice feel more substantial.
5. `Inference`: Locale drift, where Hebrew and English schema additions stop matching structurally because of rushed naming or extra options.

## Mitigations

- `Verified`: Keep the implementation inside the approved five runtime files only.
- `Verified`: Keep the notice neutral and short-form, with restrained containment rather than loud alert semantics.
- `Verified`: Reject actions, icons, severity coding, badges, and announcement behavior inside this slice.
- `Verified`: Reuse `stone-section-shell` unchanged and stop immediately if that becomes insufficient.
- `Verified`: Check locale subtree parity before accepting the unit.

## Failure Triggers

- `Verified`: Any protected-surface edit.
- `Verified`: Any second section or second template.
- `Verified`: Any `project/blocks/` addition.
- `Verified`: Any JS-driven behavior.
- `Verified`: Any trust, support, promo, campaign, or severity-alert vocabulary in the section or template.
