// 17 October 2026 four cosmology source-qualified first-formula representatives.
// Test-only historical projection, never loaded in the UI. The exact original
// Git blobs are checked before projecting any older approved checkpoint.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

export const cosmologyFormulaIds=[
 'kessence-factorized-density-sound-speed',
 'chaplygin-fluid-eos-and-scaling-2001',
 'freeze-in-decay-fimp-boltzmann-2010',
 'leptogenesis-flavoured-decay-cp-asymmetry'
];
export const cosmologyCoveredTheoryIds=['k-essence','chaplygin-gas','freeze-in-dark-matter','leptogenesis'];
export const cosmologyAddedSourceIds=['kamenshchik-moschella-pasquier-2001','davidson-nardi-nir-leptogenesis-2008'];
const markers={
 'theories.js':'// 2026-10-17 four cosmology subfield gap closures — bibliography only.',
 'formulas.js':'// 2026-10-17 four source-qualified cosmology mathematical representatives.'
};
const approvedGitBlobSha={
 'theories.js':'89d4930f4335f582ab938b600cc794c555f2261d',
 'formulas.js':'03ece659efb2d49459bffb249f87213fb5e9ec3c'
};
const gitBlob=bytes=>createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
export function beforeCosmologyBytes(path){
 assert.ok(approvedGitBlobSha[path],path+' is not protected in this release');
 const file=fs.readFileSync(new URL('../'+path,import.meta.url));
 const marker=Buffer.from(markers[path]),index=file.indexOf(marker);
 assert.ok(index>0,path+': source/formula append boundary missing');
 assert.equal(file.indexOf(marker,index+marker.length),-1,path+': duplicate append marker');
 const prefix=file.subarray(0,index),possible=[prefix];
 for(let n=1;n<=4&&prefix.length>=n;n++)if(prefix.subarray(prefix.length-n).every(b=>b===10||b===13))possible.push(prefix.subarray(0,prefix.length-n));
 const exact=possible.find(bytes=>gitBlob(bytes)===approvedGitBlobSha[path]);
 assert.ok(exact,path+': previously accepted scientific bytes changed');
 return exact;
}
export function priorCosmologyFormulas(current){
 const expected=[
  ['kessence-factorized-density-sound-speed','k-essence','wave4-kessence-2000'],
  ['chaplygin-fluid-eos-and-scaling-2001','chaplygin-gas','kamenshchik-moschella-pasquier-2001'],
  ['freeze-in-decay-fimp-boltzmann-2010','freeze-in-dark-matter','freeze-in-2010'],
  ['leptogenesis-flavoured-decay-cp-asymmetry','leptogenesis','davidson-nardi-nir-leptogenesis-2008']
 ];
 for(const [id,theory,source] of expected){
  const found=current.filter(f=>f.id===id);
  assert.equal(found.length,1,'missing or duplicated new equation '+id);
  const f=found[0];
  assert.equal(f.category,'Astroparticle physics & cosmology',id);
  assert.equal(f.metadataReview,'explicit',id);
  assert.equal(f.curationBatch,'cosmology-source-depth-2026-10-17',id);
  assert.deepEqual(Array.from(f.theoryIds),[theory],id);
  assert.deepEqual(Array.from(f.sourceIds),[source],id);
  assert.ok(f.assumptions.length>=5&&f.variables.length>=5,id);
  assert.ok(f.sourceLocations.length>=1,id);
  assert.ok(f.sourceLocations.every(s=>s.sourceId===source),id+': source mismatch');
 }
 return current.filter(f=>!cosmologyFormulaIds.includes(f.id));
}
export function priorCosmologySources(current){
 const expected=[
  ['kamenshchik-moschella-pasquier-2001','primary source','https://doi.org/10.1016/S0370-2693(01)00571-8'],
  ['davidson-nardi-nir-leptogenesis-2008','authoritative review','https://doi.org/10.1016/j.physrep.2008.06.002']
 ];
 for(const [id,type,url] of expected){
  const matches=current.filter(s=>s.id===id);
  assert.equal(matches.length,1,'missing/duplicate source '+id);
  assert.equal(matches[0].type,type,id);
  assert.equal(matches[0].url,url,id);
 }
 for(const id of ['wave4-kessence-2000','freeze-in-2010'])assert.equal(current.filter(s=>s.id===id).length,1,'previous source missing '+id);
 return current.filter(s=>!cosmologyAddedSourceIds.includes(s.id));
}
export function priorCosmologyCoverage(latest){
 const x={...latest};
 x.sources-=2;
 x.formulas-=4;
 x.formulaBearing-=4;
 x.formulaGaps+=4;
 x.explicitFormulaMetadata-=4;
 return x;
}
