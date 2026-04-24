# UNIT-SA-004.v1: Header/Footer Group Preview And Render Validation Plan

Date: 2026-04-24

Status: BLOCKED PENDING OWNER TARGET AUTHORIZATION; NOT EXECUTED

Runtime files changed by this unit: none

## Goal

Validate that the UNIT-SA-003 header/footer group scaffold renders correctly before any overlay, drawer/search/cart behavior, preset composition, or theme-block architecture work.

## Scope

This derivative unit covers only:

- Static validation of the already-created header/footer group files.
- Shopify CLI preview validation only after explicit owner authorization for a store/theme target.
- Manual/browser QA evidence for header/footer presence, duplication, skip link, RTL readability, and app-wrapper blank-state behavior.
- A QA report artifact.

## Out Of Scope

- No runtime theme edits.
- No `project/**` writes.
- No Shopify upload unless the owner explicitly authorizes a preview target.
- No live theme writes.
- No `--allow-live`.
- No `theme push`.
- No preset composition.
- No `overlay-group.json`.
- No drawer/search/cart behavior.
- No predictive search.
- No `/blocks` or `_blocks.liquid`.
- No visual redesign.

## Source Artifacts Read

- `workspace/plans/section-architecture-final-product-implementation-v1/PLAN.v2.md`: VERIFIED
- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-003.v1.md`: VERIFIED
- `project/layout/theme.liquid`: VERIFIED after UNIT-SA-003 execution
- `project/sections/header-group.json`: VERIFIED after UNIT-SA-003 execution
- `project/sections/footer-group.json`: VERIFIED after UNIT-SA-003 execution
- `project/sections/apps.liquid`: VERIFIED after UNIT-SA-003 execution
- `project/sections/stone-announcement-bar.liquid`: VERIFIED after UNIT-SA-003 execution
- `project/sections/stone-header-main.liquid`: VERIFIED after UNIT-SA-003 execution
- `project/sections/stone-footer-main.liquid`: VERIFIED after UNIT-SA-003 execution
- `project/sections/stone-footer-legal.liquid`: VERIFIED after UNIT-SA-003 execution
- Installed Shopify CLI help for `theme dev`: VERIFIED
- Installed Shopify CLI help for `theme check`: VERIFIED

## Current Repo Evidence

Verified:

- `project/layout/theme.liquid` now contains `{% sections 'header-group' %}`.
- `project/layout/theme.liquid` now contains `{% sections 'footer-group' %}`.
- `project/layout/theme.liquid` still contains the skip link targeting `#MainContent`.
- `project/layout/theme.liquid` still contains `<main id="MainContent"`.
- `project/sections/header-group.json` exists.
- `project/sections/footer-group.json` exists.
- `project/sections/apps.liquid` exists.
- `project/sections/stone-announcement-bar.liquid` exists.
- `project/sections/stone-header-main.liquid` exists.
- `project/sections/stone-footer-main.liquid` exists.
- `project/sections/stone-footer-legal.liquid` exists.
- No `shopify.theme.toml` exists at repo root.
- No `shopify.theme.toml` exists under `project/`.
- Installed `shopify theme dev --help` states that the command uploads the current theme as a development theme to the connected store and pushes changes while running.

Inference:

- Static checks can prove syntax, schema, layout integration text, and write-boundary integrity.
- True render proof requires a Shopify preview target because Liquid section-group rendering depends on Shopify's theme runtime and store data.
- Because `theme dev` uploads to a development or specified remote theme, it requires explicit owner authorization and a store/theme target before execution.

## Execution Model

This unit has two lanes:

| Lane | Purpose | Authorization required | Status |
| --- | --- | --- | --- |
| A: Static local validation | Re-run syntax, schema, Theme Check, layout, and harness checks. | Owner authorization for UNIT-SA-004 execution. | READY |
| B: Shopify preview validation | Prove storefront rendering through Shopify CLI preview and browser/manual QA. | Owner authorization plus store/theme target. | BLOCKED |

Fail-closed rule:

- If Lane B is not authorized with a store/theme target, execute Lane A only and mark render validation `PARTIAL`.
- If `theme dev` would target a live theme or require `--allow-live`, stop.
- If any preview command would write outside a development or explicitly named unpublished target, stop.
- If any defect requires runtime edits, stop and create a separate defect-specific derivative unit.

## Required Owner Inputs Before Full Execution

