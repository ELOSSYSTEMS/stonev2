# Phase 2 Minimal Utility Layout Composition Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to bound the next safe Phase 2 runtime slice after the verified minimal utility block stack slice.

## Objective

- `Verified`: Define the next smallest useful runtime slice that extends the verified utility-only block stack without broadening into homepage composition, preset work, collection work, PDP work, blog or editorial work, hero, story, trust, or merchandising implementation.
- `Verified`: Keep the next slice limited to:
  - one bounded base-layer CSS extension in `project/assets/stone-base.css`
  - one new utility-only section file in `project/sections/stone-utility-layout-composition.liquid`
  - one neutral alternate page template in `project/templates/page.stone-runtime-layout-composition.json`
  - paired locale updates in `project/locales/he.default.schema.json` and `project/locales/en.schema.json`
- `Verified`: Keep shared-shell edits, runtime-JS edits, global settings edits, snippet work, block-file work, second-section work, and second-template work out of scope.

## Canonical Inputs

- `Verified`: `docs/architecture/stonev2-repo-basis.md`
- `Verified`: `docs/architecture/stonev2-product-thesis.md`
- `Verified`: `docs/architecture/stonev2-section-block-platform.md`
- `Verified`: `docs/architecture/stonev2-settings-bilingual-editor.md`
- `Verified`: `docs/architecture/stonev2-build-roadmap.md`
- `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md`
- `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md`
- `Verified`: `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md`
- `Verified`: `workspace/plans/phase-2-minimal-runtime-foundation-v1/PLAN.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-section-runtime-substrate-v1/PLAN.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-block-stack-v1/PLAN.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-block-stack-v1/ASSUMPTIONS.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-block-stack-v1/CHECKS.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-block-stack-v1/RISKS.v1.md`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/snippets/stone-section-shell.liquid`
- `Verified`: `project/sections/stone-utility-block-stack.liquid`
- `Verified`: `project/templates/page.stone-runtime-block-stack.json`
- `Verified`: `state/ORCHESTRATION_STATE.md`
- `Verified`: `state/NEXT_ACTION.md`

## Next Bounded Runtime Slice

- `Verified`: The next bounded runtime slice is a **minimal utility layout composition** slice.
- `Inference`: This slice should prove one additional layout-composition behavior beyond simple vertical block stacking by partitioning one utility-only section into two neutral content regions that can present as a responsive columnar composition.
- `Inference`: The section should stay utility-only by reusing the existing narrow content block subset and adding only a bounded region-assignment behavior, rather than introducing new family semantics or interactive structure.

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/assets/stone-base.css` | `Inference` | Extend the verified base layer with neutral layout-composition primitives only, such as a responsive two-region grid, inter-region gap rules, and region item flow. |
| `project/sections/stone-utility-layout-composition.liquid` | `Inference` | Implement one utility-only section that reuses the verified shared section shell and routes a narrow content-block subset into two named utility regions for grouped or columnar composition. |
| `project/templates/page.stone-runtime-layout-composition.json` | `Inference` | Add one neutral alternate page template that mounts only the new utility layout-composition section for isolated runtime validation. |
| `project/locales/he.default.schema.json` | `Inference` | Add Hebrew section-name, setting-label, option-label, block-label, and help-text coverage for the new utility layout-composition section. |
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
- `Verified`: No homepage work, no preset work, no collection work, no PDP work, and no blog or editorial work in this slice.
- `Verified`: No hero, story, trust, merchandising, shoppable-media, collection-companion, or PDP-companion family work in this slice.
- `Verified`: No media-led, commerce-led, or interaction-led behavior in this slice beyond simple native structure and responsive layout.

## Builder

- `Inference`: The verified shell, verified section shell, verified utility block stack, and verified neutral template host already prove the base substrate, so the next smallest unproven step is layout composition inside one utility-only section rather than another single-column content proof.
- `Inference`: The future runtime slice should proceed in this order:
  1. Extend `project/assets/stone-base.css` with neutral responsive composition primitives that support exactly two utility regions and mobile fallback to one vertical flow.
  2. Create `project/sections/stone-utility-layout-composition.liquid` as one utility-only section that keeps the existing narrow block subset inline and assigns each block to a `primary` or `secondary` region through bounded schema options.
  3. Create `project/templates/page.stone-runtime-layout-composition.json` as one neutral host that mounts only the new section and supplies sample content to both regions.
  4. Update `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together so the new section stays bilingual and terminology-aligned.
- `Inference`: This path is minimal because it proves grouped utility content regions and simple columnar composition without reopening the shared shell, adding block files, adding snippets, or composing multiple sections into a page-level experience.

## Adversarial Reviewer

- `Inference`: The main failure mode is silent expansion from utility composition into the first real story, support, trust, or merchandising section under the excuse of needing more visually distinct columns.
- `Inference`: Another failure mode is structural creep if execution starts requiring nested groups, more than two regions, special media handling, or block-file abstractions to make the section feel complete.
- `Inference`: A third failure mode is protected-surface backtracking if the section needs changes to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json` to support the composition proof.
- `Inference`: A fourth failure mode is page-composition creep if the neutral host template starts sequencing multiple sections, branching into homepage or preset composition, or adding cross-section layout logic.
- `Inference`: A fifth failure mode is locale drift if the additional section and block-schema strings are not authored and reviewed in Hebrew and English together.

## Reconciliation

