# Phase 2 Minimal Utility Layout Composition Assumptions v1

## Scope Assumptions

| ID | Type | Statement | Basis | Impact If Wrong | Status |
| --- | --- | --- | --- | --- | --- |
| A-01 | `Verified` | The verified shared section shell and verified neutral page-host pattern are sufficient to host one utility-only layout-composition section without editing `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`. | `workspace/plans/phase-2-minimal-section-runtime-substrate-v1/PLAN.v1.md`; review of the verified runtime files under `project/`. | The slice is not actually bounded to the approved five runtime files and must be replanned. | open |
| A-02 | `Inference` | Extending `project/assets/stone-base.css` is enough to support a responsive two-region utility composition, so no additional CSS asset is needed yet. | `project/layout/theme.liquid` already loads `stone-base.css` globally and prior bounded slices used it as the shared substrate surface. | The slice expands into extra asset files and breaks the approved runtime boundary. | open |
| A-03 | `Inference` | One new utility-only section is enough to validate grouped content regions and simple columnar composition beyond simple vertical block stacking. | The runtime already has one verified utility block stack section and does not yet need multi-section composition to prove one additional layout behavior. | The unit grows into multiple sections or page-level composition and requires replanning. | open |
| A-04 | `Inference` | The composition proof can stay bounded to exactly two named utility regions with the existing narrow content-block subset assigned between them. | The current utility block stack already proves inline rendering for `heading`, `richtext`, and `list`, and the next missing behavior is composition rather than additional block-family breadth. | The slice expands into nested groups, more regions, or new block abstractions and invalidates the plan. | open |
| A-05 | `Inference` | One neutral alternate page template can host the new section without turning into homepage, preset, collection, PDP, or editorial composition work. | `project/templates/page.stone-runtime-block-stack.json` already proved the isolated neutral page-host pattern. | Template work broadens into page composition and invalidates the slice. | open |
| A-06 | `Verified` | Locale updates for the new section and its schema surface must land in Hebrew and English together. | `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md` | Mixed-language or partial schema coverage becomes an immediate defect. | open |

## Minimality Conditions

- `Verified`: The slice stays minimal only if it adds one new utility-only layout-composition section, one new neutral page template, one bounded base-CSS extension, and paired locale updates.
- `Verified`: The existing shared section shell remains unchanged and is consumed as the stable wrapper contract.
- `Verified`: The new section remains utility-only and does not depend on product, collection, article, blog, preset, hero, trust, or merchandising logic.
- `Inference`: The absence of new snippet files, `project/blocks/` files, global settings changes, runtime JS changes, a second section, and a second template is part of the slice's correctness, not an optional optimization.

## Replanning Triggers

- `Verified`: Replan if any runtime file outside the planned five-file set becomes necessary.
- `Verified`: Replan if the new section requires edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if execution needs more than two named regions, nested group structures, a `project/blocks/` file, a new snippet, a second new section, or a second new template.
- `Verified`: Replan if the section cannot stay utility-only and begins requiring commerce data, article data, preset logic, or family-specific behavior.
- `Verified`: Replan if the locale files cannot remain structurally aligned from the same bounded change set.
