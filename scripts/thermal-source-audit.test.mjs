import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {loadRuntime} from './category-trust-census.mjs';
import {projectPreThermal,readPreThermalFile} from './thermal-baseline.mjs';
const audit=JSON.parse(fs.readFileSync('research/THERMAL_SOURCE_AUDIT_2026-10-25.json'));
const ledger=JSON.parse(fs.readFileSync('research/THERMAL_INTEGRITY_2026-10-25.json'));
const files=['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'];
const before={window:{}};vm.createContext(before);
for(const file of files)vm.runInContext(readPreThermalFile(file,'utf8'),before);
const old=before.window,current=loadRuntime(),plain=value=>JSON.parse(JSON.stringify(value));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const near=(a,b,tolerance=1e-12)=>assert.ok(Math.abs(a-b)<tolerance,`${a} != ${b}`);
const gibbs=(energies,beta)=>{const weights=energies.map(energy=>Math.exp(-beta*energy)),z=weights.reduce((a,b)=>a+b,0);return {z,p:weights.map(weight=>weight/z)};};
const entropy=p=>-p.reduce((total,x)=>total+(x>0?x*Math.log(x):0),0);
const relativeEntropy=(p,q)=>p.reduce((total,x,i)=>total+(x>0?x*Math.log(x/q[i]):0),0);

test('thermal audit changes only three declared cards and two registered sources',()=>{
  assert.deepEqual(audit.patches.map(p=>p.id),['gibbs-state','jarzynski','landauer']);
  assert.equal(audit.sources.length,2);
  for(const record of audit.before)assert.deepEqual(plain(old.QI_FORMULAS.formulas.find(f=>f.id===record.id)),record);
  const expected=old.QI_FORMULAS.formulas.map(formula=>({...formula,...(audit.patches.find(p=>p.id===formula.id)||{})}));
  assert.deepEqual(plain(current.QI_FORMULAS.formulas),plain(expected));
  const addedIds=new Set(audit.sources.map(source=>source.id));
  assert.deepEqual(plain(current.QI_DATA.sources.filter(source=>!addedIds.has(source.id))),plain(old.QI_DATA.sources));
  for(const source of audit.sources)assert.deepEqual(plain(current.QI_DATA.sources.filter(item=>item.id===source.id)),[source]);
  for(const key of Object.keys(old.QI_DATA))if(key!=='sources')assert.deepEqual(plain(current.QI_DATA[key]),plain(old.QI_DATA[key]),key);
  for(const key of Object.keys(old))if(!['QI_DATA','QI_FORMULAS'].includes(key))assert.deepEqual(plain(current[key]),plain(old[key]),key);
  for(const key of Object.keys(old.QI_FORMULAS))if(key!=='formulas')assert.deepEqual(plain(current.QI_FORMULAS[key]),plain(old.QI_FORMULAS[key]),key);
  assert.equal(current.QI_FORMULAS.formulas.length,457);
  assert.equal(current.QI_DATA.theories.length,483);
  assert.equal(current.QI_DATA.sources.length,603);
  assert.equal(current.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='explicit').length,268);
  assert.equal(current.QI_FORMULAS.formulas.filter(f=>f.metadataReview==='baseline-audit-v1').length,189);
  assert.equal(current.QI_FORMULA_AUDIT.entries.filter(e=>e.classification==='formula-bearing-gap').length,114);
});

