import {readPreCampaignFile} from './campaign-20261021-baseline.mjs';
// Test-only historical reconstruction of source-qualified first MOND / R² representatives.
// Never loaded in the UI. Protect exact existing 413-formula data blob before stripping
// this new append; historical count projections must not conceal unrelated edits.
import fs from 'node:fs';
import {priorCosmologyFormulas,priorCosmologyCoverage} from './cosmology-four-gaps-20261017-baseline.mjs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const newRepresentativeIds=['mond-low-acceleration-effective-inertia','starobinsky-r2-model-function'];
export const newlyCoveredTheoryIds=['mond','starobinsky-inflation'];
const approvedBlob='05c1e6139e2ed101b8a04d88510866bab454e632';
const marker='// 2026-10-16 MOND and Starobinsky exact-source first representatives.';
const blobHash=b=>createHash('sha1').update(Buffer.from('blob '+b.length+'\0')).update(b).digest('hex');
export function beforeMondStarobinskyBytes(){
 const bytes=readPreCampaignFile(new URL('../formulas.js',import.meta.url));
 const needle=Buffer.from(marker),start=bytes.indexOf(needle);
 assert.ok(start>0,'MOND/R2 append marker missing');
 assert.equal(bytes.indexOf(needle,start+needle.length),-1,'duplicate MOND/R2 marker');
 const prefix=bytes.subarray(0,start),options=[prefix];
 for(let n=1;n<=4&&n<=prefix.length;n++)if(prefix.subarray(prefix.length-n).every(x=>x===10||x===13))options.push(prefix.subarray(0,prefix.length-n));
 const prior=options.find(p=>blobHash(p)===approvedBlob);
 assert.ok(prior,'parent approved 413-formula bytes have changed');
 return prior;
}
export function priorMondStarobinskyFormulas(items){
 items=priorCosmologyFormulas(items);
 const expected=[
 ['mond-low-acceleration-effective-inertia','mond','milgrom-mond-1983'],
 ['starobinsky-r2-model-function','starobinsky-inflation','fr-review-2010']
 ];
 for(const [fid,tid,sid] of expected){
  const matches=items.filter(f=>f.id===fid);
  assert.equal(matches.length,1,'new formula missing or duplicated: '+fid);
  const f=matches[0];
  assert.equal(f.formulaType,'defining');assert.equal(f.metadataReview,'explicit');
  assert.equal(f.curationBatch,'astro-mond-starobinsky-firstformula-2026-10-16');
  assert.deepEqual(Array.from(f.theoryIds),[tid]);assert.deepEqual(Array.from(f.sourceIds),[sid]);
  assert.equal(f.category,'Astroparticle physics & cosmology');
  assert.ok(f.sourceLocations.length===1&&f.sourceLocations[0].sourceId===sid);
  assert.ok(f.assumptions.length>=4&&f.variables.length>=3);
 }
 return items.filter(f=>!newRepresentativeIds.includes(f.id));
}
export function priorMondStarobinskyCoverage(metrics){
 const x=priorCosmologyCoverage(metrics);
 x.formulas-=2;x.formulaBearing-=2;x.formulaGaps+=2;x.explicitFormulaMetadata-=2;
 return x;
}
