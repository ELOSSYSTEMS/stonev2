# Phase 2 Minimal Utility Action Group Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to bound the next safe Phase 2 runtime slice after the verified minimal utility layout composition slice.

## Objective

- `Verified`: Define the next smallest useful runtime slice that extends the verified utility-only layout composition proof without broadening into homepage composition, preset work, collection work, PDP work, blog or editorial work, hero, story, trust, or merchandising implementation.
- `Verified`: Keep the next slice limited to:
  - one bounded base-layer CSS extension in `project/assets/stone-base.css`
  - one new utility-only section file in `project/sections/stone-utility-action-group.liquid`
  - one neutral alternate page template in `project/templates/page.stone-runtime-action-group.json`
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
- `Verified`: `workspace/plans/phase-2-minimal-utility-layout-composition-v1/PLAN.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-layout-composition-v1/ASSUMPTIONS.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-layout-composition-v1/CHECKS.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-layout-composition-v1/RISKS.v1.md`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/snippets/stone-section-shell.liquid`
- `Verified`: `project/sections/stone-utility-layout-composition.liquid`
- `Verified`: `project/templates/page.stone-runtime-layout-composition.json`
- `Verified`: `state/ORCHESTRATION_STATE.md`
- `Verified`: `state/NEXT_ACTION.md`

## Next Bounded Runtime Slice

- `Verified`: The next bounded runtime slice is a **minimal utility action group** slice.
- `Inference`: This slice should prove one bounded non-interactive action-group behavior beyond the verified two-region composition proof by rendering a neutral set of native links or buttons as a grouped utility pattern.
- `Inference`: The section should stay utility-only by using a narrow button-group surface for simple action presentation without introducing commerce semantics, storytelling, media, or JavaScript-driven interaction.

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/assets/stone-base.css` | `Inference` | Extend the verified base layer with neutral action-group primitives only, such as inline or wrapped action-row spacing, button-group alignment, and simple emphasis states that stay substrate-level. |
| `project/sections/stone-utility-action-group.liquid` | `Inference` | Implement one utility-only section that reuses the verified shared section shell and renders a narrow grouped action surface through native links or buttons only. |
| `project/templates/page.stone-runtime-action-group.json` | `Inference` | Add one neutral alternate page template that mounts only the new utility action-group section for isolated runtime validation. |
| `project/locales/he.default.schema.json` | `Inference` | Add Hebrew section-name, setting-label, option-label, block-label, and help-text coverage for the new utility action-group section. |
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
- `Verified`: No JS-driven behavior, no drawer behavior, no modal behavior, no accordion behavior, and no media-led behavior in this slice.

## Builder

- `Inference`: The verified shell, verified section shell, verified utility block stack, verified utility layout composition section, and verified neutral template host already prove neutral content hosting and grouped composition, so the next smallest unproven step is a bounded native action-group surface inside one utility-only section.
- `Inference`: The future runtime slice should proceed in this order:
  1. Extend `project/assets/stone-base.css` with neutral action-group primitives that support simple inline or wrapped button-group presentation without family styling.
  2. Create `project/sections/stone-utility-action-group.liquid` as one utility-only section that consumes the existing shared section shell unchanged and renders a narrow grouped action surface through native links or buttons only.
  3. Create `project/templates/page.stone-runtime-action-group.json` as one neutral host that mounts only the new section and supplies sample actions for isolated validation.
  4. Update `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together so the new section stays bilingual and terminology-aligned.
- `Inference`: This path is minimal because it proves bounded call-to-action grouping and reusable native action presentation without reopening the shared shell, adding runtime JS, adding block files, adding snippets, or composing multiple sections into a page-level experience.

## Adversarial Reviewer

- `Inference`: The main failure mode is silent expansion from a neutral utility action group into the first hero CTA cluster, trust prompt, merchandising rail, or editorial promo surface under the excuse of needing more expressive actions.
- `Inference`: Another failure mode is protected-surface backtracking if the action-group proof starts requiring edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Inference`: A third failure mode is interaction creep if the future section starts requiring JS-driven toggles, drawers, popovers, or analytics-specific hooks to make the actions feel complete.
- `Inference`: A fourth failure mode is abstraction creep if execution begins demanding `project/blocks/` files, new snippets, more than one section, or more than one template to express a small utility action-group proof.
- `Inference`: A fifth failure mode is vocabulary drift if the section and locale strings start naming commerce, support, hero, or editorial concepts instead of neutral utility action terminology.

## Reconciliation

- `Verified`: The approved next slice should remain restricted to the five planned runtime files listed above.
- `Verified`: The future section must stay in the utility and layout support family and must not become a disguised hero CTA band, trust lane, support prompt, promotional rail, or merchandising scaffold.
- `Verified`: The existing shared section shell must be consumed unchanged; if it is insufficient for the action-group proof, stop and replan instead of reopening it inside this unit.
- `Inference`: The safest proof is one neutral action-group section that renders a narrow grouped set of native links or buttons with bounded alignment and spacing choices, because that validates reusable utility action presentation without introducing interaction systems or storefront semantics.
- `Inference`: Avoiding new snippet files, `project/blocks/` files, runtime JS, a second section, and a second template keeps the slice aligned with the anti-chaos rules in the section-family ledger and with the stop conditions already established by earlier Phase 2 slices.

