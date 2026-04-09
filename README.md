# Stone V2

- `Verified`: Stone V2 is a governed repository for a premium RTL-native Shopify theme platform aimed at Israeli Shopify developers and agencies.
- `Verified`: The canonical source for this pass is the five architecture documents under `docs/architecture/`.
- `Verified`: This repository is intentionally Liquid-first, framework-free, web-component-free, and limited to lightweight progressive JavaScript.

## Canonical Inputs

- `Verified`: `docs/architecture/stonev2-repo-basis.md`
- `Verified`: `docs/architecture/stonev2-product-thesis.md`
- `Verified`: `docs/architecture/stonev2-section-block-platform.md`
- `Verified`: `docs/architecture/stonev2-settings-bilingual-editor.md`
- `Verified`: `docs/architecture/stonev2-build-roadmap.md`

## Repo Shape

- `Verified`: `HARNESS/` stores governance docs, reusable templates, and local checks.
- `Verified`: `docs/architecture/` stores the canonical product and architecture source documents.
- `Verified`: `project/` is the Shopify theme runtime root and remains scaffold-only in this pass.
- `Verified`: `state/` stores the canonical governed state files for orchestration, status, and next action control.
- `Verified`: `workspace/` stores intake, plans, specs, build artifacts, verification outputs, handoffs, QA artifacts, notes, decisions, docs, and logs.

## Operating Rules

- `Verified`: Plans, checks, and next actions must derive from the five architecture documents before runtime work expands.
- `Verified`: Hebrew-first and RTL-native assumptions must remain first-class across planning and later runtime implementation.
- `Verified`: Bilingual Hebrew and English editor support is a core product requirement, not an optional enhancement.
- `Verified`: This pass does not authorize full storefront implementation or copied code from external themes.
- `Inference`: The next bounded step should codify section families, settings taxonomy, and bilingual schema strategy before `project/` gains meaningful runtime files.
