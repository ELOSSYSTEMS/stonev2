# Phase 2 Minimal Story Split Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to define the next safe Phase 2 runtime slice after the verified trust-stat-strip proof.

## Objective

- `Verified`: Define the next smallest useful runtime slice after the verified trust-stat-strip proof without broadening into homepage composition, preset work, collection work, PDP work, blog feeds, article grids, video systems, multi-region storytelling systems, or shoppable media behavior.
- `Verified`: Keep the next slice limited to:
  - one bounded base-layer CSS extension in `project/assets/stone-base.css`
  - one new story-and-editorial section file in `project/sections/stone-story-split.liquid`
  - one neutral alternate page template in `project/templates/page.stone-runtime-story-split.json`
  - paired locale updates in `project/locales/he.default.schema.json` and `project/locales/en.schema.json`
- `Verified`: Keep shared-shell edits, runtime-JS edits, global settings edits, snippet work, block-file work, second-section work, and second-template work out of scope.

## Canonical Inputs

- `Verified`: `docs/architecture/stonev2-repo-basis.md`
- `Verified`: `docs/architecture/stonev2-product-thesis.md`
- `docs/architecture/stonev2-section-block-platform.md`
- `docs/architecture/stonev2-settings-bilingual-editor.md`
- `docs/architecture/stonev2-build-roadmap.md`
- `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md`
- `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md`
- `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md`
- `Verified`: the completed Phase 2 plan packages already present under `workspace/plans/`
- `project/assets/stone-base.css`
- `project/snippets/stone-section-shell.liquid`
- `state/ORCHESTRATION_STATE.md`
- `state/NEXT_ACTION.md`

## Next Bounded Runtime Slice

- `Verified`: The next bounded runtime slice is a **minimal story split** slice.
- `Inference`: This slice should prove one bounded story-and-editorial behavior by rendering a restrained split layout with one image, one text body, and optional eyebrow only.
- `Inference`: The section should stay bounded by supporting one static image-and-text split without introducing video, gallery behavior, sliders, tabs, accordions, overlays, hotspots, or JavaScript-driven interaction.

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/assets/stone-base.css` | `Inference` | Extend the verified base layer with neutral story-split primitives only, such as two-column layout, media ratio handling, and restrained editorial spacing. |
| `project/sections/stone-story-split.liquid` | `Inference` | Implement one bounded story-and-editorial section that reuses the verified shared section shell and renders one restrained static media-and-copy split only. |
| `project/templates/page.stone-runtime-story-split.json` | `Inference` | Add one neutral alternate page template that mounts only the new story split section for isolated runtime validation. |
| `project/locales/he.default.schema.json` | `Inference` | Add Hebrew section-name, setting-label, option-label, and help-text coverage for the new story split section. |
| `project/locales/en.schema.json` | `Inference` | Add English schema coverage structurally aligned with the Hebrew additions for the same section. |

## Explicit Runtime Exclusions

- `Verified`: No edits to `project/layout/theme.liquid` in this slice.
- `Verified`: No edits to `project/assets/stone-runtime.js` in this slice.
- `Verified`: No edits to `project/config/settings_schema.json` in this slice.
- `Verified`: No edits to `project/snippets/stone-section-shell.liquid` in this slice.
- `Verified`: No files under `project/blocks/` in this slice.
- `Verified`: No new snippet file in this slice.
- `Verified`: No second section file in this slice.
- `Verified`: No second template file in this slice.
- `Verified`: No homepage work, no preset work, no collection work, no PDP work, and no blog or article feed work in this slice.
- `Verified`: No hero, merchandising, shoppable-media, trust-and-support, collection-companion, or PDP-companion family work in this slice.
- `Verified`: No runtime JS, no video behavior, no slider behavior, no hotspot behavior, no drawer behavior, and no overlay behavior in this slice.
- `Verified`: No gallery treatment, no tabs, no accordion behavior, no multi-panel composition, and no campaign framing in this slice.

## Builder

- `Inference`: The verified shell, verified section shell, verified utility-family proofs, and verified trust-family proofs already establish neutral hosting, responsive structure, static proof behavior, and bilingual schema discipline.
- `Inference`: The next smallest unproven step is a restrained story-and-editorial split that validates media-plus-copy structure without reopening protected surfaces or richer interaction systems.
- `Inference`: The future runtime slice should proceed in this order:
  1. Extend `project/assets/stone-base.css` with neutral story-split primitives that support restrained media-and-copy layout without broader family styling.
  2. Create `project/sections/stone-story-split.liquid` as one story-and-editorial section that consumes the existing shared section shell unchanged and renders one bounded static split layout only.
  3. Create `project/templates/page.stone-runtime-story-split.json` as one neutral host that mounts only the new section for isolated validation.
  4. Update `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together so the new section stays bilingual and terminology-aligned.
- `Inference`: This path is minimal because it proves a first story/editorial behavior without reopening the shared shell, adding runtime JS, adding block files, adding snippets, or composing multiple sections into a page-level experience.

## Adversarial Reviewer

