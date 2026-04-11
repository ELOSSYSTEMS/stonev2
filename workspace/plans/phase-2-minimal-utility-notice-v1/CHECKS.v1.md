# Phase 2 Minimal Utility Notice Checks v1

## Required Implementation Checks

1. `Verified`: `git diff --name-only` after implementation shows runtime changes only in:
   - `project/assets/stone-base.css`
   - `project/sections/stone-utility-notice.liquid`
   - `project/templates/page.stone-runtime-notice.json`
   - `project/locales/he.default.schema.json`
   - `project/locales/en.schema.json`
2. `Verified`: JSON parsing passes for:
   - `project/templates/page.stone-runtime-notice.json`
   - `project/locales/he.default.schema.json`
   - `project/locales/en.schema.json`
3. `Verified`: Locale subtree parity passes for the new `stone_utility_notice` schema subtree.
4. `Verified`: `project/sections/stone-utility-notice.liquid` reuses `render 'stone-section-shell'` and does not edit the shared shell.
5. `Verified`: Forbidden-scope grep across `project/sections/stone-utility-notice.liquid` and `project/templates/page.stone-runtime-notice.json` does not reveal drift into product, collection, article, blog, hero, story, trust, support, merchandising, promo, campaign, media, drawer, modal, alert severity, or announcement-bar behavior.
6. `Verified`: Protected-surface diff check confirms no edits to:
   - `project/snippets/stone-section-shell.liquid`
   - `project/layout/theme.liquid`
   - `project/assets/stone-runtime.js`
   - `project/config/settings_schema.json`
   - `project/blocks/`
7. `Verified`: Required harness checks pass:
   - `node HARNESS/checks/check-state-artifacts.mjs`
   - `node HARNESS/checks/check-next-action-scope.mjs`
   - `node HARNESS/checks/check-plan-exists.mjs`
   - `node HARNESS/checks/check-handoff-completeness.mjs`
   - `node HARNESS/checks/check-approval-state.mjs`
   - `node HARNESS/checks/check-lock-state.mjs`
   - `node HARNESS/checks/harness-check.mjs`

## Review Focus

- `Verified`: Confirm the section is a neutral contained notice, not a promo banner or support alert.
- `Verified`: Confirm the slice stays distinct from the existing richtext proof without reopening broader utility composition.
- `Verified`: Confirm the neutral host template remains isolated and does not become a multi-section composition scaffold.
