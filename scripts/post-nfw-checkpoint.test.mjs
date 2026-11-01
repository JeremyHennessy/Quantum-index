import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync,spawnSync} from 'node:child_process';
import {postNfwManifest,projectBeforePostNfw} from './post-nfw-checkpoint.mjs';

const gitBlobHash=input=>{
 const bytes=Buffer.from(input);
 const header=Buffer.from('blob '+bytes.length+String.fromCharCode(0));
 return createHash('sha1').update(header).update(bytes).digest('hex');
};
const paths=Object.keys(postNfwManifest.files).sort();
const expected=['scripts/bao-integration-baseline.mjs','scripts/bao-integration-scope.test.mjs','scripts/nfw-halo-profile.test.mjs'].sort();

test('historical projection has exactly three reviewed paths and pins their byte-exact approved predecessors',()=>{
 assert.deepEqual(paths,expected);
 for(const path of paths){
  const entry=postNfwManifest.files[path],raw=fs.readFileSync(path);
  assert.equal(gitBlobHash(raw),entry.afterBlobSha,path+': exact repair bytes');
  const prior=projectBeforePostNfw(raw,path);
  assert.equal(gitBlobHash(prior),entry.beforeBlobSha,path+': approved checkpoint bytes');
  assert.deepEqual(prior,Buffer.from(entry.beforeText),path+': reconstructed exact original');
  assert.deepEqual(projectBeforePostNfw(prior,path),prior,path+': idempotent original');
  assert.throws(()=>projectBeforePostNfw(Buffer.concat([raw,Buffer.from([0])]),path),/undeclared post-NFW mutation/,path+': append mutation fails closed');
  const altered=Buffer.from(raw);altered[Math.floor(altered.length/2)]^=1;
  assert.throws(()=>projectBeforePostNfw(altered,path),/undeclared post-NFW mutation/,path+': interior mutation fails closed');
 }
});

test('pinned BAO-to-NFW acceptance diff rejects undeclared paths and missing paths',()=>{
 const base=postNfwManifest.originalBase,checkpoint=postNfwManifest.approvedNfwMerge;
 for(const commit of [base,checkpoint]){
  const result=spawnSync('git',['cat-file','-e',commit],{stdio:'ignore'});
  assert.ifError(result.error);assert.equal(result.status,0,'missing historical commit '+commit);
 }
 const old=postNfwManifest.files['scripts/bao-integration-scope.test.mjs'].beforeText;
 const beginning=old.indexOf('const expected=['),ending=old.indexOf('].sort();',beginning);
 assert.ok(beginning>=0&&ending>beginning,'approved historical scope has an explicit expected path list');
 const approvedList=old.slice(beginning+'const expected=['.length,ending);
 const actual=execFileSync('git',['diff','--name-only','-z',base,checkpoint,'--'],{encoding:'buffer'}).toString('utf8').split(String.fromCharCode(0)).filter(Boolean).sort();
 const approved=execFileSync('git',['show',checkpoint+':scripts/bao-integration-scope.test.mjs'],{encoding:'buffer'});
 assert.equal(gitBlobHash(approved),postNfwManifest.files['scripts/bao-integration-scope.test.mjs'].beforeBlobSha,'approved original comes from real pinned merge');
 const listed=[...approvedList.matchAll(/'([^']+)'/g)].map(m=>m[1]);
 assert.deepEqual([...new Set(listed)].sort(),actual,'historical pinned scope remains complete');
 assert.notDeepEqual([...actual,'future-unreviewed-file.js'].sort(),actual,'undeclared path changes historical file list');
 assert.notDeepEqual(actual.slice(1),actual,'missing historical path must fail');
});
