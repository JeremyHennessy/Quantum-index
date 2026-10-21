// Test-only projection of the narrowly reviewed multi-locator renderer repair.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const ledger=JSON.parse(fs.readFileSync(new URL('./formula-locator-renderer-20261021.json',import.meta.url)));
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
export function beforeLocatorRenderer(bytes,path){
 if(path!=='app.js')return bytes;
 if(hash(bytes)===ledger.beforeSha256)return bytes;
 assert.equal(hash(bytes),ledger.afterSha256,'undeclared renderer change');
 const text=bytes.toString();
 assert.equal(text.split(ledger.after).length,2,'exact reviewed renderer replacement');
 const before=Buffer.from(text.replace(ledger.after,ledger.before));
 assert.equal(hash(before),ledger.beforeSha256,'historical renderer bytes');
 return before;
}
