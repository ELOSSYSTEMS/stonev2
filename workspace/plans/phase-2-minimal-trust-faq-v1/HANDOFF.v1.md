# Phase 2 Minimal Trust FAQ Handoff v1

## Intent

- `Verified`: The next separately governed runtime unit should implement one bounded minimal trust FAQ slice.
- `Verified`: The slice must stay restrained, isolated, bilingual, and non-JS.

## Allowed Runtime Files

- `project/assets/stone-base.css`
- `project/sections/stone-trust-faq.liquid`
- `project/templates/page.stone-runtime-trust-faq.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`
- `state/`
- `workspace/handoff/CURRENT_HANDOFF.md`

## Implementation Intent

- `Inference`: Add neutral CSS primitives for a restrained FAQ stack.
- `Inference`: Add one trust-and-support FAQ section that reuses `stone-section-shell` unchanged.
- `Inference`: Add one neutral alternate page template that mounts only the new section.
- `Inference`: Add paired Hebrew and English locale schema strings for the new section.

## Do Not Do

- `Verified`: Do not edit `project/snippets/stone-section-shell.liquid`.
- `Verified`: Do not edit `project/layout/theme.liquid`.
- `Verified`: Do not edit `project/assets/stone-runtime.js`.
- `Verified`: Do not edit `project/config/settings_schema.json`.
- `Verified`: Do not add files under `project/blocks/`.
- `Verified`: Do not add a second section or second template.
- `Verified`: Do not add testimonials, logo proofs, contact flows, support escalation, campaign framing, or custom JS.

## Verification Intent

- `Verified`: Confirm the runtime diff stays inside the approved five-file boundary.
- `Verified`: Confirm the section remains a bounded FAQ proof and does not broaden into a larger trust/support system.
- `Verified`: Confirm shared-shell reuse, template neutrality, and locale parity.
