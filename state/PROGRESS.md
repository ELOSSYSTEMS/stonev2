# PROGRESS

## Current Phase

- `Verified`: Roadmap phase: Shopify upload repair lane active after `Stonev2` unpublished theme upload failed with Liquid/schema errors.
- `Verified`: Preset runtime composition remains blocked separately by `UNIT-184`.

## Approved Next Action

- `Verified`: `UNIT-187` is approved to add English runtime locale coverage in `project/locales/en.default.json`.

## Last Completed Unit

- `Verified`: Unit ID: `UNIT-186`
- `Verified`: Summary: repaired the Shopify-rejected blank `stone_brand_name` default by setting it to `Stone`.

## Verification Status

- `Verified`: Verdict: `UNIT-186` PASS with remaining non-scope Theme Check translation errors.
- `Verified`: Evidence: `workspace/verify/unit-186/settings-schema-default-check.txt`; `workspace/verify/unit-186/theme-check-summary.txt`; required harness checks.

## Active Blockers

- `Verified`: Runtime preset composition edits are blocked.
- `Verified`: Shopify upload repair still has known follow-up blocker: missing runtime locale coverage.
- `Verified`: Exact template JSON mutation policy is missing.
- `Verified`: Exact per-preset section order and section settings are missing.
- `Verified`: Starter content defaults are missing.
- `Verified`: Collection filter defaults by preset are missing.
- `Verified`: Global preset selector runtime behavior is missing.
- `Verified`: Final preset content and composition remain intentionally deferred.
- `Verified`: Exact starter content payloads remain intentionally deferred.
- `Verified`: Exact per-preset host assignment rules remain intentionally deferred until capability stabilization.
- `Verified`: Exact template JSON mutation policy is missing.
- `Verified`: Exact hardening entry criteria after partial preset realization are missing.
- `Verified`: No per-preset architecture sprawl is approved.
- `Verified`: No predictive-search, cart, or hardening lane is approved.

## Resume Notes

- `Verified`: Continue with `UNIT-187` only unless a hard block appears.
- `Verified`: Do not resume preset runtime composition until owner inputs are supplied or the hard block is explicitly overridden.
