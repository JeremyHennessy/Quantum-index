// Test-only reconstruction of declared pre-review records. Never used by the app.
// The current record MUST match its reviewed fingerprint before a historical view
// is returned. This is not an exclusion/ignore list for arbitrary formula edits.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export const bellReview=JSON.parse(fs.readFileSync(new URL('../docs/BELL_METADATA_2026-10-07.json',import.meta.url),'utf8'));
export const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
export const fingerprint=x=>createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
export function restoreBellFormula(f){
 const edit=bellReview.formulaEdits[f.id];
 if(!edit)return f;
 assert.equal(fingerprint(f),edit.afterSha256,`${f.id}: unexpected post-review change`);
 assert.equal(fingerprint(edit.before),edit.beforeSha256,`${f.id}: corrupt historical snapshot`);
 return structuredClone(edit.before);
}
