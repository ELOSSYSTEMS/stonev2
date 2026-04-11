# Phase 2 Minimal Utility Action Group Assumptions v1

## Scope Assumptions

| ID | Type | Statement | Basis | Impact If Wrong | Status |
| --- | --- | --- | --- | --- | --- |
| A-01 | `Verified` | The verified shared section shell and verified neutral page-host pattern are sufficient to host one utility-only action-group section without editing `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`. | `workspace/plans/phase-2-minimal-section-runtime-substrate-v1/PLAN.v1.md`; review of the verified runtime files under `project/`. | The slice is not actually bounded to the approved five runtime files and must be replanned. | open |
| A-02 | `Inference` | Extending `project/assets/stone-base.css` is enough to support a neutral action-group surface, so no additional CSS asset is needed yet. | `project/layout/theme.liquid` already loads `stone-base.css` globally and prior bounded slices used it as the shared substrate surface. | The slice expands into extra asset files and breaks the approved runtime boundary. | open |
| A-03 | `Inference` | One new utility-only section is enough to validate grouped native action presentation without requiring homepage sequencing or broader page composition. | The runtime already has a verified neutral page-host pattern and does not yet need multi-section composition to prove one additional utility-family behavior. | The unit grows into multiple sections or page-level composition and requires replanning. | open |
| A-04 | `Inference` | The action-group proof can stay bounded to native links or buttons only, with no JS-driven toggle, drawer, or modal behavior. | The planning intent explicitly limits the future slice to non-interactive native action presentation and rejects JS-driven behavior. | The slice expands into interaction systems and invalidates the plan. | open |
| A-05 | `Inference` | A narrow action-group surface can stay neutral and utility-only without becoming hero, trust, support, promotional, or merchandising behavior. | The utility and layout support family in `STONEV2_SECTION_FAMILY_LEDGER.md` explicitly permits utility prompts and button-group reuse while rejecting broader family semantics. | The future section broadens into a different family and requires replanning. | open |
| A-06 | `Verified` | Locale updates for the new section and its schema surface must land in Hebrew and English together. | `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md` | Mixed-language or partial schema coverage becomes an immediate defect. | open |

## Minimality Conditions

- `Verified`: The slice stays minimal only if it adds one new utility-only action-group section, one new neutral page template, one bounded base-CSS extension, and paired locale updates.
- `Verified`: The existing shared section shell remains unchanged and is consumed as the stable wrapper contract.
- `Verified`: The new section remains utility-only and does not depend on product, collection, article, blog, preset, hero, trust, or merchandising logic.
- `Verified`: The future slice must remain non-interactive beyond native links or buttons and must not require runtime JS.
- `Inference`: The absence of new snippet files, `project/blocks/` files, global settings changes, runtime JS changes, a second section, and a second template is part of the slice's correctness, not an optional optimization.

## Replanning Triggers

- `Verified`: Replan if any runtime file outside the planned five-file set becomes necessary.
- `Verified`: Replan if the new section requires edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if execution needs `project/blocks/`, a new snippet, a second new section, a second new template, JS-driven behavior, or media handling.
- `Verified`: Replan if the section cannot stay utility-only and begins requiring commerce data, article data, preset logic, or family-specific behavior.
- `Verified`: Replan if the locale files cannot remain structurally aligned from the same bounded change set.
