# Phase 4 Preset-Pack Runtime Boundary Handoff v1

- `Verified`: This package is docs-only and does not authorize runtime edits by itself.
- `Verified`: The exact future runtime boundary is limited to `project/layout/theme.liquid`, `project/config/settings_schema.json`, `project/assets/stone-base.css`, `project/locales/en.schema.json`, and `project/locales/he.default.schema.json`.
- `Verified`: The future proof may add one shared `stone_preset_pack` selector, five preset options, one body-level data attribute, shared CSS tone/density hooks, and bilingual labels.
- `Verified`: The future proof must not edit templates, sections, snippets, or JavaScript.
- `Verified`: Homepage sequence mutation, host assignment mutation, per-preset architecture, predictive search, cart behavior, recommendations, companion behavior, checkout/billing-sensitive behavior, and hardening remain blocked.
- `Inference`: If this package passes, the next unit may execute the exact five-file runtime proof.
