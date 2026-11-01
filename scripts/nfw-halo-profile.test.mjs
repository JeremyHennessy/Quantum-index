import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {nfwIntegrationManifest,nfwIntegrationPaths,loadPreNfwRuntime,loadPreAxionRuntime,projectPreNfw,projectPreAxion} from './bao-integration-baseline.mjs';

const sandbox={window:{}};
vm.createContext(sandbox);
for(const file of ['theories.js','developments.js','evidence.js','formulas.js']) {
  vm.runInContext(fs.readFileSync(file,'utf8'),sandbox,{filename:file});
}
const {QI_DATA,QI_FORMULAS}=sandbox.window;
const formulaId='nfw-cold-dark-matter-halo-density-profile';
const sourceId='navarro-frenk-white-1997';
const plain=value=>JSON.parse(JSON.stringify(value));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
function assertSourceLocation(formula){
  assert.ok(Array.isArray(formula.sourceLocations)&&formula.sourceLocations.length>0,'NFW source locator required');
  for(const location of formula.sourceLocations){
    assert.ok(formula.sourceIds.includes(location.sourceId),'NFW locator must reference the formula source');
    assert.ok(location.locator?.trim(),'NFW equation locator required');
    assert.match(location.url,/^https:\/\//,'NFW source URL must use HTTPS');
  }
}

test('NFW halo profile is a source-located simulation fit with bounded evidence claims',()=>{
  const records=QI_FORMULAS.formulas.filter(formula=>formula.id===formulaId);
  assert.equal(records.length,1);
  const formula=records[0];
  const source=QI_DATA.sources.find(item=>item.id===sourceId);
  assert.ok(source);
  assert.equal(source.title,'A Universal Density Profile from Hierarchical Clustering');
  assert.equal(source.authors,'Julio F. Navarro, Carlos S. Frenk, Simon D. M. White');
  assert.equal(source.year,1997);
  assert.equal(source.type,'primary source');
  assert.equal(source.url,'https://arxiv.org/abs/astro-ph/9611107v4');
  assert.equal(formula.name,'NFW spherical cold-dark-matter halo density profile');
  assert.equal(formula.latex,'\\rho(r)=\\rho_{\\rm crit}\\,\\frac{\\delta_{\\rm c}}{(r/r_{\\rm s})(1+r/r_{\\rm s})^2}');
  assert.equal(formula.formulaType,'approximation');
  assert.deepEqual(plain(formula.theoryIds),['lambda-cdm']);
  assert.deepEqual(plain(formula.sourceIds),[sourceId]);
  assert.equal(formula.metadataReview,'explicit');
  assert.equal(formula.reviewedAt,'2026-11-01');
  assert.equal(formula.curationBatch,'nfw-halo-model-2026-11-01');
  assert.match(formula.theoryRelationship,/multiple cosmological backgrounds/);
  assert.match(formula.theoryRelationship,/no explicit cosmological-constant term/);
  assert.match(formula.theoryRelationship,/does not claim the fit is unique to LambdaCDM/);
  assert.ok(formula.assumptions.some(text=>/spherically averaged equilibrium halos in collisionless hierarchical-clustering simulations/.test(text)));
  assert.ok(formula.assumptions.some(text=>/about two decades in radius/.test(text)));
  assert.ok(formula.assumptions.some(text=>/does not determine them or establish that every observed halo follows this profile/.test(text)));
  assert.ok(formula.assumptions.some(text=>/not direct observational evidence for a dark-matter particle/.test(text)));
  assert.equal(formula.sourceLocations.length,1);
  assert.equal(formula.sourceLocations[0].sourceId,sourceId);
  assert.equal(formula.sourceLocations[0].url,'https://arxiv.org/pdf/astro-ph/9611107v4#page=2');
  assert.match(formula.sourceLocations[0].locator,/Eq\. \(1\)/);
  assert.match(formula.sourceLocations[0].locator,/approximately two-decade fit range/);
});

test('NFW formula meets the catalog formula schema and rejects missing provenance',()=>{
  const formula=QI_FORMULAS.formulas.find(item=>item.id===formulaId);
  const required=['id','name','category','latex','plain','description','formulaType','regime','units','theoryRelationship','metadataReview'];
  for(const key of required)assert.ok(formula[key],`missing ${key}`);
  assert.ok(formula.assumptions.length>=3);
  assert.ok(formula.variables.length>=4);
  assert.doesNotThrow(()=>assertSourceLocation(formula));
  assert.throws(()=>assertSourceLocation({...plain(formula),sourceLocations:[]}),/NFW source locator required/);
  assert.throws(()=>assertSourceLocation({...plain(formula),sourceLocations:[{sourceId:'other',locator:'Eq. (1)',url:'https://example.org'}]}),/must reference the formula source/);
});

test('NFW catalog integration adds only the declared approximation and bibliography source',()=>{
  const baseline=loadPreNfwRuntime(),current=loadPreAxionRuntime();
  const prior=plain(baseline.QI_FORMULAS.formulas),added=current.QI_FORMULAS.formulas.filter(item=>item.id===formulaId);
  assert.equal(added.length,1);
  assert.equal(current.QI_FORMULAS.formulas.length,prior.length+1);
  assert.deepEqual(plain(current.QI_FORMULAS.formulas.filter(item=>item.id!==formulaId)),prior);
  const expected=plain(baseline);
  const currentData=plain(current.QI_DATA),sourceIndex=currentData.sources.findIndex(source=>source.id===sourceId);
  assert.notEqual(sourceIndex,-1,'NFW primary source required');
  const sourceRecord=currentData.sources[sourceIndex];
  currentData.sources.splice(sourceIndex,1);
  assert.deepEqual(currentData.sources,expected.QI_DATA.sources,'only the NFW source may be added to the entire catalog data object');
  expected.QI_DATA.sources.splice(sourceIndex,0,sourceRecord);
  expected.QI_FORMULAS.formulas.push(plain(added[0]));
  const lambdaAudit=expected.QI_FORMULA_AUDIT.entries.find(entry=>entry.theoryId==='lambda-cdm');
  assert.ok(lambdaAudit,'derived Lambda-CDM formula audit entry required');
  lambdaAudit.formulaIds.push(formulaId);
  assert.deepEqual(plain(current),expected,'only the reviewed formula/source and derived audit ID may change across runtime data');
  assert.equal(current.QI_FORMULAS.formulas.length,467);
});

test('NFW history projection accepts only exact baseline or candidate bytes',()=>{
  assert.equal(nfwIntegrationManifest.baseMain,'b4693ddf09738106df60a36ab97579c5cc702da0');
  assert.deepEqual(nfwIntegrationPaths,[...Object.keys(nfwIntegrationManifest.files)].sort());
  for(const file of nfwIntegrationPaths){
    const raw=fs.readFileSync(file),entry=nfwIntegrationManifest.files[file];
  const nfwCandidate=projectPreAxion(raw,file);
  assert.equal(hash(nfwCandidate),entry.afterSha256,file+': exact NFW candidate');
  assert.deepEqual(nfwCandidate,Buffer.from(entry.afterBase64,'base64'),file+': NFW candidate bytes');
    const projected=projectPreNfw(raw,file);
    assert.equal(hash(projected),entry.beforeSha256,file+': exact merged-main snapshot');
    assert.deepEqual(projected,Buffer.from(entry.beforeBase64,'base64'),file+': before bytes');
    assert.deepEqual(projectPreNfw(projected,file),projected,file+': exact before bytes remain accepted');
    assert.throws(()=>projectPreNfw(Buffer.concat([raw,Buffer.from([0])]),file),/undeclared BAO mutation/,file+': rejects appended mutation');
    const altered=Buffer.from(raw);altered[Math.floor(altered.length/2)]^=1;
    assert.throws(()=>projectPreNfw(altered,file),/undeclared BAO mutation/,file+': rejects interior-byte mutation');
  }
});
