# Phase 4 PDP Capability Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It follows `UNIT-173` section/block stabilization frontier.
- `Verified`: It does not authorize runtime edits.

## Boundary Decision

- `Verified`: PDP preset differences should be built from shared optional PDP capabilities, not per-preset PDP architectures.
- `Verified`: Apparel size chart should be treated as a shared optional PDP capability.
- `Verified`: Electronics spec sheet should be treated as a shared optional PDP capability.
- `Verified`: Presets may later enable or omit those shared capabilities.
- `Verified`: Final preset composition remains deferred.

## Capability Classification

| Capability | Verdict | Reason |
| --- | --- | --- |
| Main product form | `Verified`: Existing capability | `stone-main-product` already provides media, title, vendor/type, price, variants, quantity, native product form, and description. |
| Size chart | `Verified`: New shared PDP capability needed | Existing sections do not provide table-like sizing rows, measurement notes, or fit guidance as a stable PDP capability. |
| Spec sheet | `Verified`: New shared PDP capability needed | Existing utility key-value list can approximate specs, but electronics needs a stabilized PDP-specific structured spec surface. |
| Materials and care | `Inference`: Reuse first | Can initially reuse size chart, spec sheet, key-value list, rich text, or FAQ patterns depending on product type; no dedicated section is justified yet. |
| Fit and compatibility notes | `Inference`: Reuse first | Can initially reuse rich text, notice, key-value list, or FAQ surfaces; no dedicated section is justified yet. |
| Support and reassurance | `Verified`: Existing shared capability | Trust FAQ, help prompt, reassurance lane, testimonial, logo rail, and stat strip already exist as shared support surfaces. |
| Recommendations and related products | `Verified`: Blocked | Recommendation behavior was repeatedly kept out of scope and should not enter through PDP capability stabilization. |
| Cart or checkout reassurance | `Verified`: Blocked | Cart, checkout, billing-sensitive, and compliance-sensitive behavior remain blocked. |

## Shared PDP Capability Rules

- `Verified`: New PDP capability sections must be shared sections.
- `Verified`: New PDP capability sections must not be named or hard-coded by preset.
- `Verified`: Preset specificity must happen later through assignment, not through separate architectures.
- `Verified`: The first future runtime boundary should focus only on section availability, schema, bilingual labels, and neutral styling.
- `Verified`: The first future runtime boundary must not mutate `product.json` composition automatically.

## Candidate Future Shared Sections

### `stone-pdp-size-chart`

- `Verified`: Purpose is apparel sizing and measurement guidance.
- `Verified`: It should be optional and reusable.
- `Verified`: It should support heading, intro text, chart rows, measurement labels, and fit notes.
- `Inference`: It should use blocks for rows so merchants can adapt labels per product family.

### `stone-pdp-spec-sheet`

- `Verified`: Purpose is structured technical or product specifications.
- `Verified`: It should be optional and reusable.
- `Verified`: It should support heading, intro text, grouped key-value rows, and optional supporting note.
- `Inference`: It should use blocks for spec rows and possibly a group label, while staying no-JS.

## Preset Implications Later

- `Verified`: Apparel may later use `stone-pdp-size-chart`.
- `Verified`: Electronics may later use `stone-pdp-spec-sheet`.
- `Verified`: Jewelry, beauty, and home-lifestyle should not receive size chart or spec sheet by default unless a later preset assignment package explicitly justifies it.
- `Verified`: These implications do not yet mutate templates or starter content.

## Non-Scope

- `Verified`: No runtime implementation.
- `Verified`: No final preset assignment.
- `Verified`: No `product.json` composition change.
- `Verified`: No product metafield schema.
- `Verified`: No recommendations, related products, complementary products, subscriptions, pickup/inventory complexity, cart, checkout, billing-sensitive behavior, predictive search, collection filters, or hardening.

## Next Unit Boundary

- `Verified`: The next unit should stay docs-only.
- `Verified`: The next unit should state an exact future runtime file boundary for the two shared PDP capability sections or stop in a governed block.
- `Verified`: The next unit must decide exact files, locale keys, schema shape, and protected-surface checks before implementation.

## Readiness Verdict

- `Verified`: READY as a docs-only PDP capability boundary.
- `Inference`: The next honest unit is a docs-only PDP capability runtime-boundary package for shared size chart and spec sheet sections.
