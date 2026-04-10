# Phase 2 Minimal Section Runtime Substrate Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to bound the next safe Phase 2 runtime slice after the verified minimal foundation.

## Objective

- `Verified`: Define the next smallest useful runtime slice that extends the verified foundation without broadening into homepage composition, preset-pack work, collection work, PDP work, blog or editorial work, or polished storefront execution.
- `Verified`: Keep the next slice limited to:
  - one shared section-shell snippet contract
  - one utility-only validation section
  - one neutral alternate page template used only to host that validation section
  - one base-layer CSS extension for shared section-shell primitives
  - paired Hebrew and English locale updates for the new section schema surface
- `Verified`: Keep broad section-family implementation, merchandising families, shell feature build-out, preset defaults, and new global settings groups out of scope.

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
- `Verified`: `project/layout/theme.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/assets/stone-runtime.js`
- `Verified`: `project/config/settings_schema.json`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`
- `Verified`: `state/ORCHESTRATION_STATE.md`
- `Verified`: `state/NEXT_ACTION.md`

## Next Bounded Runtime Slice

- `Verified`: The next bounded runtime slice is a **minimal section runtime substrate**.
- `Inference`: This slice should prove that the verified shell, token layer, base layer, runtime JS foundation, and bilingual schema foundation can host one normalized section contract without jumping into real storefront composition.
- `Verified`: The section chosen for validation should come from the utility and layout support family because that family is explicitly utility-only and least likely to leak merchandising or page-specific assumptions.

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/assets/stone-base.css` | `Inference` | Extend the verified base layer with reusable section-shell primitives only, such as section spacing, section width, and neutral content flow treatment. |
| `project/snippets/stone-section-shell.liquid` | `Inference` | Introduce the first shared section wrapper contract that later section families can reuse for container, spacing, and semantic section framing. |
| `project/sections/stone-utility-richtext.liquid` | `Inference` | Implement one utility-only validation section that renders heading, rich text, and optional CTA content without commerce or storytelling dependencies. |
| `project/templates/page.stone-runtime.json` | `Inference` | Add one neutral alternate page template that mounts only the utility validation section so the contract can be exercised without touching homepage, collection, PDP, or preset surfaces. |
| `project/locales/he.default.schema.json` | `Inference` | Add Hebrew section-name, setting-label, option-label, and help-text coverage for the utility validation section. |
| `project/locales/en.schema.json` | `Inference` | Add English schema coverage structurally aligned with the Hebrew additions for the same section. |

## Explicit Runtime Exclusions

- `Verified`: No edits to `project/layout/theme.liquid` in this slice.
- `Verified`: No edits to `project/assets/stone-runtime.js` in this slice.
- `Verified`: No edits to `project/config/settings_schema.json` in this slice.
- `Verified`: No new files under `project/blocks/`.
- `Verified`: No new snippets besides `project/snippets/stone-section-shell.liquid`.
- `Verified`: No new sections besides `project/sections/stone-utility-richtext.liquid`.
- `Verified`: No new templates besides `project/templates/page.stone-runtime.json`.
- `Verified`: No homepage template, no `index.json`, no collection template, no PDP template, no article or blog template, and no preset JSON work in this slice.
- `Verified`: No merchandising, hero, story, shoppable-media, trust, collection-companion, or PDP-companion family implementation in this slice.

## Builder

