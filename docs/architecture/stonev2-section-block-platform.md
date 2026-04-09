# Stone V2 Section And Block Platform

## Status

- `Verified`: This document defines the section and block platform direction for Stone V2.
- `Verified`: This document is doc-only. It does not authorize runtime edits by itself.

## Scope

- `Verified`: Goal is to define the breadth and structure of the section and block system.
- `Verified`: This document covers:
  - section-family strategy
  - block-family strategy
  - variant philosophy
  - control expectations
  - anti-chaos rules

## Core principle

- `Inference`: Stone V2 should be **feature-maximal but system-driven**.
- `Inference`: The platform should be broad enough for repeated client work, but normalized enough to remain maintainable.

## Section-family requirement

Stone V2 should include normalized families for at least the following areas:

### 1. Hero and opening families

- `Inference`: media hero
- `Inference`: split hero
- `Inference`: editorial hero
- `Inference`: slideshow hero
- `Inference`: product-led hero
- `Inference`: video hero

### 2. Story and editorial families

- `Inference`: image-with-text variants
- `Inference`: split editorial sections
- `Inference`: layered media storytelling
- `Inference`: process or timeline sections
- `Inference`: quote-led editorial sections

### 3. Merchandising families

- `Inference`: featured collection variants
- `Inference`: category-entry grids
- `Inference`: image-led category bands
- `Inference`: curated product rails
- `Inference`: featured product sections
- `Inference`: comparison-friendly product sections

### 4. Shoppable media families

- `Inference`: shop the look
- `Inference`: hotspot media
- `Inference`: hotspot with drawer
- `Inference`: image-first shoppable story layouts

### 5. Trust and support families

- `Inference`: testimonials
- `Inference`: logo rails
- `Inference`: reassurance lanes
- `Inference`: FAQ variants
- `Inference`: help and contact prompts

### 6. Content and blog families

- `Inference`: blog highlights
- `Inference`: editorial strips
- `Inference`: article teaser grids

### 7. Collection and PDP companion families

- `Inference`: collection banners
- `Inference`: collection support strips
- `Inference`: recommendation rails
- `Inference`: PDP reassurance blocks
- `Inference`: related and complementary product families

## Block-family requirement

Stone V2 should expose reusable block families rather than relying only on monolithic sections.

### Content blocks

- `Inference`: eyebrow
- `Inference`: heading
- `Inference`: richtext
- `Inference`: list
- `Inference`: stat
- `Inference`: quote
- `Inference`: button group

### Media blocks

- `Inference`: image
- `Inference`: video
- `Inference`: gallery item
- `Inference`: hotspot item
- `Inference`: logo item
- `Inference`: media card

### Commerce blocks

- `Inference`: product card
- `Inference`: trust cue
- `Inference`: feature-detail
- `Inference`: offer callout
- `Inference`: product signal

### Layout blocks

- `Inference`: group
- `Inference`: stack
- `Inference`: columns
- `Inference`: tabs
- `Inference`: accordion item
- `Inference`: spacer
- `Inference`: divider

## Variant philosophy

- `Inference`: Prefer one strong normalized family with many presets and options over many nearly-identical one-off section files.
- `Inference`: New files should be introduced only when the structural behavior is materially different.

## Required control depth

Major families should expose shared controls for at least:

- `Inference`: color scheme
- `Inference`: width and container mode
- `Inference`: density and spacing
- `Inference`: alignment
- `Inference`: desktop and mobile layout behavior
- `Inference`: border, radius, and shadow styles
- `Inference`: typography scale
- `Inference`: media ratio and crop mode
- `Inference`: CTA layout and emphasis
- `Inference`: visibility and ordering rules

## Anti-chaos rules

- `Inference`: repeated settings should use shared naming and setting shapes
- `Inference`: repeated visual concepts should map to a shared design-system vocabulary
- `Inference`: blocks should be reused across section families whenever practical
- `Inference`: feature breadth should come from families plus presets, not one-off proliferation

## Final recommendation

- `Verified`: Build Stone V2 as a broad section and block platform.
- `Inference`: Give developers large family coverage and strong editor control without sacrificing naming discipline or maintainability.
