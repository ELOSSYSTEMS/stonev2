# UNIT-SA-013 Drawer Preview Regression Report

Date: 2026-04-24

Status: PASS

## Authorization

Owner authorized:

```text
AUTHORIZED: EXECUTE UNIT-SA-013
shopify store: elos-dev.myshopify.com
theme: stonev2
```

## Target Safety

Verified with `shopify theme list --store elos-dev.myshopify.com --no-color`:

| Theme | Role | ID |
| --- | --- | ---: |
| Stonev2 | unpublished | 156487712965 |

Result:

- Target is not live.
- Live theme is `Prestige pre-subscription` id `155085406405`.
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

- `workspace/qa/reports/unit-sa-013-theme-dev.err.log`
- `workspace/qa/reports/unit-sa-013-theme-dev.out.log`
- `workspace/qa/reports/unit-sa-013-theme-dev.pid`

## Browser Proof Artifacts

- `workspace/qa/reports/unit-sa-013-browser-proof.json`
- `workspace/qa/reports/unit-sa-013-mobile-open.png`
- `workspace/qa/reports/unit-sa-013-desktop.png`
- `workspace/qa/reports/unit-sa-013-rtl-mobile-open.png`

## Automated Browser Checks

Final pass results from `unit-sa-013-browser-proof.json`:

- Home route returned 200.
- Mobile trigger is visible.
- Mobile drawer is initially closed.
- Home route has one header and one footer.
- Drawer opens with generic and legacy mobile state set to `open`.
- Drawer sets generic and legacy mobile body scroll locks.
- Focus moves inside the drawer.
- `Shift+Tab` remains trapped inside the drawer.
- `Escape` closes the drawer, removes both body locks, resets ARIA expanded state, and returns focus to the trigger.
- Desktop route returned 200.
- Desktop hides the drawer trigger and keeps primary navigation visible.
- Desktop route has one header and one footer.
- `/he` route returned 200.
- `/he` rendered `lang="he"` and `dir="rtl"`.
- RTL mobile trigger is visible.
- RTL drawer is initially closed.
- RTL route has one header and one footer.
- RTL drawer opens with generic and legacy body locks.
- RTL focus moves inside the drawer.
- RTL drawer opens from the right side.
- RTL `Escape` closes and returns focus.

## Verification

Theme Check:

- `shopify theme check --path project --no-color`: PASS; 99 files inspected with no offenses found.

Preview cleanup:

- Recorded preview parent process was stopped.
- Lingering listener process on port `9292` was stopped.
- Final port check returned no listener.

## Not Done

- No runtime edits.
- No Shopify theme push.
- No live theme mutation.
- No search drawer.
- No cart drawer.
- No predictive search.
- No modal stack.
- No overlay group.
- No theme blocks.
- No template edits.
- No snippet edits.
- No config edits.
- No locale edits.
- No preset composition.

## Final Verdict

PASS.

`UNIT-SA-013` proves the shared drawer primitive did not regress the existing mobile navigation drawer in preview. The drawer primitive lane is ready for a docs-only next-slice boundary before any second drawer feature is implemented.
