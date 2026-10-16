// Read-only historical source/formula projection for the 16 October stochastic/preheating wave.
// New formula identities and bibliography are removed from previous snapshots only
// after exact Git blob and metadata checks. Never used by the browser application.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const followupFormulaIds=[
 'stochastic-inflation-efold-langevin',
 'stochastic-inflation-ito-fokker-planck',
 'preheating-rescaled-chi-mode-1997'
];
export const followupCoveredTheoryIds=['stochastic-inflation','reheating-preheating'];
export const followupSourceIds=[
 'vennin-starobinsky-stochastic-2015',
 'kofman-linde-starobinsky-reheating-1997'
];
const originalBlobs={
 'theories.js':'4e18bb89d11832e2999c510c46573479087ccd4b',
 'formulas.js':'bfdc1aa807f87555eb4c54dba364ffbd7f7b2c0b'
};
const markers={
 'theories.js':'// 2026-10-16 stochastic-inflation and preheating research source registration.',
 'formulas.js':'// 2026-10-16 stochastic inflation and preheating source-specific formula wave.'
};
const hash=bytes=>createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
export function preFollowupBytes(path){
 assert.ok(originalBlobs[path],path+' not part of this science batch');
 const file=fs.readFileSync(new URL('../'+path,import.meta.url));
 const marker=Buffer.from(markers[path]),index=file.indexOf(marker);
 assert.ok(index>0,'missing release marker '+path);
 assert.equal(file.indexOf(marker,index+marker.length),-1,'duplicate release marker '+path);
 const prefix=file.subarray(0,index),possible=[prefix];
 for(let n=1;n<=4&&prefix.length>=n;n++){
  if(prefix.subarray(prefix.length-n).every(b=>b===10||b===13))possible.push(prefix.subarray(0,prefix.length-n));
 }
 const exact=possible.find(b=>hash(b)===originalBlobs[path]);
 assert.ok(exact,path+': previous source or formula bytes changed');
 return exact;
}
export function priorFollowupFormulas(current){
 const expected=[
  ['stochastic-inflation-efold-langevin','stochastic-inflation','vennin-starobinsky-stochastic-2015','approximation'],
  ['stochastic-inflation-ito-fokker-planck','stochastic-inflation','vennin-starobinsky-stochastic-2015','canonical'],
  ['preheating-rescaled-chi-mode-1997','reheating-preheating','kofman-linde-starobinsky-reheating-1997','canonical']
 ];
 for(const [id,tid,sid,type] of expected){
  const found=current.filter(f=>f.id===id);
  assert.equal(found.length,1,id+' missing/duplicated');
  const f=found[0];
  assert.equal(f.curationBatch,'astro-stochastic-preheating-2026-10-16');
  assert.equal(f.metadataReview,'explicit');
  assert.equal(f.formulaType,type);
  assert.deepEqual(Array.from(f.theoryIds),[tid]);
  assert.deepEqual(Array.from(f.sourceIds),[sid]);
  assert.ok(f.sourceLocations.length===1&&f.sourceLocations[0].sourceId===sid);
  assert.ok(f.assumptions.length>=5&&f.variables.length>=4);
 }
 return current.filter(f=>!followupFormulaIds.includes(f.id));
}
export function priorFollowupSources(current){
 for(const [id,title] of [
  ['vennin-starobinsky-stochastic-2015','Correlation Functions in Stochastic Inflation'],
  ['kofman-linde-starobinsky-reheating-1997','Towards the Theory of Reheating After Inflation']
 ]){
  const list=current.filter(s=>s.id===id);
  assert.equal(list.length,1,id+' missing/duplicated');
  assert.equal(list[0].type,'primary source');
  assert.equal(list[0].title,title);
 }
 return current.filter(s=>!followupSourceIds.includes(s.id));
}
export function priorFollowupCoverage(metrics){
 const x={...metrics};
 x.formulas-=3;x.sources-=2;x.formulaBearing-=2;x.formulaGaps+=2;
 x.explicitFormulaMetadata-=3;
 return x;
}
