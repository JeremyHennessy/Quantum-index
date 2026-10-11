// Test-only historical view: the 2026-10-11 nuclear records are additive after all
// 2026-10-07 and 2026-10-08 immutable checkpoints. Never loaded by the app.
import assert from 'node:assert/strict';
import fs from 'node:fs';

const ledger=JSON.parse(fs.readFileSync(new URL('../research/PASSPORT_SOURCE_REVIEW_2026-10-11.json',import.meta.url),'utf8'));
const ids=ledger.acceptedAppendOnlyPassportTheoryIds;
const declared=new Set(ids);

export function priorNuclearPassports(current){
  assert.deepEqual([...ids].sort(),['in-medium-srg','nuclear-shell-model']);
  assert.equal(declared.size,2,'unique declared nuclear additions');
  for(const id of declared)assert.equal(current.filter(p=>p.theoryId===id).length,1,'exactly one new Passport '+id);
  // The separate nuclear release test verifies the SHA-1 of the complete
  // original 23-record prefix. This helper only projects the historical view.
  return current.filter(p=>!declared.has(p.theoryId));
}
