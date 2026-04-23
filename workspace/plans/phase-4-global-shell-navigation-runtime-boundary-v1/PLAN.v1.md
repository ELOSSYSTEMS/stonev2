# Phase 4 Global Shell And Navigation Runtime Boundary v1

## Status

- `Verified`: This package is docs-only.
- `Verified`: `UNIT-146` passed and admitted only this docs-only boundary package.
- `Verified`: This package does not authorize runtime edits by itself.
- `Verified`: This package states one exact future shell/navigation runtime implementation boundary.

## Scope

- `Verified`: Define the smallest acceptable runtime file boundary for a global shell/navigation proof.
- `Verified`: Keep the boundary global, shared, behavior-light, RTL-safe, and bilingual-editor-safe.
- `Verified`: Keep collection/archive behavior, PDP behavior, search results, predictive search, cart drawer behavior, checkout-sensitive behavior, preset realization, and hardening out of scope.

## Evidence Reviewed

- `Verified`: `project/layout/theme.liquid` contains document direction handling, `content_for_header`, `MainContent`, and a shared body shell but no header or footer.
- `Verified`: `project/config/settings_schema.json` already has a `shell_behavior` settings group with direction mode and shell width only.
- `Verified`: `project/locales/he.default.schema.json` and `project/locales/en.schema.json` already carry bilingual editor schema labels for theme settings and section schemas.
- `Verified`: `project/assets/stone-base.css` already contains shared base styles and is the correct bounded surface for shell styling.
- `Verified`: `project/assets/stone-runtime.js` is not required for a no-JS shell proof because the admitted surface is header/footer/menu/link rendering only.

## Exact Future Runtime Boundary For UNIT-153

- `Verified`: `project/layout/theme.liquid`
- `Verified`: `project/snippets/stone-global-header.liquid`
- `Verified`: `project/snippets/stone-global-footer.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/config/settings_schema.json`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`

## Admitted Behavior For UNIT-153

- `Verified`: Render a global header before `MainContent`.
- `Verified`: Render a global footer after `MainContent`.
- `Verified`: Render brand text from the existing brand setting fallback.
- `Verified`: Render primary navigation from one Shopify link-list setting.
- `Verified`: Render footer navigation from one Shopify link-list setting.
- `Verified`: Render search as a link or simple GET entry to Shopify search only.
- `Verified`: Render cart as a link entry only.
- `Verified`: Render locale switch as a shell surface only if Shopify localization data is available.
- `Verified`: Preserve skip-link and `MainContent` focus continuity.
- `Verified`: Add bilingual editor labels only for the admitted shell settings.

## Blocked Behavior For UNIT-153

- `Verified`: Search results templates.
- `Verified`: Predictive search.
- `Verified`: Collection/archive navigation semantics beyond rendering link-list items.
- `Verified`: PDP behavior.
- `Verified`: Product recommendations.
- `Verified`: Mega-menu content strategy.
- `Verified`: Account flow behavior.
- `Verified`: Cart drawer behavior.
- `Verified`: Checkout-sensitive behavior.
- `Verified`: Preset-pack realization.
- `Verified`: Phase 5 hardening and launch-readiness work.
- `Verified`: JavaScript shell behavior.

## Required Future Checks For UNIT-153

- `Verified`: `git diff --name-only -- project`
- `Verified`: JSON parsing for `project/config/settings_schema.json`, `project/locales/he.default.schema.json`, and `project/locales/en.schema.json`
- `Verified`: locale parity check for admitted shell setting keys
- `Verified`: grep or file review confirming no `project/assets/stone-runtime.js` edit
- `Verified`: grep or file review confirming no collection, product, blog, article, search, list-collections, or cart template was added
- `Verified`: `node HARNESS/checks/check-state-artifacts.mjs`
- `Verified`: `node HARNESS/checks/check-next-action-scope.mjs`
- `Verified`: `node HARNESS/checks/check-plan-exists.mjs`
- `Verified`: `node HARNESS/checks/check-handoff-completeness.mjs`
- `Verified`: `node HARNESS/checks/check-approval-state.mjs`
- `Verified`: `node HARNESS/checks/check-lock-state.mjs`
- `Verified`: `node HARNESS/checks/harness-check.mjs`

## Decision

- `Verified`: `UNIT-153` may implement one no-JS global shell/navigation proof only inside the exact seven-file runtime boundary above.
- `Verified`: `UNIT-147` through `UNIT-151` remain blocked.
- `Verified`: No other runtime, template, search, collection, PDP, cart drawer, checkout-sensitive, preset, or hardening surface is admitted.

## Readiness Verdict

- `Verified`: PASS. `UNIT-152` admits only `UNIT-153`, the bounded global shell/navigation runtime proof implementation.
