# UNIT-SA-001.v1: Global Group Shell Inventory And Docs-Only Normalization

Date: 2026-04-24

Status: COMPLETE; NOT RUNTIME AUTHORIZATION

## Goal

Create the docs/spec control artifacts required by PLAN.v2.md before any Stone V2 section/runtime implementation.

## Scope

Allowed writes:

- `workspace/specs/app-block-placement-policy.md`
- `workspace/specs/dynamic-source-compatibility-matrix.md`
- `workspace/specs/rtl-acceptance-checklist.md`
- `workspace/specs/promotion-surface-taxonomy.md`
- `workspace/specs/pdp-conversion-block-map.md`
- `workspace/specs/collection-merchandising-surface-map.md`
- `workspace/specs/cart-recovery-surface-map.md`
- `workspace/specs/section-architecture-status-matrix.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md`

Disallowed writes:

- `project/assets/**`
- `project/blocks/**`
- `project/sections/**`
- `project/snippets/**`
- `project/templates/**`
- `project/config/**`
- `project/locales/**`
- Shopify remote themes
- Preset composition files

## Out Of Scope

- Runtime theme edits.
- Shopify upload.
- Preset composition.
- Runtime section scaffolding.
- Theme-block implementation.
- App-block runtime implementation.

## Source Artifacts Read

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`: VERIFIED
- `workspace/audits/section-block-library-stabilization-audit-2026-04-24.md`: referenced by PLAN.v2.md
- `workspace/audits/section-block-library-premium-theme-gap-review-2026-04-24.md`: referenced by PLAN.v2.md
- `workspace/audits/section-block-library-completion-addendum-prestige-crosscheck-2026-04-24.md`: referenced by PLAN.v2.md
- `workspace/audits/section-architecture-implementation-control-matrix-2026-04-24.md`: referenced by PLAN.v2.md

## Current Repo Evidence

Verified:

- `workspace/specs/` exists.
- Existing specs were not overwritten.
- No `project/**` writes are required for this unit.
- PLAN.v2.md states it is a parent roadmap, not runtime authorization.

## Files Created

- `workspace/specs/app-block-placement-policy.md`
- `workspace/specs/dynamic-source-compatibility-matrix.md`
- `workspace/specs/rtl-acceptance-checklist.md`
- `workspace/specs/promotion-surface-taxonomy.md`
- `workspace/specs/pdp-conversion-block-map.md`
- `workspace/specs/collection-merchandising-surface-map.md`
- `workspace/specs/cart-recovery-surface-map.md`
- `workspace/specs/section-architecture-status-matrix.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md`

## Control Matrix Rows Affected

| Section / Surface | Current status | Target status | Priority |
| --- | --- | --- | --- |
| P0 section architecture matrix | MISSING/PARTIAL | PRESENT as docs/spec control | P0 |
| App-block placement policy | MISSING | PRESENT as docs/spec control | P0 |
| Dynamic-source matrix | MISSING | PRESENT as docs/spec control | P0 |
| RTL checklist | MISSING/PARTIAL | PRESENT as docs/spec control | P0 |
| Promotion taxonomy | MISSING | PRESENT as docs/spec control | P0 |
| PDP block map | MISSING/PARTIAL | PRESENT as docs/spec control | P0 |
| Collection merchandising map | MISSING/PARTIAL | PRESENT as docs/spec control | P0 |
| Cart recovery map | MISSING | PRESENT as docs/spec control | P0 |

## Block Model Decisions

No runtime block model was implemented.

Docs/spec decisions recorded:

- `APP_WRAPPER_SECTION` requires `{ "type": "@app" }` and `{% render block %}`.
- `SECTION_BLOCK_SECTION` remains the default for PDP/cart/collection critical paths.
- `THEME_BLOCK_SECTION` remains blocked pending owner decision for `/blocks`.
- `GROUP_CONFIG` applies to header/footer/overlay group candidates.
- `STATIC_NO_BLOCK_SECTION` blocks app blocks.

## Dependencies

| Dependency | Status | Action |
| --- | --- | --- |
| PLAN.v2.md | PRESENT | Used as active parent roadmap. |
| Runtime section files | NOT TOUCHED | Defer to derivative runtime unit. |
| Shopify upload | NOT RUN | Explicitly disallowed. |
| Owner `/blocks` decision | BLOCKED_PENDING_OWNER_DECISION | Must be resolved before Phase 4 runtime. |
| Gift card runtime architecture | BLOCKED_PENDING_VERIFICATION | Verify Shopify-supported gift card architecture before runtime files. |

## App Block Policy Impact

App-block policy was created as a docs/spec artifact only.

No app-block runtime zones were implemented.

## Accessibility Requirements

Accessibility requirements were documented in the app-block, RTL, PDP, collection, cart, and promotion specs.

No interactive runtime behavior was implemented.

## RTL Requirements

RTL requirements were documented in `workspace/specs/rtl-acceptance-checklist.md`.

No runtime CSS was changed.

## Performance Budget

No runtime performance impact.

Future derivative runtime units must state incremental performance budgets for media-heavy and JS-heavy sections.

## Data Fallbacks

Fallback expectations were documented in:

- `section-architecture-status-matrix.md`
- `dynamic-source-compatibility-matrix.md`
- `pdp-conversion-block-map.md`
- `collection-merchandising-surface-map.md`
- `cart-recovery-surface-map.md`
- `promotion-surface-taxonomy.md`

## QA Plan

Commands required by PLAN.v2.md:

- `git status --short`
- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

Expected doc-only checks:

- No `project/**` files changed.
- All required spec files exist.
- Unit file exists.

## Validation Results

Commands run:

| Command | Result |
| --- | --- |
| `git status --short` | PASS; showed untracked docs/audit/plan/spec artifacts only. |
| `git status --short -- project workspace/specs workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md` | PASS; no `project/**` changes reported. |
| `node HARNESS/checks/check-state-artifacts.mjs` | PASS; state artifact check passed. |
| `node HARNESS/checks/check-next-action-scope.mjs` | PASS; next action scope check passed. |
| `node HARNESS/checks/check-plan-exists.mjs` | PASS; plan existence check passed. |
| `node HARNESS/checks/check-handoff-completeness.mjs` | PASS; handoff completeness check passed. |
| `node HARNESS/checks/check-approval-state.mjs` | PASS; approval state check passed. |
| `node HARNESS/checks/check-lock-state.mjs` | PASS; lock state check passed. |
| `node HARNESS/checks/harness-check.mjs` | PASS; state, next-action, plan, handoff, approval, and lock checks passed. |

Artifact checks:

| Artifact | Result |
| --- | --- |
| `workspace/specs/app-block-placement-policy.md` | PRESENT |
| `workspace/specs/dynamic-source-compatibility-matrix.md` | PRESENT |
| `workspace/specs/rtl-acceptance-checklist.md` | PRESENT |
| `workspace/specs/promotion-surface-taxonomy.md` | PRESENT |
| `workspace/specs/pdp-conversion-block-map.md` | PRESENT |
| `workspace/specs/collection-merchandising-surface-map.md` | PRESENT |
| `workspace/specs/cart-recovery-surface-map.md` | PRESENT |
| `workspace/specs/section-architecture-status-matrix.md` | PRESENT |
| `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md` | PRESENT |

## Rollback Plan

Delete or revert:

- `workspace/specs/app-block-placement-policy.md`
- `workspace/specs/dynamic-source-compatibility-matrix.md`
- `workspace/specs/rtl-acceptance-checklist.md`
- `workspace/specs/promotion-surface-taxonomy.md`
- `workspace/specs/pdp-conversion-block-map.md`
- `workspace/specs/collection-merchandising-surface-map.md`
- `workspace/specs/cart-recovery-surface-map.md`
- `workspace/specs/section-architecture-status-matrix.md`
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-001.v1.md`

## Authorization Required

Runtime execution remains blocked.

This unit does not authorize runtime work.

## Builder

The minimal safe path was to create docs/spec control artifacts only. This secures the root contract before section scaffolding or behavior work.

## Adversarial reviewer

The main risk is that docs/spec files could be mistaken for runtime authorization. This unit explicitly preserves the runtime block, does not edit `project/**`, and proposes a separate next derivative runtime unit only.

## Final recommendation or Reconciliation

Treat UNIT-SA-001 as complete only if validation confirms:

- required spec files exist
- no runtime files changed
- harness checks are either passing or their failures are reported honestly

Next recommended derivative runtime unit:

`UNIT-SA-002: Global group shell scaffolding plan`

Do not execute `UNIT-SA-002` without a separate derivative plan and owner authorization.

## Readiness Verdict

READY FOR VALIDATION
