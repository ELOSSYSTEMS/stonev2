# UNIT-SA-019 Cart Drawer Preview Proof

## Goal

- `Verified`: Execute browser preview proof for the `UNIT-SA-018` cart drawer shell against the explicitly authorized unpublished Shopify preview target.
- `Verified`: Prove the cart drawer opens from the header trigger, preserves the cart route fallback link, closes by close control and `Escape`, traps focus, restores focus, locks and unlocks body scroll, and preserves RTL placement.

## Authorization

- `Verified`: Owner authorized `UNIT-SA-019`.
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
  - `workspace/qa/reports/unit-sa-019-theme-dev.out.log`
  - `workspace/qa/reports/unit-sa-019-theme-dev.err.log`
  - `workspace/qa/reports/unit-sa-019-theme-dev.pid`

## Browser Proof Artifacts

- `Verified`: Browser proof JSON: `workspace/qa/reports/unit-sa-019-browser-proof.json`.
- `Verified`: Mobile open screenshot: `workspace/qa/reports/unit-sa-019-mobile-open.png`.
- `Verified`: Desktop screenshot: `workspace/qa/reports/unit-sa-019-desktop.png`.
- `Verified`: RTL mobile open screenshot: `workspace/qa/reports/unit-sa-019-rtl-mobile-open.png`.
- `Verified`: Direct cart route screenshot: `workspace/qa/reports/unit-sa-019-cart-route-404.png`.

## Browser Assertions

- `Verified`: Mobile home route returned status `200`.
- `Verified`: Mobile home rendered exactly one `header.stone-global-header[role="banner"]`.
- `Verified`: Mobile home rendered exactly one `footer.stone-global-footer[role="contentinfo"]`.
- `Verified`: Cart trigger had a valid `aria-controls` target.
- `Verified`: Cart drawer was initially closed and hidden.
- `Verified`: Header cart route fallback link existed with `href="/cart"`.
- `Verified`: Cart drawer contained no mutation form.
- `Verified`: Cart drawer contained no quantity inputs.
- `Verified`: Cart drawer contained no removal controls.
- `Verified`: Cart drawer opened from the header trigger.
- `Verified`: Cart trigger changed to `aria-expanded="true"` while open.
- `Verified`: Body lock was set with `data-stone-drawer-lock="true"` while open.
- `Verified`: Focus moved inside the cart drawer on open.
- `Verified`: Cart drawer contained one view-cart route link.
- `Verified`: Close control closed the cart drawer.
- `Verified`: `Shift+Tab` wrapped focus within the cart drawer.
- `Verified`: `Escape` closed the cart drawer.
- `Verified`: `Escape` cleared the body drawer lock.
- `Verified`: `Escape` returned focus to the cart trigger.
- `Verified`: Desktop home route returned status `200`.
- `Verified`: Desktop rendered exactly one global header and footer.
- `Verified`: Desktop cart trigger remained visible.
- `Verified`: Desktop cart route fallback remained present.
- `Verified`: Desktop header navigation remained visible.
- `Verified`: `/he` returned status `200`.
- `Verified`: `/he` rendered `lang="he"` on `<html>`.
- `Verified`: `/he` rendered `dir="rtl"` on `<html>`.
- `Verified`: RTL mobile rendered exactly one global header and footer.
- `Verified`: RTL cart route fallback link existed with `href="/he/cart"`.
- `Verified`: RTL cart drawer opened and locked body scroll.
- `Verified`: RTL cart drawer panel aligned to logical start side; measured panel box was `x=46.8125`, `width=343.1875`, viewport width `390`, which places the panel on the physical right edge under RTL logical-start CSS.

## Route Observation

- `Verified`: Direct `http://127.0.0.1:9292/cart` returned status `404`.
- `Inference`: This is an inherited route-template gap because `UNIT-SA-018` was not allowed to add templates and `UNIT-SA-019` was not allowed to edit runtime files.
- `Inference`: The drawer behavior proof passes for its authorized scope, but cart route usability needs a later docs-only boundary before any cart-route template work.

## Static Verification

- `Verified`: `shopify theme check --path project --no-color` passed with `101 files inspected with no offenses found`.
- `Verified`: `git diff --name-only -- project` returned no paths after preview proof.
- `Verified`: `git ls-files --others --exclude-standard -- project` returned no paths after preview proof.

## Cleanup

- `Verified`: Preview process was stopped.
- `Verified`: Port `9292` had no listener after cleanup.

## Out Of Scope

- `Verified`: No `project/**` files were edited during this unit.
- `Verified`: No cart quantity update behavior was implemented.
- `Verified`: No cart item removal behavior was implemented.
- `Verified`: No add-to-cart behavior was implemented.
- `Verified`: No checkout mutation was implemented.
- `Verified`: No AJAX cart or cart JavaScript was added.
- `Verified`: No predictive search, modal stack, overlay group, theme blocks, templates, snippets, config, runtime locale, or preset composition file was edited.
- `Verified`: No Shopify theme push or publish command was run.

## Verdict

- `Verified`: `UNIT-SA-019` PASS for cart drawer shell browser behavior proof.
- `Inference`: The next safe step is docs-only `UNIT-SA-020` to decide whether to admit a cart route host/template boundary for the observed `/cart` 404.
