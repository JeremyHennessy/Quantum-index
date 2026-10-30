// Future UI release candidate: exact, fail-closed reverse projection.
// This helper DOES NOT install an accepted revision or alter historical ledgers.
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

const sha256=bytes=>createHash('sha256').update(bytes).digest('hex');
const normalize=bytes=>Buffer.isBuffer(bytes)?bytes:Buffer.from(bytes);

export function reverseDeclaredUiRevision(bytes,relative,manifest) {
  bytes=normalize(bytes);
  assert.ok(manifest && manifest.status==='review-candidate','Missing explicit review-candidate manifest');
  const entry=manifest.files?.[relative];
  if(!entry)return bytes;
  assert.match(entry.beforeSha256,/^[a-f0-9]{64}$/);
  assert.match(entry.afterSha256,/^[a-f0-9]{64}$/);
  const digest=sha256(bytes);
  if(digest===entry.beforeSha256)return bytes; // Existing approved bytes still accepted.
  assert.equal(digest,entry.afterSha256,relative+': unexpected UI candidate mutation');
  let text=bytes.toString('utf8');
  const operations=entry.operations;
  assert.ok(Array.isArray(operations)&&operations.length,'No reversible UI candidate operations declared');
  for(const op of [...operations].reverse()){
    if(op.kind==='append'){
      assert.ok(op.addedText && text.endsWith(op.addedText),relative+': append mismatch');
      text=text.slice(0,-op.addedText.length);
      continue;
    }
    assert.equal(op.kind,'replace',relative+': unknown projection operation');
    assert.ok(typeof op.beforeText==='string' && typeof op.afterText==='string' && op.beforeText!==op.afterText,relative+': invalid replacement');
    const count=text.split(op.afterText).length-1;
    const expected=op.occurrences??1;
    assert.equal(count,expected,relative+': ambiguous UI candidate replacement');
    text=text.split(op.afterText).join(op.beforeText);
  }
  const restored=Buffer.from(text,'utf8');
  assert.equal(sha256(restored),entry.beforeSha256,relative+': approved UI byte baseline not restored exactly');
  return restored;
}
