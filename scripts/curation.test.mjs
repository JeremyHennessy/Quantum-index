import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
const s={window:{}};vm.createContext(s);for(const file of ['theories.js','formulas.js','formula-audit.js','profiles.js'])vm.runInContext(fs.readFileSync(file,'utf8'),s);
const {QI_DATA:data,QI_FORMULAS:{formulas},QI_FORMULA_AUDIT:{entries},QI_PROFILES:{profiles}}=s.window;
test('nuclear batch has traceable explicit representatives and every category has a reading profile',()=>{
 const nuclear=data.theories.filter(t=>t.category==='Nuclear quantum theory');assert.equal(nuclear.length,10);
 for(const t of nuclear){const entry=entries.find(e=>e.theoryId===t.id);assert.equal(entry.classification,'formula-bearing',t.id);for(const id of entry.formulaIds){const f=formulas.find(f=>f.id===id);assert.equal(f.metadataReview,'explicit');assert.ok(f.sourceLocations.length);}}
 for(const category of new Set(data.theories.map(t=>t.category)))assert.ok(data.theories.some(t=>t.category===category&&profiles[t.id]),category);
});
test('formula candidate dispositions reference shipped IDs and preserve all historical candidates',()=>{
 const ledger=JSON.parse(fs.readFileSync('research/formula-candidates.json','utf8')).candidates;
 const history=fs.readFileSync('research/FORMULA_CANDIDATES_HISTORY.md','utf8').split('## Integrated')[0].split('\n').filter(l=>l.startsWith('- ')).map(l=>l.slice(2));
 assert.deepEqual(ledger.map(r=>r.candidate),history);
 for(const row of ledger){assert.ok(['open','partial','represented'].includes(row.status));for(const id of row.formulaIds)assert.ok(formulas.some(f=>f.id===id),id);if(row.status==='represented')assert.ok(row.formulaIds.length);}
});
