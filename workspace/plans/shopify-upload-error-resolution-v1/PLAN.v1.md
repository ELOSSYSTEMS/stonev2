# Shopify Upload Error Resolution Plan v1

## Scope Restatement

Verified:

- Goal: resolve all known Shopify Liquid/schema upload blockers and local validation errors recorded in `workspace/audits/shopify-theme-upload-errors-2026-04-24.md`.
- Store target: `elos-dev.myshopify.com`.
- Existing remote theme target: `Stonev2`, theme id `156487712965`, role `unpublished`.
- This plan is documentation-only and does not implement repairs.

Inference:

- The safest next work is not preset composition. It is first making the current theme source valid enough to upload cleanly.

## Constraints

Verified:

- Preserve the existing Liquid-first Shopify theme architecture.
- Do not introduce a frontend framework.
- Do not introduce web components.
- Keep edits small, reversible, and grouped by failure family.
- Do not treat the remote `Stonev2` theme as ready until Shopify upload succeeds without rejected files.
- Runtime preset composition remains outside this plan.

## Explicit Non-Goals

Verified:

- No PDP preset composition.
- No collection preset composition.
- No product, collection, cart, checkout, billing, app, or admin mutation work.
- No visual redesign.
- No new section capability design.
- No live theme publish.

## Known Issues To Resolve

Verified:

1. Liquid parser blockers:
   - Multiline `render 'stone-section-shell'` calls inside `{% liquid %}` blocks.
   - Multiline `render 'stone-product-card'` calls inside `{% liquid %}` blocks.
2. Template follow-on blockers:
   - Template JSON files refer to section types that Shopify rejected because section Liquid files failed upload.
3. Settings schema blocker:
   - `project/config/settings_schema.json` has `stone_brand_name` with a blank default.
4. Runtime locale blockers:
   - Liquid references runtime translation keys while `project/locales/en.default.json` is missing.
5. Local quality warnings:
   - Theme Check warnings, including unused assigns.

## Builder

### Architecture Approach

Verified:

- Keep the section/snippet architecture intact.
- Repair syntax where it is invalid instead of redesigning section composition.
- Use Shopify CLI validation as the primary gate because the failure occurred during Shopify upload.

Inference:

- The lowest-risk Liquid repair is to convert invalid multiline `render` calls inside `{% liquid %}` blocks into normal `{% render ... %}` tags outside Liquid blocks where arguments can remain readable across lines.
- The lowest-risk validation order is hard blockers first, warnings second.

### Likely File Surfaces

Verified:

- `project/sections/*.liquid`
- `project/config/settings_schema.json`
- `project/locales/en.default.json`
- Potentially `project/locales/he.default.json`
- `workspace/plans/shopify-upload-error-resolution-v1/`
- `workspace/audits/shopify-theme-upload-errors-2026-04-24.md`

### Sequenced Implementation Path

1. Freeze current evidence.
   - Confirm branch and clean worktree.
   - Confirm current theme id `156487712965`.
   - Preserve audit reference.

2. Repair Liquid render syntax.
   - Find all `render` calls inside `{% liquid %}` blocks where arguments continue on following lines.
   - Convert `stone-section-shell` render calls to valid syntax.
   - Convert `stone-product-card` render calls to valid syntax.
   - Do not change section settings, schema, copy, layout, CSS, or behavior.

3. Verify Liquid parser repair locally.
   - Run a pattern scan proving no invalid `section:` or `product:` continuation lines remain after Liquid-block render statements.
   - Run `shopify theme check --path project --output json`.
   - If Theme Check still reports Liquid syntax errors, stop and fix only those syntax errors.

4. Repair settings schema blocker.
   - Change `stone_brand_name` blank default to an accepted nonblank default, or remove the default if verified acceptable.
   - Prefer a nonblank default because it is minimal and predictable.

5. Repair runtime locale blockers.
   - Create `project/locales/en.default.json`.
   - Populate all runtime translation keys used by Liquid.
   - Keep schema translation keys in schema locale files.
   - Decide whether `project/locales/he.default.json` is required in the same unit based on bilingual parity policy.

6. Re-run local validation.
   - Run `shopify theme check --path project --output json`.
   - Parse remaining errors by file and check name.
   - Do not chase non-blocking warnings until all errors are cleared or consciously deferred.

7. Push to the existing unpublished theme.
   - Use the existing remote theme id `156487712965` unless the user requests a fresh theme.
   - Push from full theme root `project`.
   - Do not publish.

8. Verify remote result.
   - Confirm Shopify CLI upload has no rejected files.
   - Confirm theme list still shows `Stonev2` as unpublished.
   - Open or record preview URL.
   - Run a minimal storefront smoke check for the homepage and at least one runtime template that previously referenced rejected sections.

