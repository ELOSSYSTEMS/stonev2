#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..", "..");
const checks = [
  "check-state-artifacts.mjs",
  "check-next-action-scope.mjs",
  "check-plan-exists.mjs",
  "check-handoff-completeness.mjs",
  "check-approval-state.mjs",
  "check-lock-state.mjs",
];

let failed = false;

for (const check of checks) {
  const checkPath = path.join(scriptDir, check);
  const result = spawnSync(process.execPath, [checkPath, root], {
    stdio: "inherit",
  });

  if (result.status !== 0) {
    failed = true;
  }
}

process.exit(failed ? 1 : 0);
