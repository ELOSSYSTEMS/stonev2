# Phase 4 Global Shell And Navigation Runtime Proof v1

## Status

- `Verified`: This package defines one bounded runtime implementation unit.
- `Verified`: It is conditional on `UNIT-152` passing.
- `Verified`: It admits only a no-JS global shell/navigation proof.

## Exact Runtime Boundary

- `Verified`: `project/layout/theme.liquid`
- `Verified`: `project/snippets/stone-global-header.liquid`
- `Verified`: `project/snippets/stone-global-footer.liquid`
- `Verified`: `project/assets/stone-base.css`
- `Verified`: `project/config/settings_schema.json`
- `Verified`: `project/locales/he.default.schema.json`
- `Verified`: `project/locales/en.schema.json`

## Scope

- `Verified`: Add global header and footer shell placement.
- `Verified`: Add header and footer snippets.
- `Verified`: Add bounded shell settings and bilingual labels.
- `Verified`: Add CSS for the shell proof.
- `Verified`: Keep JavaScript untouched.
- `Verified`: Keep all canonical host templates other than existing `index.json` untouched.

## Acceptance Criteria

1. `Verified`: The implementation changes only the exact seven runtime files above.
2. `Verified`: Header/footer render without JavaScript.
3. `Verified`: Navigation uses Shopify link-list settings without encoding collection/archive semantics.
4. `Verified`: Search and cart remain entry links or simple native surfaces only.
5. `Verified`: Locale-switch is a shell surface only and does not become a broader localization architecture.
6. `Verified`: Required harness and JSON checks pass.

## Intended Next Step If This Unit Passes

- `Inference`: Verify the shell/navigation runtime proof before opening any collection, PDP, search, or preset lane.

## Readiness Verdict

- `Verified`: READY only if `UNIT-152` passes first.
