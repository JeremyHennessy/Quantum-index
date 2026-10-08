// Test-only bridge for immutable checkpoints that predate the 2026-10-08 multidomain additions.
// It removes only identifiers declared in the reviewed ledger and asserts each addition exists exactly once.
import fs from 'node:fs';
import assert from 'node:assert/strict';

export const multidomainReview=JSON.parse(fs.readFileSync(new URL('../docs/MULTIDOMAIN_DEPTH_2026-10-08.json',import.meta.url),'utf8'));

function prior(items,ids,key,label){
  const declared=new Set(ids);
  for(const id of declared)assert.equal(items.filter(x=>x[key]===id).length,1,label+': expected exactly one '+id);
  return items.filter(x=>!declared.has(x[key]));
}
export const priorDepthFormulas=current=>prior(current,multidomainReview.addedFormulaIds,'id','formula');
export const priorDepthPassports=current=>prior(current,multidomainReview.addedPassportTheoryIds,'theoryId','Passport');
export const priorDepthEvidence=current=>prior(current,multidomainReview.addedEvidenceIds,'id','Evidence');
export const priorDepthSources=current=>prior(current,multidomainReview.addedSourceIds,'id','source');

export function priorDepthCoverage(current){
  const x={...current};
  x.sources-=multidomainReview.addedSourceIds.length;
  x.formulas-=multidomainReview.addedFormulaIds.length;
  x.passports-=multidomainReview.addedPassportTheoryIds.length;
  if('evidenceRecords' in x)x.evidenceRecords-=multidomainReview.addedEvidenceIds.length;
  if('formulaBearing' in x)x.formulaBearing-=multidomainReview.closedGapTheoryIds.length;
  if('formulaGaps' in x)x.formulaGaps+=multidomainReview.closedGapTheoryIds.length;
  if('explicitFormulaMetadata' in x)x.explicitFormulaMetadata-=multidomainReview.addedFormulaIds.length;
  return x;
}
