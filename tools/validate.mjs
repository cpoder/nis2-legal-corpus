#!/usr/bin/env node
/**
 * Validates the corpus. Every `##` section of legal-sources/<country>.md must
 * carry a well-formed meta line within the taxonomy, with an ISO date that is
 * not in the future; legal-sources/INDEX.md must be current; the JSON data
 * files must parse and every conformance case must name its legal basis.
 * Exit code 1 if anything fails, with every problem listed.
 *
 * Usage: node tools/validate.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { collect, THEMES, TYPES, SURFACES, DEFECT_TYPES } from "./build-index.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];
const today = new Date().toISOString().slice(0, 10);

const entries = collect(join(ROOT, "legal-sources"));
if (entries.length < 40) problems.push(`only ${entries.length} sections found; the corpus is not being read`);
for (const e of entries) {
  const where = `${e.file}:${e.line} "${e.title.slice(0, 60)}"`;
  if (!e.meta) {
    problems.push(`${where}: no <!-- meta: --> line`);
    continue;
  }
  if (e.meta.themes.length === 0) problems.push(`${where}: no theme`);
  if (e.meta.types.length === 0) problems.push(`${where}: no type`);
  for (const t of e.meta.themes) if (!THEMES.includes(t)) problems.push(`${where}: unknown theme "${t}"`);
  for (const t of e.meta.types) if (!TYPES.includes(t)) problems.push(`${where}: unknown type "${t}"`);
  for (const s of e.meta.surfaces) if (!SURFACES.includes(s)) problems.push(`${where}: unknown surface "${s}"`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.meta.date)) problems.push(`${where}: date "${e.meta.date}" is not ISO`);
  else if (e.meta.date > today) problems.push(`${where}: date ${e.meta.date} is in the future`);
  if (e.meta.types.includes("test-pinned") && !e.meta.types.some((t) => DEFECT_TYPES.has(t) && t !== "test-pinned")) {
    problems.push(`${where}: test-pinned without the defect it protects`);
  }
}

try {
  execFileSync(process.execPath, [join(ROOT, "tools", "build-index.mjs"), "--check"], { stdio: "pipe" });
} catch (err) {
  problems.push(`legal-sources/INDEX.md is stale: ${String(err.stderr ?? err.message).trim().split("\n").at(-1)}`);
}

for (const f of ["data/nis2-transposition-tracker.json", "data/scoping-conformance-cases.json"]) {
  const p = join(ROOT, f);
  if (!existsSync(p)) {
    problems.push(`${f} missing`);
    continue;
  }
  try {
    const json = JSON.parse(readFileSync(p, "utf8"));
    if (f.includes("tracker") && !(Array.isArray(json.countries) && json.countries.length >= 27)) {
      problems.push(`${f}: fewer than 27 countries`);
    }
    if (f.includes("conformance")) {
      const ids = new Set();
      for (const k of json.cases ?? []) {
        if (ids.has(k.id)) problems.push(`${f}: duplicate case id ${k.id}`);
        ids.add(k.id);
        if (!k.basis || k.basis.length < 20) problems.push(`${f}: case ${k.id} has no legal basis`);
        if (!["essential", "important", "out_of_scope"].includes(k.expected)) problems.push(`${f}: case ${k.id} has an unknown expected value`);
      }
      if (ids.size < 20) problems.push(`${f}: only ${ids.size} cases`);
    }
  } catch (err) {
    problems.push(`${f}: ${err.message}`);
  }
}

if (problems.length) {
  for (const p of problems) process.stderr.write(`FAIL ${p}\n`);
  process.exit(1);
}
process.stdout.write(`OK: ${entries.length} sections valid, INDEX current, data files parse\n`);
