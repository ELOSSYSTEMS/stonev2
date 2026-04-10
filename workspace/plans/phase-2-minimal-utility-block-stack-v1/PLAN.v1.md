# Phase 2 Minimal Utility Block Stack Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to bound the next safe Phase 2 runtime slice after the verified minimal section runtime substrate.

## Objective

- `Verified`: Define the next smallest useful runtime slice that extends the verified section runtime substrate without broadening into homepage composition, preset-pack work, collection work, PDP work, blog or editorial work, polished storefront execution, or broad family rollout.
- `Verified`: Keep the next slice limited to:
  - one additional utility-only validation section that proves block-bearing section behavior
  - one neutral alternate page template used only to host that block-bearing validation section
  - one bounded base-layer CSS extension for neutral stacked-block presentation
  - paired Hebrew and English locale updates for the new section schema surface
- `Verified`: Keep shell rewrites, settings-surface growth, snippet proliferation, block-file proliferation, page-composition work, and family-level storefront implementation out of scope.

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
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/snippets/stone-section-shell.liquid`
- `Verified`: `project/sections/stone-utility-richtext.liquid`
- `Verified`: `project/templates/page.stone-runtime.json`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`
- `Verified`: `state/ORCHESTRATION_STATE.md`
- `Verified`: `state/NEXT_ACTION.md`

## Next Bounded Runtime Slice

- `Verified`: The next bounded runtime slice is a **minimal utility block stack**.
- `Inference`: This slice should prove that the verified shared section shell can host one additional utility-only section whose content is driven by a narrowly bounded set of section blocks, rather than only by section-level settings.
- `Verified`: The validation surface should remain inside the utility and layout support family because that family is explicitly utility-only and least likely to leak merchandising, storytelling, or page-specific assumptions.
- `Inference`: Proving one block-bearing utility section is the next smallest useful step because the verified runtime currently has one shared shell and one non-block section, but no verified runtime evidence yet for normalized block iteration.

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/assets/stone-base.css` | `Inference` | Extend the verified base layer with neutral utility-stack spacing and item-flow primitives only. |
| `project/sections/stone-utility-block-stack.liquid` | `Inference` | Implement one utility-only validation section that renders a narrow stack of content blocks through the existing shared section shell. |
| `project/templates/page.stone-runtime-block-stack.json` | `Inference` | Add one neutral alternate page template that mounts only the utility block-stack validation section so block behavior can be exercised without touching homepage, preset, collection, PDP, or editorial surfaces. |
| `project/locales/he.default.schema.json` | `Inference` | Add Hebrew section-name, block-name, setting-label, option-label, and help-text coverage for the utility block-stack section. |
| `project/locales/en.schema.json` | `Inference` | Add English schema coverage structurally aligned with the Hebrew additions for the same section. |

## Explicit Runtime Exclusions

- `Verified`: No edits to `project/layout/theme.liquid` in this slice.
- `Verified`: No edits to `project/assets/stone-runtime.js` in this slice.
- `Verified`: No edits to `project/config/settings_schema.json` in this slice.
- `Verified`: No edits to `project/snippets/stone-section-shell.liquid` in this slice unless execution proves the verified shell contract is insufficient, in which case stop and replan.
- `Verified`: No new files under `project/blocks/`.
- `Verified`: No new snippets in this slice.
- `Verified`: No new sections besides `project/sections/stone-utility-block-stack.liquid`.
- `Verified`: No new templates besides `project/templates/page.stone-runtime-block-stack.json`.
- `Verified`: No homepage template, no `index.json`, no collection template, no PDP template, no article template, no blog template, and no preset JSON work in this slice.
- `Verified`: No merchandising, hero, story, shoppable-media, trust, collection-companion, or PDP-companion family implementation in this slice.

## Builder

- `Inference`: The verified foundation and verified minimal section runtime substrate already proved document shell loading, tokenized base styling, bilingual locale discipline, one neutral section-shell contract, and one neutral page-scoped validation host.
- `Inference`: The smallest remaining substrate gap is block-bearing section behavior, because the current runtime has no verified section that iterates over blocks or proves how normalized block subsets will attach to the shared shell.
- `Inference`: The future runtime slice should proceed in this order:
  1. Extend `project/assets/stone-base.css` with neutral item-stack spacing rules that remain utility-only and avoid family styling.
  2. Create `project/sections/stone-utility-block-stack.liquid` as one utility-only section that uses the existing `stone-section-shell` wrapper and a tightly bounded content-block subset.
  3. Create `project/templates/page.stone-runtime-block-stack.json` as one neutral host for the new validation section.
  4. Update `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together so the new section and block schema surface remains bilingual and terminology-aligned.
- `Inference`: This path is minimal because it proves block iteration and repeated content structure without reopening the verified shell snippet, without introducing shared block snippets, and without composing multiple sections into a real storefront page.

## Adversarial Reviewer

- `Inference`: The main failure mode is silent expansion from a block-bearing utility proof into the first real story, trust, or merchandising family under the excuse of "needing better sample content."
- `Inference`: Another failure mode is speculative abstraction through new shared block snippets or `project/blocks/` files before one bounded block-bearing section shows what is actually reusable.
- `Inference`: A third failure mode is shell backtracking if the slice starts editing `stone-section-shell.liquid`, `theme.liquid`, `stone-runtime.js`, or `settings_schema.json` because the chosen section was not actually narrow enough.
- `Inference`: A fourth failure mode is page-composition creep if the validation host starts sequencing multiple sections or touching homepage or preset surfaces to make the new section visible.
- `Inference`: A fifth failure mode is vocabulary drift if the new block schema introduces ad hoc block names or locale terminology that does not stay aligned with the Phase 1 ledger and bilingual schema strategy.

