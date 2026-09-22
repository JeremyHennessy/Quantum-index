import fs from "node:fs";
import vm from "node:vm";

const code = fs.readFileSync("theories.js","utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const data = sandbox.window.QI_DATA;

if (!data || !Array.isArray(data.theories) || !Array.isArray(data.relations) || !Array.isArray(data.trees) || !Array.isArray(data.sources)) {
  throw new Error("QI_DATA schema missing");
}

const ids = data.theories.map(t=>t.id);
const unique = new Set(ids);
if (unique.size !== ids.length) throw new Error("Duplicate theory IDs");
if (data.theories.length < 170) throw new Error(`Expected expanded seed corpus; found only ${data.theories.length}`);

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
  sourceCoveragePct:Number((sourceBacked / data.theories.length * 100).toFixed(1))
},null,2));
