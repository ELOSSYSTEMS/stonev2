#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] ?? path.join(scriptDir, "..", ".."));
const orchestrationPath = path.join(root, "state", "ORCHESTRATION_STATE.md");
const nextActionPath = path.join(root, "state", "NEXT_ACTION.md");
const allowedStates = new Set(["APPROVED", "CONDITIONALLY_APPROVED", "BLOCKED"]);
const failures = [];

const orchestration = fs.readFileSync(orchestrationPath, "utf8");
const nextAction = fs.readFileSync(nextActionPath, "utf8");

const orchestrationMatch = orchestration.match(/Current next action approval:\s+([A-Z_]+)/);
const nextActionMatch = nextAction.match(/Approval State:\s+([A-Z_]+)/);

if (!orchestrationMatch) {
  failures.push("ORCHESTRATION_STATE.md is missing the current next action approval value.");
}

if (!nextActionMatch) {
  failures.push("NEXT_ACTION.md is missing the approval state value.");
}

if (orchestrationMatch && !allowedStates.has(orchestrationMatch[1])) {
  failures.push(`Invalid orchestration approval state: ${orchestrationMatch[1]}`);
}

if (nextActionMatch && !allowedStates.has(nextActionMatch[1])) {
  failures.push(`Invalid next action approval state: ${nextActionMatch[1]}`);
}

if (orchestrationMatch && nextActionMatch && orchestrationMatch[1] !== nextActionMatch[1]) {
  failures.push("Approval state differs between ORCHESTRATION_STATE.md and NEXT_ACTION.md.");
}

if (orchestrationMatch && orchestrationMatch[1] === "BLOCKED") {
  failures.push("Approval state is BLOCKED.");
}

if (failures.length > 0) {
  console.error("Approval state check failed.");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Approval state check passed.");