| Input | Required for | Default if unresolved |
| --- | --- | --- |
| Store URL or store prefix | Shopify preview validation | BLOCKED |
| Preview target type | Shopify preview validation | development theme only |
| Remote theme ID/name if not using development theme | Shopify preview validation | not used |
| Permission to run `shopify theme dev` | Shopify preview validation | BLOCKED |
| Permission to open browser preview | Manual/browser QA | BLOCKED |

Explicitly forbidden:

- Do not use `--allow-live`.
- Do not run `shopify theme push`.
- Do not run `shopify theme dev` against a live theme.
- Do not write project files during this unit.

## Exact Write Set For This Planning Step

Created:

- `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-004.v1.md`

## Exact Allowed Write Set For Later Authorized Execution

If owner later authorizes UNIT-SA-004 execution, write only:

| File | Action | Purpose |
| --- | --- | --- |
| `workspace/qa/reports/unit-sa-004-header-footer-preview-report.md` | Create | Validation evidence and pass/fail result. |
| `workspace/qa/reports/unit-sa-004-home-desktop.png` | Create if browser screenshot is available | Home desktop evidence. |
| `workspace/qa/reports/unit-sa-004-home-mobile.png` | Create if browser screenshot is available | Home mobile/RTL evidence. |
| `workspace/qa/reports/unit-sa-004-product-desktop.png` | Create if product URL is available | Product evidence. |
| `workspace/qa/reports/unit-sa-004-collection-desktop.png` | Create if collection URL is available | Collection evidence. |
| `workspace/qa/reports/unit-sa-004-search-desktop.png` | Create if search URL is available | Search evidence. |

## Exact Disallowed Write Set

Do not write:

- `project/**`
- `workspace/specs/**`
- `workspace/audits/**`
- `workspace/plans/**` except this `UNIT-SA-004.v1.md` during planning
- `project/assets/**`
- `project/blocks/**`
- `project/snippets/**`
- `project/templates/**`
- `project/config/**`
- `project/locales/**`
- Shopify live theme

## Static Validation Commands

Run from `C:\ELoS\projects\stonev2`:

```powershell
git status --short -- project
```

```powershell
git diff --name-only -- project
```

```powershell
git ls-files --others --exclude-standard -- project
```

```powershell
@'
const fs = require('fs');
const jsonFiles = [
  'project/sections/header-group.json',
  'project/sections/footer-group.json',
  'project/locales/en.schema.json',
  'project/locales/he.default.schema.json'
];
for (const file of jsonFiles) {
  JSON.parse(fs.readFileSync(file, 'utf8'));
  console.log(`JSON OK ${file}`);
}
const liquidFiles = [
  'project/sections/apps.liquid',
  'project/sections/stone-announcement-bar.liquid',
  'project/sections/stone-header-main.liquid',
  'project/sections/stone-footer-main.liquid',
  'project/sections/stone-footer-legal.liquid'
];
for (const file of liquidFiles) {
  const text = fs.readFileSync(file, 'utf8');
  const match = text.match(/\{%\s*schema\s*%\}([\s\S]*?)\{%\s*endschema\s*%\}/);
  if (!match) throw new Error(`Missing schema: ${file}`);
  JSON.parse(match[1]);
  console.log(`SCHEMA OK ${file}`);
}
'@ | node
```

```powershell
Select-String -Path project/layout/theme.liquid -Pattern "sections 'header-group'|sections 'footer-group'|render 'stone-global-header'|render 'stone-global-footer'|MainContent|stone-skip-link"
```

```powershell
shopify theme check --path project
```

```powershell
node HARNESS/checks/check-state-artifacts.mjs
node HARNESS/checks/check-next-action-scope.mjs
node HARNESS/checks/check-plan-exists.mjs
node HARNESS/checks/check-handoff-completeness.mjs
node HARNESS/checks/check-approval-state.mjs
node HARNESS/checks/check-lock-state.mjs
node HARNESS/checks/harness-check.mjs
```

## Shopify Preview Commands

Only after explicit owner authorization and target input:

```powershell
shopify theme dev --path project --store <STORE> --port 9292 --live-reload off --no-color
```

If the owner provides a specific unpublished theme target:

```powershell
shopify theme dev --path project --store <STORE> --theme <UNPUBLISHED_THEME_ID_OR_NAME> --port 9292 --live-reload off --no-color
```

Stop conditions:

- The command asks to use or modify a live theme.
- The command requires `--allow-live`.
- The command cannot authenticate.
- The command cannot produce a local preview URL.
- The command reports upload/sync errors.
- The command writes project files unexpectedly.

