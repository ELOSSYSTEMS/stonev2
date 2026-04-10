# Phase 2 Minimal Section Runtime Substrate Checks v1

## Acceptance Checks

| ID | Requirement | Evidence Needed |
| --- | --- | --- |
| AC-01 | Only the approved runtime file set is created or modified under `project/`. | Diff shows changes only in `project/assets/stone-base.css`, `project/snippets/stone-section-shell.liquid`, `project/sections/stone-utility-richtext.liquid`, `project/templates/page.stone-runtime.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`. |
| AC-02 | The shared section wrapper stays neutral and reusable. | File review shows `project/snippets/stone-section-shell.liquid` handles framing, spacing, and width semantics only, without hero, merchandising, or page-specific assumptions. |
| AC-03 | The first runtime section stays utility-only. | File review shows `project/sections/stone-utility-richtext.liquid` is limited to heading, rich text, and optional CTA content with no product, collection, article, or merchandising logic. |
| AC-04 | The template host stays neutral. | `project/templates/page.stone-runtime.json` mounts only the utility validation section and does not introduce homepage ordering, preset defaults, or page-specific feature composition. |
| AC-05 | The base layer extension stays substrate-level. | File review of `project/assets/stone-base.css` shows shared section-shell primitives only, without polished family styling or storefront-specific treatments. |
| AC-06 | Hebrew and English locale coverage stays structurally aligned for the new section schema surface. | Side-by-side review confirms matching keys, option structures, and help-text coverage in `project/locales/he.default.schema.json` and `project/locales/en.schema.json`. |
| AC-07 | No new global settings or runtime JS behavior enters the slice. | Diff shows no edits to `project/config/settings_schema.json` or `project/assets/stone-runtime.js`. |

## Regression Checks

| ID | Area | Check | Failure Signal |
| --- | --- | --- | --- |
| RC-01 | Runtime boundary | Confirm no new runtime files appear outside the approved six-file list. | Any new file under `project/` outside the approved scope. |
| RC-02 | Family scope | Confirm no hero, merchandising, trust, collection, PDP, blog, or editorial behavior appears in the utility validation section. | Product data usage, collection data usage, article data usage, or family-specific naming and settings. |
| RC-03 | Template scope | Confirm no homepage, collection, PDP, preset, or additional page template files are introduced. | Any template file beyond `project/templates/page.stone-runtime.json`. |
| RC-04 | Control-plane discipline | Confirm no settings-taxonomy expansion occurs in the slice. | Edits to `project/config/settings_schema.json` or new schema concepts that belong to global settings instead of local section schema. |
| RC-05 | Bilingual parity | Confirm locale files remain synchronized for the added section strings. | Missing keys, mismatched option sets, or help text missing in one language. |

## Commands

| ID | Command | Purpose | Expected Result |
| --- | --- | --- | --- |
| CMD-01 | `node HARNESS/checks/check-state-artifacts.mjs` | Confirm required state sections remain intact after the runtime slice state update. | Pass |
| CMD-02 | `node HARNESS/checks/check-next-action-scope.mjs` | Confirm the next action remains one bounded unit with explicit scope. | Pass |
| CMD-03 | `node HARNESS/checks/check-plan-exists.mjs` | Confirm the approved runtime unit references this plan package. | Pass |
| CMD-04 | `node HARNESS/checks/check-handoff-completeness.mjs` | Confirm handoff remains synchronized with state after the runtime slice. | Pass |
| CMD-05 | `node HARNESS/checks/harness-check.mjs` | Run the local aggregate harness checks. | Pass |

## Boundary Review Steps

- `Verified`: Review the changed runtime paths and confirm they are a subset of the approved six-file list.
- `Verified`: Review `project/snippets/stone-section-shell.liquid` and reject any embedded hero, merchandising, collection, PDP, or shell feature logic.
- `Verified`: Review `project/sections/stone-utility-richtext.liquid` and reject any schema or markup that exceeds utility-only rich text, heading, and CTA behavior.
- `Verified`: Review `project/templates/page.stone-runtime.json` and reject any extra section composition or preset-like sequencing.
- `Verified`: Review the locale files together and reject key, option, or help-text mismatches.
- `Verified`: Stop the unit if any of the above checks fail instead of broadening the slice to "make it complete."
