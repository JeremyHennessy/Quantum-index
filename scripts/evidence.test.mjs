import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ['theories.js','developments.js','questions.js','evidence.js','problems.js'])vm.runInContext(fs.readFileSync(file,'utf8'),sandbox);
const evidence=sandbox.window.QI_EVIDENCE.records;
const theories=new Set(sandbox.window.QI_DATA.theories.map(x=>x.id));
const sources=new Set(sandbox.window.QI_DATA.sources.map(x=>x.id));
const problems=new Set(sandbox.window.QI_PROBLEMS.problems.map(x=>x.id));
const evidenceIds=new Set(evidence.map(x=>x.id));

test('Evidence layer has sixteen auditable records with resolved references',()=>{
  assert.equal(evidence.length,16);
  assert.equal(evidenceIds.size,16);
  for(const item of evidence){
    assert.match(item.date,/^\d{4}-\d{2}-\d{2}$/);
    assert.ok(item.result.length>60,item.id);
    assert.ok(item.constrains.length>=1,item.id);
    assert.ok(item.doesNotEstablish.length>=1,item.id);
    assert.match(item.reviewedAt,/^(?:2026-09-(?:28|29)|2026-10-(?:07|08))$/);
    for(const id of item.relatedTheoryIds)assert.ok(theories.has(id),id);
    for(const id of item.relatedProblemIds)assert.ok(problems.has(id),id);
    for(const id of item.sourceIds)assert.ok(sources.has(id),id);
    for(const loc of item.sourceLocations){assert.ok(sources.has(loc.sourceId),loc.sourceId);assert.match(loc.url,/^https?:\/\//);}
  }
});

test('Evidence wording preserves high-risk scientific boundaries',()=>{
  const lz=evidence.find(x=>x.id==='ev-lz-extended-window-2026');
  assert.match(lz.result,/2\.6σ global significance/);
  assert.ok(lz.doesNotEstablish.some(x=>/dark-matter discovery/i.test(x)));
  const dp=evidence.find(x=>x.id==='ev-diosi-penrose-underground-2021');
  assert.match(dp.result,/natural parameter-free version/i);
  assert.ok(dp.doesNotEstablish.some(x=>/all objective-collapse/i.test(x)));
  const desi=evidence.find(x=>x.id==='ev-desi-dr2-2025');
  assert.ok(desi.doesNotEstablish.some(x=>/direct detection.*dark matter/i.test(x)));

  const gravity=evidence.find(x=>x.id==='ev-gravity-entanglement-boundary-2025');
  assert.equal(gravity.evidenceStatus,'active theoretical controversy');
  assert.ok(gravity.doesNotEstablish.some(x=>/gravity is fundamentally classical/i.test(x)));
  assert.ok(gravity.doesNotEstablish.some(x=>/experiments are uninformative/i.test(x)));

  const cq=evidence.find(x=>x.id==='ev-cq-decoherence-diffusion-2023');
  assert.ok(cq.doesNotEstablish.some(x=>/non-Markovian/i.test(x)));

  const noise=evidence.find(x=>x.id==='ev-minimal-noise-nonquantized-gravity-2026');
  assert.ok(noise.doesNotEstablish.some(x=>/every non-quantized gravity model is non-entangling/i.test(x)));

  const indirect=evidence.find(x=>x.id==='ev-indirect-gme-interferometry-2026');
  assert.ok(indirect.doesNotEstablish.some(x=>/direct experimental observation/i.test(x)));

  const geodesic=evidence.find(x=>x.id==='ev-cq-geodesic-deviation-2026');
  assert.ok(geodesic.doesNotEstablish.some(x=>/every classical–quantum gravity theory/i.test(x)));
});

test('Problems reference only shipped Evidence IDs',()=>{
  for(const problem of sandbox.window.QI_PROBLEMS.problems)for(const id of problem.evidenceIds||[])assert.ok(evidenceIds.has(id),problem.id+' -> '+id);
});
