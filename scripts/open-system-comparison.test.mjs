import {projectPreMapInteractions} from './map-interactions-baseline.mjs';
import {readPreStateChannelFile} from './state-channel-20261021-baseline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {loadRuntime} from './category-trust-census.mjs';
import {readPreOpenSystemFile,projectPreOpenSystem} from './open-system-20261021-baseline.mjs';
const accepted={window:{}};vm.createContext(accepted);for(const f of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'])vm.runInContext(readPreStateChannelFile(f,'utf8'),accepted);
const w=accepted.window,before={window:{}};vm.createContext(before);
for(const f of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'])vm.runInContext(readPreOpenSystemFile(f,'utf8'),before);
const old=before.window,plain=x=>JSON.parse(JSON.stringify(x));
test('open-system comparison preserves scientific records, workspace and all earlier profiles and paths',()=>{
 for(const key of ['QI_FORMULAS','QI_FORMULA_AUDIT','QI_PASSPORTS','QI_EVIDENCE','QI_PROBLEMS','QI_QUESTIONS','QI_DEVELOPMENTS'])assert.deepEqual(plain(w[key]),plain(old[key]),key);
 for(const key of Object.keys(old.QI_DATA))if(!['sources','theories'].includes(key))assert.deepEqual(plain(w.QI_DATA[key]),plain(old.QI_DATA[key]),key);
 assert.deepEqual(plain(w.QI_DATA.sources.filter(s=>s.id!=='hartmann-strunz-accuracy-2019')),plain(old.QI_DATA.sources));assert.equal(w.QI_DATA.sources.length,old.QI_DATA.sources.length+1);
 for(const t of old.QI_DATA.theories){const now=w.QI_DATA.theories.find(n=>n.id===t.id);if(t.id!=='bloch-redfield')assert.deepEqual(plain(now),plain(t));else {for(const key of Object.keys(t))if(!['summary','core','sources'].includes(key))assert.deepEqual(plain(now[key]),plain(t[key]));assert.equal(now.summary,'Bloch–Redfield theory derives weak-coupling reduced dynamics from system–bath correlation functions while retaining nonsecular frequency couplings. Full secularization is one route to GKSL form, not a universal requirement for complete positivity.');assert.equal(now.core,'A perturbative relaxation tensor governs density-matrix evolution and can retain coherences and frequency couplings that are discarded by the full secular approximation.');assert.deepEqual(plain(now.sources),[...t.sources,'davidovic-redfield-2020']);}}
 for(const[id,p]of Object.entries(old.QI_PROFILES.profiles))assert.deepEqual(plain(w.QI_PROFILES.profiles[id]),plain(p));
 assert.deepEqual(plain(w.QI_PROFILES.learningPaths.slice(0,-1)),plain(old.QI_PROFILES.learningPaths));
 assert.deepEqual(plain(w.QI_PROFILES.comparisons.slice(0,-1)),plain(old.QI_PROFILES.comparisons));
 assert.equal(Object.keys(w.QI_PROFILES.profiles).length,62);assert.equal(w.QI_DATA.theories.length,483);assert.equal(w.QI_FORMULAS.formulas.length,457);
});
test('four-method route supplies all comparison rows and exact citations with bounded claims',()=>{
 const p=w.QI_PROFILES.learningPaths.find(p=>p.id==='open-system-methods');
 assert.deepEqual(plain(p.comparison),['gksl','nakajima-zwanzig','bloch-redfield','heom']);
 assert.deepEqual(plain(p.steps.map(s=>s.theoryId)),plain(p.comparison));
 for(const id of p.comparison)for(const key of ['problem','scope','assumptions','predictions','evidence','limitations','questions'])assert.ok(w.QI_PROFILES.profiles[id][key].text);
 const ids=new Set(w.QI_DATA.sources.map(s=>s.id));
 for(const c of p.primer.paragraphs)for(const id of c.sourceIds){assert.ok(ids.has(id));assert.ok(p.primer.sourceLocations.some(l=>l.sourceId===id&&l.locator&&l.url.startsWith('https://')));}
 const text=p.primer.paragraphs.map(c=>c.text).join(' ');
 for(const re of [/not an error estimate/,/not a universal requirement/,/second-order memory kernel/i,/asymptotic coefficients/,/not a universal ranking/,/Independently converge/,/integration accuracy/,/editorial/])assert.match(text,re);
 assert.equal(p.relatedEvidenceIds,undefined);assert.equal(p.primer.equation,undefined);
});
test('accepted release projection fails closed for undeclared bytes',()=>{
 const ledger=JSON.parse(fs.readFileSync('research/OPEN_SYSTEM_INTEGRITY_2026-10-21.json'));
 for(const file of Object.keys(ledger.files)){assert.ok(readPreOpenSystemFile(file).length);assert.throws(()=>projectPreOpenSystem(Buffer.concat([fs.readFileSync(file),Buffer.from('undeclared')]),file));}
});

test('browser CI budget change preserves the full workflow and rejects unrelated mutations',()=>{
 const file='.github/workflows/validate.yml',raw=fs.readFileSync(file),current=projectPreMapInteractions(raw,file),prior=readPreOpenSystemFile(file);
 assert.ok(current.includes('    timeout-minutes: 35\n'));assert.ok(prior.includes('    timeout-minutes: 25\n'));
 assert.equal(current.toString().replace('    timeout-minutes: 35\n','    timeout-minutes: 25\n'),prior.toString());
 assert.throws(()=>projectPreOpenSystem(Buffer.concat([raw,Buffer.from('undeclared')]),file));
 assert.throws(()=>projectPreOpenSystem(Buffer.from(raw.toString().replace('npm run test:browser','echo skipped')),file));
});
