# Phase 2 Minimal Process Steps Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to define the next safe Phase 2 runtime slice after the verified content-card-strip proof.

## Objective

- `Verified`: Define the next smallest useful runtime slice after the verified content-card-strip proof without broadening into homepage composition, preset work, collection work, PDP work, live object feeds, merchandising rails, or shoppable media behavior.
- `Verified`: Keep the next slice limited to:
  - one bounded base-layer CSS extension in `project/assets/stone-base.css`
  - one new story-and-editorial section file in `project/sections/stone-process-steps.liquid`
  - one neutral alternate page template in `project/templates/page.stone-runtime-process-steps.json`
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

- `Verified`: The next bounded runtime slice is a **minimal process steps** slice.
- `Inference`: This slice should prove one bounded story-and-editorial behavior by rendering a restrained ordered sequence of short manual steps with heading and supporting text only.
- `Inference`: The section should stay bounded by supporting a small static process stack without introducing accordions, tabs, animation, icons, illustrations, or JavaScript-driven interaction.

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/assets/stone-base.css` | `Inference` | Extend the verified base layer with neutral process-steps primitives only, such as ordered-step spacing, restrained separators, and simple index treatment. |
| `project/sections/stone-process-steps.liquid` | `Inference` | Implement one bounded story-and-editorial section that reuses the verified shared section shell and renders a restrained manual process sequence only. |
| `project/templates/page.stone-runtime-process-steps.json` | `Inference` | Add one neutral alternate page template that mounts only the new process-steps section for isolated runtime validation. |
| `project/locales/he.default.schema.json` | `Inference` | Add Hebrew section-name, setting-label, block-label, option-label, and help-text coverage for the new process-steps section. |
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
- `Verified`: No trust-and-support, merchandising, shoppable-media, collection-companion, or PDP-companion family work in this slice.
- `Verified`: No live blog-object queries, no live article-object queries, no runtime JS, no accordion behavior, no tab behavior, no slider behavior, and no overlay behavior in this slice.
- `Verified`: No icon system, no illustration dependency, no progress meter, and no campaign framing in this slice.

## Builder

- `Inference`: The verified shell, verified section shell, verified utility-family proofs, verified trust-family proofs, verified story split, and verified content-card strip already establish neutral hosting, repeated-card structure, editorial layout discipline, and bilingual schema discipline.
- `Inference`: The next smallest unproven step is a restrained process sequence that validates ordered editorial guidance without reopening protected surfaces or richer interaction systems.
- `Inference`: The future runtime slice should proceed in this order:
  1. Extend `project/assets/stone-base.css` with neutral process-step primitives that support restrained ordered sequencing without broader family styling.
  2. Create `project/sections/stone-process-steps.liquid` as one story-and-editorial section that consumes the existing shared section shell unchanged and renders a bounded static process sequence only.
  3. Create `project/templates/page.stone-runtime-process-steps.json` as one neutral host that mounts only the new section for isolated validation.
  4. Update `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together so the new section stays bilingual and terminology-aligned.
- `Inference`: This path is minimal because it proves a second story/editorial behavior without adding runtime JS, block files, snippets, or object dependencies.

## Adversarial Reviewer

- `Inference`: The main failure mode is structural inflation, where a restrained process sequence turns into an accordion system, tabbed flow, or interactive explainer.
- `Inference`: Another failure mode is presentation drift if implementation starts requiring icons, illustrations, or animation to feel complete.
- `Inference`: A third failure mode is protected-surface backtracking if the slice starts requiring edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Inference`: A fourth failure mode is semantic drift if the slice starts acting like trust reassurance, service guarantees, or campaign process framing instead of restrained editorial guidance.
- `Inference`: A fifth failure mode is scope creep if execution begins demanding files under `project/blocks/`, helper snippets, more than one section, or more than one template.

## Reconciliation

- `Verified`: The approved next slice should remain restricted to the five planned runtime files listed above.
- `Verified`: The future section must stay in the story-and-editorial family and must not become a disguised reassurance lane, FAQ, accordion, or campaign explainer.
- `Verified`: The existing shared section shell must be consumed unchanged; if it is insufficient for the process proof, stop and replan instead of reopening it inside this unit.
- `Inference`: The safest proof is one restrained ordered stack of steps with heading and body only, because that validates a new family behavior without introducing runtime JS.
- `Inference`: Avoiding icons, accordions, tabs, illustrations, motion, and campaign semantics keeps the slice aligned with anti-chaos rules while preserving boundedness.

## Why This Slice Is Next

- `Verified`: The repo already proves utility, trust/support, a first story/editorial split, and a first repeated content-card layout through tightly bounded static sections.
- `Inference`: The next smallest still-unproven family behavior is restrained ordered editorial guidance inside the story-and-editorial family.
- `Inference`: This is safer than live blog feeds, article teaser grids, collection companion work, or merchandising rails because it can remain neutral, static, non-JS, and page-template-hosted.

## Rejected Broader Alternatives

- `Verified`: Another content-card variant is rejected because it risks collapsing into the completed content-card-strip proof without enough new structural behavior.
- `Verified`: Live blog highlights and article teaser grids are rejected because they introduce blog and article object dependencies before a simpler ordered editorial pattern is proven.
- `Verified`: Merchandising work is rejected because it introduces product-card assumptions and commerce semantics.
- `Verified`: Collection and PDP companion work are rejected because they introduce page-object dependencies and stronger commerce assumptions.
- `Verified`: Shoppable-media work is rejected because it introduces product-linking and likely interaction pressure.
- `Verified`: Editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid` is rejected because those are protected surfaces for this slice.
- `Verified`: Any `project/blocks/` file, any new snippet file, any second section file, any second template file, and any JS-driven behavior are rejected because they broaden the slice beyond one bounded process-steps proof.

