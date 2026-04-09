# INTAKE.v1

## Goal

- `Verified`: Build Stone V2 as a governed premium RTL-native Shopify theme platform repository for Israeli Shopify developers and agencies.

## Canonical Inputs

- `Verified`: `docs/architecture/stonev2-repo-basis.md`
- `Verified`: `docs/architecture/stonev2-product-thesis.md`
- `Verified`: `docs/architecture/stonev2-section-block-platform.md`
- `Verified`: `docs/architecture/stonev2-settings-bilingual-editor.md`
- `Verified`: `docs/architecture/stonev2-build-roadmap.md`

## Primary Customer

- `Inference`: Israeli Shopify developers, agencies, and freelancers are the primary buyer and implementation audience.
- `Inference`: Hebrew-speaking merchants are the downstream editor audience.

## This Pass Scope

- `Verified`: Populate the governed harness workflow surfaces, repo canon, reusable templates, checker scaffold, normalized state files, and seed handoff artifacts.
- `Verified`: Keep `project/` limited to runtime scaffolding only.

## Hard Constraints

- `Verified`: Liquid-first
- `Verified`: No frontend framework
- `Verified`: No web components
- `Verified`: Lightweight progressive JavaScript only
- `Verified`: RTL-native and Hebrew-first assumptions must be preserved
- `Verified`: Bilingual Hebrew and English editor support is a core requirement
- `Verified`: Do not copy code or markup from external reference themes

## Non-Goals

- `Verified`: This pass is not full storefront implementation.
- `Verified`: This pass does not build preset packs, sections, blocks, locale schema files, or production theme runtime behavior.

## Next Planning Questions

- `Inference`: Which section families should be codified first into a governed ledger?
- `Inference`: What normalized settings taxonomy should control shared family behavior?
- `Inference`: What bilingual schema authoring strategy should govern Hebrew and English editor coverage before runtime files are added?
