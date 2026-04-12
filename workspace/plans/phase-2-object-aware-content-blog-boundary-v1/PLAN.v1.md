# Phase 2 Object-Aware Content/Blog Boundary v1

## Status

- `Verified`: This package is a docs-only approval-boundary artifact.
- `Verified`: It formalizes the recommended controlled expansion from `UNIT-066`.
- `Verified`: It defines the exact preserved rules, the exact new allowance, the exact future runtime file scope, and the exact stop conditions for the first object-aware content/blog proof.

## Decision

- `Verified`: Carry forward the controlled expansion recommended in `workspace/plans/phase-2-controlled-expansion-proposal-v1/PLAN.v1.md`.
- `Verified`: The first approved expanded runtime slice will be one **object-aware article highlights** proof.

## Preserved Rules

- `Verified`: Keep one-section discipline.
- `Verified`: Keep one-template discipline.
- `Verified`: Keep the five-runtime-file boundary.
- `Verified`: Keep JS disallowed.
- `Verified`: Keep protected surfaces disallowed.
- `Verified`: Keep `project/blocks/` disallowed.
- `Verified`: Keep new snippets disallowed.
- `Verified`: Keep broader page composition disallowed.

## Exact New Allowance

- `Verified`: Allow one bounded section file to perform read-only Liquid access to one blog object selected by an explicit section setting.
- `Verified`: Allow that section to render a restrained lead article plus a short secondary article list from that selected blog.
- `Verified`: Allow native article links only.
- `Verified`: Do not allow any other object-aware expansion in this boundary.

## Future Approved Runtime File Scope

- `project/assets/stone-base.css`
- `project/sections/stone-blog-article-highlights.liquid`
- `project/templates/page.stone-runtime-blog-article-highlights.json`
- `project/locales/he.default.schema.json`
- `project/locales/en.schema.json`

## Explicitly Disallowed Even Under This Expansion

- `Verified`: No edits to `project/layout/theme.liquid`.
- `Verified`: No edits to `project/assets/stone-runtime.js`.
- `Verified`: No edits to `project/config/settings_schema.json`.
- `Verified`: No edits to `project/snippets/stone-section-shell.liquid`.
- `Verified`: No files under `project/blocks/`.
- `Verified`: No new snippet file.
- `Verified`: No second section file.
- `Verified`: No second template file.
- `Verified`: No pagination.
- `Verified`: No tags, filters, search, or sort controls.
- `Verified`: No sliders, drawers, overlays, modals, or tabs.
- `Verified`: No product-card behavior, commerce actions, cart semantics, or merchandising logic.
- `Verified`: No campaign composition, no homepage composition, no collection companion behavior, and no PDP companion behavior.

## Intended Runtime Objective

- `Verified`: Prove one content-and-blog structure that is materially distinct from `stone-content-card-strip.liquid` by using read-only blog/article object awareness.
- `Inference`: The section should render one lead article treatment and a short secondary list only, with restrained editorial hierarchy and native links.

## Exact Acceptance Frame For The Future Runtime Unit

- `Verified`: The future implementation must stay inside the five-file runtime boundary above.
- `Verified`: The future implementation must remain non-JS.
- `Verified`: The future implementation must reuse `stone-section-shell` unchanged.
- `Verified`: The future implementation must remain read-only with respect to blog/article objects.
- `Verified`: The future implementation must not introduce filters, pagination, tags, search, or archive behavior.
- `Verified`: The future implementation must remain materially distinct from the verified content-card-strip proof.

## Stop Conditions

- `Verified`: Stop if the future slice needs any runtime file outside the approved five runtime files.
- `Verified`: Stop if the future slice needs protected-surface edits, `project/blocks/`, a new snippet, a second section, or a second template.
- `Verified`: Stop if the future slice starts requiring JS, sliders, drawers, overlays, tabs, filters, pagination, tags, search, or commerce semantics.
- `Verified`: Stop if the future slice cannot stay clearly distinct from `stone-content-card-strip.liquid` after introducing blog/article object awareness.
- `Verified`: Stop if the future slice drifts into collection companion, merchandising, PDP companion, or campaign behavior.

## Readiness Verdict

- `Verified`: READY for one separately governed bounded implementation unit under this newly formalized boundary.
- `Verified`: The intended next execution target is `UNIT-068`.
