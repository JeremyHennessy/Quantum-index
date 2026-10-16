// Test-only bridge for the 2026-10-14 four-Passport source review.
// New runtime records must match the audited after-state exactly before this helper
// reconstructs any older immutable release view. Never loaded by the app.
import fs from 'node:fs';
import {restoreQecFormula} from './qec-source-review-20261016-baseline.mjs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';

export const passportSourceReview=JSON.parse(fs.readFileSync(new URL('../research/PASSPORT_SOURCE_REVIEW_2026-10-14.json',import.meta.url),'utf8'));
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
export const passportFingerprint=x=>createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');

export function restorePassportFormula(formula){
  formula=restoreQecFormula(formula);
  const edit=passportSourceReview.formulaEdits[formula.id];
  if(!edit)return formula;
  assert.equal(passportFingerprint(formula),passportFingerprint(edit.after),formula.id+': unexpected post-2026-10-14 formula edit');
  assert.equal(passportFingerprint(edit.before),edit.beforeFingerprint,formula.id+': corrupt historical snapshot');
  return structuredClone(edit.before);
}

export function priorPassportSources(current){
  const expected=passportSourceReview.addedSourceRecord;
  const matches=current.filter(x=>x.id===expected.id);
  assert.equal(matches.length,1,'expected exactly one '+expected.id);
  assert.equal(passportFingerprint(matches[0]),passportFingerprint(expected),expected.id+': reviewed source changed unexpectedly');
  return current.filter(x=>x.id!==expected.id);
}

export function priorHeldPassports(current){
  // QEC was added after the October 14 checkpoint; its own test guards the addition.
  assert.ok(current.filter(p=>p.theoryId==='quantum-error-correction').length<=1,'duplicate QEC Passport in historical reconstruction');
  current=current.filter(p=>p.theoryId!=='quantum-error-correction');
  const expected=new Map(passportSourceReview.addedPassportRecords.map(p=>[p.theoryId,p]));
  assert.equal(expected.size,2,'two held Passports were reviewed');
  for(const [id,row] of expected){
    const matches=current.filter(p=>p.theoryId===id);
    assert.equal(matches.length,1,'expected exactly one reviewed Passport '+id);
    assert.equal(passportFingerprint(matches[0]),passportFingerprint(row),id+': reviewed Passport changed unexpectedly');
  }
  return current.filter(p=>!expected.has(p.theoryId));
}

export function priorPassportCoverage(current){
  // The 2026-10-16 release must be removed before evaluating an older release census.
  const x={...current};
  x.passports-=1;
  x.explicitFormulaMetadata-=1;
  x.baselineFormulaMetadata+=1;
  x.sources-=passportSourceReview.addedSourceIds.length;
  x.passports-=passportSourceReview.addedPassportTheoryIds.length;
  x.explicitFormulaMetadata-=passportSourceReview.reviewedFormulaIds.length;
  x.baselineFormulaMetadata+=passportSourceReview.reviewedFormulaIds.length;
  return x;
}

function gitBlob(input){
  const out=spawnSync('git',['hash-object','--stdin'],{input,encoding:null});
  assert.equal(out.status,0,out.stderr?.toString()||'git hash-object failed');
  return out.stdout.toString().trim();
}
export function stripPassportReviewAppend(bytes,path){
  const marker=passportSourceReview.appendedMarkers[path];
  if(!marker)return bytes;
  const expected=passportSourceReview.baselineBlobSha[path];
  if(gitBlob(bytes)===expected)return bytes; // already reconstructed exactly
  const needle=Buffer.from(marker),at=bytes.indexOf(needle);
  assert.ok(at>0,path+': 2026-10-14 additive marker missing');
  assert.equal(bytes.indexOf(needle,at+needle.length),-1,path+': duplicate 2026-10-14 marker');
  const prefix=bytes.subarray(0,at),candidates=[prefix];
  for(let n=1;n<=4&&prefix.length>=n;n++)candidates.push(prefix.subarray(0,prefix.length-n));
  const match=candidates.find(buf=>gitBlob(buf)===expected);
  assert.ok(match,path+': pre-2026-10-14 bytes changed');
  return match;
}
