# UNIT-SA-009 Mobile Drawer Preview Report

Date: 2026-04-24

Status: PASS after bounded RTL placement repair

## Authorization

Owner authorized:

```text
AUTHORIZED: EXECUTE UNIT-SA-009
STORE: elos-dev.myshopify.com
PREVIEW TARGET: stonev2 (theme name)
```

## Target Safety

Verified with `shopify theme list --store elos-dev.myshopify.com --no-color`:

| Theme | Role | ID |
| --- | --- | ---: |
| Stonev2 | unpublished | 156487712965 |

Result:

- Target is not live.
- No `--allow-live` was used.
- No `theme push` was used.
- Preview used `theme dev` with `--nodelete`.

## Preview Command

```powershell
shopify theme dev --path project --store elos-dev.myshopify.com --theme 156487712965 --port 9292 --live-reload off --nodelete --no-color
```

Preview URLs:

- Local preview: `http://127.0.0.1:9292`
- Share URL: `https://elos-dev.myshopify.com/?preview_theme_id=156487712965`
- Theme editor URL: `https://elos-dev.myshopify.com/admin/themes/156487712965/editor?hr=9292`

Preview logs:

- `workspace/qa/reports/unit-sa-009-theme-dev.err.log`
- `workspace/qa/reports/unit-sa-009-theme-dev.out.log`
- `workspace/qa/reports/unit-sa-009-theme-dev.pid`

## Browser Proof Artifacts

- `workspace/qa/reports/unit-sa-009-browser-proof.json`
- `workspace/qa/reports/unit-sa-009-mobile-open.png`
- `workspace/qa/reports/unit-sa-009-desktop.png`
- `workspace/qa/reports/unit-sa-009-rtl-mobile-open.png`

## Automated Browser Checks

Final pass results from `unit-sa-009-browser-proof.json`:

- Home route returned 200.
- Mobile trigger is visible.
- Mobile drawer is initially closed.
- Home route has one header and one footer.
- Mobile drawer opens and locks body scroll.
- Mobile drawer moves focus inside the drawer.
- `Escape` closes the drawer and returns focus to trigger.
- `Shift+Tab` keeps focus trapped inside the drawer.
- Desktop hides the drawer trigger and keeps primary navigation visible.
- Desktop route has one header and one footer.
- `/he` route returned 200.
- `/he` rendered `lang="he"` and `dir="rtl"`.
- RTL drawer opens from the right side after the bounded repair.

## Finding And Repair

Finding:

- Initial browser proof failed because the RTL drawer panel opened from the left side even though `/he` returned 200 with `lang="he"` and `dir="rtl"`.

Repair:

- `UNIT-SA-010` applied the smallest bounded CSS repair in `project/assets/stone-base.css`.
- The repair changed drawer grid alignment and set explicit panel `justify-self` behavior for LTR and RTL.

Repair scope:

- `project/assets/stone-base.css` only.

## Verification After Repair

Final browser proof passed:

- RTL panel box: `x=46.8125`, `right=390`, `viewport=390`.
- This confirms the drawer panel is right-aligned on the mobile RTL viewport.

Theme Check:

- `shopify theme check --path project --no-color`: PASS; 99 files inspected with no offenses found.

Harness:

- Required harness checks passed after state synchronization.

## Not Done

- No cart drawer.
- No search drawer.
- No predictive search.
- No modal stack.
- No overlay group.
- No theme blocks.
- No template, snippet, config, or preset composition work.
- No live theme mutation.
- No publish.

## Final Verdict

PASS.

`UNIT-SA-009` proves the mobile navigation drawer in preview after the bounded RTL repair. The mobile drawer lane is locally implemented, preview-tested, and ready for commit.
