# PROGRESS

## Current Phase

- `Verified`: Roadmap phase: Shopify upload repair lane active after `Stonev2` unpublished theme upload failed with Liquid/schema errors.
- `Verified`: Preset runtime composition remains blocked separately by `UNIT-184`.

## Approved Next Action

- `Verified`: `UNIT-188` is approved to add Hebrew runtime locale parity in `project/locales/he.default.json`.

## Last Completed Unit

- `Verified`: Unit ID: `UNIT-187`
- `Verified`: Summary: added `project/locales/en.default.json` with all runtime keys referenced by Liquid.

## Verification Status

- `Verified`: Verdict: `UNIT-187` PASS with clean Theme Check.
- `Verified`: Evidence: `workspace/verify/unit-187/en-default-runtime-key-check.txt`; `workspace/verify/unit-187/theme-check-summary.txt`; required harness checks.

## Active Blockers

- `Verified`: Runtime preset composition edits are blocked.
- `Verified`: Shopify upload repair has clean local Theme Check after English runtime locale coverage.
- `Verified`: Hebrew runtime parity remains as the next bounded repo parity unit before remote proof.
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

- `Verified`: Continue with `UNIT-188` only unless a hard block appears.
- `Verified`: Do not resume preset runtime composition until owner inputs are supplied or the hard block is explicitly overridden.
