# Phase 4 Homepage Host-Only Reopen Review Assumptions v1

- `Verified`: `UNIT-142` already admitted `shopify_theme_dom/` as fresh evidence but did not approve a next lane.
- `Verified`: This package narrows the question to homepage-host-only evidence.
- `Verified`: The relevant homepage corpus files are `home-elements.json`, `home-main.html`, and where present, corpus `index.json`.
- `Verified`: The relevant runtime comparison surface is `project/templates/`.
- `Verified`: `project/templates/index.json` is currently absent.
- `Inference`: If homepage evidence were narrow enough, `project/templates/index.json` would be the only plausible exact host file boundary.
- `Inference`: Shell/footer markers inside multiple homepage captures mean the evidence is still not isolated enough to approve that boundary.
