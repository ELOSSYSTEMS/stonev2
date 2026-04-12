# Phase 2 Minimal Content Card Strip Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to define the next safe Phase 2 runtime slice after the verified story-split proof.

## Objective

- `Verified`: Define the next smallest useful runtime slice after the verified story-split proof without broadening into homepage composition, preset work, collection work, PDP work, live blog or article object feeds, merchandising rails, or shoppable media behavior.
- `Verified`: Keep the next slice limited to:
  - one bounded base-layer CSS extension in `project/assets/stone-base.css`
  - one new content-and-blog section file in `project/sections/stone-content-card-strip.liquid`
  - one neutral alternate page template in `project/templates/page.stone-runtime-content-card-strip.json`
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

- `Verified`: The next bounded runtime slice is a **minimal content card strip** slice.
- `Inference`: This slice should prove one bounded content-and-blog behavior by rendering a restrained strip of manual editorial cards with optional image, short text, and one native link per card.
- `Inference`: The section should stay bounded by supporting a small static card set without introducing blog-object queries, article-object queries, sliders, drawers, tabs, or JavaScript-driven interaction.

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/assets/stone-base.css` | `Inference` | Extend the verified base layer with neutral content-card-strip primitives only, such as simple card spacing, restrained card surfaces, and strip layout rules. |
| `project/sections/stone-content-card-strip.liquid` | `Inference` | Implement one bounded content-and-blog section that reuses the verified shared section shell and renders a restrained strip of manual editorial cards only. |
| `project/templates/page.stone-runtime-content-card-strip.json` | `Inference` | Add one neutral alternate page template that mounts only the new content card strip section for isolated runtime validation. |
| `project/locales/he.default.schema.json` | `Inference` | Add Hebrew section-name, setting-label, block-label, option-label, and help-text coverage for the new content card strip section. |
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
- `Verified`: No homepage work, no preset work, no collection work, and no PDP work in this slice.
- `Verified`: No hero, merchandising, shoppable-media, trust-and-support, collection-companion, or PDP-companion family work in this slice.
- `Verified`: No live blog-object queries, no live article-object queries, no runtime JS, no slider behavior, no drawer behavior, no modal behavior, and no overlay behavior in this slice.
- `Verified`: No product-card behavior, no hotspot behavior, no carousel behavior, and no campaign framing in this slice.

## Builder

- `Inference`: The verified shell, verified section shell, verified utility-family proofs, verified trust-family proofs, and verified first story/editorial proof already establish neutral hosting, static layouts, content discipline, and bilingual schema discipline.
- `Inference`: The next smallest unproven step is a restrained content-card strip that validates editorial-card repetition without reopening protected surfaces or object-fed content systems.
- `Inference`: The future runtime slice should proceed in this order:
  1. Extend `project/assets/stone-base.css` with neutral content-card-strip primitives that support restrained card surfaces and simple strip layout without broader family styling.
  2. Create `project/sections/stone-content-card-strip.liquid` as one content-and-blog section that consumes the existing shared section shell unchanged and renders a bounded static card strip only.
  3. Create `project/templates/page.stone-runtime-content-card-strip.json` as one neutral host that mounts only the new section for isolated validation.
  4. Update `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together so the new section stays bilingual and terminology-aligned.
- `Inference`: This path is minimal because it proves a first content-card repetition pattern without adding runtime JS, block files, snippets, or object dependencies.

## Adversarial Reviewer

