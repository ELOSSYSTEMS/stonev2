# Phase 2 Minimal Trust Testimonial Handoff v1

## Intent

- `Verified`: The next separately governed runtime unit should implement one bounded minimal trust-testimonial slice.
- `Verified`: The slice must stay restrained, isolated, bilingual, static, and non-JS.

## Allowed Runtime Files

- `project/assets/stone-base.css`
- `project/sections/stone-trust-testimonial.liquid`
- `project/templates/page.stone-runtime-trust-testimonial.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Implementation Intent

- `Inference`: Add neutral CSS primitives for a restrained trust testimonial section.
- `Inference`: Add one trust-and-support testimonial section that reuses `stone-section-shell` unchanged.
- `Inference`: Add one neutral alternate page template that mounts only the new section.
- `Inference`: Add paired Hebrew and English locale schema strings for the new section.

## Do Not Do

- `Verified`: Do not edit `project/snippets/stone-section-shell.liquid`.
- `Verified`: Do not edit `project/layout/theme.liquid`.
- `Verified`: Do not edit `project/assets/stone-runtime.js`.
- `Verified`: Do not edit `project/config/settings_schema.json`.
- `Verified`: Do not add files under `project/blocks/`.
- `Verified`: Do not add a second section or second template.
- `Verified`: Do not add stars, ratings, review aggregates, guarantees, avatars, carousel behavior, slider behavior, marquee motion, contact-form behavior, or custom JS.

## Verification Intent

- `Verified`: Confirm the runtime diff stays inside the approved five-file boundary.
- `Verified`: Confirm the section remains a bounded trust testimonial proof and does not broaden into a larger review system.
- `Verified`: Confirm shared-shell reuse, template neutrality, locale parity, and static behavior.
