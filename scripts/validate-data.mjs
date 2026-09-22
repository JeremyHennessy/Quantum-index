import fs from "node:fs";
import vm from "node:vm";

const code = fs.readFileSync("theories.js","utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const data = sandbox.window.QI_DATA;
if (!data || !Array.isArray(data.theories) || !Array.isArray(data.relations) || !Array.isArray(data.trees)) {
  throw new Error("QI_DATA schema missing");
}
const ids = data.theories.map(t=>t.id);
const unique = new Set(ids);
if (unique.size !== ids.length) throw new Error("Duplicate theory IDs");
if (data.theories.length < 100) throw new Error(`Expected broad seed corpus; found only ${data.theories.length}`);
for (const t of data.theories) {
  for (const key of ["id","name","year","era","category","status","summary","core","provenance"]) {
    if (t[key] === undefined || t[key] === null || t[key] === "") throw new Error(`Theory ${t.id || "?"} missing ${key}`);
  }
}
for (const r of data.relations) {
  if (!unique.has(r.from) || !unique.has(r.to)) throw new Error(`Dangling relation ${r.from} -> ${r.to}`);
}
for (const tree of data.trees) {
  for (const id of tree.nodes) if (!unique.has(id)) throw new Error(`Tree ${tree.name} references missing ${id}`);
}
console.log(JSON.stringify({
  theories:data.theories.length,
  relations:data.relations.length,
  trees:data.trees.length,
  categories:[...new Set(data.theories.map(t=>t.category))].length
},null,2));
