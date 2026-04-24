# UNIT-SA-016 Search Drawer Preview Proof

## Goal

- `Verified`: Execute browser preview proof for the `UNIT-SA-015` search drawer shell against the explicitly authorized unpublished Shopify preview target.
- `Verified`: Prove the search drawer opens from the header trigger, closes with `Escape`, traps focus, restores focus, locks and unlocks body scroll, submits to the route-based search path, and preserves RTL document/drawer behavior.

## Authorization

- `Verified`: Owner authorized `UNIT-SA-016`.
- `Verified`: Store: `elos-dev.myshopify.com`.
- `Verified`: Theme target: `stonev2`.

## Target Safety

- `Verified`: `shopify theme list --store elos-dev.myshopify.com --no-color` resolved `Stonev2` as unpublished theme `#156487712965`.
- `Verified`: The live theme was `Prestige pre-subscription` `#155085406405`.
- `Verified`: No `--allow-live`, publish, delete, or theme push operation was run.

## Preview Command

- `Verified`: Local preview command:

```powershell
shopify theme dev --path project --store elos-dev.myshopify.com --theme 156487712965 --port 9292 --live-reload off --nodelete --no-color
```

- `Verified`: Local preview URL: `http://127.0.0.1:9292`.
- `Verified`: Shopify preview URL printed by CLI: `https://elos-dev.myshopify.com/?preview_theme_id=156487712965`.
- `Verified`: Preview logs:
  - `workspace/qa/reports/unit-sa-016-theme-dev.out.log`
  - `workspace/qa/reports/unit-sa-016-theme-dev.err.log`
  - `workspace/qa/reports/unit-sa-016-theme-dev.pid`

## Browser Proof Artifacts

- `Verified`: Browser proof JSON: `workspace/qa/reports/unit-sa-016-browser-proof.json`.
- `Verified`: Mobile open screenshot: `workspace/qa/reports/unit-sa-016-mobile-open.png`.
- `Verified`: Search results screenshot: `workspace/qa/reports/unit-sa-016-search-results.png`.
- `Verified`: Desktop screenshot: `workspace/qa/reports/unit-sa-016-desktop.png`.
- `Verified`: RTL mobile open screenshot: `workspace/qa/reports/unit-sa-016-rtl-mobile-open.png`.

## Browser Assertions

- `Verified`: Mobile home route returned status `200`.
- `Verified`: Mobile home rendered exactly one `header.stone-global-header[role="banner"]`.
- `Verified`: Mobile home rendered exactly one `footer.stone-global-footer[role="contentinfo"]`.
- `Verified`: Search trigger had a valid `aria-controls` target.
- `Verified`: Search drawer was initially closed and hidden.
- `Verified`: Header no-JS search form was hidden under `.js`.
- `Verified`: Search drawer opened from the header trigger.
- `Verified`: Search trigger changed to `aria-expanded="true"` while open.
- `Verified`: Body lock was set with `data-stone-drawer-lock="true"` while open.
- `Verified`: Focus moved inside the search drawer on open.
- `Verified`: Close control closed the search drawer.
- `Verified`: Search drawer reopened after close control use.
- `Verified`: `Shift+Tab` wrapped focus within the search drawer.
- `Verified`: `Escape` closed the search drawer.
- `Verified`: `Escape` cleared the body drawer lock.
- `Verified`: `Escape` returned focus to the search trigger.
- `Verified`: Search form submission navigated to `/search?q=unit-sa-016-*` and returned status `200`.
- `Verified`: Desktop home route returned status `200`.
- `Verified`: Desktop rendered exactly one global header and footer.
- `Verified`: Desktop search trigger remained visible.
- `Verified`: Desktop header navigation remained visible.
- `Verified`: `/he` returned status `200`.
- `Verified`: `/he` rendered `lang="he"` on `<html>`.
- `Verified`: `/he` rendered `dir="rtl"` on `<html>`.
- `Verified`: RTL mobile rendered exactly one global header and footer.
- `Verified`: RTL search drawer opened and locked body scroll.
- `Verified`: RTL search drawer panel aligned to logical start side; measured panel box was `x=46.8125`, `width=343.1875`, viewport width `390`, which places the panel on the physical right edge under RTL logical-start CSS.

## Static Verification

- `Verified`: `shopify theme check --path project --no-color` passed with `100 files inspected with no offenses found`.
- `Verified`: `git diff --name-only -- project` returned no paths.
- `Verified`: `git ls-files --others --exclude-standard -- project` returned no paths.

## Cleanup

- `Verified`: Preview process was stopped.
- `Verified`: Port `9292` had no listener after cleanup.

## Out Of Scope

- `Verified`: No `project/**` files were edited during this unit.
- `Verified`: No cart drawer was implemented.
- `Verified`: No predictive search was implemented.
- `Verified`: No search JavaScript was added.
- `Verified`: No modal stack was added.
- `Verified`: No overlay group was added.
- `Verified`: No theme blocks were added.
- `Verified`: No template, snippet, config, runtime locale, or preset composition file was edited.
- `Verified`: No Shopify theme push or publish command was run.

## Verdict

- `Verified`: `UNIT-SA-016` PASS.
- `Inference`: The next safe Phase 3B move is docs-only boundary authoring for `UNIT-SA-017` before any broader cart drawer, predictive search, modal stack, overlay group, theme block, or preset-composition runtime work.
