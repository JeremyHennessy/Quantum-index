import fs from "node:fs";
import vm from "node:vm";

const code = fs.readFileSync("theories.js","utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const data = sandbox.window.QI_DATA;

const formulaCode = fs.readFileSync("formulas.js","utf8");
vm.runInContext(formulaCode, sandbox);
const formulaData = sandbox.window.QI_FORMULAS;

if (!data || !Array.isArray(data.theories) || !Array.isArray(data.relations) || !Array.isArray(data.trees) || !Array.isArray(data.sources)) {
  throw new Error("QI_DATA schema missing");
}
if (!formulaData || !Array.isArray(formulaData.formulas)) throw new Error("QI_FORMULAS schema missing");

const ids = data.theories.map(t=>t.id);
const unique = new Set(ids);
if (unique.size !== ids.length) throw new Error("Duplicate theory IDs");
if (data.theories.length < 245) throw new Error(`Expected expanded seed corpus; found only ${data.theories.length}`);

const sourceIds = data.sources.map(s=>s.id);
const uniqueSources = new Set(sourceIds);
if (uniqueSources.size !== sourceIds.length) throw new Error("Duplicate source IDs");

for (const s of data.sources) {
  for (const key of ["id","title","authors","year","type","url"]) {
    if (s[key] === undefined || s[key] === null || s[key] === "") throw new Error(`Source ${s.id || "?"} missing ${key}`);
  }
  if (!String(s.url).startsWith("https://")) throw new Error(`Source ${s.id} is not HTTPS`);
}

for (const t of data.theories) {
  for (const key of ["id","name","year","era","category","status","kind","summary","core","provenance"]) {
    if (t[key] === undefined || t[key] === null || t[key] === "") throw new Error(`Theory ${t.id || "?"} missing ${key}`);
  }
  if (!Array.isArray(t.sources)) throw new Error(`Theory ${t.id} sources is not an array`);
  for (const sourceId of t.sources) {
    if (!uniqueSources.has(sourceId)) throw new Error(`Theory ${t.id} references missing source ${sourceId}`);
  }
  if (t.provenance !== "catalogued" && t.sources.length === 0) {
    throw new Error(`Theory ${t.id} claims provenance without a source`);
  }
}

for (const r of data.relations) {
  if (!unique.has(r.from) || !unique.has(r.to)) throw new Error(`Dangling relation ${r.from} -> ${r.to}`);
}
for (const tree of data.trees) {
  for (const id of tree.nodes) if (!unique.has(id)) throw new Error(`Tree ${tree.name} references missing ${id}`);
  const nodeSet = new Set(tree.nodes);
  const connected = new Set();
  for (const r of data.relations) {
    if (nodeSet.has(r.from) && nodeSet.has(r.to)) {
      connected.add(r.from);
      connected.add(r.to);
    }
  }
  const isolated = tree.nodes.filter(id => !connected.has(id));
  if (isolated.length) throw new Error(`Tree ${tree.name} has isolated nodes: ${isolated.join(", ")}`);
}

const formulaIds = formulaData.formulas.map(f=>f.id);
const uniqueFormulaIds = new Set(formulaIds);
if (uniqueFormulaIds.size !== formulaIds.length) throw new Error("Duplicate formula IDs");
if (formulaData.formulas.length < 160) throw new Error(`Expected formula atlas >= 160 entries; found ${formulaData.formulas.length}`);

for (const f of formulaData.formulas) {
  for (const key of ["id","name","category","latex","plain","description"]) {
    if (f[key] === undefined || f[key] === null || f[key] === "") throw new Error(`Formula ${f.id || "?"} missing ${key}`);
  }
  if (!Array.isArray(f.theoryIds) || !f.theoryIds.length) throw new Error(`Formula ${f.id} has no linked theory`);
  if (!Array.isArray(f.sourceIds) || !f.sourceIds.length) throw new Error(`Formula ${f.id} has no source`);
  for (const id of f.theoryIds) if (!unique.has(id)) throw new Error(`Formula ${f.id} references missing theory ${id}`);
  for (const id of f.sourceIds) if (!uniqueSources.has(id)) throw new Error(`Formula ${f.id} references missing source ${id}`);
}

const cataloguedOnly = data.theories.filter(t=>t.provenance === "catalogued");
if (cataloguedOnly.length) {
  throw new Error(`Shipped theory remains catalogued-only: ${cataloguedOnly.map(t=>t.id).join(", ")}`);
}

const sourceBacked = data.theories.filter(t=>t.provenance !== "catalogued").length;
console.log(JSON.stringify({
  theories:data.theories.length,
  relations:data.relations.length,
  trees:data.trees.length,
  categories:[...new Set(data.theories.map(t=>t.category))].length,
  kinds:[...new Set(data.theories.map(t=>t.kind))].length,
  sources:data.sources.length,
  sourceBacked,
  sourceCoveragePct:Number((sourceBacked / data.theories.length * 100).toFixed(1)),
  formulas:formulaData.formulas.length,
  formulaCategories:[...new Set(formulaData.formulas.map(f=>f.category))].length
},null,2));
