# Phase 2 Minimal Runtime Foundation Plan v1

## Status

- `Verified`: This package is a documentation-only planning artifact.
- `Verified`: It does not authorize runtime edits by itself.
- `Verified`: Its purpose is to bound the first safe runtime slice that may later be executed under a separate governed unit.

## Objective

- `Verified`: Define the smallest useful Phase 2 runtime foundation needed to begin work inside `project/` without broadening into storefront implementation.
- `Verified`: Keep the first runtime slice limited to:
  - an RTL-native Liquid layout shell direction
  - a minimal design-token foundation direction
  - a minimal progressive JavaScript foundation direction
  - a minimal schema and locales foundation direction
- `Verified`: Keep section-family implementation, preset-pack work, homepage build-out, collection work, PDP work, and polished storefront design execution out of scope.

## Canonical Inputs

- `Verified`: `docs/architecture/stonev2-repo-basis.md`
- `Verified`: `docs/architecture/stonev2-product-thesis.md`
- `Verified`: `docs/architecture/stonev2-section-block-platform.md`
- `Verified`: `docs/architecture/stonev2-settings-bilingual-editor.md`
- `Verified`: `docs/architecture/stonev2-build-roadmap.md`
- `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md`
- `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md`
- `Verified`: `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md`
- `Verified`: `state/ORCHESTRATION_STATE.md`
- `Verified`: `state/NEXT_ACTION.md`

## Planned Future Runtime File Scope

| Surface | Type | Planned role |
| --- | --- | --- |
| `project/layout/theme.liquid` | `Inference` | Single Liquid-first document shell with RTL-native document direction, global asset loading, and `{{ content_for_layout }}` hosting only. |
| `project/assets/stone-tokens.css` | `Inference` | Minimal design-token layer for color, spacing, radius, motion, and shell primitives only. |
| `project/assets/stone-base.css` | `Inference` | Minimal shell and document base styles that consume the token layer and rely on logical CSS rather than LTR-first assumptions. |
| `project/assets/stone-runtime.js` | `Inference` | Minimal progressive enhancement entry point with no section-family interactions and no framework runtime. |
| `project/config/settings_schema.json` | `Inference` | Minimal top-level settings groups required for brand identity, global design system, and shell behavior only. |
| `project/locales/he.default.schema.json` | `Inference` | Hebrew-first schema terminology for the minimal settings foundation. |
| `project/locales/en.schema.json` | `Inference` | English schema terminology aligned structurally with the Hebrew schema surface. |

## Explicit Runtime Exclusions

- `Verified`: No files under `project/sections/` in the first runtime slice.
- `Verified`: No files under `project/blocks/` in the first runtime slice.
- `Verified`: No files under `project/templates/` in the first runtime slice.
- `Inference`: No files under `project/snippets/` unless the bounded shell becomes impossible to keep coherent inside `layout/theme.liquid`; if that happens, stop and replan.
- `Verified`: No section-family presets, no preset packs, no homepage sequencing, no collection companion work, and no PDP companion work in the first runtime slice.
- `Verified`: No broad shell or navigation feature build-out beyond the minimal foundation needed to host later work safely.

## Builder