## Browser/Manual QA Cases

Required for a full pass:

| Route | Checks |
| --- | --- |
| Home | exactly one header, exactly one footer, no duplicate legacy snippet output, skip link targets `#MainContent` |
| Product | exactly one header, exactly one footer, add-to-cart area not affected by header/footer group rendering |
| Collection | exactly one header, exactly one footer, menu/footer links remain usable |
| Search | exactly one header, exactly one footer, search form reachable and usable |
| RTL/Hebrew view | header/footer readable, long Hebrew labels do not overlap, logical tab order remains usable |
| Empty app wrapper | no large blank region when no app blocks are configured |

Evidence to capture:

- Local preview URL.
- Theme editor URL if provided by CLI.
- Preview link if provided by CLI.
- Browser route URLs tested.
- Header count per route.
- Footer count per route.
- Skip link result.
- Keyboard tab order notes.
- RTL notes.
- Screenshot paths if screenshots are captured.

## Pass/Fail Gates

PASS:

- Static validation commands pass.
- Theme Check passes.
- Harness passes.
- Preview target is confirmed as development or explicitly authorized unpublished target.
- Preview renders one header and one footer on home/product/collection/search.
- Skip link still targets `#MainContent`.
- No duplicate legacy header/footer output.
- No project files are written during validation.
- No Shopify live theme is modified.

PARTIAL:

- Static validation passes, but Shopify preview target is not authorized or unavailable.

FAIL:

- Any `project/**` file changes during UNIT-SA-004.
- Theme Check fails.
- Harness fails.
- Preview command targets live theme or requires `--allow-live`.
- Header/footer are missing or duplicated.
- Preview cannot produce a usable local URL.
- RTL/header/footer readability has a blocking regression.

## Schema Migration Review

| Category | IDs |
| --- | --- |
| Preserved schema IDs | all IDs added or preserved by UNIT-SA-003 |
| Added schema IDs | none |
| Renamed schema IDs | none |
| Removed schema IDs | none |
| JSON templates affected | none |
| Merchant customization risk | LOW for validation-only; MEDIUM if Shopify preview sync is authorized |

## Rollback

Planning rollback:

- Delete `workspace/plans/section-architecture-final-product-implementation-v1/UNIT-SA-004.v1.md`.

Execution rollback:

- Delete only UNIT-SA-004 QA report/screenshot files created under `workspace/qa/reports/`.
- No `project/**` rollback should be needed because runtime writes are forbidden.
- If `shopify theme dev` created a development theme, stop the CLI process. Do not delete remote themes unless separately authorized.

## Builder

UNIT-SA-004 should prove the newly introduced roots before building more branches. Static checks already proved syntax in UNIT-SA-003, but they do not prove Shopify runtime rendering. The next safe move is to validate the rendered shell before adding overlays, drawers, carts, search behavior, theme blocks, or presets.

## Adversarial reviewer

Risks:

1. Shopify preview requires remote sync through `theme dev`; that is not a harmless local-only command.
2. The repo has no `shopify.theme.toml`, so any store target would be inferred unless the owner names it.
3. Browser QA without a real Shopify preview can miss section-group runtime behavior.
4. Fixing visual defects inside this unit would violate the no-`project/**` write boundary.
5. Screenshots are useful evidence but unavailable unless a browser target is authorized and reachable.

Fail-closed response:

- Do not infer the store.
- Do not use a live theme.
- Do not edit runtime files.
- If preview cannot run safely, produce a `PARTIAL` static-validation report and propose a separate authorized preview unit.

## Final recommendation or Reconciliation

Use UNIT-SA-004 as a validation-only gate.

Do not proceed to Phase 3B or Phase 4 until either:

- UNIT-SA-004 passes full Shopify preview validation, or
- the owner explicitly accepts a `PARTIAL` static-only proof and waives preview validation.

## Authorization Required

Full execution remains blocked until the owner provides:

```text
AUTHORIZED: EXECUTE UNIT-SA-004
STORE: <store-prefix-or-myshopify-domain>
PREVIEW TARGET: development theme
```

If the owner wants static validation only:

```text
AUTHORIZED: EXECUTE UNIT-SA-004 STATIC ONLY
```

## Readiness Verdict

READY FOR STATIC-ONLY AUTHORIZATION

BLOCKED FOR FULL PREVIEW UNTIL STORE TARGET IS PROVIDED
