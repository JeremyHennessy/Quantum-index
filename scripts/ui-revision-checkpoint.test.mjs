import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {reverseDeclaredUiRevision} from './ui-revision-checkpoint.mjs';

const hash=x=>createHash('sha256').update(x).digest('hex');
const before='HEADER\nChoose a question.\nFOOTER\n';
const after='HEADER\nChoose a question. Jump to a topic.\nFOOTER\nNEW CSS\n';
const candidate={status:'review-candidate',files:{'fixture.html':{
 beforeSha256:hash(before),afterSha256:hash(after),
 operations:[
  {kind:'replace',beforeText:'Choose a question.',afterText:'Choose a question. Jump to a topic.'},
  {kind:'append',addedText:'NEW CSS\n'}
 ]
}}};
test('test-only candidate projector restores accepted bytes exactly',()=>{
 assert.equal(reverseDeclaredUiRevision(after,'fixture.html',candidate).toString(),before);
 assert.equal(reverseDeclaredUiRevision(before,'fixture.html',candidate).toString(),before);
});
test('unknown file is unmodified, not retroactively incorporated into accepted history',()=>{
 const blob=Buffer.from('unrelated science code','utf8');
 assert.deepEqual(reverseDeclaredUiRevision(blob,'unrelated.js',candidate),blob);
});
test('undeclared candidate byte changes and hash-tampered manifests are rejected',()=>{
 assert.throws(()=>reverseDeclaredUiRevision(after+'!', 'fixture.html',candidate),/unexpected UI candidate mutation/);
 const fake=structuredClone(candidate);fake.files['fixture.html'].afterSha256=hash(after+'!');
 assert.throws(()=>reverseDeclaredUiRevision(after,'fixture.html',fake),/unexpected UI candidate mutation/);
 const bad=structuredClone(candidate);bad.files['fixture.html'].beforeSha256=hash('not original');
 assert.throws(()=>reverseDeclaredUiRevision(after,'fixture.html',bad),/approved UI byte baseline not restored exactly/);
});
test('incorrect or ambiguous reverse operations fail even with a matching candidate hash',()=>{
 const bad=structuredClone(candidate);bad.files['fixture.html'].operations[0].afterText='not present';
 assert.throws(()=>reverseDeclaredUiRevision(after,'fixture.html',bad),/ambiguous UI candidate replacement/);
 const many=structuredClone(candidate);
 const dup='A X\nA X\n';
 many.files['fixture.html']={beforeSha256:hash('A\nA\n'),afterSha256:hash(dup),operations:[{kind:'replace',beforeText:'A X',afterText:'A X',occurrences:1}]};
 assert.throws(()=>reverseDeclaredUiRevision(dup,'fixture.html',many),/invalid replacement|ambiguous UI candidate replacement/);
});
test('missing candidate status and invalid operation are fail-closed',()=>{
 const invalid=structuredClone(candidate);invalid.status='accepted';
 assert.throws(()=>reverseDeclaredUiRevision(after,'fixture.html',invalid),/Missing explicit review-candidate manifest/);
 const invalidOp=structuredClone(candidate);invalidOp.files['fixture.html'].operations[1].kind='cleanup';
 assert.throws(()=>reverseDeclaredUiRevision(after,'fixture.html',invalidOp),/unknown projection operation/);
});
test('current approved UI files remain unchanged and can be read without a new revision',()=>{
 for(const path of ['index.html','app.js','styles.css','docs/responsive-check.html']){
   const bytes=fs.readFileSync(path);
   const m={status:'review-candidate',files:{[path]:{beforeSha256:hash(bytes),afterSha256:hash('different'),operations:[{kind:'append',addedText:'different'}]}}};
   assert.deepEqual(reverseDeclaredUiRevision(bytes,path,m),bytes);
 }
});
