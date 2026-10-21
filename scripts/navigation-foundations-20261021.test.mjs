import {readPreOpenSystemFile} from './open-system-20261021-baseline.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
import {loadRuntime} from './category-trust-census.mjs';import {readPreNavigationFile,projectPreNavigation} from './navigation-20261021-baseline.mjs';import {shortestDocumentedPath} from './sourced-paths.mjs';
const accepted={window:{}};vm.createContext(accepted);for(const f of ['theories.js','formulas.js','formula-audit.js','developments.js','evidence.js','questions.js','problems.js','passports.js','profiles.js'])vm.runInContext(readPreOpenSystemFile(f,'utf8'),accepted);
const w=accepted.window,previous={window:{}};vm.createContext(previous);for(const f of ['theories.js','formulas.js','formula-audit.js','developments.js','evidence.js','questions.js','problems.js','passports.js','profiles.js'])vm.runInContext(readPreNavigationFile(f,'utf8'),previous);
const audit=JSON.parse(fs.readFileSync('research/FOUNDATION_SOURCE_AUDIT_2026-10-21.json'));
const stable=x=>JSON.parse(JSON.stringify(x));
test('exact fifteen foundation promotions preserve all equations, IDs and theory links',()=>{
 assert.equal(audit.formulaPatches.length,15);assert.equal(w.QI_FORMULAS.formulas.length,457);
 const edits=new Set(audit.formulaPatches.map(p=>p.id));assert.equal(edits.size,15);
 for(const old of previous.window.QI_FORMULAS.formulas){const now=w.QI_FORMULAS.formulas.find(f=>f.id===old.id);assert.ok(now);for(const key of ['id','latex','theoryIds'])assert.deepEqual(stable(now[key]),stable(old[key]));if(edits.has(old.id)){assert.equal(old.metadataReview,'baseline-audit-v1');assert.equal(now.metadataReview,'explicit');assert.match(now.theoryRelationship,/retained historical references are provenance/);assert.ok(now.sourceLocations.length);for(const l of now.sourceLocations)assert.ok(audit.sources.some(s=>s.id===l.sourceId));}else assert.deepEqual(stable(now),stable(old));}
 assert.equal(w.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='explicit').length,227);
 const expectation=w.QI_FORMULAS.formulas.find(f=>f.id==='expectation');assert.match(JSON.stringify(expectation),/pure/i);
 for(const collection of ['theories'])assert.deepEqual(stable(w.QI_DATA[collection]),stable(previous.window.QI_DATA[collection]));
 for(const[k,v]of [['QI_EVIDENCE','records'],['QI_PROBLEMS','problems'],['QI_PASSPORTS','records']])assert.deepEqual(stable(w[k][v]),stable(previous.window[k][v]));
});
test('cosmology learning references resolve and directed path exposes every exact locator',()=>{
 const path=w.QI_PROFILES.learningPaths.find(p=>p.id==='primordial-to-cosmic-structure');assert.equal(w.QI_PROFILES.learningPaths.length,6);assert.equal(path.steps.length,4);assert.equal(path.primer.equation,undefined);
 for(const id of path.relatedEvidenceIds)assert.ok(w.QI_EVIDENCE.records.some(e=>e.id===id));for(const id of path.relatedProblemIds)assert.ok(w.QI_PROBLEMS.problems.some(p=>p.id===id));
 const result=shortestDocumentedPath(w.QI_DATA,'inflationary-cosmology','lambda-cdm',{maxHops:3});assert.equal(result.hops,2);assert.equal(result.edges.flatMap(e=>e.sourceLocations).length,6);for(const edge of result.edges)assert.ok(edge.evidenceNote);
});
test('accepted-release projection rejects altered bytes instead of masking a regression',()=>{
 const ledger=JSON.parse(fs.readFileSync('research/NAVIGATION_INTEGRITY_2026-10-21.json'));
 for(const file of Object.keys(ledger.files)){const bytes=fs.readFileSync(file);assert.ok(readPreNavigationFile(file).length);assert.throws(()=>projectPreNavigation(Buffer.concat([bytes,Buffer.from('undeclared')]),file));}
});
