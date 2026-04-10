# Phase 2 Minimal Section Runtime Substrate Assumptions v1

## Scope Assumptions

| ID | Type | Statement | Basis | Impact If Wrong | Status |
| --- | --- | --- | --- | --- | --- |
| A-01 | `Verified` | The verified shell, token layer, base layer, runtime JS bootstrap, and foundation schema are sufficient to host the next slice without editing `project/layout/theme.liquid`, `project/assets/stone-runtime.js`, or `project/config/settings_schema.json`. | `workspace/plans/phase-2-minimal-runtime-foundation-v1/PLAN.v1.md`; review of the seven verified runtime foundation files. | The slice is not actually substrate-only and must be replanned before execution. | open |
| A-02 | `Inference` | Extending `project/assets/stone-base.css` is enough to supply neutral section-shell primitives, so a new CSS asset is not needed yet. | `project/layout/theme.liquid` already loads `stone-base.css` globally. | The slice expands into extra asset files and breaks the bounded file contract. | open |
| A-03 | `Inference` | One shared wrapper snippet plus one utility-only validation section is enough to prove the first section runtime contract. | `workspace/specs/STONEV2_SECTION_FAMILY_LEDGER.md` identifies utility and layout support as the narrowest family. | The unit grows into multiple sections or multiple snippets and requires replanning. | open |
| A-04 | `Inference` | A neutral alternate page template can host the validation section without becoming homepage, preset, collection, or PDP composition work. | The user explicitly blocked those broader surfaces, but did not block one neutral page-scoped host used for substrate validation. | Template work becomes broader storefront composition and invalidates the slice. | open |
| A-05 | `Verified` | Locale updates for a new section must land in Hebrew and English together. | `workspace/specs/STONEV2_BILINGUAL_SCHEMA_STRATEGY.md` | Mixed-language or partial schema coverage becomes an immediate defect. | open |
| A-06 | `Inference` | New global settings are not required for the validation section because the slice can reuse foundation-level shell and design-system settings already present. | `project/config/settings_schema.json`; `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` | The unit spills into settings-taxonomy expansion and must be replanned. | open |

## Minimality Conditions

- `Verified`: The slice stays minimal only if it adds one shared snippet, one section, one alternate page template, one base-CSS extension, and paired locale updates.
- `Verified`: The utility validation section remains content-only and does not depend on products, collections, articles, presets, or page-composition logic.
- `Verified`: The alternate template stays a neutral host for validation and does not become a storefront homepage or merchandising scaffold.
- `Inference`: The absence of new JS and new global settings is part of the slice's correctness, not an optional optimization.

## Replanning Triggers

- `Verified`: Replan if any runtime file outside the planned six-file set becomes necessary.
- `Verified`: Replan if the validation section needs a second shared snippet, any `project/blocks/` file, or any second section file.
- `Verified`: Replan if the section cannot stay utility-only and begins requiring commerce data, article data, or family-specific behavior.
- `Verified`: Replan if the validation host cannot stay inside one neutral alternate page template.
- `Verified`: Replan if the locale files cannot remain structurally aligned from the same bounded change set.