- `Inference`: The verified foundation already supplies the document shell, asset loading, direction logic, token layer, base typography, progressive JS bootstrap, and bilingual settings baseline, so the next smallest useful extension is the first reusable section contract.
- `Inference`: The future runtime slice should proceed in this order:
  1. Extend `project/assets/stone-base.css` with neutral section-shell primitives that consume the verified tokens and avoid family-specific styling.
  2. Create `project/snippets/stone-section-shell.liquid` as the first reusable section wrapper that normalizes spacing, width handling, and content framing.
  3. Create `project/sections/stone-utility-richtext.liquid` as a utility-only validation section that proves the section-shell contract can render real schema-driven content without commerce logic.
  4. Create `project/templates/page.stone-runtime.json` as a neutral host for the validation section so runtime and editor behavior can be exercised without touching homepage composition.
  5. Update `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together so the new section stays bilingual and terminology-aligned.
- `Inference`: This path is minimal because it proves the first section substrate and template host contract while intentionally avoiding merchandising logic, family proliferation, and new global settings.

## Adversarial Reviewer

- `Inference`: The main failure mode is silent expansion from "section substrate" into actual family implementation, especially if the validation section starts absorbing hero, banner, or merchandising behavior.
- `Inference`: Another failure mode is template sprawl if the slice touches `index.json`, collection templates, PDP templates, or preset JSON under the excuse of "making the section visible."
- `Inference`: A third failure mode is premature abstraction through shared block snippets or new settings groups before there is evidence that more than one section needs them.
- `Inference`: A fourth failure mode is locale drift if the section schema is added in one language first and translated later.
- `Inference`: A fifth failure mode is shell backtracking if the slice starts editing `theme.liquid`, runtime JS, or global settings because the section contract was not actually bounded tightly enough.

## Reconciliation

- `Verified`: The approved next slice should remain restricted to the six planned runtime files listed above.
- `Verified`: The validation section should stay in the utility and layout support family and should not become a disguised hero, announcement bar, category banner, or editorial story unit.
- `Verified`: The alternate template should remain a neutral page-level host and must not turn into homepage or preset composition.
- `Inference`: Shared block snippets are not yet justified because one bounded utility section is enough to validate the section-shell contract; deeper block abstraction can wait for later evidence.
- `Inference`: Keeping the slice off `theme.liquid`, `settings_schema.json`, and `stone-runtime.js` protects the verified foundation and makes any future invalidation signal clearer.

## Why This Slice Is Next

- `Verified`: The verified minimal foundation established shell, tokens, base styles, runtime JS bootstrap, and bilingual settings groundwork, but it did not yet establish how normalized sections will attach to that foundation.
- `Verified`: The section and block canon says breadth must come from normalized families and shared contracts rather than one-off section sprawl.
- `Inference`: A shared section-shell contract plus one utility-only validation section is the smallest runtime slice that moves from shell substrate toward section-family substrate without jumping into merchandising-level work.
- `Inference`: This is safer than another shell-only slice because the shell is already verified and further shell extension would not unlock later family work as directly.

## Rejected Broader Alternatives

- `Verified`: Broad section-family implementation is rejected because the repo has not yet established the first shared section contract or a neutral runtime host for sections.
- `Verified`: Homepage composition is rejected because it would force ordering, merchandising, and preset decisions before the substrate is stable.
- `Verified`: Preset-pack work is rejected because presets belong after reusable section-family behavior exists.
- `Verified`: Collection, PDP, and blog or editorial implementation are rejected because they introduce page-specific commerce and content assumptions that exceed a substrate slice.
- `Inference`: A larger shared block-snippet pack is rejected because it would be speculative abstraction before one bounded section proves what should actually be shared.

## Non-Goals

- `Verified`: Implement a real hero, merchandising rail, support lane, collection banner, PDP support unit, or editorial section.
- `Verified`: Add new global settings groups or change the foundation settings vocabulary.
- `Verified`: Add family-level JS interactions, drawers, accordions, sliders, hotspots, or cart behavior.
- `Verified`: Build homepage, collection, PDP, article, blog, or preset composition.
- `Verified`: Deliver polished storefront styling beyond neutral section-shell primitives.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One reusable section-shell wrapper snippet.
- `Inference`: One utility-only runtime section that validates schema-driven rendering on top of the shared wrapper.
- `Inference`: One neutral alternate page template that mounts only that validation section.
- `Inference`: One bounded extension of the verified base CSS for section-shell primitives.
- `Inference`: One paired Hebrew or English locale update that keeps the new section bilingual.
- `Verified`: No runtime files outside the explicitly planned scope.

## What Would Invalidate The Slice And Require Replanning

- `Verified`: Replan if implementation needs any runtime file outside the planned six-file set plus normal state and handoff updates.
- `Verified`: Replan if the section needs `theme.liquid`, `settings_schema.json`, or `stone-runtime.js` changes to function.
- `Verified`: Replan if the validation host requires homepage, collection, PDP, article, blog, or preset templates instead of one neutral alternate page template.
- `Verified`: Replan if the utility validation section cannot stay utility-only and begins depending on product, collection, article, or merchandising objects.
- `Verified`: Replan if one shared section-shell snippet proves insufficient and execution begins demanding multiple shared block snippets or broader abstraction in the same unit.
- `Verified`: Replan if Hebrew and English locale coverage cannot stay synchronized in the same bounded change set.

## Stop Condition

- `Verified`: Stop if the future implementation needs any file outside `project/assets/stone-base.css`, `project/snippets/stone-section-shell.liquid`, `project/sections/stone-utility-richtext.liquid`, `project/templates/page.stone-runtime.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`.
- `Verified`: Stop if the slice starts implementing homepage composition, preset wiring, collection surfaces, PDP surfaces, blog or editorial surfaces, merchandising behavior, or polished storefront design.
- `Verified`: Stop if the slice introduces a second section file, a second template file, a second snippet file, or any `project/blocks/` file.
- `Verified`: Stop if the slice starts adding new global settings or new runtime JS behavior.

## Relationship To Completed Foundation Work

- `Verified`: `project/layout/theme.liquid` already provides the RTL-aware document shell and asset-loading spine that the new section substrate should consume rather than modify.
- `Verified`: `project/assets/stone-base.css` is already loaded globally and is therefore the correct bounded place for neutral section-shell primitives.
- `Verified`: `project/assets/stone-runtime.js` already provides the minimal runtime bootstrap, so this slice should avoid new JS until a later slice proves it is necessary.
- `Verified`: `project/config/settings_schema.json` already establishes the foundation settings vocabulary and should remain unchanged until a later bounded unit proves a need for more settings.
- `Verified`: The Phase 1 ledger designates utility and layout support as the narrowest family for substrate validation.
- `Verified`: The bilingual schema strategy requires the new section schema surface to be added in Hebrew and English together.

## Readiness Verdict

- `Verified`: READY for one separately governed and tightly bounded runtime implementation unit.
- `Verified`: The intended next execution target is `UNIT-007`, limited to the exact future file scope above.
