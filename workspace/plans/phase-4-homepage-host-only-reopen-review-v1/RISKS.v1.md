# Phase 4 Homepage Host-Only Reopen Review Risks v1

1. `Verified`: The main risk is treating homepage-only corpus focus as proof that shell/navigation concerns are no longer coupled to the homepage evidence.
2. `Verified`: A second risk is treating corpus `index.json` presence as enough proof for a local `project/templates/index.json` boundary when the runtime has no existing host scaffold and the captures still contain shell/footer signals.
3. `Verified`: A third risk is using homepage-host review as a backdoor to reopen `project/layout/theme.liquid`, search, or collection/PDP hosts.
4. `Verified`: The mitigation is to approve nothing unless the homepage evidence isolates one exact host boundary cleanly; this package does not find that proof.