- `Inference`: The safest minimal implementation path is a single-file shell plus paired foundation assets and paired schema locale files.
- `Inference`: The future runtime slice should proceed in this order:
  1. Create `project/layout/theme.liquid` as a page-agnostic shell that establishes document direction and a stable asset-loading spine.
  2. Create `project/assets/stone-tokens.css` and `project/assets/stone-base.css` as the minimal visual foundation for shell structure and global primitives.
  3. Create `project/assets/stone-runtime.js` as a lightweight entry point for future progressive enhancement hooks, without component behavior.
  4. Create `project/config/settings_schema.json` with only the smallest settings groups required by the shell and token foundation.
  5. Create `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together, using the Phase 1 settings taxonomy and bilingual schema strategy vocabulary.
- `Inference`: This path is minimal because it establishes the runtime substrate without committing to section families, preset defaults, or storefront page composition.

## Adversarial Reviewer

- `Inference`: The main failure mode is hidden scope expansion through "helpful" early files such as header sections, footer sections, homepage templates, or shell snippets that pull later work into the first slice.
- `Inference`: Another failure mode is over-specifying the settings surface by adding family-level, merchandising-level, or preset-level controls before those runtime surfaces exist.
- `Inference`: A third failure mode is treating the progressive JavaScript entry point as permission to add drawers, carousels, accordions, or merchandising interactions before the platform files and verification rules exist.
- `Inference`: A fourth failure mode is language drift if Hebrew and English schema files are not authored and reviewed together against the same control-plane vocabulary.
- `Inference`: The Builder path stays valid only if the file set remains exactly bounded and the shell remains structurally neutral.

## Reconciliation

- `Verified`: The approved minimal runtime foundation should remain restricted to the seven planned files listed above.
- `Verified`: The first runtime slice should not create section, block, template, or preset surfaces.
- `Inference`: The layout shell should stay intentionally plain so later section-family work can attach to a stable base instead of forcing shell rewrites.
- `Inference`: The settings surface should stop at foundation domains derived from `STONEV2_SETTINGS_TAXONOMY.md`: brand identity, global design system, and shell behavior.
- `Inference`: The bilingual schema surface should stop at parity for the minimal foundation groups and should not attempt full future-family coverage in the first slice.

## Non-Goals

- `Verified`: Implement any section-family file under `project/sections/`.
- `Verified`: Implement any preset-pack or industry preset logic.
- `Verified`: Build homepage structure, content sequencing, or polished merchandising.
- `Verified`: Build collection, PDP, or blog runtime surfaces.
- `Verified`: Introduce a frontend framework, web components, or non-progressive JavaScript architecture.
- `Verified`: Solve final storefront visual design in the first slice.

## Expected Outputs Of The Future Runtime Slice

- `Inference`: One RTL-native theme shell file under `project/layout/`.
- `Inference`: Two CSS foundation assets that define tokens and base shell styling only.
- `Inference`: One lightweight progressive JavaScript foundation asset.
- `Inference`: One minimal settings schema file limited to foundation control domains.
- `Inference`: Two synchronized schema locale files for Hebrew and English.
- `Verified`: No runtime files outside the explicitly planned scope.

## Stop Condition

- `Verified`: Stop if implementation needs any file outside the planned seven runtime files plus normal state and handoff updates.
- `Verified`: Stop if the slice starts to require section-family markup, preset defaults, homepage composition, collection support, PDP support, or storefront polish.
- `Verified`: Stop if the settings surface expands beyond foundation-level groups.
- `Verified`: Stop if Hebrew and English schema terminology cannot stay synchronized from the same bounded change set.

## Relationship To Completed Canon Artifacts

- `Verified`: `STONEV2_SECTION_FAMILY_LEDGER.md` defines later runtime families and therefore constrains this slice to shell-only hosting rather than family implementation.
- `Verified`: `STONEV2_SETTINGS_TAXONOMY.md` constrains the allowed first schema groups to shared foundation domains instead of ad hoc settings growth.
- `Verified`: `STONEV2_BILINGUAL_SCHEMA_STRATEGY.md` constrains the locale work to paired Hebrew and English schema authoring with terminology parity.
- `Verified`: `stonev2-build-roadmap.md` places this work inside Phase 2 theme foundation and keeps later phases out of scope.
- `Verified`: The architecture canon preserves the Liquid-first, no-framework, no-web-components, RTL-native, and Hebrew-first posture that the runtime foundation must reflect.

## Readiness Verdict

- `Verified`: READY for a separately governed and tightly bounded runtime implementation unit.
- `Verified`: The intended next execution target is a conditional runtime slice that touches only the planned file scope above.
