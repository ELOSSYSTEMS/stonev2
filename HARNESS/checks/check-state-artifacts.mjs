#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] ?? path.join(scriptDir, "..", ".."));
const stateDir = path.join(root, "state");

const requiredFiles = {
  "ORCHESTRATION_STATE.md": [
    "## Repo Identity",
    "## Current Phase",
    "## Approval State",
    "## Lock State",
  ],
  "STATUS.md": [
    "## Snapshot",
    "## Canonical Inputs",
    "## Constraints",
    "## Current Outcome",
  ],
  "NEXT_ACTION.md": [
    "## Status",
    "## Approved Unit",
    "## Allowed Files Or Surfaces",
    "## Required Checks",
    "## Stop Condition",
  ],
  "FEATURE_STATUS.md": [
    "## Rules",
    "| Unit ID | Title | Status | Acceptance Criteria | Allowed Files Or Surfaces | Evidence | Last Updated |",
  ],
  "PROGRESS.md": [
    "## Current Phase",
    "## Approved Next Action",
    "## Verification Status",
  ],
  "SESSION_LOG.md": [
    "## Entry Template",
    "## Entries",
  ],
};

const failures = [];

function expectDirectory(dirPath) {
  try {
    const stat = fs.statSync(dirPath);
    if (!stat.isDirectory()) {
      failures.push(`wrong type: ${dirPath} exists but is not a directory`);
    }
  } catch {
    failures.push(`missing directory: ${dirPath}`);
  }
}

function expectFile(filePath) {
  try {
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) {
      failures.push(`wrong type: ${filePath} exists but is not a file`);
    }
  } catch {
    failures.push(`missing file: ${filePath}`);
  }
}

function expectContent(filePath, requiredStrings) {
  const content = fs.readFileSync(filePath, "utf8");
  for (const requiredString of requiredStrings) {
    if (!content.includes(requiredString)) {
      failures.push(`missing required content in ${filePath}: ${requiredString}`);
    }
  }
}

expectDirectory(stateDir);

for (const [fileName, requiredStrings] of Object.entries(requiredFiles)) {
  const filePath = path.join(stateDir, fileName);
  expectFile(filePath);
  if (fs.existsSync(filePath)) {
    expectContent(filePath, requiredStrings);
  }
}

if (failures.length > 0) {
  console.error("State artifact check failed.");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("State artifact check passed.");
