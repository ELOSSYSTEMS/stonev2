#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] ?? path.join(scriptDir, "..", ".."));
const nextActionPath = path.join(root, "state", "NEXT_ACTION.md");
const sectionPattern = /^##\s+(.+?)\s*$/gm;
const failures = [];

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

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

const markdown = readFile(nextActionPath);
const sections = parseSections(markdown);
const approvedUnitLines = bulletLines(sections.get("Approved Unit") ?? "");
const allowedLines = bulletLines(sections.get("Allowed Files Or Surfaces") ?? "");
const requiredCheckLines = bulletLines(sections.get("Required Checks") ?? "");
const stopCondition = sections.get("Stop Condition") ?? "";

if (approvedUnitLines.length !== 1) {
  failures.push("Approved Unit must contain exactly one bullet.");
}

if (allowedLines.length < 1) {
  failures.push("Allowed Files Or Surfaces must contain at least one bullet.");
}

for (const line of allowedLines) {
  if (/all files|entire repo|^\-\s+\*$|^\-\s+\/$/i.test(line)) {
    failures.push(`Allowed Files Or Surfaces is too broad: ${line}`);
  }
}

if (requiredCheckLines.length < 1) {
  failures.push("Required Checks must contain at least one bullet.");
}

if (!requiredCheckLines.every((line) => line.includes("HARNESS/checks/"))) {
  failures.push("Required Checks must reference local harness checks.");
}

if (stopCondition.replace(/\s+/g, "").length === 0) {
  failures.push("Stop Condition must not be empty.");
}

if (failures.length > 0) {
  console.error("Next action scope check failed.");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Next action scope check passed.");
