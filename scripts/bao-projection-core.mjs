// Byte-exact, fail-closed reverse projection for the recovered BAO candidate.
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

const sha256=bytes=>createHash('sha256').update(bytes).digest('hex');

function canonicalPath(value){
  assert.equal(typeof value,'string','BAO path must be a string');
  assert.ok(value.length>0,'BAO path must not be empty');
  assert.ok(!value.includes('\\'),'BAO path must use canonical forward slashes');
  assert.ok(!value.startsWith('/')&&!/^[A-Za-z]:/.test(value),'BAO path must be repository-relative');
  const parts=value.split('/');
  assert.ok(parts.every(part=>part&&part!=='.'&&part!=='..'),'BAO path contains an alias component');
  return value;
}

function decode(entry,field,path){
  const encoded=entry[field];
  assert.equal(typeof encoded,'string',path+': missing '+field);
  const bytes=Buffer.from(encoded,'base64');
  assert.equal(bytes.toString('base64'),encoded,path+': non-canonical '+field);
  return bytes;
}

function deepFreeze(value){
  if(value&&typeof value==='object'&&!Object.isFrozen(value)){
    for(const child of Object.values(value))deepFreeze(child);
    Object.freeze(value);
  }
  return value;
}

export function createBaoProjector(manifestBytes,{expectedManifestSha256,allowedPaths}){
  manifestBytes=Buffer.from(manifestBytes);
  assert.match(expectedManifestSha256,/^[a-f0-9]{64}$/,'invalid pinned BAO manifest digest');
  assert.equal(sha256(manifestBytes),expectedManifestSha256,'BAO manifest digest mismatch');
  const manifest=JSON.parse(manifestBytes.toString('utf8'));
  assert.equal(manifest.schema,'qi-bao-formula-integration-v1','unexpected BAO manifest schema');
  assert.equal(manifest.baseMain,'d0e51baaf8611263ddbb9e1a97a8478ca63e8d96','unexpected BAO base main');
  const expected=[...allowedPaths].map(canonicalPath).sort();
  const actual=Object.keys(manifest.files||{}).map(canonicalPath).sort();
  assert.deepEqual(actual,expected,'BAO manifest file allowlist mismatch');
  const snapshots=new Map();
  for(const path of actual){
    const entry=manifest.files[path];
    assert.ok(entry&&['append','replace'].includes(entry.kind),path+': invalid BAO file operation');
    const before=decode(entry,'beforeBase64',path),after=decode(entry,'afterBase64',path);
    assert.match(entry.beforeSha256,/^[a-f0-9]{64}$/,path+': invalid before SHA-256');
    assert.match(entry.afterSha256,/^[a-f0-9]{64}$/,path+': invalid after SHA-256');
    assert.equal(sha256(before),entry.beforeSha256,path+': before bytes do not match their pinned SHA-256');
    assert.equal(sha256(after),entry.afterSha256,path+': after bytes do not match their pinned SHA-256');
    if(entry.kind==='append'){
      assert.ok(after.length>before.length,path+': append must add bytes');
      assert.ok(after.subarray(0,before.length).equals(before),path+': candidate is not the exact declared append');
    }else assert.notDeepEqual(after,before,path+': replacement must change bytes');
    snapshots.set(path,{before,after,afterSha256:entry.afterSha256,kind:entry.kind});
  }
  deepFreeze(manifest);
  return Object.freeze({
    manifest,
    paths:Object.freeze(actual),
    project(input,relative){
      const path=canonicalPath(relative),bytes=Buffer.from(input),snapshot=snapshots.get(path);
      if(!snapshot)return bytes;
      if(bytes.equals(snapshot.before))return bytes;
      assert.equal(sha256(bytes),snapshot.afterSha256,path+': undeclared BAO mutation');
      assert.ok(bytes.equals(snapshot.after),path+': candidate bytes differ despite matching digest');
      return Buffer.from(snapshot.before);
    },
    snapshot(relative){
      const path=canonicalPath(relative),snapshot=snapshots.get(path);
      return snapshot?{before:Buffer.from(snapshot.before),after:Buffer.from(snapshot.after),kind:snapshot.kind}:undefined;
    }
  });
}

export {canonicalPath,sha256};
