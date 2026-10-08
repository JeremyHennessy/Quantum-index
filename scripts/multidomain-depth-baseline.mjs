// Test-only bridge for immutable checkpoints that predate the 2026-10-08 multidomain additions.
// It removes only identifiers declared in the reviewed ledger and asserts each addition exists exactly once.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';

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

function gitBlob(input){
  const out=spawnSync('git',['hash-object','--stdin'],{input,encoding:null});
  assert.equal(out.status,0,out.stderr?.toString()||'git hash-object failed');
  return out.stdout.toString().trim();
}
export function verifyDepthFile(path,expectedBlobSha){
  const marker=multidomainReview.appendedMarkers[path];
  if(!marker){
    const out=spawnSync('git',['hash-object',path],{encoding:'utf8'});
    assert.equal(out.status,0,out.stderr||path);
    assert.equal(out.stdout.trim(),expectedBlobSha,path);
    return;
  }
  const bytes=fs.readFileSync(path),needle=Buffer.from(marker),at=bytes.indexOf(needle);
  assert.ok(at>0,path+': additive marker missing');
  assert.equal(bytes.indexOf(needle,at+needle.length),-1,path+': duplicate additive marker');
  const prefix=bytes.subarray(0,at);
  const candidates=[prefix];
  for(let n=1;n<=4&&prefix.length>=n;n++)candidates.push(prefix.subarray(0,prefix.length-n));
  assert.ok(candidates.some(buf=>gitBlob(buf)===expectedBlobSha),path+': pre-addition content changed');
}

export function verifyDepthFileSha256(path,expectedSha256){
  const marker=multidomainReview.appendedMarkers[path],bytes=fs.readFileSync(path);
  const digest=buf=>createHash('sha256').update(buf).digest('hex');
  if(!marker){assert.equal(digest(bytes),expectedSha256,path);return;}
  const needle=Buffer.from(marker),at=bytes.indexOf(needle);
  assert.ok(at>0,path+': additive marker missing');
  assert.equal(bytes.indexOf(needle,at+needle.length),-1,path+': duplicate additive marker');
  const prefix=bytes.subarray(0,at),candidates=[prefix];
  for(let n=1;n<=4&&prefix.length>=n;n++)candidates.push(prefix.subarray(0,prefix.length-n));
  assert.ok(candidates.some(buf=>digest(buf)===expectedSha256),path+': historical SHA-256 prefix changed');
}
