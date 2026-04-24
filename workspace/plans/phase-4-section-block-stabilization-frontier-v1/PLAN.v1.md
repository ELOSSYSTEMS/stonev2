# Phase 4 Section Block Stabilization Frontier v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: It follows the owner decision recorded in `UNIT-172`.
- `Verified`: It does not authorize runtime edits.

## Owner Direction

- `Verified`: Stabilize what blocks, sections, PDP capabilities, and collection/filter capabilities exist before deciding final per-preset composition.
- `Verified`: Presets are expected to differ by enabled blocks and sections later.
- `Verified`: Apparel should be able to support PDP size-chart capability.
- `Verified`: Electronics should be able to support PDP spec-sheet capability.
- `Verified`: Collection pages and filters also need stabilization before final preset assignment.

## Current Runtime Surface

### Canonical Hosts

- `Verified`: `project/templates/index.json` exists.
- `Verified`: `project/templates/product.json` exists.
- `Verified`: `project/templates/collection.json` exists.
- `Verified`: `project/templates/blog.json` exists.
- `Verified`: `project/templates/article.json` exists.
- `Verified`: `project/templates/search.json` exists.

### Host Main Sections

- `Verified`: `stone-main-product` renders product media, title, vendor, type, price, native variant selector, native quantity, native product form, and description.
- `Verified`: `stone-main-collection` renders collection title, description, product count, native sort, product grid, empty state, and pagination.
- `Verified`: `stone-main-blog`, `stone-main-article`, and `stone-main-search` provide editorial/search hosts.

### Existing Reusable Families

- `Verified`: Utility sections exist for rich text, block stack, layout composition, action group, key-value list, divider, notice, prompt, and spacer.
- `Verified`: Story/editorial sections exist for hero opening, story split, process steps, editorial quote, content-card strip, and blog/article highlights.
- `Verified`: Merchandising sections exist for featured collection grid, category entry grid, category media band, curated product trio, featured product showcase, product context card, product pair comparison, and collection context card.
- `Verified`: Shoppable media sections exist for story, focus, drawer, overlay, and motion story.
- `Verified`: Trust/support sections exist for FAQ, help prompt, logo rail, reassurance lane, stat strip, and testimonial.
- `Verified`: Snippets exist for section shell, product card, collection card, global header, and global footer.

## Capability Gap Ledger

### PDP Capability Gaps

- `Verified`: No dedicated size-chart section exists.
- `Verified`: No dedicated spec-sheet section exists.
- `Verified`: No dedicated materials/care table section exists.
- `Verified`: No preset-aware PDP block assignment exists.
- `Verified`: `stone-main-product` has settings but no block architecture.
- `Inference`: `stone-utility-key-value-list` can approximate a spec list, but it is not yet stabilized as a PDP spec-sheet capability.
- `Inference`: A size chart should be a shared PDP capability section, not an apparel-only architecture fork.
- `Inference`: A spec sheet should be a shared PDP capability section, not an electronics-only architecture fork.

### Collection Capability Gaps

- `Verified`: `stone-main-collection` has native sort.
- `Verified`: `stone-main-collection` does not render Shopify collection filters or facets.
- `Verified`: No collection filter section or snippet exists.
- `Verified`: No preset-aware collection control policy exists.
- `Inference`: Collection filters should be stabilized as a shared native collection capability before any preset-specific filter differences are assigned.

### Preset Assignment Gaps

- `Verified`: The preset selector exists.
- `Verified`: The selector does not assign sections, blocks, filters, or content.
- `Verified`: Final preset composition remains deferred.
- `Inference`: Presets should eventually differ by enabling shared capabilities, not by creating separate per-preset templates.

## Stabilization Rule

- `Verified`: Stabilize the shared capability first.
- `Verified`: Then decide which presets use that capability.
- `Verified`: Then decide starter content.
- `Verified`: Then consider implementation.
- `Verified`: Do not create per-preset architecture as a shortcut.

## Recommended Stabilization Order

1. `Verified`: Author a docs-only PDP capability boundary for shared PDP add-on modules.
2. `Verified`: Include size chart, spec sheet, materials/care, support/reassurance, and compatibility/fit notes as candidate capabilities.
3. `Verified`: Decide which capabilities need dedicated sections, which can reuse existing utility/trust sections, and which remain blocked.
4. `Verified`: After PDP capability stabilization, author a docs-only collection filter/control boundary.
5. `Verified`: After PDP and collection capability surfaces are stabilized, return to preset assignment.

## Next Unit Boundary

- `Verified`: The next unit should be docs-only.
- `Verified`: The next unit should focus on PDP capability boundary only.
- `Verified`: It should decide whether size chart and spec sheet are new shared PDP capability sections, reused existing sections, or blocked.
- `Verified`: It must not implement runtime files.

## Non-Scope

- `Verified`: No runtime edits.
- `Verified`: No final preset composition.
- `Verified`: No template JSON mutation.
- `Verified`: No section implementation.
- `Verified`: No collection filter implementation.
- `Verified`: No predictive search.
- `Verified`: No cart, checkout, billing-sensitive, recommendation, or hardening behavior.

## Readiness Verdict

- `Verified`: READY as a docs-only stabilization frontier.
- `Inference`: The next honest unit is a docs-only PDP capability boundary, not preset composition or implementation.
