# Phase 2 Minimal Utility Block Stack Assumptions v1

## Scope Assumptions

| ID | Type | Statement | Basis | Impact If Wrong | Status |
| --- | --- | --- | --- | --- | --- |
| A-01 | `Verified` | The verified section shell and verified minimal section substrate are sufficient to host one block-bearing utility section without editing `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`. | `workspace/plans/phase-2-minimal-section-runtime-substrate-v1/PLAN.v1.md`; review of the verified runtime files under `project/`. | The slice is not actually bounded to block-bearing utility validation and must be replanned. | open |
| A-02 | `Inference` | Extending `project/assets/stone-base.css` is enough to support neutral utility-stack presentation, so a new CSS asset is not needed yet. | `project/layout/theme.liquid` already loads `stone-base.css` globally and the prior substrate slice used it as the shared style surface. | The slice expands into extra asset files and breaks the bounded file contract. | open |
| A-03 | `Inference` | One new utility-only section is enough to validate the first block-bearing section path. | The runtime already has one verified non-block utility section and one verified section-shell wrapper. | The unit grows into multiple sections or multiple templates and requires replanning. | open |
| A-04 | `Inference` | A neutral alternate page template can host the new block-bearing validation section without becoming homepage, preset, collection, PDP, or editorial composition work. | `project/templates/page.stone-runtime.json` already proved a neutral page host pattern. | Template work broadens into multi-section composition and invalidates the slice. | open |
| A-05 | `Verified` | Locale updates for a new section and its block schema must land in Hebrew and English together. | `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md` | Mixed-language or partial schema coverage becomes an immediate defect. | open |
| A-06 | `Inference` | Shared block snippets and `project/blocks/` files are not required yet because one bounded section can carry its narrow block rendering inline. | No runtime evidence yet shows a second consumer that would justify separate shared block surfaces. | The unit expands into speculative abstraction and must be replanned. | open |

## Minimality Conditions

- `Verified`: The slice stays minimal only if it adds one new utility-only block-bearing section, one new neutral page template, one bounded base-CSS extension, and paired locale updates.
- `Verified`: The existing shared section shell remains unchanged and is consumed as the stable wrapper contract.
- `Verified`: The new section remains utility-only and does not depend on product, collection, article, blog, preset, or composition logic.
- `Inference`: The absence of new snippet files, `project/blocks/` files, global settings changes, and runtime JS changes is part of the slice's correctness, not an optional optimization.

## Replanning Triggers

- `Verified`: Replan if any runtime file outside the planned five-file set becomes necessary.
- `Verified`: Replan if the new section requires edits to `project/snippets/stone-section-shell.liquid`, `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`.
- `Verified`: Replan if execution needs a `project/blocks/` file, a new shared snippet, a second new section file, or a second new template file.
- `Verified`: Replan if the section cannot stay utility-only and begins requiring commerce data, article data, or family-specific behavior.
- `Verified`: Replan if the locale files cannot remain structurally aligned from the same bounded change set.
