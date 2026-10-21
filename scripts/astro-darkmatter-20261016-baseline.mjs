import {readPreCampaignFile} from './campaign-20261021-baseline.mjs';
// Read-only bridge for the source-reviewed dark-matter equation wave of 16 Oct 2026.
// Never loaded by app. Older approved records must exactly match their original Git blobs.
import fs from 'node:fs';
import {priorFollowupFormulas,priorFollowupSources,priorFollowupCoverage} from './astro-stochastic-preheating-20261016-baseline.mjs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const darkMatterFormulaIds=['thermal-wimp-number-density-boltzmann','fuzzy-dark-matter-stationary-schrodinger-poisson'];
export const darkMatterSourceIds=['arcadi-wimp-freezeout-2018','hui-ostriker-tremaine-witten-fdm-2017'];
const markers={
 'theories.js':'// 2026-10-16 dark-matter model formula wave — source registration only.',
 'formulas.js':'// 2026-10-16 two source-scoped dark-matter representatives.'
};
const approvedGitBlobs={
 'theories.js':'1ee2161ddba0f1efc536bdbd8ec45fb3f22525ed',
 'formulas.js':'ef8d06b9af75026de7d0f28ed96a1fe8f6ba4e90'
};
const gitBlob=bytes=>createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
export function preDarkMatterBytes(path){
 assert.ok(markers[path],'unexpected protected path: '+path);
 const all=readPreCampaignFile(new URL('../'+path,import.meta.url));
 const marker=Buffer.from(markers[path]),p=all.indexOf(marker);
 assert.ok(p>0,path+': missing source-scoped append boundary');
 assert.equal(all.indexOf(marker,p+marker.length),-1,path+': duplicate boundary');
 const prefix=all.subarray(0,p),options=[prefix];
 for(let k=1;k<=4&&k<=prefix.length;k++)if(prefix.subarray(prefix.length-k).every(b=>b===10||b===13))options.push(prefix.subarray(0,prefix.length-k));
 const original=options.find(bytes=>gitBlob(bytes)===approvedGitBlobs[path]);
 assert.ok(original,path+': historical parent blob changed');
 return original;
}
export function priorDarkMatterFormulas(formulas){
 formulas=priorFollowupFormulas(formulas);
 const targets=[
 ['thermal-wimp-number-density-boltzmann','wimp-dark-matter','arcadi-wimp-freezeout-2018','Boltzmann'],
 ['fuzzy-dark-matter-stationary-schrodinger-poisson','fuzzy-dark-matter','hui-ostriker-tremaine-witten-fdm-2017','Schrödinger']
 ];
 for(const [id,theory,source,locator] of targets){
  const found=formulas.filter(f=>f.id===id);
  assert.equal(found.length,1,'missing or duplicated new formula '+id);
  const f=found[0];
  assert.equal(f.metadataReview,'explicit',id);
  assert.equal(f.curationBatch,'astro-darkmatter-sourced-2026-10-16',id);
  assert.equal(f.formulaType,'canonical',id);
  assert.deepEqual(Array.from(f.theoryIds),[theory],id);
  assert.deepEqual(Array.from(f.sourceIds),[source],id);
  assert.equal(f.sourceLocations.length,1,id);
  assert.equal(f.sourceLocations[0].sourceId,source);
  assert.ok(f.assumptions.length>=4&&f.variables.length>=4,id);
  if(id.startsWith('thermal'))assert.match(f.sourceLocations[0].locator,/Eq\. \(1\)/);
  else assert.match(f.sourceLocations[0].locator,/Eq\. \(B1\)/);
 }
 return formulas.filter(f=>!darkMatterFormulaIds.includes(f.id));
}
export function priorDarkMatterSources(sources){
 sources=priorFollowupSources(sources);
 const expected=[
  ['arcadi-wimp-freezeout-2018','authoritative review','https://doi.org/10.1140/epjc/s10052-018-5662-y'],
  ['hui-ostriker-tremaine-witten-fdm-2017','primary source','https://doi.org/10.1103/PhysRevD.95.043541']
 ];
 for(const [id,type,url] of expected){
  const found=sources.filter(s=>s.id===id);
  assert.equal(found.length,1,'missing/duplicated citation '+id);
  assert.equal(found[0].type,type);assert.equal(found[0].url,url);
 }
 return sources.filter(s=>!darkMatterSourceIds.includes(s.id));
}
export function priorDarkMatterCoverage(current){
 const x=priorFollowupCoverage(current);
 x.sources-=2;x.formulas-=2;x.formulaBearing-=2;x.formulaGaps+=2;
 x.explicitFormulaMetadata-=2;
 return x;
}
