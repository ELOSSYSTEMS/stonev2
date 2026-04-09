#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] ?? path.join(scriptDir, "..", ".."));
const handoffPath = path.join(root, "workspace", "handoff", "CURRENT_HANDOFF.md");
const requiredSections = [
  "## Summary",
  "## Current State",
  "## Changed Or Seeded Files",
  "## Open Assumptions",
  "## Recommended Next Step",
  "## Resume Checks",
];

const failures = [];
const markdown = fs.readFileSync(handoffPath, "utf8");

for (const section of requiredSections) {
  if (!markdown.includes(section)) {
    failures.push(`Missing required handoff section: ${section}`);
  }
}

if (!/## Recommended Next Step[\s\S]*?UNIT-\d+/m.test(markdown)) {
  failures.push("Recommended Next Step must reference a bounded unit.");
}

if (!/## Resume Checks[\s\S]*?HARNESS\/checks\//m.test(markdown)) {
  failures.push("Resume Checks must include at least one local harness check.");
}

if (failures.length > 0) {
  console.error("Handoff completeness check failed.");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Handoff completeness check passed.");