## Reconciliation

- `Verified`: The approved next slice should remain restricted to the five planned runtime files listed above.
- `Verified`: The new section should stay utility-only and prove block-bearing section behavior, not family-specific storytelling, support, or merchandising behavior.
- `Verified`: The existing shared section shell should be consumed as-is; if it is insufficient, the slice is invalid and must be replanned instead of reopened casually.
- `Inference`: Avoiding new snippet files and `project/blocks/` files keeps the proof at the smallest useful size while still exercising real section blocks.
- `Inference`: One neutral alternate page template remains sufficient because this slice is validating one section in isolation, not proving multi-section composition.

## Why This Slice Is Next

- `Verified`: The verified minimal runtime foundation established the shell, asset, JS bootstrap, settings, and bilingual schema base.
- `Verified`: The verified minimal section runtime substrate established the first reusable section wrapper contract and neutral page-scoped hosting path.
- `Verified`: The section and block canon says breadth should come from normalized families and reusable block families rather than one-off section sprawl.
- `Inference`: The smallest unproven runtime step between the verified substrate and any broader family work is one utility-only section that actually iterates over a narrow normalized block subset.
- `Inference`: This is safer than another shell-only or snippet-only slice because the shell contract is already verified, while block-bearing section behavior is still unproven.

## Rejected Broader Alternatives

- `Verified`: A homepage-composition substrate slice is rejected because even a narrow multi-section page would start testing ordering and composition before single-section block behavior is proven.
- `Verified`: Hero, trust, merchandising, collection, PDP, and editorial runtime slices are rejected because they introduce domain assumptions that exceed a substrate step.
- `Inference`: A larger shared block-snippet or `project/blocks/` pack is rejected because it would be speculative abstraction before one block-bearing section establishes actual reuse pressure.
- `Inference`: Reopening `project/snippets/stone-section-shell.liquid` is rejected because the repo already has one verified section-shell contract and there is no evidence yet that it cannot host a narrow block-bearing section unchanged.

## Non-Goals

- `Verified`: Implement a real hero, support lane, logo rail, FAQ, merchandising rail, collection banner, PDP companion unit, or editorial story section.
- `Verified`: Add new global settings groups or change the foundation settings vocabulary.
- `Verified`: Add new runtime JS behavior, drawers, accordions, sliders, hotspots, or cart behavior.
- `Verified`: Build homepage, collection, PDP, article, blog, or preset composition.
- `Verified`: Deliver polished storefront styling beyond neutral utility-stack spacing and block-flow presentation.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One new utility-only block-bearing section file.
- `Inference`: One new neutral alternate page template that mounts only that section.
- `Inference`: One bounded base-CSS extension for neutral utility-stack presentation.
- `Inference`: One paired Hebrew or English locale update that keeps the new section and its blocks bilingual.
- `Verified`: No runtime files outside the explicitly planned scope.

## What Would Invalidate The Slice And Require Replanning

- `Verified`: Replan if implementation needs any runtime file outside the planned five-file set plus normal state and handoff updates.
- `Verified`: Replan if the new section requires edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if the new section cannot stay utility-only and begins depending on products, collections, articles, blogs, presets, or family-specific design semantics.
- `Verified`: Replan if execution starts demanding `project/blocks/` files, shared block snippets, or a second new section file in the same unit.
- `Verified`: Replan if the validation host requires more than one neutral alternate page template or any homepage, collection, PDP, article, blog, or preset surface.
- `Verified`: Replan if Hebrew and English locale coverage cannot remain synchronized in the same bounded change set.

## Stop Condition

- `Verified`: Stop if the future implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-utility-block-stack.liquid`, `project/templates/page.stone-runtime-block-stack.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`.
- `Verified`: Stop if the slice starts editing the verified section shell, theme shell, runtime JS, or global settings surfaces.
- `Verified`: Stop if the slice starts implementing multi-section composition, preset wiring, collection surfaces, PDP surfaces, blog or editorial surfaces, merchandising behavior, or polished storefront design.
- `Verified`: Stop if the slice introduces `project/blocks/`, any new snippet file, any second new section file, or any second new template file.

## Relationship To Verified Runtime State

- `Verified`: `project/snippets/stone-section-shell.liquid` already provides the neutral wrapper contract that the new block-bearing section should consume rather than rewrite.
- `Verified`: `project/sections/stone-utility-richtext.liquid` already proves a non-block utility section, so the next bounded proof should cover the unverified block-bearing path rather than duplicating the same pattern.
- `Verified`: `project/templates/page.stone-runtime.json` already proves that one neutral alternate page host is sufficient for isolated validation; this slice should preserve that pattern rather than broadening into composition.
- `Verified`: `project/assets/stone-base.css` is already the globally loaded substrate surface and remains the correct bounded place for neutral utility-stack presentation rules.
- `Verified`: The Phase 1 ledger defines reusable block families as a platform requirement, but the runtime has not yet proved one in practice.
- `Verified`: The bilingual schema strategy still requires the new section and block labels to land in Hebrew and English together.

## Readiness Verdict

- `Verified`: READY for one separately governed and tightly bounded runtime implementation unit.
- `Verified`: The intended next execution target is `UNIT-010`, limited to the exact future file scope above.
