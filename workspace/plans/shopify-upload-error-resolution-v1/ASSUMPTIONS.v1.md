# Shopify Upload Error Resolution Assumptions v1

Verified:

- The plan source is `workspace/audits/shopify-theme-upload-errors-2026-04-24.md`.
- The current remote `Stonev2` theme exists as unpublished theme id `156487712965`.
- The current upload is incomplete because Shopify rejected invalid files.
- The first hard blocker is invalid Liquid syntax.

Inference:

- Upload repair is separate from preset composition work.
- The Liquid syntax repair can proceed before owner decisions about PDP/collection preset content.
- Reusing the existing unpublished theme id is cleaner than creating another theme unless the user requests a fresh remote proof.

Unknown:

- Whether Hebrew runtime locale parity is required in the same repair sequence as English runtime locale coverage.
- Whether non-blocking Theme Check warnings should be fixed immediately after blockers or logged for later cleanup.
