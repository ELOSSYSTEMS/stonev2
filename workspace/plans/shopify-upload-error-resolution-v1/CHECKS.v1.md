# Shopify Upload Error Resolution Checks v1

## Plan Package Checks

- `Verified`: Plan package is docs-only.
- `Verified`: Plan package references the upload audit.
- `Verified`: Plan package includes Builder, Adversarial reviewer, and Final recommendation or Reconciliation sections.
- `Verified`: Plan package identifies exactly one next execution-ready unit.
- `Verified`: No `project/` files are changed by the plan package.

## UNIT-185 Checks

- Run `git status --short`.
- Run `git diff --name-only -- project`.
- Run a pattern scan for invalid `section:` continuation after `render 'stone-section-shell'`.
- Run a pattern scan for invalid `product:` continuation after `render 'stone-product-card'`.
- Run `shopify theme check --path project --output json`.
- Confirm no Liquid syntax errors remain from the repaired render pattern.

## Later Unit Checks

- For schema repair: parse `project/config/settings_schema.json` and run Theme Check.
- For locale repair: confirm `project/locales/en.default.json` exists and contains every runtime translation key used by Liquid.
- For Hebrew parity: compare runtime locale key sets if `project/locales/he.default.json` is implemented.
- For remote proof: push full root `project` to unpublished theme id `156487712965`.
- For remote proof: confirm theme list and preview URL after push.

## Stop Conditions

- Stop if Shopify CLI auth fails.
- Stop if Liquid syntax repair requires changing section behavior.
- Stop if Theme Check exposes a new hard blocker outside the planned file surface.
- Stop before publishing any theme.
- Stop before preset composition work.
