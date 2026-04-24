# UNIT-SA-004 Header/Footer Preview Report

Date: 2026-04-24

Status: FAIL - render structure passes, visual QA fails

## Authorization

Owner authorized:

- `STORE: elos-dev.myshopify.com`
- `PREVIEW TARGET: 156487712965`

## Target Safety

Verified with `shopify theme list --store elos-dev.myshopify.com --no-color`:

| Theme | Role | ID |
| --- | --- | ---: |
| Stonev2 | unpublished | 156487712965 |

Result:

- Target is not live.
- No `--allow-live` was used.
- No `theme push` was used.

## Static Validation

| Check | Result |
| --- | --- |
| `git diff --name-only -- project` | Only UNIT-SA-003 tracked project files listed. |
| `git ls-files --others --exclude-standard -- project` | Only UNIT-SA-003 new project files listed. |
| JSON parse for group JSON and schema locale files | PASS |
| Embedded Liquid schema parse for five section files | PASS |
| Layout integration scan | PASS |
| `shopify theme check --path project --no-color` | PASS; 98 files inspected; no offenses |
| Harness checks | PASS |

Harness commands passed:

- `node HARNESS/checks/check-state-artifacts.mjs`
- `node HARNESS/checks/check-next-action-scope.mjs`
- `node HARNESS/checks/check-plan-exists.mjs`
- `node HARNESS/checks/check-handoff-completeness.mjs`
- `node HARNESS/checks/check-approval-state.mjs`
- `node HARNESS/checks/check-lock-state.mjs`
- `node HARNESS/checks/harness-check.mjs`

## Preview Execution

First command attempted:

```powershell
shopify theme dev --path project --store elos-dev.myshopify.com --theme 156487712965 --port 9292 --live-reload off --no-color
```

Result:

- Preview URL was produced.
- Shopify CLI reported a remote delete error for `templates/gift_card.liquid`.
- Process was stopped.

Second command used safer no-delete mode:

```powershell
shopify theme dev --path project --store elos-dev.myshopify.com --theme 156487712965 --port 9292 --live-reload off --nodelete --no-color
```

Result:

- Preview URL: `http://127.0.0.1:9292`
- Share URL: `https://elos-dev.myshopify.com/?preview_theme_id=156487712965`
- Theme editor URL: `https://elos-dev.myshopify.com/admin/themes/156487712965/editor?hr=9292`
- No live theme target.
- Preview process was stopped after QA.

## Render Checks

HTML route checks:

| Route | Status | Header elements | Footer elements | `MainContent` | Skip link | Direction |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `/` | 200 | 1 | 1 | 1 | 1 | ltr |
| `/collections/all` | 200 | 1 | 1 | 1 | 1 | ltr |
| `/search?q=a` | 200 | 1 | 1 | 1 | 1 | ltr |
| `/products/gift-card` | 200 | 1 | 1 | 1 | 1 | ltr |

Structural result:

- Header/footer group rendering is present.
- Header/footer are not duplicated.
- Header/footer are not missing.
- Skip link and `MainContent` are present.

## Browser Evidence

Screenshots captured:

- `workspace/qa/reports/unit-sa-004-home-desktop.png`
- `workspace/qa/reports/unit-sa-004-collection-desktop.png`
- `workspace/qa/reports/unit-sa-004-product-desktop.png`
- `workspace/qa/reports/unit-sa-004-search-desktop.png`

Browser console observations:

- CSP warning from `https://shop.app/` frame ancestor policy.
- Missing `favicon.ico` 404.

These were not attributed to the header/footer group scaffold.

## Findings

P1 visual regression:

- Header navigation links render with no visible spacing: `HomeCatalogContact`.
- Cart link is pushed hard against the right viewport edge.
- The issue appears on home, collection, product, and search screenshots.

P2 visual/system polish:

- Footer legal/copyright row renders, but spacing and alignment are very raw.
- Collection route confirms the shell renders, but the overall header/footer spacing is not release-quality.

Not fully tested:

- RTL/Hebrew rendering was not proven because the previewed routes rendered `dir="ltr"`.
- Keyboard tab order was not exhaustively captured because the visible layout defect already blocks full pass.
- App-wrapper blank region was not directly proven because no app block instance was configured in preview content.

## Pass/Fail

| Gate | Result |
| --- | --- |
| Target is not live | PASS |
| Static validation | PASS |
| Theme Check | PASS |
| Harness | PASS |
| Preview URL available | PASS |
| One header and one footer on key routes | PASS |
| Skip link and `MainContent` present | PASS |
| No duplicate legacy header/footer output | PASS |
| No `project/**` writes during UNIT-SA-004 | PASS |
| Visual QA | FAIL |
| RTL QA | PARTIAL |

## Final Verdict

FAIL.

UNIT-SA-003 is structurally valid, but UNIT-SA-004 does not pass visual QA. The header/footer group scaffold renders, but spacing/layout defects must be fixed before Phase 3B behavior, Phase 4 theme blocks, or preset composition.

## Next Recommended Unit

`UNIT-SA-005: Header/Footer Shell Styling And RTL Fix`

Recommended scope:

- Add the smallest CSS/runtime-locale-safe fix needed for header nav spacing, utility spacing, footer legal spacing, and responsive/RTL layout.
- Keep write set bounded to the exact CSS/section files needed.
- Do not add drawer/search/cart behavior.
- Do not add overlay group.
- Do not add theme blocks.
- Re-run UNIT-SA-004 preview checks after the fix.
