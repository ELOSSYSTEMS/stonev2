# Phase 2 Minimal Utility Prompt Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to bound the next safe Phase 2 runtime slice after the verified minimal utility notice slice.

## Objective

- `Verified`: Define the next smallest useful runtime slice that extends the verified utility-only notice proof without broadening into homepage composition, preset work, collection work, PDP work, blog or editorial work, hero, story, trust, support, or merchandising implementation.
- `Verified`: Keep the next slice limited to:
  - one bounded base-layer CSS extension in `project/assets/stone-base.css`
  - one new utility-only section file in `project/sections/stone-utility-prompt.liquid`
  - one neutral alternate page template in `project/templates/page.stone-runtime-prompt.json`
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
- `Verified`: `workspace/plans/phase-2-minimal-utility-action-group-v1/PLAN.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-key-value-list-v1/PLAN.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-divider-band-v1/PLAN.v1.md`
- `Verified`: `workspace/plans/phase-2-minimal-utility-notice-v1/PLAN.v1.md`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/snippets/stone-section-shell.liquid`
- `Verified`: `project/sections/stone-utility-action-group.liquid`
- `Verified`: `project/sections/stone-utility-notice.liquid`
- `Verified`: `project/templates/page.stone-runtime-notice.json`
- `Verified`: `state/ORCHESTRATION_STATE.md`
- `Verified`: `state/NEXT_ACTION.md`

## Next Bounded Runtime Slice

- `Verified`: The next bounded runtime slice is a **minimal utility prompt** slice.
- `Inference`: This slice should prove one bounded contained prompt behavior beyond the verified utility notice proof by rendering short neutral text with restrained optional actions inside one utility-only section.
- `Inference`: The section should stay utility-only by supporting short neutral prompting, contained emphasis, and bounded native actions without introducing product data, campaign framing, trust promises, support escalation, or JavaScript-driven interaction.

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/assets/stone-base.css` | `Inference` | Extend the verified base layer with neutral prompt primitives only, such as contained spacing, restrained alignment, and action-row spacing that stay substrate-level. |
| `project/sections/stone-utility-prompt.liquid` | `Inference` | Implement one utility-only section that reuses the verified shared section shell and renders a narrow neutral prompt surface with short text and bounded native actions only. |
| `project/templates/page.stone-runtime-prompt.json` | `Inference` | Add one neutral alternate page template that mounts only the new utility prompt section for isolated runtime validation. |
| `project/locales/he.default.schema.json` | `Inference` | Add Hebrew section-name, setting-label, option-label, and help-text coverage for the new utility prompt section. |
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
- `Verified`: No icon system, no badge system, no support escalation pattern, and no announcement-bar behavior in this slice.

## Builder

- `Inference`: The verified shell, verified section shell, verified utility action group section, verified utility notice section, and verified neutral template hosts already prove neutral action rendering and restrained contained messaging, so the next smallest unproven step is a bounded utility prompt that combines those lessons in one utility-only surface.
- `Inference`: The future runtime slice should proceed in this order:
  1. Extend `project/assets/stone-base.css` with neutral prompt primitives that support restrained containment and action spacing without family styling.
  2. Create `project/sections/stone-utility-prompt.liquid` as one utility-only section that consumes the existing shared section shell unchanged and renders one contained neutral prompt surface only.
  3. Create `project/templates/page.stone-runtime-prompt.json` as one neutral host that mounts only the new section for isolated validation.
  4. Update `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together so the new section stays bilingual and terminology-aligned.
- `Inference`: This path is minimal because it proves reusable contained prompting without reopening the shared shell, adding runtime JS, adding block files, adding snippets, or composing multiple sections into a page-level experience.

## Adversarial Reviewer

- `Inference`: The main failure mode is silent expansion from a neutral prompt into a campaign CTA panel, trust conversion box, support prompt, or announcement surface under the excuse of needing stronger action framing.
- `Inference`: Another failure mode is duplication drift if the prompt slice becomes an unbounded merge of `stone-utility-notice.liquid` and `stone-utility-action-group.liquid` instead of proving one restrained combined prompt surface.
- `Inference`: A third failure mode is protected-surface backtracking if the prompt proof starts requiring edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Inference`: A fourth failure mode is abstraction creep if execution begins demanding `project/blocks/` files, new snippets, more than one section, or more than one template to express a small neutral prompt proof.
- `Inference`: A fifth failure mode is vocabulary drift if the section and locale strings start naming urgency, guarantees, campaigns, warnings, or support semantics instead of neutral utility terminology.

## Reconciliation

- `Verified`: The approved next slice should remain restricted to the five planned runtime files listed above.
- `Verified`: The future section must stay in the utility and layout support family and must not become a disguised promo strip, trust box, support prompt, or announcement scaffold.
- `Verified`: The existing shared section shell must be consumed unchanged; if it is insufficient for the prompt proof, stop and replan instead of reopening it inside this unit.
- `Inference`: The safest proof is one neutral prompt section that renders short rich text with one optional secondary action inside a restrained contained surface, because that validates reusable contained prompting without introducing commerce semantics or interaction systems.
- `Inference`: Avoiding new snippet files, `project/blocks/` files, runtime JS, a second section, and a second template keeps the slice aligned with the anti-chaos rules in the section-family ledger and with the stop conditions already established by earlier Phase 2 slices.

## Why This Slice Is Next