9. Triage remaining warnings.
   - Only after hard blockers are resolved, decide whether unused assigns and similar warnings should be fixed now or logged for a later cleanup unit.

## Adversarial Reviewer

### Hidden Dependencies

Verified:

- Shopify's server parser is stricter evidence than local JSON parsing.
- Template JSON errors cannot be fully trusted until section files upload successfully.
- Translation errors cannot be closed by editing schema locale files only.

Inference:

- A broad mechanical rewrite across 41 sections could introduce collateral behavior changes if it changes assign scope, captured content, or whitespace-sensitive markup.
- Creating only `en.default.json` may satisfy Theme Check for the default locale but could leave Hebrew runtime parity incomplete if bilingual storefront runtime parity is required.
- Fixing all warnings in the same pass could expand scope and hide the hard-blocker repair signal.

### Failure Modes

Verified:

- If one section file still fails upload, templates that reference it may still report missing section type errors.
- If the settings schema default remains blank, Shopify upload remains blocked even after Liquid syntax is fixed.
- If runtime translation keys remain missing, Theme Check remains red.

Inference:

- The repair can appear locally clean if only pattern scans run; Shopify upload is still required as final proof.
- A fresh theme push could hide whether the existing `Stonev2` theme id was repaired. Reusing the existing unpublished theme is clearer unless there is a strong reason to recreate it.

### Unsafe Assumptions To Avoid

Verified:

- Do not assume template errors are independent root causes before section Liquid uploads cleanly.
- Do not assume `en.schema.json` can satisfy runtime translation keys.
- Do not assume the remote theme is complete because it exists in the theme list.

Inference:

- Do not combine upload repair with preset-specific PDP/collection composition. Those are separate product decisions and should stay blocked until owner inputs are supplied.

## Final Recommendation or Reconciliation

Verified:

- The plan should resolve hard blockers before warnings.
- The first implementation unit should repair only Liquid render syntax across section files.
- Settings schema and runtime locale repairs should be separate follow-up units unless the first unit proves the Liquid syntax change is too small to justify separation.

Inference:

- Splitting the work reduces risk because the dominant issue is a repeated syntax pattern, while locale and schema repairs have different validation rules.
- The next approved execution unit should be a bounded Liquid syntax repair, not a full "fix everything" batch.

Rejected alternatives:

1. Reject broad one-shot repair of Liquid, schema, locale, warnings, and push in one commit.
   - Reason: too much mixed risk and harder rollback.
2. Reject creating preset-specific templates before upload repair.
   - Reason: current source cannot upload cleanly.
3. Reject treating Theme Check warnings as equal priority to upload blockers.
   - Reason: upload blockers prevent remote completeness.

## Atomic Work Units

| Unit | Title | Status | Acceptance Criteria | Allowed Files Or Surfaces | Verification |
| --- | --- | --- | --- | --- | --- |
| UNIT-184 | Repair invalid multiline Liquid render syntax. | PROPOSED | All invalid multiline `render` argument continuations inside `{% liquid %}` blocks are converted to valid Liquid syntax without changing section behavior. | `project/sections/*.liquid` only, plus state/handoff if the unit is formally activated. | Pattern scan; `shopify theme check --path project --output json`; `git diff --name-only -- project`. |
| UNIT-185 | Repair settings schema blank default. | PROPOSED | `stone_brand_name` no longer has a Shopify-rejected blank default. | `project/config/settings_schema.json` only, plus state/handoff if activated. | JSON parse; `shopify theme check --path project --output json`; Shopify push validation when bundled into upload proof. |
| UNIT-186 | Add runtime English locale coverage. | PROPOSED | `project/locales/en.default.json` exists and includes all runtime keys referenced by Liquid. | `project/locales/en.default.json`; optional locale evidence script. | Theme Check translation errors cleared or reduced only to explicitly deferred keys. |
| UNIT-187 | Decide and implement Hebrew runtime locale parity. | PROPOSED | Either `he.default.json` exists with matching runtime keys or a written decision defers Hebrew runtime parity. | `project/locales/he.default.json` or docs/state only. | Locale key parity check if implemented; documented deferral if not. |
| UNIT-188 | Push repaired source to unpublished `Stonev2`. | PROPOSED | Existing theme id `156487712965` accepts the full theme root without rejected files. | Shopify CLI operation against unpublished theme only. | Upload output; theme list; preview URL. |
| UNIT-189 | Triage non-blocking Theme Check warnings. | PROPOSED | Remaining warnings are either fixed in narrow files or logged as accepted debt. | Files named by warnings only. | Theme Check warning summary before/after. |

## Ledger-Ready Status Rows

