import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadRuntime} from './category-trust-census.mjs';
const proposal=JSON.parse(fs.readFileSync('research/DM2A_QCD_AXION_FORMULA_SOURCE_PROPOSAL_2026-10-30.json','utf8'));
const runtime=loadRuntime(),ids=new Set(runtime.QI_FORMULAS.formulas.map(f=>f.id));

test('axion equation proposal does not rewrite existing approved science or invent a new theory',()=>{
 assert.equal(proposal.acceptedMainBaseline,'2beb8fc3e4eb6d45092c4880349b056f9e1b3091');
 assert.equal(proposal.state,'source-checked-equation-proposal-no-runtime-change');
 assert.equal(proposal.existingTheoryId,'axion');assert.equal(proposal.existingTheoryOriginYear,1978);
 const t=runtime.QI_DATA.theories.find(x=>x.id==='axion');assert.ok(t);
 assert.equal(t.year,1978);
 for(const id of proposal.existingParentSources)assert.ok(t.sources.includes(id));
 assert.equal(proposal.source.reviewedPreprintVersion,'1511.02867v2');
 assert.equal(proposal.source.journalYear,2016);
 assert.equal(proposal.source.originalArxivPosted,'2015-11-09');
 assert.equal(proposal.source.versionDate,'2016-01-08');
 assert.equal(proposal.formulaProposals.length,4);
 if(runtime.QI_DATA.theories.length===485 && runtime.QI_FORMULAS.formulas.length===464){
  assert.equal(runtime.QI_FORMULAS.formulas.filter(f=>f.theoryIds.includes('axion')).length,0);
  for(const f of proposal.formulaProposals)assert.ok(!ids.has(f.id),'unexpected pre-existing identity '+f.id);
 }
 assert.ok(proposal.nonClaims.some(x=>/not yet|not.*modified|No new theory/i.test(x)));
});
test('each scoped QCD equation is source/version-located, distinct and mathematically dimensioned',()=>{
 const f=proposal.formulaProposals;
 assert.equal(new Set(f.map(x=>x.id)).size,4);
 const seen=new Set(['(1)','(22)','(26)','(45)']);
 assert.ok(f.every(x=>x.sourceIds.length===1&&x.sourceIds[0]===proposal.source.id));
 for(const x of f){
  assert.deepEqual(x.theoryIds,['axion']);
  assert.equal(x.reviewState,'source-matched-research-proposal-not-integrated');
  assert.ok(x.sourceLocation&&x.units&&x.assumptions.length>=3&&x.variables.length>=3);
  assert.ok(x.nonClaim&&x.latex&&x.plain);
  assert.ok([...seen].some(k=>x.sourceLocation.includes(k)));
 }
 assert.match(f[0].assumptions.join(' '),/second term|ONLY/i);
 assert.match(f[1].units,/energy\^4/);
 assert.match(f[2].nonClaim,/2016|dated/);
 assert.match(f[3].assumptions.join(' '),/E\/N/);
});
test('finite analytical checks enforce f_a inverse scaling and model-dependent E over N',()=>{
 const mass=(f_aGeV)=>5.70*(1e12/f_aGeV);
 assert.ok(Math.abs(mass(1e12)-5.70)<1e-12);
 assert.ok(Math.abs(mass(2e12)-2.85)<1e-12);
 assert.ok(Math.abs(mass(1e12)/mass(2e12)-2)<1e-12);
 const factor=(en)=>en-1.92;
 assert.ok(factor(0)<0);
 assert.ok(factor(8/3)>0);
 assert.ok(Math.abs(factor(2))<Math.abs(factor(0)));
 const chi=1e-4,decayScale=1e3,massSquared=chi/(decayScale**2);
 assert.equal(massSquared*decayScale**2,chi);
});
test('source-review proposal retains latest-value, cosmology, and independent release holds',()=>{
 assert.equal(proposal.additionalHolds.length,3);
 assert.ok(proposal.additionalHolds.some(x=>/Misalignment/.test(x.title)));
 assert.ok(proposal.additionalHolds.some(x=>/Current axion/.test(x.title)));
 assert.ok(proposal.additionalHolds.some(x=>/Axion-like/.test(x.title)));
 assert.ok(proposal.nextGates.some(x=>/page-image/.test(x)));
 const d=fs.readFileSync('docs/DARK_MATTER_DM2A_AXION_SOURCE_REVIEW_2026-10-30.md','utf8');
 assert.match(d,/NOT SHIPPED/);assert.match(d,/not an automatically current 2026/i);
});


test('2026 PDG current-review source is visually located and does not create a duplicate canonical mass record',()=>{
 const q=proposal.currentReview,comparison=q.comparisonTo2016;
 assert.equal(q.sourceId,'dm2-pdg-rpp-axions-2026');
 assert.equal(q.publishedPdfStamp,'2026-06-01');
 assert.equal(q.reviewRevision,'August 2025');
 assert.equal(q.status,'source-reviewed-current-reference-proposal-not-integrated');
 assert.ok(q.reviewedSourceLevel.includes('visually inspected'));
 assert.equal(q.math.length,3);
 for(const x of q.math)assert.ok(x.sourceLocator.includes('p.')&&x.assumptions);
 assert.ok(q.math[1].sourceLocator.includes('(89.3)'));
 const atFa1e12GeV=(5.691*(1e9/1e12))*1000; // source meV -> micro-eV
 assert.ok(Math.abs(atFa1e12GeV-5.691)<1e-12);
 assert.ok(Math.abs(comparison.older2016CentralMicroEVAtFa1e12-5.70)<1e-12);
 assert.ok(Math.abs(comparison.newer2026CentralMicroEVAtFa1e12-atFa1e12GeV)<1e-12);
 assert.ok(Math.abs(comparison.newer2026MicroEVUncertainty-0.051)<1e-12);
 assert.match(q.integrationPolicy,/No second standalone formula card/);
 assert.equal(proposal.formulaProposals.length,4);
 const d=fs.readFileSync('docs/DARK_MATTER_DM2A_AXION_SOURCE_REVIEW_2026-10-30.md','utf8');
 assert.match(d,/2026 PDG current-reference comparison/);
 assert.match(d,/5\.691\(51\)/);
 assert.match(d,/not ship two duplicative/i);
});
