# Shopify Upload Error Resolution Risks v1

Verified:

1. Invalid Liquid syntax currently prevents complete Shopify upload.
2. The settings schema blank default is a separate hard upload blocker.
3. Missing runtime locale files keep local Theme Check red.
4. The remote theme exists but cannot be treated as complete.

Inference:

1. A broad mechanical rewrite across all sections could create accidental behavior changes.
2. Fixing locales and warnings in the same commit as Liquid syntax could make regression review harder.
3. Template errors may hide independent issues until rejected section files upload cleanly.
4. Recreating the theme instead of repairing the existing unpublished theme could obscure whether the original remote target was fixed.

Mitigations:

1. Split Liquid, schema, locale, remote push, and warning cleanup into separate units.
2. Commit after each completed unit.
3. Keep `UNIT-184` limited to `project/sections/*.liquid`.
4. Do not publish the theme during repair.
5. Re-run Shopify CLI validation after every blocker family is repaired.
