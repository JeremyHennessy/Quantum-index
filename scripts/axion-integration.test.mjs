import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {loadPreAxionRuntime,axionIntegrationManifest,axionIntegrationPaths,axionProductPathList,axionIntegrationTestPathList,projectPreAxion} from './bao-integration-baseline.mjs';
import {loadRuntime} from './category-trust-census.mjs';

const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const plain=value=>JSON.parse(JSON.stringify(value));
const formulaIds=['qcd-axion-topological-susceptibility-mass-2016','qcd-axion-homogeneous-misalignment-eom-2016'];
const sourceIds=['dm2-dicortona-qcd-axion-2016','dm2-pdg-rpp-axions-2026'];
const sourceLocations={
 'dm2-dicortona-qcd-axion-2016':'https://arxiv.org/abs/1511.02867v2',
 'dm2-pdg-rpp-axions-2026':'https://pdg.lbl.gov/2026/reviews/rpp2026-rev-axions.pdf'
};
const sourceMetadata={
 'dm2-dicortona-qcd-axion-2016':{title:'The QCD axion, precisely',authors:'Giovanni Grilli di Cortona, Edward Hardy, Javier Pardo Vega, Giovanni Villadoro',year:2016,type:'primary source'},
 'dm2-pdg-rpp-axions-2026':{title:'Axions and Other Similar Particles',authors:'C. A. J. O’Hare, G. Rybka, B. Safdi, L. Winslow',year:2026,type:'authoritative review'}
};

test('axion integration manifest pins the exact merged-main baseline and declared path scope',()=>{
 assert.equal(axionIntegrationManifest.baseMain,'9e8ae083d0a9906bb9316b1b081cb50df899fecf');
 assert.deepEqual(axionIntegrationPaths,[...axionProductPathList,...axionIntegrationTestPathList].sort());
 assert.deepEqual(axionProductPathList,[
  'README.md','docs/CONTINUATION.md','docs/COVERAGE.md','docs/FORMULA_AUDIT.md',
  'docs/FORMULA_COVERAGE.md','docs/RESEARCH_PROFILES.md','docs/coverage.json',
  'docs/responsive-check.html','formulas.js','index.html','theories.js'
 ]);
 assert.deepEqual(axionIntegrationTestPathList,[
  'scripts/bao-integration-scope.test.mjs','scripts/nfw-halo-profile.test.mjs',
  'scripts/dm2a-qcd-axion-source.test.mjs','scripts/axion-integration.test.mjs',
  'tests/browser/filter-controls.spec.mjs','tests/browser/axion-misalignment.spec.mjs',
  'tests/browser/physics-explorer.spec.mjs','tests/browser/repository-links.spec.mjs'
 ]);
 assert.ok(!axionIntegrationPaths.includes('research/DM2A_QCD_AXION_FORMULA_SOURCE_PROPOSAL_2026-10-30.json'));
 for(const file of axionIntegrationPaths){
  const after=fs.readFileSync(file),entry=axionIntegrationManifest.files[file];
  assert.ok(entry,file);
  assert.equal(hash(after),entry.afterSha256,file+': candidate hash');
  assert.deepEqual(projectPreAxion(after,file),Buffer.from(entry.beforeBase64,'base64'),file+': exact baseline bytes');
  assert.equal(hash(projectPreAxion(after,file)),entry.beforeSha256,file+': baseline hash');
  assert.deepEqual(projectPreAxion(Buffer.from(entry.beforeBase64,'base64'),file),Buffer.from(entry.beforeBase64,'base64'),file+': baseline remains accepted');
 }
});

test('axion projection rejects byte mutations in every declared path',()=>{
 for(const file of axionIntegrationPaths){
  const raw=fs.readFileSync(file);
  assert.throws(()=>projectPreAxion(Buffer.concat([raw,Buffer.from([0])]),file),/undeclared BAO mutation/,file+': appended byte');
  const changed=Buffer.from(raw);changed[Math.floor(changed.length/2)]^=1;
  assert.throws(()=>projectPreAxion(changed,file),/undeclared BAO mutation/,file+': interior byte');
 }
});