test('thermal metadata retains all equations, associations and original bibliography with explicit conventions',()=>{
  const allowed=new Set(['id','formulaType','assumptions','variables','regime','units','sourceIds','sourceLocations','metadataReview','reviewedAt','curationBatch','theoryRelationship']);
  for(const patch of audit.patches){
    for(const key of Object.keys(patch))assert.ok(allowed.has(key),key);
    const original=audit.before.find(f=>f.id===patch.id),record=current.QI_FORMULAS.formulas.find(f=>f.id===patch.id);
    for(const key of ['latex','plain','name','description','category','theoryIds','tags'])assert.deepEqual(plain(record[key]),original[key],patch.id+': '+key);
    for(const id of original.sourceIds)assert.ok(record.sourceIds.includes(id));
    assert.equal(record.metadataReview,'explicit');assert.equal(record.reviewedAt,'2026-10-25');
    assert.ok(record.assumptions.length>0&&record.variables.length>0&&record.sourceLocations.length>0);
    for(const location of record.sourceLocations){assert.ok(record.sourceIds.includes(location.sourceId));assert.ok(current.QI_DATA.sources.some(s=>s.id===location.sourceId));assert.match(location.url,/^https:\/\//);assert.ok(location.locator.length>15);}
  }
  const get=id=>JSON.stringify(current.QI_FORMULAS.formulas.find(f=>f.id===id));
  assert.match(get('gibbs-state'),/partition/i);
  assert.match(get('jarzynski'),/unitary/i);assert.match(get('jarzynski'),/projective/i);assert.match(get('jarzynski'),/work done on/i);
  assert.equal(current.QI_FORMULAS.formulas.find(f=>f.id==='landauer').formulaType,'canonical');
  assert.match(get('landauer'),/inequality/i);assert.match(get('landauer'),/unbiased/i);assert.match(get('landauer'),/reservoir/i);assert.match(get('landauer'),/finite/i);
});

test('thermal projection retains exact accepted bytes and rejects every undeclared changed-file mutation',()=>{
  assert.equal(ledger.baselineCommit,'ea3bcdb95d39cace2dee6afc264f7cd5523a88b6');
  for(const [file,entry]of Object.entries(ledger.files)){
    assert.equal(hash(readPreThermalFile(file)),entry.beforeSha256,file);
    assert.equal(readPreThermalFile(file,'utf8'),entry.beforeText,file);
    assert.throws(()=>projectPreThermal(Buffer.concat([fs.readFileSync(file),Buffer.from('undeclared')]),file));
  }
  for(const [file,expected]of Object.entries(ledger.unchangedFiles))assert.equal(hash(fs.readFileSync(file)),expected,file);
});

test('historical assertions are retained through exact declared projection substitutions',()=>{
  let expected="import {projectPreThermal} from './thermal-baseline.mjs';\n"+ledger.files['scripts/combined-baseline.mjs'].beforeText;
  expected=expected.replace('export function projectPreCiEnvironment(bytes,relative){','export function projectPreCiEnvironment(bytes,relative){bytes=projectPreThermal(bytes,relative);');
  assert.equal(fs.readFileSync('scripts/combined-baseline.mjs','utf8'),expected);
  expected="import {readPreThermalFile} from './thermal-baseline.mjs';\n"+ledger.files['scripts/combined-source-audit.test.mjs'].beforeText;
  expected=expected.replace('const current=loadRuntime(), sandbox={window:{}};',"const current=(()=>{const s={window:{}};vm.createContext(s);for(const f of ['theories.js','developments.js','evidence.js','formulas.js','formula-audit.js','profiles.js','questions.js','problems.js','passports.js'])vm.runInContext(readPreThermalFile(f,'utf8'),s);return s.window;})(), sandbox={window:{}};");
  assert.equal(fs.readFileSync('scripts/combined-source-audit.test.mjs','utf8'),expected);
  expected="import {projectPreThermal,readPreThermalFile} from './thermal-baseline.mjs';\n"+ledger.files['scripts/ci-environment.test.mjs'].beforeText;
  expected=expected.replace('assert.equal(hash(current),e.afterSha256);','assert.equal(hash(projectPreThermal(current,file)),e.afterSha256);')
    .replace("assert.equal(fs.readFileSync('scripts/combined-baseline.mjs','utf8'),expected);","assert.equal(readPreThermalFile('scripts/combined-baseline.mjs','utf8'),expected);")
    .replace("assert.equal(fs.readFileSync('scripts/combined-source-audit.test.mjs','utf8'),expected);","assert.equal(readPreThermalFile('scripts/combined-source-audit.test.mjs','utf8'),expected);");
  assert.equal(fs.readFileSync('scripts/ci-environment.test.mjs','utf8'),expected);
});

test('finite Gibbs states normalize, have thermal population ratios, and ignore a common energy origin',()=>{
  for(const energies of [[0,1],[0,0,2],[-2,1,4]])for(const beta of [0.2,1,3]){
    const {p,z}=gibbs(energies,beta),shifted=gibbs(energies.map(e=>e+2),beta);
    assert.ok(z>0);near(p.reduce((a,b)=>a+b),1);
    for(let i=0;i<p.length;i++){assert.ok(p[i]>0);near(p[i],shifted.p[i]);near(p[i]/p[0],Math.exp(-beta*(energies[i]-energies[0])));}
    near(shifted.z/z,Math.exp(-2*beta));
  }
});

test('two-projective-measurement Jarzynski average equals the endpoint partition-function ratio without final equilibration',()=>{
  for(const beta of [0.2,0.7,2])for(const angle of [0,0.2,0.9,Math.PI/2]){
    const ei=[0,1],ef=[-0.2,1.7],initial=gibbs(ei,beta),final=gibbs(ef,beta);
    const c=Math.cos(angle)**2,s=Math.sin(angle)**2,transition=[[c,s],[s,c]];
    let normalization=0,expWork=0,meanWork=0;const populations=[0,0];
    for(let i=0;i<2;i++)for(let j=0;j<2;j++){
      const probability=initial.p[i]*transition[j][i],work=ef[j]-ei[i];
      normalization+=probability;expWork+=probability*Math.exp(-beta*work);meanWork+=probability*work;populations[j]+=probability;
    }
    near(normalization,1);near(expWork,final.z/initial.z);
    const deltaF=-Math.log(final.z/initial.z)/beta;
    assert.ok(meanWork>=deltaF-1e-12);
    if(angle===0){assert.ok(Math.abs(populations[0]-final.p[0])>1e-3);assert.ok(Math.abs(Math.exp(-beta*meanWork)-expWork)>1e-3);}
  }
});

test('the same TPM formula does not silently hold for an arbitrary nonthermal initial ensemble',()=>{
  const beta=1,ei=[0,1],ef=[0,2],nonthermal=[1,0];
  const expWork=nonthermal.reduce((sum,p,i)=>sum+p*Math.exp(-beta*(ef[i]-ei[i])),0);
  assert.ok(Math.abs(expWork-gibbs(ef,beta).z/gibbs(ei,beta).z)>0.1);
});

test('a noncommuting energy difference is not a substitute for the TPM work distribution',()=>{
  // H_i=sigma_z, H_f=sigma_x, U=I, beta=1. Endpoint spectra coincide.
  const expected=gibbs([-1,1],1).z/gibbs([-1,1],1).z;
  near(expected,1);
  // A=H_f-H_i satisfies A^2=2I, and Tr(rho_i A)=tanh(1).
  const workOperatorAverage=Math.cosh(Math.sqrt(2))-Math.sinh(Math.sqrt(2))*Math.tanh(1)/Math.sqrt(2);
  assert.ok(Math.abs(workOperatorAverage-expected)>0.1);
});

test('finite-reservoir erasure fixture satisfies the sharpened heat bound rather than equality',()=>{
  for(const beta of [0.5,1,2])for(const energy of [0.5,1,3]){
    const initialSystem=[0.5,0.5],initialReservoir=gibbs([0,energy],beta).p;
    // A full SWAP is unitary; the output is still a product, with marginals exchanged.
    const finalSystem=initialReservoir,finalReservoir=initialSystem;
    const entropyDecrease=entropy(initialSystem)-entropy(finalSystem),heat=energy*(finalReservoir[1]-initialReservoir[1]);
    near(beta*heat,entropyDecrease+relativeEntropy(finalReservoir,initialReservoir));
    assert.ok(beta*heat>entropyDecrease);assert.ok(entropyDecrease>0&&entropyDecrease<Math.log(2));
    assert.ok(finalSystem.every(p=>p>0)); // No exact pure reset in this bounded, finite-T fixture.
  }
});

test('one-bit coefficient requires the unbiased reset and product-state assumptions',()=>{
  near(entropy([0.5,0.5])-entropy([1,0]),Math.log(2));
  assert.ok(entropy([0.9,0.1])<Math.log(2));near(entropy([1,0]),0);
  // Initially correlated S=R with thermal marginal R; controlled-NOT (R controls S)
  // resets S to zero while leaving R and its energy unchanged. Product-state premise fails.
  const thermal=gibbs([0,1],1).p,joint=[thermal[0],0,0,thermal[1]];
  const after=[joint[0],joint[3],joint[2],joint[1]]; // basis (S,R) = 00,01,10,11.
  const s=[after[0]+after[1],after[2]+after[3]],r=[after[0]+after[2],after[1]+after[3]];
  near(s[0],1);near(s[1],0);near(r[0],thermal[0]);near(r[1],thermal[1]);
  const heat=r[1]-thermal[1],entropyDecrease=entropy(thermal)-entropy(s);
  near(heat,0);assert.ok(entropyDecrease>0);
});
