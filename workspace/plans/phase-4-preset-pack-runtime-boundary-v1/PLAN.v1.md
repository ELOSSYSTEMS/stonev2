# Phase 4 Preset-Pack Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: `UNIT-167` passed and admitted only this runtime-boundary authoring unit.
- `Verified`: It does not authorize runtime edits by itself.

## Boundary Decision

- `Verified`: One narrow future runtime proof is admissible.
- `Verified`: The future proof may implement a shared global preset selector and shared tone/density hooks only.
- `Verified`: The future proof must not implement homepage sequence changes, per-preset host assignments, per-preset content, per-preset templates, or per-preset section files.
- `Verified`: Implementation remains blocked until a later runtime-proof unit is approved.

## Exact Future Runtime Files

- `Verified`: `project/layout/theme.liquid`
- `Verified`: `project/config/settings_schema.json`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/locales/en.schema.json`
- `Verified`: `project/locales/he.default.schema.json`

## Exact Future Runtime Scope

- `Verified`: Add one global shared setting for `stone_preset_pack`.
- `Verified`: Add exactly five preset options: `jewelry`, `apparel`, `electronics`, `beauty`, and `home_lifestyle`.
- `Verified`: Emit the selected preset as a body-level data attribute.
- `Verified`: Add shared CSS hooks for preset tone and density defaults through existing global shell tokens and selectors.
- `Verified`: Add bilingual editor labels and option labels for the preset selector.
- `Verified`: Keep the future implementation reversible by confining it to the exact five files above.

## Explicit Non-Scope For The Future Runtime Proof

- `Verified`: No `project/templates/*.json` edits.
- `Verified`: No `project/sections/*.liquid` edits.
- `Verified`: No `project/snippets/*.liquid` edits.
- `Verified`: No `project/assets/stone-runtime.js` edits.
- `Verified`: No homepage sequence mutation.
- `Verified`: No host assignment mutation.
- `Verified`: No live product, collection, blog, article, or search content creation.
- `Verified`: No predictive search, search suggestions, or search merchandising.
- `Verified`: No AJAX cart, cart drawer, checkout, billing-sensitive behavior, subscriptions, pickup/inventory complexity, recommendations, complementary products, quick add, or quick view.
- `Verified`: No collection companion or PDP companion behavior.
- `Verified`: No hardening or QA rollout.

## Candidate Runtime Domains To Evaluate

- `Verified`: `project/config/settings_schema.json` is admitted only for one shared global preset selector.
- `Verified`: `project/layout/theme.liquid` is admitted only to expose the selected preset as a body-level data attribute.
- `Verified`: `project/assets/stone-base.css` is admitted only for shared preset tone/density hooks.
- `Verified`: `project/locales/en.schema.json` and `project/locales/he.default.schema.json` are admitted only for bilingual labels tied to the preset selector.
- `Verified`: Existing canonical templates are not admitted for the future proof.

## Hard Blocks

- `Verified`: Per-preset templates are blocked.
- `Verified`: Per-preset section files are blocked.
- `Verified`: JavaScript, predictive search, cart behavior, checkout/billing-sensitive behavior, recommendations, collection companion behavior, PDP companion behavior, and hardening are blocked.

## Rejected Options

1. `Verified`: Broad preset rollout is rejected because it would require template, section, content, and behavior decisions outside this boundary.
2. `Verified`: Homepage sequence implementation is rejected because static template JSON changes would not honestly express switchable per-preset runtime behavior.
3. `Verified`: Host assignment implementation is rejected because it would require template or content mutation beyond a shared global setting.
4. `Verified`: Per-preset architecture is rejected because it conflicts with the shared-family and shared-settings rule.

## Acceptance Criteria

1. `Verified`: State exact future runtime files.
2. `Verified`: State exact admitted runtime behavior.
3. `Verified`: State exact non-scope.
4. `Verified`: Keep this unit docs-only.
5. `Verified`: Route only to the exact five-file runtime proof if checks pass.

## Intended Next Step If This Unit Passes

- `Verified`: Execute one bounded five-file preset-pack runtime proof using only the exact files listed above.

## Readiness Verdict

- `Verified`: READY as a docs-only preset-pack runtime-boundary package.
- `Inference`: The next honest unit is the exact five-file runtime proof, not broad preset rollout.