```markdown
| UNIT-184 | Repair invalid multiline Liquid render syntax. | PLANNED | All invalid multiline `render` argument continuations inside `{% liquid %}` blocks are converted to valid Liquid syntax without changing section behavior. | `project/sections/*.liquid`, `state/`, `workspace/handoff/CURRENT_HANDOFF.md` | `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md` | 2026-04-24 Asia/Jerusalem |
| UNIT-185 | Repair settings schema blank default. | PLANNED | `stone_brand_name` no longer has a Shopify-rejected blank default. | `project/config/settings_schema.json`, `state/`, `workspace/handoff/CURRENT_HANDOFF.md` | `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md` | 2026-04-24 Asia/Jerusalem |
| UNIT-186 | Add runtime English locale coverage. | PLANNED | `project/locales/en.default.json` exists and includes all runtime keys referenced by Liquid. | `project/locales/en.default.json`, `state/`, `workspace/handoff/CURRENT_HANDOFF.md` | `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md` | 2026-04-24 Asia/Jerusalem |
| UNIT-187 | Decide and implement Hebrew runtime locale parity. | PLANNED | Hebrew runtime locale parity is either implemented or explicitly deferred with evidence. | `project/locales/he.default.json`, `workspace/plans/`, `state/`, `workspace/handoff/CURRENT_HANDOFF.md` | `workspace/plans/shopify-upload-error-resolution-v1/PLAN.v1.md` | 2026-04-24 Asia/Jerusalem |
| UNIT-188 | Push repaired source to unpublished `Stonev2`. | PLANNED | Existing unpublished theme id `156487712965` accepts full theme upload without rejected files. | Shopify CLI operation, `state/`, `workspace/handoff/CURRENT_HANDOFF.md` | Shopify upload output and theme list | 2026-04-24 Asia/Jerusalem |
| UNIT-189 | Triage non-blocking Theme Check warnings. | PLANNED | Remaining warnings are either fixed narrowly or logged as accepted debt. | Files named by Theme Check warnings, `state/`, `workspace/handoff/CURRENT_HANDOFF.md` | Theme Check warning summary | 2026-04-24 Asia/Jerusalem |
```

## Proposed NEXT_ACTION

Verified:

- Single next execution-ready unit: `UNIT-184`.
- Title: Repair invalid multiline Liquid render syntax.
- Execution class: bounded runtime syntax repair.
- Allowed project files: `project/sections/*.liquid`.
- Non-scope: settings schema, locales, warning cleanup, preset composition, Shopify push.

Acceptance criteria:

- All known invalid multiline render calls inside `{% liquid %}` blocks are converted to valid Liquid syntax.
- No intentional visual, schema, preset, product, collection, cart, checkout, or JavaScript behavior changes.
- Pattern scan finds no `stone-section-shell` or `stone-product-card` render continuations that Shopify can parse as standalone `section` or `product` tags.
- `shopify theme check --path project --output json` has no Liquid syntax errors from the repaired pattern.
- Commit is created after verification.

## Verification Expectations

Minimum checks for `UNIT-184`:

```powershell
git status --short
git diff --name-only -- project
shopify theme check --path project --output json
```

Recommended pattern checks:

```powershell
Get-ChildItem project\sections\*.liquid | Select-String -Pattern '^\s+section:\s+section'
Get-ChildItem project\sections\*.liquid | Select-String -Pattern '^\s+product:\s+'
```

Minimum checks before remote proof:

```powershell
shopify theme check --path project --output json
shopify theme push --store elos-dev.myshopify.com --path project --theme 156487712965 --json
shopify theme list --store elos-dev.myshopify.com
```

## Dependencies

Verified:

- Shopify CLI is authorized in this environment.
- Existing unpublished theme id is known.
- The audit identifies the error families and representative files.

Inference:

- `UNIT-184` can proceed without product-owner input because it repairs invalid syntax and does not make product composition decisions.
- `UNIT-187` may require owner input if Hebrew runtime parity is a product requirement for this release gate.

## Rollback Considerations

Verified:

- Each unit should be committed separately.
- If a unit fails validation, revert only that unit's commit or repair within the same bounded file set.
- Do not publish the remote theme during repair.

Inference:

- Splitting Liquid, schema, locale, push, and warning cleanup into separate units keeps rollback practical.

## Assumption And Edge-Case Audit

Verified:

- The current remote theme exists but was pushed with errors.
- Template missing-section errors may disappear after section Liquid files upload cleanly.

Inference:

- Some template errors may remain after Liquid syntax repair if there are independent template issues. Those should be diagnosed only after section upload succeeds.
- Some Theme Check warnings may be pre-existing and should not block upload repair unless Shopify treats them as upload errors.

Unknown:

- Whether Hebrew runtime locale parity must be implemented before the next remote proof.
- Whether the user wants to reuse theme id `156487712965` or create a fresh unpublished theme after repairs.

## Readiness Verdict

READY

Next handoff: `$project-build` for `UNIT-184` only.
