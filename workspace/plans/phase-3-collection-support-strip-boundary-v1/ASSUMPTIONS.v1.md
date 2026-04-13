# Phase 3 Collection Support Strip Boundary Assumptions v1

- `Verified`: `docs/architecture/stonev2-build-roadmap.md` still treats collection companion work as unresolved Phase 3 family work that comes before preset-pack implementation.
- `Verified`: `docs/architecture/stonev2-section-block-platform.md` explicitly names `collection support strips` inside the collection/PDP companion family area.
- `Verified`: `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` defines `collection companion` as distinct from merchandising and `PDP companion`, and constrains it to wrapper-like building blocks including `heading`, `richtext`, `button group`, `trust cue`, `feature-detail`, `divider`, and `spacer`.
- `Verified`: `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` includes `support-strip visibility` inside `collection behavior`, which is enough to justify the lane while still proving that broader collection behavior must remain fail-closed.
- `Verified`: `UNIT-071` through `UNIT-074` proved that a lighter collection-aware support surface can exist without reopening archive controls or merchandising systems.
- `Verified`: `UNIT-128` concluded that family reopening remained docs-only and had to keep runtime authorization fail-closed.
- `Verified`: `UNIT-129` concluded that `collection support strip` is the only evidence-backed narrowed lane and explicitly blocked banner, curated explainer, and navigation-aid narrowing as the immediate next move.
- `Inference`: The remaining uncertainty is not whether the lane exists, but whether a later runtime-facing contract can be defined without blurring into collection-template, archive, banner, editorial, or merchandising authority.
