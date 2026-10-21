import {readPreCampaignFile} from './campaign-20261021-baseline.mjs';
// Immutable prerelease records for the 16 October astroparticle formula wave.
// Test-only: reconstruct earlier checkpoints only AFTER checking the accepted
// pre-astro data blob bytes; never used by application runtime.
import fs from 'node:fs';
import {priorDarkMatterFormulas,priorDarkMatterSources,priorDarkMatterCoverage} from './astro-darkmatter-20261016-baseline.mjs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const astroFormulaIds=["lambda-cdm-redshift-expansion","inflation-potential-slow-roll-2025","quintessence-canonical-fluid-2008"];
export const astroSourceIds=["pdg-bigbang-2025-reviewed","pdg-inflation-2025-reviewed","frieman-turner-huterer-2008-reviewed"];
const markers={
 'theories.js':'// 2026-10-16 astroparticle formula wave — reviewed bibliography only.',
 'formulas.js':'// 2026-10-16 astroparticle source-qualified three-formula wave.'
};
const originalBlob={
 'theories.js':'71fb09b93a2837a6c7da879688fcb9ad30ff49d5',
 'formulas.js':'732eb1f4a432dbdbaffbaf9e661706b396aedf99'
};
const gitHash=buf=>createHash('sha1').update(Buffer.from('blob '+buf.length+'\0')).update(buf).digest('hex');
export function beforeAstroBytes(path){
 assert.ok(markers[path],'Not an astroparticle-scoped data file: '+path);
 const buf=readPreCampaignFile(new URL('../'+path,import.meta.url));
 const needle=Buffer.from(markers[path]),at=buf.indexOf(needle);
 assert.ok(at>0,path+': source/formula append marker missing');
 assert.equal(buf.indexOf(needle,at+needle.length),-1,path+': duplicate append');
 const prefix=buf.subarray(0,at),candidates=[prefix];
 for(let n=1;n<=4&&prefix.length>=n;n++){
  if(prefix.subarray(prefix.length-n).every(b=>b===10||b===13))candidates.push(prefix.subarray(0,prefix.length-n));
 }
 const old=candidates.find(x=>gitHash(x)===originalBlob[path]);
 assert.ok(old,path+': immutable pre-astroparticle baseline modified');
 return old;
}
export function priorAstroFormulas(current){
 current=priorDarkMatterFormulas(current);
 for(const id of astroFormulaIds){
  const rows=current.filter(f=>f.id===id);
  assert.equal(rows.length,1,'missing/duplicate new formula '+id);
  const f=rows[0];
  assert.equal(f.metadataReview,'explicit',id);
  assert.equal(f.curationBatch,'astro-first-equations-2026-10-16',id);
  assert.equal(f.theoryIds.length,1,id);
  assert.ok(f.sourceLocations?.length,id);
  assert.ok(f.sourceIds.length,id);
  for(const s of f.sourceLocations)assert.ok(f.sourceIds.includes(s.sourceId),id+' source-location identity');
 }
 return current.filter(f=>!astroFormulaIds.includes(f.id));
}
export function priorAstroSources(current){
 current=priorDarkMatterSources(current);
 for(const id of astroSourceIds){
  const rows=current.filter(s=>s.id===id);
  assert.equal(rows.length,1,'missing/duplicate astro source '+id);
  assert.ok(rows[0].url.startsWith('https://'),id+' source URL');
  assert.match(rows[0].type,/review/i);
 }
 return current.filter(s=>!astroSourceIds.includes(s.id));
}
export function priorAstroCoverage(latest){
 const x=priorDarkMatterCoverage(latest);
 x.sources-=3;x.formulas-=3;x.formulaCategories-=1;
 x.formulaBearing-=3;x.formulaGaps+=3;
 x.explicitFormulaMetadata-=3;
 return x;
}
