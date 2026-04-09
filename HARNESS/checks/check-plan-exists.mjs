#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] ?? path.join(scriptDir, "..", ".."));
const nextActionPath = path.join(root, "state", "NEXT_ACTION.md");
const sectionPattern = /^##\s+(.+?)\s*$/gm;
const failures = [];

function parseSections(markdown) {
  const matches = [...markdown.matchAll(sectionPattern)];
  const sections = new Map();

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index];
    const next = matches[index + 1];
    const start = current.index + current[0].length;
    const end = next ? next.index : markdown.length;
    sections.set(current[1].trim(), markdown.slice(start, end).trim());
  }

  return sections;
}

function bulletLines(sectionText) {
  return sectionText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^-\s+\S+/.test(line));
}

const markdown = fs.readFileSync(nextActionPath, "utf8");
const sections = parseSections(markdown);
const planLines = bulletLines(sections.get("Plan Reference") ?? "");

if (planLines.length !== 1) {
  failures.push("Plan Reference must contain exactly one bullet.");
} else {
  const line = planLines[0];

  if (line.startsWith("- `Not required`:")) {
    console.log("Plan existence check passed: plan is explicitly not required for this unit.");
    process.exit(0);
  }

  const match = line.match(/^- `Path:`\s+`(.+?)`$/);
  if (!match) {
    failures.push("Plan Reference must use either `Not required` or `Path:` format.");
  } else {
    const planPath = path.join(root, match[1]);
    if (!fs.existsSync(planPath)) {
      failures.push(`Referenced plan path does not exist: ${match[1]}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Plan existence check failed.");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Plan existence check passed.");
