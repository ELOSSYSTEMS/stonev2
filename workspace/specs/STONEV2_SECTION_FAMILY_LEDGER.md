# STONEV2 Section Family Ledger

## Status

- `Verified`: This ledger is a governed Phase 1 canon artifact derived from the five architecture documents in `docs/architecture/`.
- `Inference`: Unless stated otherwise, the family definitions and governance rules below are normalized design decisions inferred from those source documents.

## Platform Posture

- `Verified`: Stone V2 is intended to be a feature-maximal RTL-native developer platform rather than a narrow starter theme.
- `Verified`: Broad section coverage is a core requirement.
- `Verified`: One-off section sprawl is not acceptable.
- `Inference`: The section family system must create breadth through normalized families, shared block families, and presets instead of uncontrolled file growth.

## Section Family Map

| Section Family | Purpose | Likely Use Cases | Likely Reusable Block Families | Variant And Preset Logic | Surface Fit |
| --- | --- | --- | --- | --- | --- |
| Hero and opening family | Establish the first scroll impression and primary CTA. | Store launch hero, campaign hero, editorial opener, product-led landing entry. | `eyebrow`, `heading`, `richtext`, `button group`, `image`, `video`, `gallery item`, `product signal`, `trust cue`. | Prefer one normalized hero family with presets such as media hero, split hero, editorial hero, slideshow hero, product-led hero, and video hero. Use presets for tone, layout emphasis, and media ratio before creating a new file. | Homepage-first. Can support collection landers, PDP campaign entries, and editorial landing pages. |
| Story and editorial family | Explain brand story, process, category context, or product narrative. | About sections, ingredient stories, founder notes, process timelines, visual storytelling. | `heading`, `richtext`, `quote`, `list`, `stat`, `image`, `video`, `media card`, `stack`, `columns`, `divider`. | Use shared structural variants such as image-with-text, split editorial, layered media story, process timeline, and quote-led editorial. Prefer style variants and content presets over new files. | Homepage, editorial and blog, select collection and PDP storytelling. |
| Merchandising family | Drive category and product discovery through reusable selling structures. | Featured collection, category-entry grid, curated product rail, comparison-led merchandising. | `heading`, `richtext`, `button group`, `product card`, `offer callout`, `feature-detail`, `group`, `columns`. | Keep merchandising variants inside one family where structure stays grid, rail, or comparison-driven. Use presets for category-first, promotion-first, or density-first modes. | Homepage-first, collection-supporting, selective PDP cross-sell support. |
| Shoppable media family | Combine inspiration media with purchasable context. | Shop-the-look, hotspot storytelling, image-led bundles, editorial commerce. | `image`, `video`, `hotspot item`, `product card`, `product signal`, `offer callout`, `drawer-trigger group`. | Treat hotspot behavior, drawer behavior, and image-first storytelling as configurable variants of one family until the interaction model becomes materially different. | Homepage, campaign landing, selective PDP support, limited editorial commerce. |
| Trust and support family | Reduce buyer hesitation and reinforce local credibility. | Testimonials, logo rails, reassurance lanes, FAQ, contact prompts, service explanations. | `heading`, `richtext`, `quote`, `logo item`, `trust cue`, `accordion item`, `button group`, `stat`. | Consolidate proof, reassurance, and support layouts through presets such as testimonial rail, logo proof strip, FAQ stack, and help prompt. | Homepage, collection, PDP, editorial, proof/trust/support. |
| Content and blog family | Surface editorial content and blog discovery. | Blog highlights, article teaser grids, editorial strips, campaign journals. | `heading`, `richtext`, `quote`, `image`, `media card`, `button group`, `columns`, `stack`. | Use shared content-card and teaser structures with presets for hero article, strip, or grid density. | Editorial and blog first, with homepage support. |
| Collection companion family | Support collection templates with contextual merchandising and guidance. | Collection banner, collection support strip, curated collection explainer, navigation aids. | `heading`, `richtext`, `image`, `button group`, `trust cue`, `feature-detail`, `divider`, `spacer`. | Keep collection-specific wrappers in this family and use presets for banner, support strip, and category explainer modes. | Collection pages first, selective homepage reuse. |
| PDP companion family | Support product detail pages with reassurance, comparison, and recommendation context. | PDP reassurance bands, related products, complementary products, product detail explainer blocks. | `heading`, `richtext`, `trust cue`, `feature-detail`, `product card`, `offer callout`, `accordion item`, `divider`. | Use presets for reassurance, recommendation, complementary, and product-detail support before splitting files. | PDP first, selective homepage and campaign reuse. |
| Utility and layout support family | Supply non-hero spacing, separators, utility prompts, and structural helpers without becoming product storytelling sections. | Spacer lanes, divider bands, utility prompts, simple notices, structural grouping. | `group`, `stack`, `columns`, `divider`, `spacer`, `richtext`, `button group`. | Keep this family intentionally narrow and utility-only. New files are justified only when a utility need introduces materially different behavior instead of simple layout assistance. | Utility-only. May appear on homepage, collection, PDP, or editorial surfaces as support, not as primary storytelling. |

