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
const formulaAuditCode = fs.readFileSync("formula-audit.js","utf8");
vm.runInContext(formulaAuditCode, sandbox);
const formulaAudit = sandbox.window.QI_FORMULA_AUDIT;

if (!data || !Array.isArray(data.theories) || !Array.isArray(data.relations) || !Array.isArray(data.trees) || !Array.isArray(data.sources)) {
  throw new Error("QI_DATA schema missing");
}
if (!formulaData || !Array.isArray(formulaData.formulas)) throw new Error("QI_FORMULAS schema missing");
if (!formulaAudit || !Array.isArray(formulaAudit.entries)) throw new Error("QI_FORMULA_AUDIT schema missing");

const ids = data.theories.map(t=>t.id);
const unique = new Set(ids);
if (unique.size !== ids.length) throw new Error("Duplicate theory IDs");
if (data.theories.length < 265) throw new Error(`Expected expanded seed corpus; found only ${data.theories.length}`);

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

const allowedRelationConfidence = new Set(["high","medium","editorial"]);
const allowedEvidenceTypes = new Set(["documented historical influence","formal mathematical relation","editorial relation"]);
for (const r of data.relations) {
  if (!unique.has(r.from) || !unique.has(r.to)) throw new Error(`Dangling relation ${r.from} -> ${r.to}`);
  if (!Array.isArray(r.sourceIds)) throw new Error(`Relation ${r.from}->${r.to} sourceIds must be an array`);
  if (!allowedEvidenceTypes.has(r.evidenceType)) throw new Error(`Relation ${r.from}->${r.to} has invalid evidenceType ${r.evidenceType}`);
  if (!allowedRelationConfidence.has(r.confidence)) throw new Error(`Relation ${r.from}->${r.to} has invalid confidence ${r.confidence}`);
  for (const sourceId of r.sourceIds) if (!uniqueSources.has(sourceId)) throw new Error(`Relation ${r.from}->${r.to} references missing source ${sourceId}`);
  if (r.confidence !== "editorial" && r.sourceIds.length === 0) throw new Error(`Non-editorial relation ${r.from}->${r.to} lacks evidence sources`);
}
const sourcedRelations = data.relations.filter(r=>r.sourceIds.length);
if (sourcedRelations.length < 57) throw new Error(`Expected at least 57 source-backed relations; found ${sourcedRelations.length}`);
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
if (formulaData.formulas.length < 345) throw new Error(`Expected formula atlas >= 345 entries; found ${formulaData.formulas.length}`);

const allowedFormulaTypes = new Set(["exact","defining","canonical","schematic","approximation","limit","derived identity"]);
for (const f of formulaData.formulas) {
  for (const key of ["id","name","category","latex","plain","description","formulaType","regime","units","theoryRelationship","metadataReview"]) {
    if (f[key] === undefined || f[key] === null || f[key] === "") throw new Error(`Formula ${f.id || "?"} missing ${key}`);
  }
  if (!allowedFormulaTypes.has(f.formulaType)) throw new Error(`Formula ${f.id} has invalid formulaType ${f.formulaType}`);
  if (!Array.isArray(f.assumptions)) throw new Error(`Formula ${f.id} assumptions must be an array`);
  if (!Array.isArray(f.variables)) throw new Error(`Formula ${f.id} variables must be an array`);
  if (!Array.isArray(f.theoryIds) || !f.theoryIds.length) throw new Error(`Formula ${f.id} has no linked theory`);
  if (!Array.isArray(f.sourceIds) || !f.sourceIds.length) throw new Error(`Formula ${f.id} has no source`);
  for (const id of f.theoryIds) if (!unique.has(id)) throw new Error(`Formula ${f.id} references missing theory ${id}`);
  for (const id of f.sourceIds) if (!uniqueSources.has(id)) throw new Error(`Formula ${f.id} references missing source ${id}`);
}

const auditTheoryIds = formulaAudit.entries.map(e=>e.theoryId);
if (new Set(auditTheoryIds).size !== auditTheoryIds.length) throw new Error("Duplicate theory IDs in formula audit");
if (auditTheoryIds.length !== ids.length) throw new Error(`Formula audit count ${auditTheoryIds.length} does not match theory count ${ids.length}`);
const allowedAuditClasses = new Set(["formula-bearing","formula-bearing-gap","primarily conceptual","theorem","interpretation","thought experiment"]);
for (const e of formulaAudit.entries) {
  if (!unique.has(e.theoryId)) throw new Error(`Formula audit references missing theory ${e.theoryId}`);
  if (!allowedAuditClasses.has(e.classification)) throw new Error(`Formula audit ${e.theoryId} has invalid classification ${e.classification}`);
  if (!Array.isArray(e.formulaIds)) throw new Error(`Formula audit ${e.theoryId} formulaIds must be an array`);
  for (const id of e.formulaIds) if (!uniqueFormulaIds.has(id)) throw new Error(`Formula audit ${e.theoryId} references missing formula ${id}`);
  if (e.classification === "formula-bearing" && !e.formulaIds.length) throw new Error(`Formula-bearing theory ${e.theoryId} has no formula`);
  if (e.classification === "formula-bearing-gap" && !e.gapReason) throw new Error(`Formula gap ${e.theoryId} lacks a documented reason`);
}


const cataloguedOnly = data.theories.filter(t=>t.provenance === "catalogued");
if (cataloguedOnly.length) {
  throw new Error(`Shipped theory remains catalogued-only: ${cataloguedOnly.map(t=>t.id).join(", ")}`);
}

const sourceBacked = data.theories.filter(t=>t.provenance !== "catalogued").length;
console.log(JSON.stringify({
  theories:data.theories.length,
  relations:data.relations.length,
  sourcedRelations:data.relations.filter(r=>r.sourceIds.length).length,
  editorialRelations:data.relations.filter(r=>r.confidence==="editorial").length,
  trees:data.trees.length,
  categories:[...new Set(data.theories.map(t=>t.category))].length,
  kinds:[...new Set(data.theories.map(t=>t.kind))].length,
  sources:data.sources.length,
  sourceBacked,
  sourceCoveragePct:Number((sourceBacked / data.theories.length * 100).toFixed(1)),
  formulas:formulaData.formulas.length,
  formulaCategories:[...new Set(formulaData.formulas.map(f=>f.category))].length,
  formulaTypes:[...new Set(formulaData.formulas.map(f=>f.formulaType))].length,
  formulaAuditCovered:formulaAudit.entries.filter(e=>e.classification==="formula-bearing").length,
  formulaAuditGaps:formulaAudit.entries.filter(e=>e.classification==="formula-bearing-gap").length
},null,2));
