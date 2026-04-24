# Promotion Surface Taxonomy

Date: 2026-04-24

Status: docs/spec control artifact for `UNIT-SA-001`. No runtime files changed.

## Purpose

Define promotions as a cross-surface system rather than one banner section.

## Promotion Family

| Surface | Candidate file | Priority | Block model | Placement | Runtime status |
| --- | --- | ---: | --- | --- | --- |
| Announcement bar | `project/sections/stone-announcement-bar.liquid` | P0 | SECTION_BLOCK_SECTION | Header group | MISSING/PARTIAL |
| Countdown bar | `project/sections/stone-countdown-bar.liquid` | P0/P1 | SECTION_BLOCK_SECTION | Header/home/campaign | MISSING |
| Discount bar | `project/sections/stone-discount-bar.liquid` | P0/P1 | SECTION_BLOCK_SECTION | Header/home/cart | MISSING |
| Promo banner | `project/sections/stone-promo-banner.liquid` | P0 | SECTION_BLOCK_SECTION | Home/page/collection | MISSING |
| Promo tile grid | `project/sections/stone-promo-tile-grid.liquid` | P0 | SECTION_BLOCK_SECTION | Home/page/collection | MISSING |
| Promo popup | `project/sections/stone-promo-popup.liquid` | P1 | SECTION_BLOCK_SECTION | Overlay group | MISSING |
| In-menu promo | header/mega-menu block | P0/P1 | SECTION_BLOCK_SECTION | Mega menu | MISSING |
| Collection promo banner | `project/sections/stone-collection-promo-banner.liquid` | P0 | SECTION_BLOCK_SECTION | Collection | MISSING |
| Collection grid promo card | `project/sections/stone-collection-grid-promo-card.liquid` | P0 | SECTION_BLOCK_SECTION | Collection grid | MISSING |
| Product media promo overlay | PDP/media block | P1 | SECTION_BLOCK_SECTION | PDP gallery | MISSING |
| Footer promo block | footer block | P1 | SECTION_BLOCK_SECTION | Footer group | MISSING |
| Cart promo message | `project/sections/stone-cart-promo-message.liquid` | P0/P1 | SECTION_BLOCK_SECTION | Cart drawer/page | MISSING |

## Shared Fields

Every promotion surface should define whether it supports:

- eyebrow/badge
- heading
- subheading
- body
- image
- video
- link target
- primary CTA
- secondary CTA
- color scheme
- dismissibility
- start/end scheduling
- market/audience condition
- mobile layout variant
- RTL alignment

## Required Defaults

- No fake sale claims.
- No hardcoded merchant-specific copy.
- Missing image must render a safe text-only layout or editor-only placeholder.
- Dismissed popup must not permanently trap focus.

## Fail-Closed Rules

- If campaign scheduling is requested but storage/timezone policy is absent, defer scheduling.
- If audience targeting is requested without data policy, defer targeting.
- If popup behavior lacks focus/ESC/return-focus tests, block runtime implementation.
