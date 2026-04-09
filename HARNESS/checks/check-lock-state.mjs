#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] ?? path.join(scriptDir, "..", ".."));
const orchestrationPath = path.join(root, "state", "ORCHESTRATION_STATE.md");
const failures = [];

const markdown = fs.readFileSync(orchestrationPath, "utf8");
const writeLockMatch = markdown.match(/Write lock:\s+([a-z]+)/);
const lockOwnerMatch = markdown.match(/Lock owner:\s+([^\r\n]+)/);
const policyMatch = markdown.match(/Parallel write policy:\s+([^\r\n]+)/);

if (!writeLockMatch) {
  failures.push("Write lock value is missing.");
}

if (!lockOwnerMatch) {
  failures.push("Lock owner value is missing.");
}

if (!policyMatch) {
  failures.push("Parallel write policy value is missing.");
}

if (writeLockMatch) {
  const value = writeLockMatch[1];
  if (!["locked", "unlocked"].includes(value)) {
    failures.push(`Invalid write lock value: ${value}`);
  }

  if (value === "locked" && lockOwnerMatch && /^none$/i.test(lockOwnerMatch[1].trim())) {
    failures.push("Write lock is locked but lock owner is none.");
  }

  if (value === "unlocked" && lockOwnerMatch && !/^none$/i.test(lockOwnerMatch[1].trim())) {
    failures.push("Write lock is unlocked but lock owner is not none.");
  }
}

if (policyMatch && !/single-writer/i.test(policyMatch[1])) {
  failures.push("Parallel write policy must preserve a single-writer default.");
}

if (failures.length > 0) {
  console.error("Lock state check failed.");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Lock state check passed.");
