// Isolated forward projection: preserves approved BAO/NFW byte-level historical checks.
// No client runtime or scientific content is affected.
import fs from 'node:fs';
import {createHash} from 'node:crypto';

const manifestUrl=new URL('../research/POST_NFW_CHECKPOINT_INTEGRITY_2026-11-01.json',import.meta.url);
const bytes=fs.readFileSync(manifestUrl);
const expectedManifestBlob='e6095796475ecf62d5975bccd8dfc733a024e808';
const gitBlobHash=input=>{
 const data=Buffer.from(input);
 return createHash('sha1').update('blob '+data.length+'\\0'.replace('\\0','\\x00')).update(data).digest('hex');
};
if(gitBlobHash(bytes)!==expectedManifestBlob)throw Error('post-NFW manifest changed from independently pinned Git blob');
export const postNfwManifest=JSON.parse(bytes.toString('utf8'));
if(postNfwManifest.schema!=='qi-post-nfw-historical-scope-v1'||postNfwManifest.approvedNfwMerge!=='9e8ae083d0a9906bb9316b1b081cb50df899fecf')throw Error('post-NFW checkpoint identity mismatch');
const expectedPaths=["scripts/bao-integration-baseline.mjs","scripts/bao-integration-scope.test.mjs","scripts/nfw-halo-profile.test.mjs"];
if(JSON.stringify(Object.keys(postNfwManifest.files).sort())!==JSON.stringify(expectedPaths))throw Error('post-NFW file allowlist changed');
const originals=new Map();
for(const file of expectedPaths){
 const record=postNfwManifest.files[file];
 if(!/^[0-9a-f]{40}$/.test(record.beforeBlobSha)||!/^[0-9a-f]{40}$/.test(record.afterBlobSha))throw Error('invalid post-NFW blob pin: '+file);
 const original=Buffer.from(record.beforeText,'utf8');
 if(gitBlobHash(original)!==record.beforeBlobSha)throw Error('invalid historical before bytes: '+file);
 originals.set(file,original);
}
export function projectBeforePostNfw(input,relative){
 const current=Buffer.from(input);
 if(!originals.has(relative))return current;
 const before=originals.get(relative),record=postNfwManifest.files[relative];
 if(current.equals(before))return current;
 if(gitBlobHash(current)===record.afterBlobSha)return Buffer.from(before);
 throw Error('undeclared post-NFW mutation: '+relative);
}
