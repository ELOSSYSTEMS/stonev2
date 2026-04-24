# RTL Acceptance Checklist

Date: 2026-04-24

Status: docs/spec control artifact for `UNIT-SA-001`. No runtime files changed.

## Purpose

Make RTL and Hebrew-first behavior a gate for every Stone V2 section/block runtime unit.

## Universal Checklist

Every runtime unit must verify:

- Hebrew heading text does not overflow.
- Hebrew body text does not overlap controls.
- Mixed Hebrew/English/product-code text remains readable.
- `text-align: start/end` is preferred over `left/right`.
- Logical CSS properties are preferred: `margin-inline-*`, `padding-inline-*`, `inset-inline-*`, `border-inline-*`.
- Directional icons are mirrored only when semantic meaning requires it.
- Numeric values, prices, SKUs, and dimensions remain readable.
- Form labels, placeholders, errors, and buttons align correctly.
- No horizontal scroll appears on mobile.

## Component Checklist

| Component | RTL requirement | Fail condition |
| --- | --- | --- |
| Header | Menu, logo, icons, and utility actions align intentionally. | Navigation order becomes incoherent. |
| Mega menu | Columns and keyboard order remain logical. | Visual column order conflicts with focus order. |
| Mobile drawer | Drawer side is deliberate and documented. | Drawer opens from unintended edge. |
| Cart drawer | Totals and line item controls align correctly. | Totals or quantity controls overlap. |
| Search drawer | Query input and results support Hebrew search. | Query/results direction breaks. |
| Product gallery | Thumbnail direction and arrows are logical. | Previous/next labels invert incorrectly. |
| Variant picker | Swatches and labels align. | Swatch label association is unclear. |
| Quantity input | Plus/minus positions are understandable. | Controls reverse semantic meaning. |
| PDP info drawers | Trigger and drawer content preserve reading order. | Focus order does not match visual flow. |
| Facets/filter drawer | Checkboxes, labels, counts, and nested groups align. | Counts detach from labels. |
| Pagination | Previous/next labels and icons are semantically correct. | Icon mirroring changes meaning incorrectly. |
| Carousel/slideshow | Visual direction and controls are tested. | Arrow controls contradict reading direction. |
| Hotspots | Percentage coordinates remain stable. | Hotspots shift incorrectly under RTL. |
| Forms | Labels/errors align and are associated. | Error message cannot be associated with field. |
| Tables | Size/spec rows remain readable. | Numeric/value columns become ambiguous. |

## Required Test Content

Every derivative runtime unit should include at least:

- One long Hebrew heading.
- One long Hebrew sentence.
- One mixed Hebrew/English/SKU string.
- One long CTA label.
- One missing optional media/data case.

## Fail-Closed Rules

- If a directional component cannot be verified in RTL, stop.
- If a carousel/drawer/popover direction is unknown, stop.
- If long Hebrew text overlaps controls, the unit does not pass.