- `Inference`: The main failure mode is semantic inflation, where a restrained content-card strip turns into a blog feed, article listing, or merchandising rail.
- `Inference`: Another failure mode is interaction drift if implementation starts requiring sliders, drawers, tabs, or JS-driven card behavior to feel complete.
- `Inference`: A third failure mode is protected-surface backtracking if the slice starts requiring edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Inference`: A fourth failure mode is scope creep if execution begins demanding live object queries, product cards, helper snippets, more than one section, or more than one template.
- `Inference`: A fifth failure mode is locale drift if the section vocabulary diverges between Hebrew and English.

## Reconciliation

- `Verified`: The approved next slice should remain restricted to the five planned runtime files listed above.
- `Verified`: The future section must stay in the content-and-blog family and must not become a disguised blog feed, merchandising strip, or shoppable-media rail.
- `Verified`: The existing shared section shell must be consumed unchanged; if it is insufficient for the card-strip proof, stop and replan instead of reopening it inside this unit.
- `Inference`: The safest proof is one restrained strip of manual editorial cards with optional image, short body copy, and one native link per item, because that validates a new family behavior without introducing object dependencies or runtime JS.
- `Inference`: Avoiding live blog objects, article objects, sliders, product cards, and media systems keeps the slice aligned with anti-chaos rules while preserving boundedness.

## Why This Slice Is Next

- `Verified`: The repo already proves utility, trust/support, and a first story/editorial split through tightly bounded static sections.
- `Inference`: The next smallest still-unproven family behavior is restrained repeated editorial card layout inside the content-and-blog family.
- `Inference`: This is safer than live blog feeds, article teaser grids, merchandising rails, or collection/PDP companion work because it can remain neutral, manual, static, non-JS, and page-template-hosted.

## Rejected Broader Alternatives

- `Verified`: Another story/editorial micro-slice is rejected because it risks collapsing into the completed story split proof without enough new structural behavior.
- `Verified`: Live blog highlights and article teaser grids are rejected because they introduce blog and article object dependencies before a simpler repeated content-card layout is proven.
- `Verified`: Merchandising work is rejected because it introduces product-card assumptions and commerce semantics.
- `Verified`: Collection work is rejected because it introduces collection-specific navigation and merchandising assumptions.
- `Verified`: PDP work is rejected because it introduces product-detail and support-assumption coupling.
- `Verified`: Shoppable-media work is rejected because it introduces product-linking and likely interaction pressure.
- `Verified`: Editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid` is rejected because those are protected surfaces for this slice.
- `Verified`: Any `project/blocks/` file, any new snippet file, any second section file, any second template file, and any JS-driven behavior are rejected because they broaden the slice beyond one bounded content-card proof.

## Non-Goals

- `Verified`: Implement live blog feeds, live article listings, product rails, collection surfaces, PDP surfaces, shoppable media, sliders, drawers, tabs, or CTA-heavy campaign behavior.
- `Verified`: Add new runtime JS behavior, drawers, modals, tabs, sliders, popovers, or cart behavior.
- `Verified`: Add new global settings groups or change the foundation settings vocabulary.
- `Verified`: Build homepage, collection, PDP, blog, article, or preset composition.
- `Verified`: Deliver a broad editorial framework beyond neutral content-card-strip primitives.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One new content-and-blog section file that proves a bounded static content-card strip within the existing shared shell.
- `Inference`: One neutral alternate page template that mounts only that section for isolated validation.
- `Inference`: One bounded extension of `project/assets/stone-base.css` for neutral content-card-strip primitives.
- `Inference`: One paired Hebrew and English locale update that keeps the section and its schema vocabulary bilingual.
- `Verified`: No runtime files outside the explicitly planned five-file scope.

## What Would Invalidate The Slice And Require Replanning

- `Verified`: Replan if implementation needs any runtime file outside the planned five-file set plus normal state and handoff updates.
- `Verified`: Replan if the future section needs edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if the content card strip needs `project/blocks/` files, a new snippet, a second section, a second template, custom JS, live blog-object queries, live article-object queries, product cards, or merchandising behavior.
- `Verified`: Replan if the section cannot stay static and restrained without broadening scope.
- `Verified`: Replan if Hebrew and English locale coverage cannot remain structurally aligned in the same bounded change set.

## Stop Condition

- `Verified`: Stop if the future implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-content-card-strip.liquid`, `project/templates/page.stone-runtime-content-card-strip.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`.
- `Verified`: Stop if the slice starts editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid`.
- `Verified`: Stop if the slice starts implementing homepage composition, preset wiring, collection surfaces, PDP surfaces, live blog-object behavior, live article-object behavior, merchandising behavior, shoppable-media behavior, or trust/support duplication.
- `Verified`: Stop if the slice introduces `project/blocks/`, any new snippet file, any second new section file, any second new template file, any custom JS-driven behavior, any slider behavior, any drawer behavior, any modal behavior, any product-card behavior, or any overlay behavior.
- `Verified`: Stop if the slice stops being a bounded content-card strip proof or stops fitting inside the approved five runtime files.

## Relationship To Verified Runtime State

- `Verified`: `project/snippets/stone-section-shell.liquid` already provides the neutral wrapper contract that the new section should consume unchanged.
- `Verified`: The verified runtime chain through `UNIT-053` proves the repo can sustain another five-file bounded section slice without reopening protected surfaces.
- `Verified`: The section-family ledger explicitly lists content and blog as a primary family and includes `image`, `media card`, `heading`, `richtext`, and `button group` among its reusable building blocks.
- `Verified`: `project/assets/stone-base.css` is already the correct globally loaded substrate surface for neutral section-family layout rules.
- `Verified`: The bilingual schema strategy still requires any new section strings to land in Hebrew and English together.

## Readiness Verdict

- `Verified`: READY for one separately governed and tightly bounded planning-to-implementation handoff.
- `Verified`: The intended next execution target is `UNIT-055`, limited to the exact future file scope above.