- `Inference`: The main failure mode is structural inflation, where a restrained split becomes a broader editorial system with multiple regions, multiple media items, or campaign framing.
- `Inference`: Another failure mode is interaction drift if implementation starts requiring sliders, tabs, overlays, hotspots, or video behavior to feel complete.
- `Inference`: A third failure mode is protected-surface backtracking if the slice starts requiring edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Inference`: A fourth failure mode is semantic drift if the slice starts acting like hero, merchandising, or shoppable-media behavior instead of restrained editorial content.
- `Inference`: A fifth failure mode is scope creep if execution begins demanding files under `project/blocks/`, helper snippets, more than one section, or more than one template.

## Reconciliation

- `Verified`: The approved next slice should remain restricted to the five planned runtime files listed above.
- `Verified`: The future section must stay in the story-and-editorial family and must not become a disguised hero, gallery, video module, or campaign opener.
- `Verified`: The existing shared section shell must be consumed unchanged; if it is insufficient for the split proof, stop and replan instead of reopening it inside this unit.
- `Inference`: The safest proof is one restrained split of image and text with optional eyebrow and reversible media position only, because that validates a new family behavior without introducing runtime JS.
- `Inference`: Avoiding buttons, overlays, galleries, video, hotspots, and multi-panel composition keeps the slice aligned with anti-chaos rules while preserving boundedness.

## Why This Slice Is Next

- `Verified`: The repo already proves utility and trust/support families through tightly bounded static sections.
- `Inference`: The next smallest still-unproven family behavior is a restrained story/editorial split that validates media-plus-copy composition without crossing into blog-object, collection-object, or product-object dependencies.
- `Inference`: This is safer than blog highlights, article grids, collection banners, or PDP companion work because it can remain neutral, static, non-JS, and page-template-hosted.

## Rejected Broader Alternatives

- `Verified`: Another trust/support micro-slice is rejected because it risks collapsing into existing reassurance, testimonial, stat, or help-prompt behavior and would violate the anti-duplication rule.
- `Verified`: Blog highlights and article teaser grids are rejected because they introduce blog and article object dependencies before a simpler editorial layout is proven.
- `Verified`: Collection work is rejected because it introduces collection-specific navigation and merchandising assumptions.
- `Verified`: PDP work is rejected because it introduces product-detail and support-assumption coupling.
- `Verified`: Hero work is rejected because it pushes the repo into first-scroll hierarchy and stronger conversion semantics before a simpler story/editorial layout is proven.
- `Verified`: Shoppable-media work is rejected because it introduces product-linking and likely interaction pressure.
- `Verified`: Editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid` is rejected because those are protected surfaces for this slice.
- `Verified`: Any `project/blocks/` file, any new snippet file, any second section file, any second template file, and any JS-driven behavior are rejected because they broaden the slice beyond one bounded story/editorial proof.

## Non-Goals

- `Verified`: Implement hero behavior, blog feeds, article lists, collection context, PDP context, video systems, galleries, hotspots, sliders, overlays, or CTA-heavy campaign behavior.
- `Verified`: Add new runtime JS behavior, drawers, modals, tabs, sliders, popovers, or cart behavior.
- `Verified`: Add new global settings groups or change the foundation settings vocabulary.
- `Verified`: Build homepage, collection, PDP, blog, article, or preset composition.
- `Verified`: Deliver a broad editorial framework beyond neutral story-split primitives.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One new story-and-editorial section file that proves a bounded static split layout within the existing shared shell.
- `Inference`: One neutral alternate page template that mounts only that section for isolated validation.
- `Inference`: One bounded extension of `project/assets/stone-base.css` for neutral story-split primitives.
- `Inference`: One paired Hebrew and English locale update that keeps the section and its schema vocabulary bilingual.
- `Verified`: No runtime files outside the explicitly planned five-file scope.

## What Would Invalidate The Slice And Require Replanning

- `Verified`: Replan if implementation needs any runtime file outside the planned five-file set plus normal state and handoff updates.
- `Verified`: Replan if the future section needs edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if the story split needs `project/blocks/` files, a new snippet, a second section, a second template, custom JS, gallery behavior, video behavior, hero semantics, or shoppable-media behavior.
- `Verified`: Replan if the section cannot stay static and restrained without broadening scope.
- `Verified`: Replan if Hebrew and English locale coverage cannot remain structurally aligned in the same bounded change set.

## Stop Condition

- `Verified`: Stop if the future implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-story-split.liquid`, `project/templates/page.stone-runtime-story-split.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`.
- `Verified`: Stop if the slice starts editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid`.
- `Verified`: Stop if the slice starts implementing homepage composition, preset wiring, collection surfaces, PDP surfaces, blog objects, article objects, hero behavior, merchandising behavior, shoppable-media behavior, or trust/support duplication.
- `Verified`: Stop if the slice introduces `project/blocks/`, any new snippet file, any second new section file, any second new template file, any custom JS-driven behavior, any video system, any gallery system, any hotspot behavior, any overlay behavior, or any slider behavior.
- `Verified`: Stop if the slice stops being a bounded story split proof or stops fitting inside the approved five runtime files.

## Relationship To Verified Runtime State

- `Verified`: `project/snippets/stone-section-shell.liquid` already provides the neutral wrapper contract that the new section should consume unchanged.
- `Verified`: The verified trust-support chain through `UNIT-050` proves the repo can sustain another five-file bounded section slice without reopening protected surfaces.
- `Verified`: The section-family ledger explicitly lists story and editorial as a primary family and supports `heading`, `richtext`, `image`, and `quote` style building blocks.
- `Verified`: `project/assets/stone-base.css` is already the correct globally loaded substrate surface for neutral section-family layout rules.
- `Verified`: The bilingual schema strategy still requires any new section strings to land in Hebrew and English together.

## Readiness Verdict

- `Verified`: READY for one separately governed and tightly bounded planning-to-implementation handoff.
- `Verified`: The intended next execution target is `UNIT-052`, limited to the exact future file scope above.
