# Phase 4 Preset-Pack Runtime Proof v1

## Status

- `Verified`: This package is seeded for a later runtime unit.
- `Verified`: It is conditional on `UNIT-168` passing.

## Exact Runtime Files

- `Verified`: `project/layout/theme.liquid`
- `Verified`: `project/config/settings_schema.json`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/locales/en.schema.json`
- `Verified`: `project/locales/he.default.schema.json`

## Runtime Contract

- `Verified`: Add one shared `stone_preset_pack` selector with five roadmap preset options.
- `Verified`: Emit the selected preset as a body-level data attribute.
- `Verified`: Add shared CSS tone/density hooks for the five options.
- `Verified`: Add bilingual labels.
- `Verified`: Keep templates, sections, snippets, JavaScript, homepage sequence mutation, host assignment mutation, predictive search, cart behavior, recommendations, companion behavior, and hardening out of scope.
