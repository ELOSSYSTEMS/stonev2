# Phase 4 PDP Capability Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It follows `UNIT-174` PDP capability boundary.
- `Verified`: It does not authorize runtime edits by itself.

## Exact Future Runtime Files

- `Verified`: `project/sections/stone-pdp-size-chart.liquid`
- `Verified`: `project/sections/stone-pdp-spec-sheet.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/locales/en.schema.json`
- `Verified`: `project/locales/he.default.schema.json`

## Runtime Contract

- `Verified`: Add one shared optional PDP size chart section.
- `Verified`: Add one shared optional PDP spec sheet section.
- `Verified`: Scope both sections to product templates through section schema.
- `Verified`: Add neutral CSS only for those shared PDP capability sections.
- `Verified`: Add bilingual schema labels for both sections.
- `Verified`: Keep both sections no-JS.

## Size Chart Section Boundary

- `Verified`: Section handle should be `stone-pdp-size-chart`.
- `Verified`: Section should support heading, intro/body text, optional note, width mode, and spacing mode.
- `Verified`: Section should support repeatable row blocks.
- `Verified`: Row blocks should support size label, measurement value, and optional note.
- `Verified`: Section should not calculate fit, recommend sizes, or mutate variants.

## Spec Sheet Section Boundary

- `Verified`: Section handle should be `stone-pdp-spec-sheet`.
- `Verified`: Section should support heading, intro/body text, optional note, width mode, and spacing mode.
- `Verified`: Section should support repeatable spec row blocks.
- `Verified`: Row blocks should support group label, spec label, spec value, and optional note.
- `Verified`: Section should not implement recommendations, compatibility engines, inventory logic, or product metafield systems.

## Protected Surfaces

- `Verified`: No `project/templates/product.json` edit.
- `Verified`: No other template edit.
- `Verified`: No snippet edit.
- `Verified`: No JavaScript edit.
- `Verified`: No `stone-main-product` edit.
- `Verified`: No cart, checkout, billing-sensitive, recommendation, collection-filter, predictive-search, or hardening behavior.

## Verification Requirements

- `Verified`: Confirm only the exact five runtime files changed.
- `Verified`: Parse locale JSON.
- `Verified`: Parse section schemas for the two new sections.
- `Verified`: Confirm locale parity for `sections.stone_pdp_size_chart` and `sections.stone_pdp_spec_sheet`.
- `Verified`: Confirm no diff for templates, snippets, `project/assets/stone-runtime.js`, or `project/sections/stone-main-product.liquid`.
- `Verified`: Run required harness checks.

## Next Unit Boundary

- `Verified`: If this package passes, the next unit may implement only the exact five-file no-JS PDP capability proof.

## Readiness Verdict

- `Verified`: READY as a docs-only PDP capability runtime boundary.
- `Inference`: The next honest unit is the exact five-file no-JS implementation proof.