test('live runtime adds exactly the two reviewed axion formulas and two cited sources',()=>{
 const baseline=loadPreAxionRuntime(),current=loadRuntime();
 const oldFormulas=plain(baseline.QI_FORMULAS.formulas),added=current.QI_FORMULAS.formulas.filter(item=>formulaIds.includes(item.id));
 assert.equal(added.length,2);
 for(const id of formulaIds)assert.equal(current.QI_FORMULAS.formulas.filter(item=>item.id===id).length,1,id+': exactly one runtime record');
 assert.equal(current.QI_FORMULAS.formulas.length,oldFormulas.length+2);
 assert.deepEqual(plain(current.QI_FORMULAS.formulas.filter(item=>!formulaIds.includes(item.id))),oldFormulas);
 const byId=new Map(added.map(item=>[item.id,item]));
 const mass=byId.get(formulaIds[0]),motion=byId.get(formulaIds[1]);
 assert.equal(mass.latex,'m_a^2=\\frac{\\chi_{\\rm top}}{f_a^2},\\qquad m_a=5.691(51)\\,\\mathrm{meV}\\left(\\frac{10^9\\,\\mathrm{GeV}}{f_a}\\right)\\;(T=0)');
 assert.equal(mass.formulaType,'canonical');
 assert.deepEqual(plain(mass.theoryIds),['axion']);
 assert.deepEqual(plain(mass.sourceIds),sourceIds);
 assert.equal(mass.sourceLocations.length,2);
 assert.equal(mass.sourceLocations[0].locator,'Version 1511.02867v2, PDF Eq. (18), printed p. 8 (PDF page 9): zero-temperature physical-QCD mass relation; leading order in 1/f_a.');
 assert.equal(mass.sourceLocations[1].locator,'Eq. (89.3), printed p. 2: the 2026 PDG directly displays the NNLO+QED mass estimate 5.691(51) meV × (10^9 GeV/f_a).');
 for(const phrase of ['physical full-QCD topological susceptibility','no additional mass-generating mechanism','not an experimental confidence interval','Generic axion-like particles need not obey'])assert.ok(mass.assumptions.some(text=>text.includes(phrase)),phrase);
 assert.match(mass.description,/not a new measurement/);
 assert.match(mass.theoryRelationship,/not a general mass-coupling identity/);

 assert.equal(motion.latex,'\\ddot a+3H\\dot a+m_a^2(T)f_a\\sin\\left(\\frac{a}{f_a}\\right)=0');
 assert.equal(motion.formulaType,'approximation');
 assert.deepEqual(plain(motion.theoryIds),['axion']);
 assert.deepEqual(plain(motion.sourceIds),['dm2-dicortona-qcd-axion-2016']);
 assert.equal(motion.sourceLocations[0].locator,'Version 1511.02867v2, PDF Eq. (60), printed p. 23 (PDF page 24): homogeneous zero-mode equation under the stated pre-inflationary and dilute-instanton-gas cosine-potential assumptions.');
 assert.match(motion.units,/m_a and H have energy \(inverse-time\) units/);
 for(const phrase of ['cosmic proper time','H=Rdot/R','neither the exact low-temperature QCD potential nor a small-angle linearization','does not by itself determine relic abundance'])assert.ok(motion.assumptions.some(text=>text.includes(phrase)),phrase);

 const expected=plain(baseline),actual=plain(current);
 assert.equal(current.QI_DATA.sources.length,baseline.QI_DATA.sources.length+2);
 for(const id of sourceIds){
  assert.equal(actual.QI_DATA.sources.filter(source=>source.id===id).length,1,id+': exactly one bibliography record');
  const index=actual.QI_DATA.sources.findIndex(source=>source.id===id);
  assert.notEqual(index,-1,'required axion source '+id);
  assert.deepEqual(Object.fromEntries(['title','authors','year','type'].map(key=>[key,actual.QI_DATA.sources[index][key]])),sourceMetadata[id]);
  assert.equal(actual.QI_DATA.sources[index].url,sourceLocations[id]);
 }
 assert.deepEqual(actual.QI_DATA.sources.filter(source=>!sourceIds.includes(source.id)),expected.QI_DATA.sources,'only the two reviewed bibliography records may be added');
 expected.QI_DATA.sources=plain(current.QI_DATA.sources);
 expected.QI_FORMULAS.formulas.push(...plain(added));
 const axionAudit=expected.QI_FORMULA_AUDIT.entries.find(entry=>entry.theoryId==='axion');
 assert.ok(axionAudit);
 axionAudit.formulaIds.push(...formulaIds);
 axionAudit.classification='formula-bearing';axionAudit.coverageStatus='covered';
 axionAudit.gapReason=null;axionAudit.priority='not-applicable';axionAudit.auditBasis='source-linked formula present';
 assert.deepEqual(actual,expected,'runtime delta is limited to two formulas, two sources and derived axion audit IDs');
 const coverage=JSON.parse(fs.readFileSync('docs/coverage.json','utf8'));
 assert.equal(coverage.formulas,469);assert.equal(coverage.explicitFormulaMetadata,283);assert.equal(coverage.sources,615);
});
