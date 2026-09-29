import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

function load(){
  const sandbox={window:{}};
  vm.createContext(sandbox);
  for(const file of ["theories.js","formulas.js","developments.js"]) vm.runInContext(fs.readFileSync(file,"utf8"),sandbox);
  return sandbox.window;
}

test("DevelopmentEvents preserve origin years and carry source evidence",()=>{
  const w=load();
  const theoryIds=new Set(w.QI_DATA.theories.map(t=>t.id));
  const formulaIds=new Set(w.QI_FORMULAS.formulas.map(f=>f.id));
  const sourceIds=new Set(w.QI_DATA.sources.map(s=>s.id));
  const events=w.QI_DEVELOPMENTS.events;
  assert.equal(events.length,13);
  assert.equal(Math.max(...w.QI_DATA.theories.map(t=>t.year)),2023);
  assert.equal(Math.max(...events.map(e=>e.year)),2026);
  assert.deepEqual(
    Object.fromEntries([2024,2025,2026].map(year=>[year,events.filter(e=>e.year===year).length])),
    {2024:4,2025:4,2026:5}
  );
  for(const event of events){
    assert.match(event.date,/^\d{4}-\d{2}-\d{2}$/);
    assert.equal(Number(event.date.slice(0,4)),event.year);
    assert.ok(event.relatedTheoryIds.length);
    assert.ok(event.sourceIds.length);
    assert.ok(event.sourceLocations.length);
    for(const id of event.relatedTheoryIds)assert.ok(theoryIds.has(id),id);
    for(const id of event.relatedFormulaIds)assert.ok(formulaIds.has(id),id);
    for(const id of event.sourceIds)assert.ok(sourceIds.has(id),id);
  }
});

test("recent events retain scientifically bounded wording",()=>{
  const {QI_DEVELOPMENTS}=load();
  const lz=QI_DEVELOPMENTS.events.find(e=>e.id==="lz-extended-window-2026");
  assert.match(lz.summary,/2\.6σ globally/);
  assert.match(lz.significance,/not a dark-matter discovery/i);
  const desi=QI_DEVELOPMENTS.events.find(e=>e.id==="desi-lya-fullshape-2026");
  assert.match(desi.summary,/shifted toward ΛCDM/);
  assert.match(desi.summary,/model-dependent preference for evolving dark energy/i);
  const scars=QI_DEVELOPMENTS.events.find(e=>e.id==="many-body-scars-2025");
  assert.ok(scars.relatedFormulaIds.includes("eth-ansatz"));

  const aziz=QI_DEVELOPMENTS.events.find(e=>e.id==="classical-gravity-entanglement-2025");
  assert.equal(aziz.eventType,"controversy/debate");
  assert.match(aziz.summary,/subsequent analyses dispute/i);

  const dp=QI_DEVELOPMENTS.events.find(e=>e.id==="dp-classical-gravity-gie-2025");
  assert.match(dp.significance,/model-specific classical-gravity counterexample/i);

  const noise=QI_DEVELOPMENTS.events.find(e=>e.id==="minimal-noise-nonquantized-gravity-2026");
  assert.match(noise.significance,/assumption-bounded/i);
});
