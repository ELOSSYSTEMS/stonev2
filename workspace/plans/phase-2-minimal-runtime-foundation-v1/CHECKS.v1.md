# Phase 2 Minimal Runtime Foundation Checks v1

## Acceptance Checks

| ID | Requirement | Evidence Needed |
| --- | --- | --- |
| AC-01 | Only the approved runtime file set is created or modified under `project/`. | Diff shows changes only in `project/layout/theme.liquid`, `project/assets/stone-tokens.css`, `project/assets/stone-base.css`, `project/assets/stone-runtime.js`, `project/config/settings_schema.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`. |
| AC-02 | The layout shell stays Liquid-first, page-agnostic, and RTL-native. | File review shows document direction handling, asset loading, and `{{ content_for_layout }}` hosting without homepage or family markup. |
| AC-03 | CSS stays limited to tokens and shell primitives. | File review shows token variables, base shell styling, and logical CSS usage without family-level polish or merchandising styling. |
| AC-04 | JavaScript stays progressive and minimal. | File review shows one lightweight foundation entry with no drawer, slider, hotspot, or family-specific behavior. |
| AC-05 | `settings_schema.json` stays limited to foundation domains from the Phase 1 taxonomy. | Schema review shows only brand identity, global design system, and shell behavior groups. |
| AC-06 | `he.default.schema.json` and `en.schema.json` stay structurally aligned for all introduced schema keys. | Side-by-side review confirms matching keys, option structures, and help-text coverage. |
| AC-07 | No section-family, preset-pack, homepage, collection, or PDP implementation enters the slice. | Diff and file review show no new files or substantive edits outside the approved boundary. |

## Regression Checks

| ID | Area | Check | Failure Signal |
| --- | --- | --- | --- |
| RC-01 | Runtime boundary | Confirm no new runtime files appear under `project/sections/`, `project/blocks/`, `project/templates/`, or unplanned surfaces. | Any new file outside the approved seven runtime files. |
| RC-02 | RTL and Hebrew posture | Confirm the shell and CSS rely on RTL-safe document direction and logical styling assumptions. | LTR-only classes, left/right hard-coding, or English-first schema wording. |
| RC-03 | Control-plane consistency | Confirm new schema names match the settings taxonomy vocabulary. | Ad hoc setting names, duplicate concepts, or family-level settings in the foundation slice. |
| RC-04 | Bilingual parity | Confirm Hebrew and English schema files remain paired and terminology-aligned. | Missing locale keys, mismatched option sets, or help text missing in one language. |
| RC-05 | JS restraint | Confirm progressive JS does not become a hidden feature build. | Interaction logic for menus, carousels, accordions, hotspots, or merchandising UI. |

## Commands

| ID | Command | Purpose | Expected Result |
| --- | --- | --- | --- |
| CMD-01 | `node HARNESS/checks/check-state-artifacts.mjs` | Confirm required state sections remain intact after the runtime slice state update. | Pass |
| CMD-02 | `node HARNESS/checks/check-next-action-scope.mjs` | Confirm the next action remains one bounded unit with explicit scope. | Pass |
| CMD-03 | `node HARNESS/checks/check-plan-exists.mjs` | Confirm the approved runtime unit still references this plan package. | Pass |
| CMD-04 | `node HARNESS/checks/check-handoff-completeness.mjs` | Confirm handoff remains synchronized with state after the runtime slice. | Pass |
| CMD-05 | `node HARNESS/checks/harness-check.mjs` | Run the local aggregate harness checks. | Pass |

## Boundary Review Steps

- `Verified`: Review the changed runtime paths and confirm they are a subset of the approved seven-file list.
- `Verified`: Review `project/config/settings_schema.json` against `workspace/specs/STONEV2_SETTINGS_TAXONOMY.md` and reject any family-level or preset-level control drift.
- `Verified`: Review `project/locales/he.default.schema.json` and `project/locales/en.schema.json` together and reject key, option, or help-text mismatches.
- `Verified`: Review `project/layout/theme.liquid` and reject any embedded homepage, collection, PDP, or section-family markup.
- `Verified`: Stop the unit if any of the above checks fail instead of expanding the file scope to "finish the job."