- `Verified`: The approved next slice should remain restricted to the five planned runtime files listed above.
- `Verified`: The future section must stay in the utility and layout support family and must not become a disguised hero, split story, trust lane, category support strip, or merchandising scaffold.
- `Verified`: The existing shared section shell must be consumed unchanged; if it is insufficient for the composition proof, stop and replan instead of reopening it inside this unit.
- `Inference`: The safest composition proof is exactly two utility regions with the existing narrow content-block subset assigned between them, because that validates grouped and columnar structure without introducing nested composition systems.
- `Inference`: Avoiding new snippet files, `project/blocks/` files, a second section, and a second template keeps the slice aligned with the anti-chaos rules in the section-family ledger.

## Why This Slice Is Next

- `Verified`: The verified minimal runtime foundation established the shell, CSS substrate, runtime JS bootstrap, settings baseline, and bilingual schema foundation.
- `Verified`: The verified minimal section runtime substrate established the shared section shell and the first neutral page-scoped host.
- `Verified`: The verified minimal utility block stack established a bounded block-bearing utility section but still validated only simple vertical flow.
- `Inference`: The smallest still-unproven runtime step is one utility-only section that demonstrates grouped and responsive columnar composition without broadening into page-level composition or protected-surface changes.
- `Inference`: This is safer than broadening into a homepage composition slice because it proves one additional layout behavior inside a single neutral section before any multi-section sequencing is attempted.

## Rejected Broader Alternatives

- `Verified`: Homepage work is rejected because it would force section ordering, sequencing, and surface-priority decisions before single-section composition behavior is proven.
- `Verified`: Preset work is rejected because presets belong after reusable section-family behaviors exist and stay stable.
- `Verified`: Collection work is rejected because it introduces collection-specific merchandising and navigation assumptions.
- `Verified`: PDP work is rejected because it introduces product-detail, trust, and recommendation assumptions.
- `Verified`: Blog or editorial work is rejected because it introduces storytelling and content-domain semantics outside the utility family.
- `Verified`: Hero, story, trust, and merchandising work are rejected because they would turn a utility-family proof into family-specific storefront implementation.
- `Verified`: Editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid` is rejected because those are protected surfaces for this slice.
- `Verified`: Any `project/blocks/` file, any new snippet file, any second section file, and any second template file are rejected because they broaden the slice beyond one bounded composition proof.

## Non-Goals

- `Verified`: Implement a real split editorial section, FAQ lane, comparison band, trust layout, media-led split section, or merchandising split rail.
- `Verified`: Add new runtime JS behavior, drawers, accordions, tabs, sliders, hotspots, or cart behavior.
- `Verified`: Add new global settings groups or change the foundation settings vocabulary.
- `Verified`: Build homepage, collection, PDP, blog, article, or preset composition.
- `Verified`: Deliver polished storefront styling beyond neutral utility composition primitives.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One new utility-only section file that proves grouped or columnar content composition within the existing shared shell.
- `Inference`: One neutral alternate page template that mounts only that section for isolated validation.
- `Inference`: One bounded extension of `project/assets/stone-base.css` for neutral layout-composition primitives.
- `Inference`: One paired Hebrew and English locale update that keeps the section and its schema vocabulary bilingual.
- `Verified`: No runtime files outside the explicitly planned five-file scope.

## What Would Invalidate The Slice And Require Replanning

- `Verified`: Replan if implementation needs any runtime file outside the planned five-file set plus normal state and handoff updates.
- `Verified`: Replan if the future section needs edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if the utility composition proof needs more than two content regions, nested group structures, `project/blocks/` files, a new snippet, a second section, or a second template.
- `Verified`: Replan if the section cannot stay utility-only and begins depending on products, collections, articles, blogs, presets, hero semantics, trust semantics, or merchandising semantics.
- `Verified`: Replan if Hebrew and English locale coverage cannot remain structurally aligned in the same bounded change set.

## Stop Condition

- `Verified`: Stop if the future implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-utility-layout-composition.liquid`, `project/templates/page.stone-runtime-layout-composition.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`.
- `Verified`: Stop if the slice starts editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid`.
- `Verified`: Stop if the slice starts implementing homepage composition, preset wiring, collection surfaces, PDP surfaces, blog or editorial surfaces, or hero, story, trust, or merchandising behavior.
- `Verified`: Stop if the slice introduces `project/blocks/`, any new snippet file, any second new section file, or any second new template file.
- `Verified`: Stop if the slice stops being utility-only or stops fitting inside the approved five runtime files.

## Relationship To Verified Runtime State

- `Verified`: `project/snippets/stone-section-shell.liquid` already provides the neutral wrapper contract that the new section should consume unchanged.
- `Verified`: `project/sections/stone-utility-block-stack.liquid` already proves inline rendering for a narrow utility block subset, which can be partitioned into regions without reopening broader family work.
- `Verified`: `project/templates/page.stone-runtime-block-stack.json` already proves that one neutral alternate page template is sufficient for isolated validation, so a second neutral page template for a single new section remains the smallest safe host pattern.
- `Verified`: `project/assets/stone-base.css` is already the correct globally loaded substrate surface for neutral utility-family layout rules.
- `Verified`: The section-family ledger explicitly keeps utility and layout support sections narrow and utility-only, and it lists `group`, `stack`, `columns`, `divider`, and `spacer` as layout-family primitives rather than excuses for page-level composition.
- `Verified`: The bilingual schema strategy still requires any new section and block-surface strings to land in Hebrew and English together.

## Readiness Verdict

- `Verified`: READY for one separately governed and tightly bounded runtime implementation unit.
- `Verified`: The intended next execution target is `UNIT-013`, limited to the exact future file scope above.