## Non-Goals

- `Verified`: Implement live feeds, product rails, collection surfaces, PDP surfaces, accordions, tabs, sliders, illustrations, icons, or CTA-heavy campaign behavior.
- `Verified`: Add new runtime JS behavior, drawers, modals, tabs, sliders, popovers, or cart behavior.
- `Verified`: Add new global settings groups or change the foundation settings vocabulary.
- `Verified`: Build homepage, collection, PDP, blog, article, or preset composition.
- `Verified`: Deliver a broad editorial framework beyond neutral process-steps primitives.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One new story-and-editorial section file that proves a bounded static process sequence within the existing shared shell.
- `Inference`: One neutral alternate page template that mounts only that section for isolated validation.
- `Inference`: One bounded extension of `project/assets/stone-base.css` for neutral process-step primitives.
- `Inference`: One paired Hebrew and English locale update that keeps the section and its schema vocabulary bilingual.
- `Verified`: No runtime files outside the explicitly planned five-file scope.

## What Would Invalidate The Slice And Require Replanning

- `Verified`: Replan if implementation needs any runtime file outside the planned five-file set plus normal state and handoff updates.
- `Verified`: Replan if the future section needs edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if the process steps need `project/blocks/` files, a new snippet, a second section, a second template, custom JS, accordion behavior, tab behavior, icon systems, or campaign/process-marketing behavior.
- `Verified`: Replan if the section cannot stay static and restrained without broadening scope.
- `Verified`: Replan if Hebrew and English locale coverage cannot remain structurally aligned in the same bounded change set.

## Stop Condition

- `Verified`: Stop if the future implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-process-steps.liquid`, `project/templates/page.stone-runtime-process-steps.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`.
- `Verified`: Stop if the slice starts editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid`.
- `Verified`: Stop if the slice starts implementing homepage composition, preset wiring, collection surfaces, PDP surfaces, live object behavior, trust/support duplication, merchandising behavior, or shoppable-media behavior.
- `Verified`: Stop if the slice introduces `project/blocks/`, any new snippet file, any second new section file, any second new template file, any custom JS-driven behavior, any accordion behavior, any tab behavior, any icon system, any illustration dependency, or any overlay behavior.
- `Verified`: Stop if the slice stops being a bounded process-steps proof or stops fitting inside the approved five runtime files.

## Relationship To Verified Runtime State

- `Verified`: `project/snippets/stone-section-shell.liquid` already provides the neutral wrapper contract that the new section should consume unchanged.
- `Verified`: The verified runtime chain through `UNIT-056` proves the repo can sustain another five-file bounded section slice without reopening protected surfaces.
- `Verified`: The section-family ledger explicitly lists story and editorial as a primary family and includes `heading`, `richtext`, `list`, and `quote` among its reusable building blocks.
- `Verified`: `project/assets/stone-base.css` is already the correct globally loaded substrate surface for neutral section-family layout rules.
- `Verified`: The bilingual schema strategy still requires any new section strings to land in Hebrew and English together.

## Readiness Verdict

- `Verified`: READY for one separately governed and tightly bounded planning-to-implementation handoff.
- `Verified`: The intended next execution target is `UNIT-058`, limited to the exact future file scope above.
