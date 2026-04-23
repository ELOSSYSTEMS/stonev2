# Phase 4 Preset-Pack Runtime Boundary v1

## Status

- `Verified`: This package is seeded for a later docs-only unit.
- `Verified`: It is conditional on `UNIT-167` passing.
- `Verified`: It does not authorize runtime edits by itself.

## Required Decision

- `Verified`: State one exact future preset-pack runtime file boundary or stop in a governed block.
- `Verified`: State which shared settings domains can carry preset identity, preset defaults, and host assignments.
- `Verified`: State which fields remain blocked or placeholder-bound.
- `Verified`: Keep implementation out of scope until this boundary passes.

## Candidate Runtime Domains To Evaluate

- `Inference`: `project/config/settings_schema.json` may be a candidate only for global shared preset selection or defaults.
- `Inference`: Existing canonical templates may be candidates only if the package can keep file scope exact and shared.
- `Inference`: Locale files may be candidates only for bilingual editor labels tied to approved shared settings.
- `Inference`: Existing CSS may be a candidate only for shared tone/density defaults, not per-preset architecture.

## Hard Blocks

- `Verified`: Per-preset templates are blocked.
- `Verified`: Per-preset section files are blocked.
- `Verified`: JavaScript, predictive search, cart behavior, checkout/billing-sensitive behavior, recommendations, collection companion behavior, PDP companion behavior, and hardening are blocked.