## Why This Slice Is Next

- `Verified`: The verified minimal runtime foundation established the shell, CSS substrate, runtime JS bootstrap, settings baseline, and bilingual schema foundation.
- `Verified`: The verified minimal section runtime substrate established the shared section shell and the first neutral page-scoped host.
- `Verified`: The verified minimal utility block stack established a bounded block-bearing utility section.
- `Verified`: The verified minimal utility layout composition slice established grouped and responsive two-region utility composition.
- `Inference`: The smallest still-unproven runtime step is one utility-only section that demonstrates a bounded native action-group pattern without broadening into page-level composition, protected-surface edits, or interactive systems.
- `Inference`: This is safer than broader utility-family expansion because it proves one reusable action presentation behavior while keeping the slice neutral, isolated, and non-JS.

## Rejected Broader Alternatives

- `Verified`: Homepage work is rejected because it would force section ordering, sequencing, and surface-priority decisions before the bounded utility action-group pattern is proven.
- `Verified`: Preset work is rejected because presets belong after reusable utility-family behaviors exist and stay stable.
- `Verified`: Collection work is rejected because it introduces collection-specific merchandising and navigation assumptions.
- `Verified`: PDP work is rejected because it introduces product-detail, trust, and recommendation assumptions.
- `Verified`: Blog or editorial work is rejected because it introduces storytelling and content-domain semantics outside the utility family.
- `Verified`: Hero, story, trust, and merchandising work are rejected because they would turn a utility-family proof into family-specific storefront implementation.
- `Verified`: Editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid` is rejected because those are protected surfaces for this slice.
- `Verified`: Any `project/blocks/` file, any new snippet file, any second section file, any second template file, any JS-driven behavior, and any media-led behavior are rejected because they broaden the slice beyond one bounded action-group proof.

## Non-Goals

- `Verified`: Implement a hero CTA cluster, trust prompt lane, help contact strip, merchandising CTA row, newsletter prompt, or editorial promo section.
- `Verified`: Add new runtime JS behavior, drawers, modals, accordions, tabs, sliders, popovers, or cart behavior.
- `Verified`: Add new global settings groups or change the foundation settings vocabulary.
- `Verified`: Build homepage, collection, PDP, blog, article, or preset composition.
- `Verified`: Deliver polished storefront styling beyond neutral utility action-group primitives.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One new utility-only section file that proves grouped native action presentation within the existing shared shell.
- `Inference`: One neutral alternate page template that mounts only that section for isolated validation.
- `Inference`: One bounded extension of `project/assets/stone-base.css` for neutral action-group primitives.
- `Inference`: One paired Hebrew and English locale update that keeps the section and its schema vocabulary bilingual.
- `Verified`: No runtime files outside the explicitly planned five-file scope.

## What Would Invalidate The Slice And Require Replanning

- `Verified`: Replan if implementation needs any runtime file outside the planned five-file set plus normal state and handoff updates.
- `Verified`: Replan if the future section needs edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if the action-group proof needs `project/blocks/` files, a new snippet, a second section, a second template, media handling, or JavaScript behavior.
- `Verified`: Replan if the section cannot stay utility-only and begins depending on products, collections, articles, blogs, presets, hero semantics, trust semantics, or merchandising semantics.
- `Verified`: Replan if Hebrew and English locale coverage cannot remain structurally aligned in the same bounded change set.

## Stop Condition

- `Verified`: Stop if the future implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-utility-action-group.liquid`, `project/templates/page.stone-runtime-action-group.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`.
- `Verified`: Stop if the slice starts editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid`.
- `Verified`: Stop if the slice starts implementing homepage composition, preset wiring, collection surfaces, PDP surfaces, blog or editorial surfaces, or hero, story, trust, or merchandising behavior.
- `Verified`: Stop if the slice introduces `project/blocks/`, any new snippet file, any second new section file, any second new template file, any JS-driven behavior, or any media-led behavior.
- `Verified`: Stop if the slice stops being utility-only or stops fitting inside the approved five runtime files.

## Relationship To Verified Runtime State

- `Verified`: `project/snippets/stone-section-shell.liquid` already provides the neutral wrapper contract that the new section should consume unchanged.
- `Verified`: `project/sections/stone-utility-layout-composition.liquid` already proves grouped utility presentation, so the next bounded proof should cover native grouped actions rather than broader composition or family rollout.
- `Verified`: `project/templates/page.stone-runtime-layout-composition.json` already proves that one neutral alternate page template is sufficient for isolated validation, so a second neutral page template for a single new section remains the smallest safe host pattern.
- `Verified`: `project/assets/stone-base.css` is already the correct globally loaded substrate surface for neutral utility-family layout rules.
- `Verified`: The section-family ledger explicitly keeps utility and layout support sections narrow and utility-only, and it lists `button group` as a reusable content block family that can be proven here without expanding into broader family semantics.
- `Verified`: The bilingual schema strategy still requires any new section and block-surface strings to land in Hebrew and English together.

## Readiness Verdict

- `Verified`: READY for one separately governed and tightly bounded runtime implementation unit.
- `Verified`: The intended next execution target is `UNIT-016`, limited to the exact future file scope above.
