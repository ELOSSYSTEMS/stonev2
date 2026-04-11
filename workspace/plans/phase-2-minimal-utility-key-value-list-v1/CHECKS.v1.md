# Phase 2 Minimal Utility Key-Value List Checks v1

## Acceptance Checks

| ID | Requirement | Evidence Needed |
| --- | --- | --- |
| AC-01 | Only the approved runtime file set is created or modified under `project/`. | Diff shows changes only in `project/assets/stone-base.css`, `project/sections/stone-utility-key-value-list.liquid`, `project/templates/page.stone-runtime-key-value-list.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`. |
| AC-02 | The slice proves one utility-only structured key-value behavior. | File review shows `project/sections/stone-utility-key-value-list.liquid` renders a bounded neutral set of term-value pairs without hero, trust, promotional, editorial, commerce, or PDP-spec semantics. |
| AC-03 | The shared section shell remains unchanged and reused as-is. | File review shows the new section renders through `stone-section-shell` and no diff touches `project/snippets/stone-section-shell.liquid`. |
| AC-04 | The template host stays neutral and isolated. | `project/templates/page.stone-runtime-key-value-list.json` mounts only the utility key-value list validation section and does not introduce homepage ordering, preset defaults, or multi-section sequencing. |
| AC-05 | The base-layer extension stays substrate-level. | File review of `project/assets/stone-base.css` shows neutral key-value list primitives only, without family-specific styling, media-led behavior, storefront polish, or protected-surface backtracking. |
| AC-06 | Hebrew and English locale coverage stays structurally aligned for the new section schema surface. | Side-by-side review confirms matching keys, option structures, block labels, and help-text coverage in `project/locales/he.default.schema.json` and `project/locales/en.schema.json`. |
| AC-07 | No global settings, runtime JS behavior, snippet files, block files, second section files, second template files, or comparison-table behavior enter the slice. | Diff shows no edits to `project/config/settings_schema.json`, `project/assets/stone-runtime.js`, `project/snippets/`, or `project/blocks/`, no extra section or template file appears, and no table/comparison behavior is introduced. |

## Regression Checks

| ID | Area | Check | Failure Signal |
| --- | --- | --- | --- |
| RC-01 | Runtime boundary | Confirm no new runtime files appear outside the approved five-file list. | Any new file under `project/` outside the approved scope. |
| RC-02 | Shell stability | Confirm the verified shared section shell remains unchanged. | Any edit to `project/snippets/stone-section-shell.liquid`. |
| RC-03 | Family scope | Confirm no hero, story, trust, merchandising, collection, PDP, article, blog, or editorial behavior appears in the new section. | Product data usage, collection data usage, article data usage, family-specific naming, media-led storytelling, PDP-spec framing, or commerce semantics. |
| RC-04 | Interaction boundary | Confirm the section stays non-interactive and does not grow into JS-driven behavior. | Drawer, modal, toggle, accordion, popover, or runtime-JS dependence appears. |
| RC-05 | Template scope | Confirm no homepage, collection, PDP, preset, or additional alternate-template composition is introduced. | Any template file beyond `project/templates/page.stone-runtime-key-value-list.json` or any multi-section sequencing. |
| RC-06 | Abstraction discipline | Confirm no `project/blocks/` file or new shared snippet file is introduced. | New block file or new snippet file appears. |
| RC-07 | Bilingual parity | Confirm locale files remain synchronized for the added section and block strings. | Missing keys, mismatched option sets, mismatched block labels, or help text missing in one language. |

## Commands

| ID | Command | Purpose | Expected Result |
| --- | --- | --- | --- |
| CMD-01 | `node HARNESS/checks/check-state-artifacts.mjs` | Confirm required state sections remain intact after the planning unit state update. | Pass |
| CMD-02 | `node HARNESS/checks/check-next-action-scope.mjs` | Confirm the next action remains one bounded unit with explicit scope. | Pass |
| CMD-03 | `node HARNESS/checks/check-plan-exists.mjs` | Confirm the approved next unit references this plan package. | Pass |
| CMD-04 | `node HARNESS/checks/check-handoff-completeness.mjs` | Confirm handoff remains synchronized with state after the planning update. | Pass |
| CMD-05 | `node HARNESS/checks/check-approval-state.mjs` | Confirm approval state stays aligned across orchestration and next action. | Pass |
| CMD-06 | `node HARNESS/checks/check-lock-state.mjs` | Confirm lock-state metadata remains coherent and single-writer. | Pass |
| CMD-07 | `node HARNESS/checks/harness-check.mjs` | Run the local aggregate harness checks. | Pass |

## Boundary Review Steps

- `Verified`: Review the changed runtime paths and confirm they are a subset of the approved five-file list.
- `Verified`: Review `project/sections/stone-utility-key-value-list.liquid` and reject any product, collection, article, blog, hero, story, trust, merchandising, editorial, PDP-spec, or media-led behavior.
- `Verified`: Review `project/sections/stone-utility-key-value-list.liquid` and reject any need for runtime JS, protected-surface edits, `project/blocks/`, comparison-table behavior, or broader interaction systems.
- `Verified`: Review `project/templates/page.stone-runtime-key-value-list.json` and reject any extra section composition or preset-like sequencing.
- `Verified`: Review `project/assets/stone-base.css` and reject any shell rewrite, protected-surface coupling, family-level styling, or table-like complexity.
- `Verified`: Review the locale files together and reject key, block-label, option, or help-text mismatches.
- `Verified`: Stop the unit if any of the above checks fail instead of broadening the slice to make it feel more complete.