- `Verified`: The verified minimal runtime foundation established the shell, CSS substrate, runtime JS bootstrap, settings baseline, and bilingual schema foundation.
- `Verified`: The verified minimal section runtime substrate established the shared section shell and the first neutral page-scoped host.
- `Verified`: The verified minimal utility action group slice established bounded native action presentation.
- `Verified`: The verified minimal utility key-value list slice established bounded structured informational presentation.
- `Verified`: The verified minimal utility divider band slice established bounded structural separation rhythm.
- `Verified`: The verified minimal utility notice slice established bounded contained neutral messaging.
- `Inference`: The smallest still-unproven runtime step is one utility-only section that demonstrates bounded contained prompting without broadening into page-level composition, protected-surface edits, or family-specific semantics.
- `Inference`: This is safer than broader utility-family expansion because it proves one reusable support behavior while keeping the slice neutral, isolated, and non-JS.

## Rejected Broader Alternatives

- `Verified`: Homepage work is rejected because it would force section ordering, sequencing, and surface-priority decisions before the bounded utility prompt pattern is proven.
- `Verified`: Preset work is rejected because presets belong after reusable utility-family behaviors exist and stay stable.
- `Verified`: Collection work is rejected because it introduces collection-specific merchandising and navigation assumptions.
- `Verified`: PDP work is rejected because it introduces product-detail, trust, and recommendation assumptions.
- `Verified`: Blog or editorial work is rejected because it introduces storytelling and content-domain semantics outside the utility family.
- `Verified`: Hero, story, trust, and merchandising work are rejected because they would turn a utility-family proof into family-specific storefront implementation.
- `Verified`: A richer multi-action callout is rejected because it would broaden this slice into conversion semantics rather than utility prompting.
- `Verified`: A second notice-style slice without actions is rejected because bounded contained neutral messaging was already proven in `UNIT-025` and `UNIT-026`.
- `Verified`: Editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid` is rejected because those are protected surfaces for this slice.
- `Verified`: Any `project/blocks/` file, any new snippet file, any second section file, any second template file, any JS-driven behavior, and any media-led behavior are rejected because they broaden the slice beyond one bounded prompt proof.

## Non-Goals

- `Verified`: Implement a conversion box, support escalation panel, announcement bar, promo strip, trust callout, or severity-coded message framework.
- `Verified`: Add new runtime JS behavior, drawers, modals, accordions, tabs, sliders, popovers, or cart behavior.
- `Verified`: Add new global settings groups or change the foundation settings vocabulary.
- `Verified`: Build homepage, collection, PDP, blog, article, or preset composition.
- `Verified`: Deliver polished storefront styling beyond neutral utility prompt primitives.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One new utility-only section file that proves restrained contained prompting within the existing shared shell.
- `Inference`: One neutral alternate page template that mounts only that section for isolated validation.
- `Inference`: One bounded extension of `project/assets/stone-base.css` for neutral utility prompt primitives.
- `Inference`: One paired Hebrew and English locale update that keeps the section and its schema vocabulary bilingual.
- `Verified`: No runtime files outside the explicitly planned five-file scope.

## What Would Invalidate The Slice And Require Replanning

- `Verified`: Replan if implementation needs any runtime file outside the planned five-file set plus normal state and handoff updates.
- `Verified`: Replan if the future section needs edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if the prompt proof needs `project/blocks/` files, a new snippet, a second section, a second template, iconography, support semantics, or JavaScript behavior.
- `Verified`: Replan if the section cannot stay utility-only and begins depending on products, collections, articles, blogs, presets, hero semantics, trust semantics, support semantics, or merchandising semantics.
- `Verified`: Replan if Hebrew and English locale coverage cannot remain structurally aligned in the same bounded change set.

## Stop Condition

- `Verified`: Stop if the future implementation needs any file outside `project/assets/stone-base.css`, `project/sections/stone-utility-prompt.liquid`, `project/templates/page.stone-runtime-prompt.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`.
- `Verified`: Stop if the slice starts editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, or `project/snippets/stone-section-shell.liquid`.
- `Verified`: Stop if the slice starts implementing homepage composition, preset wiring, collection surfaces, PDP surfaces, blog or editorial surfaces, or hero, story, trust, support, or merchandising behavior.
- `Verified`: Stop if the slice introduces `project/blocks/`, any new snippet file, any second new section file, any second new template file, any JS-driven behavior, any media-led behavior, or conversion-style callout behavior.
- `Verified`: Stop if the slice stops being utility-only or stops fitting inside the approved five runtime files.

## Relationship To Verified Runtime State

- `Verified`: `project/snippets/stone-section-shell.liquid` already provides the neutral wrapper contract that the new section should consume unchanged.
- `Verified`: `project/sections/stone-utility-action-group.liquid` already proves bounded native actions, so the next bounded proof should cover contained prompting rather than another open action row.
- `Verified`: `project/sections/stone-utility-notice.liquid` already proves contained neutral messaging, so the next bounded proof should cover restrained prompt behavior rather than another static notice surface.
- `Verified`: `project/templates/page.stone-runtime-notice.json` already proves that one neutral alternate page template is sufficient for isolated validation, so another neutral page template for a single new section remains the smallest safe host pattern.
- `Verified`: `project/assets/stone-base.css` is already the correct globally loaded substrate surface for neutral utility-family layout rules.
- `Verified`: The section-family ledger explicitly keeps utility and layout support sections narrow and utility-only, and it lists utility prompts as valid utility examples that can be proven here without expanding into broader family semantics.
- `Verified`: The bilingual schema strategy still requires any new section strings to land in Hebrew and English together.

## Readiness Verdict

- `Verified`: READY for one separately governed and tightly bounded runtime implementation unit.
- `Verified`: The intended next execution target is `UNIT-028`, limited to the exact future file scope above.