## Family Coverage Summary

- `Verified`: Homepage-first families: hero and opening, story and editorial, merchandising, shoppable media, trust and support, content and blog.
- `Verified`: Collection-supporting families: merchandising, trust and support, collection companion, selective hero and opening, selective story and editorial.
- `Verified`: PDP-supporting families: PDP companion, trust and support, merchandising, selective hero and opening, selective shoppable media.
- `Verified`: Editorial and blog-supporting families: story and editorial, content and blog, selective hero and opening, selective trust and support.
- `Verified`: Proof, trust, and support families: trust and support is primary; PDP companion and collection companion may host trust-oriented presets where appropriate.
- `Verified`: Utility-only families: utility and layout support.

## Reusable Block Family Policy

- `Inference`: Reusable block families should remain stable across section families so Stone V2 gains breadth without duplicating logic.
- `Inference`: Content block families should remain the default content spine: `eyebrow`, `heading`, `richtext`, `list`, `stat`, `quote`, `button group`.
- `Inference`: Media block families should remain the default media spine: `image`, `video`, `gallery item`, `hotspot item`, `logo item`, `media card`.
- `Inference`: Commerce block families should remain the default commerce spine: `product card`, `trust cue`, `feature-detail`, `offer callout`, `product signal`.
- `Inference`: Layout block families should remain the default composition spine: `group`, `stack`, `columns`, `tabs`, `accordion item`, `spacer`, `divider`.

## New File Versus Preset Rules

- `Verified`: Create a new section file only when the structural behavior is materially different from the existing family.
- `Verified`: Use a preset when the underlying structure is the same and only the default content pattern, tone, density, or merchandising emphasis changes.
- `Verified`: Use a style variant when the structure is unchanged and the difference is visual treatment, alignment, media ratio, or spacing behavior.
- `Verified`: Use shared block configuration when the difference is local content composition within an existing family.
- `Inference`: Interaction differences justify a new file only when they cannot be represented by existing settings, blocks, or structural slots without making the family incoherent.

## Anti-Chaos Rules

- `Verified`: Repeated visual concepts must use shared family names and shared block family names.
- `Verified`: Family growth must come from presets, variants, and shared block families before new files are introduced.
- `Verified`: Section names should map to a small stable vocabulary that developers can reuse across presets and industries.
- `Verified`: Collection companion and PDP companion families must stay distinct from homepage-first storytelling even when they share blocks.
- `Inference`: A family should be considered unstable if a new variant introduces unique settings names, unique block semantics, and unique layout rules at the same time.
- `Inference`: Utility and layout support sections should remain supportive infrastructure and must not become a backdoor for bespoke section sprawl.

## Assumption Audit

- `Verified`: This ledger does not prescribe final runtime file names under `project/`.
- `Inference`: Preset strategy remains a later canon or planning artifact and is only referenced here where it affects family logic.
- `Inference`: Specific theme editor settings and schema fields are intentionally deferred to `STONEV2_SETTINGS_TAXONOMY.md` and `STONEV2_BILINGUAL_SCHEMA_STRATEGY.md`.
