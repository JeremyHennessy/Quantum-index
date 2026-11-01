import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {createBaoProjector} from './bao-projection-core.mjs';
import {
  baoIntegrationManifest,baoIntegrationPaths,baoProductPaths,baoIntegrationTestPaths,
  loadPreBaoRuntime,loadPreNfwRuntime,projectPreBao,projectPreNfw,readPreBaoFile,readPreNfwFile
} from './bao-integration-baseline.mjs';
import {loadRuntime} from './category-trust-census.mjs';
import {projectPreDm1a,readPreDm1aFile} from './dm1a-integration-baseline.mjs';

const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const plain=value=>JSON.parse(JSON.stringify(value));
const formulaIds=['bao-drag-sound-horizon','bao-flat-transverse-radial-distance-ratios'];
const sourceId='desi-dr2-cosmology-2025';
const sourceUrl='https://arxiv.org/html/2503.14738v3';
const expectedProductPaths=[
 'README.md','docs/CONTINUATION.md','docs/COVERAGE.md','docs/FORMULA_AUDIT.md',
 'docs/FORMULA_COVERAGE.md','docs/RESEARCH_PROFILES.md','docs/coverage.json',
 'docs/responsive-check.html','formulas.js','index.html'
];

function syntheticManifest({before='baseline',after='baseline\nadded',kind='append',mutate}={}){
 const beforeBytes=Buffer.from(before),afterBytes=Buffer.from(after);
 const entry={kind,beforeSha256:hash(beforeBytes),afterSha256:hash(afterBytes),beforeBase64:beforeBytes.toString('base64'),afterBase64:afterBytes.toString('base64')};
 const value={schema:'qi-bao-formula-integration-v1',baseMain:'d0e51baaf8611263ddbb9e1a97a8478ca63e8d96',files:{'x.txt':entry}};
 mutate?.(value);
 const bytes=Buffer.from(JSON.stringify(value));
 return {bytes,digest:hash(bytes),entry};
}

test('BAO manifest pins exact product and integration path sets and every recorded byte pair',()=>{
 assert.deepEqual(baoProductPaths,expectedProductPaths);
 assert.deepEqual(baoIntegrationTestPaths,[
  'tests/browser/filter-controls.spec.mjs','scripts/formula-gaps-source-audit.test.mjs',
  'scripts/ci-project-split.test.mjs','.github/workflows/validate.yml',
  'tests/browser/astro-formula-review.spec.mjs','tests/browser/physics-explorer.spec.mjs',
  'tests/browser/repository-links.spec.mjs'
 ]);
 assert.deepEqual(baoIntegrationPaths,[...expectedProductPaths,...baoIntegrationTestPaths].sort());
 assert.equal(baoIntegrationManifest.baseMain,'d0e51baaf8611263ddbb9e1a97a8478ca63e8d96');
 assert.equal(baoIntegrationManifest.reportedOriginalLocalCommit,'8d73703974e9b8ce6f15f886808bd137c80defe4');
 assert.match(baoIntegrationManifest.recoveryNote,/not present in this checkout/);
 for(const file of baoIntegrationPaths){
  const entry=baoIntegrationManifest.files[file],snapshot=projectPreNfw(fs.readFileSync(file),file);
  assert.ok(entry,file);
  assert.equal(hash(snapshot),entry.afterSha256,file+': candidate bytes');
  assert.equal(hash(projectPreBao(snapshot,file)),entry.beforeSha256,file+': exact pre-BAO bytes');
  assert.equal(projectPreBao(snapshot,file).toString('base64'),entry.beforeBase64,file+': immutable before bytes');
  assert.equal(entry.afterBase64,snapshot.toString('base64'),file+': exact after bytes');
 }
});

test('hosted validation checkout fetches the pinned base only in the scope-checking job',()=>{
 const entry=baoIntegrationManifest.files['.github/workflows/validate.yml'];
 const before=Buffer.from(entry.beforeBase64,'base64').toString('utf8');
 const after=Buffer.from(entry.afterBase64,'base64').toString('utf8');
 const checkout='  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n';
 assert.equal(before.split(checkout).length-1,1,'expected one validate-job checkout block');
 const expected=before.replace(checkout,checkout+'        with:\n          fetch-depth: 0\n');
 assert.notEqual(expected,before);
 assert.equal(after,expected,'workflow change is limited to the pinned-base scope-checkout depth');
});

test('BAO projection accepts only exact before or exact candidate bytes and rejects real-file mutations',()=>{
 for(const file of baoIntegrationPaths){
  const bytes=fs.readFileSync(file),entry=baoIntegrationManifest.files[file];
  assert.deepEqual(projectPreBao(bytes,file),Buffer.from(entry.beforeBase64,'base64'),file);
  assert.throws(()=>projectPreBao(Buffer.concat([bytes,Buffer.from([0])]),file),/undeclared (?:BAO|NFW) mutation/,file+': appended byte');
  const altered=Buffer.from(bytes);altered[Math.floor(altered.length/2)]^=1;
  assert.throws(()=>projectPreBao(altered,file),/undeclared (?:BAO|NFW) mutation/,file+': one-byte mutation');
 }
 const formulaBytes=fs.readFileSync('formulas.js'),anchor=Buffer.from('Comoving pre-drag sound horizon');
 const index=formulaBytes.indexOf(anchor);assert.ok(index>0);
 const alteredFormula=Buffer.from(formulaBytes);alteredFormula[index]^=1;
 assert.throws(()=>projectPreBao(alteredFormula,'formulas.js'),/undeclared (?:BAO|NFW) mutation/);
 const indexBytes=fs.readFileSync('index.html'),formulaVersion=hash(fs.readFileSync('formulas.js')).slice(0,16),wrongVersion=Buffer.from(indexBytes.toString('utf8').replace(`formulas.js?v=${formulaVersion}`,`formulas.js?v=${'0'.repeat(16)}`));
 assert.notDeepEqual(wrongVersion,indexBytes);
 assert.throws(()=>projectPreBao(wrongVersion,'index.html'),/undeclared (?:BAO|NFW) mutation/);
 assert.doesNotThrow(()=>projectPreBao(Buffer.from('unlisted'),'scripts/not-in-scope.mjs'));
 assert.throws(()=>projectPreBao(Buffer.from('aliased'),'../formulas.js'),/alias component/);
});

test('pure projector validates its pin, allowlist, byte hashes, base64 and path metadata',()=>{
 const valid=syntheticManifest();
 const options={expectedManifestSha256:valid.digest,allowedPaths:['x.txt']};
 const projector=createBaoProjector(valid.bytes,options);
 assert.equal(projector.project(Buffer.from('baseline'),'x.txt').toString(),'baseline');
 assert.equal(projector.project(Buffer.from('baseline\nadded'),'x.txt').toString(),'baseline');
 assert.equal(projector.project(Buffer.from('other'),'other.txt').toString(),'other');
 assert.throws(()=>projector.project(Buffer.from('bad'),'x.txt'),/undeclared BAO mutation/);
 assert.throws(()=>createBaoProjector(valid.bytes,{...options,expectedManifestSha256:'0'.repeat(64)}),/manifest digest mismatch/);
 assert.throws(()=>createBaoProjector(valid.bytes,{...options,allowedPaths:['x.txt','missing.txt']}),/allowlist mismatch/);
 assert.throws(()=>createBaoProjector(valid.bytes,{...options,allowedPaths:['../x.txt']}),/alias component/);

 const wrongHash=syntheticManifest({mutate:value=>{value.files['x.txt'].beforeSha256='0'.repeat(64);}});
 assert.throws(()=>createBaoProjector(wrongHash.bytes,{expectedManifestSha256:wrongHash.digest,allowedPaths:['x.txt']}),/before bytes do not match/);
 const badBase64=syntheticManifest({mutate:value=>{value.files['x.txt'].beforeBase64='YWFh';}});
 assert.throws(()=>createBaoProjector(badBase64.bytes,{expectedManifestSha256:badBase64.digest,allowedPaths:['x.txt']}),/before bytes do not match/);
 const missing=syntheticManifest();
 assert.throws(()=>createBaoProjector(missing.bytes,{expectedManifestSha256:missing.digest,allowedPaths:[]}),/allowlist mismatch/);
 const extra=syntheticManifest({mutate:value=>{value.files['extra.txt']={...value.files['x.txt']};}});
 assert.throws(()=>createBaoProjector(extra.bytes,{expectedManifestSha256:extra.digest,allowedPaths:['x.txt']}),/allowlist mismatch/);
 const wrongBase=syntheticManifest({mutate:value=>{value.baseMain='wrong';}});
 assert.throws(()=>createBaoProjector(wrongBase.bytes,{expectedManifestSha256:wrongBase.digest,allowedPaths:['x.txt']}),/unexpected integration base main/);
});

test('projector snapshots return the recorded kind and public manifest metadata cannot alter projection',()=>{
 const valid=syntheticManifest();
 const projector=createBaoProjector(valid.bytes,{expectedManifestSha256:valid.digest,allowedPaths:['x.txt']});
 assert.equal(projector.snapshot('x.txt').kind,'append');
 assert.ok(Object.isFrozen(projector.manifest));
 assert.ok(Object.isFrozen(projector.manifest.files['x.txt']));
 assert.throws(()=>{projector.manifest.files['x.txt'].afterSha256='0'.repeat(64);},TypeError);
 assert.throws(()=>{projector.manifest.files['x.txt'].kind='replace';},TypeError);
 assert.equal(projector.project(Buffer.from('baseline\nadded'),'x.txt').toString(),'baseline');
 assert.equal(projector.snapshot('x.txt').kind,'append');
});

test('live runtime contains exactly two source-qualified BAO definitions and preserves unrelated records',()=>{
 const baseline=loadPreBaoRuntime(),current=loadPreNfwRuntime();
 const oldFormulas=plain(baseline.QI_FORMULAS.formulas),added=current.QI_FORMULAS.formulas.filter(f=>formulaIds.includes(f.id));
 assert.equal(current.QI_FORMULAS.formulas.length,466);
 assert.equal(added.length,2);
 assert.deepEqual(plain(current.QI_FORMULAS.formulas.filter(f=>!formulaIds.includes(f.id))),oldFormulas);
 assert.deepEqual(plain(current.QI_DATA),plain(baseline.QI_DATA));
 const expected=[...oldFormulas,...plain(added)];
 assert.deepEqual(plain(current.QI_FORMULAS.formulas),expected);
 const source=current.QI_DATA.sources.find(s=>s.id===sourceId);
 assert.ok(source);assert.equal(source.title,'DESI DR2 Results II: Measurements of Baryon Acoustic Oscillations and Cosmological Constraints');
 assert.equal(source.url,'https://arxiv.org/abs/2503.14738');
 const byId=new Map(added.map(f=>[f.id,f]));
 const drag=byId.get('bao-drag-sound-horizon');
 assert.equal(drag.name,'Comoving sound horizon at baryon drag');
 assert.equal(drag.latex,'r_{\\rm d}=\\int_{z_{\\rm d}}^{\\infty}\\frac{c_s(z)}{H(z)}\\,dz');
 assert.equal(drag.plain,'r_d = integral from z_d to infinity of c_s(z)/H(z) dz');
 assert.equal(drag.formulaType,'defining');assert.equal(drag.category,'Astroparticle physics & cosmology');
 assert.deepEqual(plain(drag.theoryIds),['lambda-cdm']);assert.deepEqual(plain(drag.sourceIds),[sourceId]);
 assert.equal(drag.metadataReview,'explicit');assert.equal(drag.curationBatch,'bao-standard-ruler-formulas-2026-10-31');
 assert.ok(drag.assumptions.some(x=>/not the photon last-scattering redshift/.test(x)));
 assert.ok(drag.assumptions.some(x=>/is not itself a measured BAO peak/.test(x)));
 assert.equal(drag.sourceLocations[0].url,sourceUrl);
 assert.match(drag.sourceLocations[0].locator,/Eq\. \(1\)/);

 const distances=byId.get('bao-flat-transverse-radial-distance-ratios');
 assert.equal(distances.name,'Flat-universe transverse and radial BAO distance ratios');
 assert.equal(distances.latex,'\\frac{D_{\\rm M}(z)}{r_{\\rm d}},\\qquad \\frac{D_{\\rm H}(z)}{r_{\\rm d}},\\qquad D_{\\rm M}(z)=\\frac{c}{H_0}\\int_0^z\\frac{dz\'}{H(z\')/H_0}\\;(\\Omega_{\\rm K}=0),\\qquad D_{\\rm H}(z)=\\frac{c}{H(z)}');
 assert.equal(distances.formulaType,'defining');assert.equal(distances.category,'Astroparticle physics & cosmology');
 assert.deepEqual(plain(distances.theoryIds),['lambda-cdm']);assert.deepEqual(plain(distances.sourceIds),[sourceId]);
 assert.equal(distances.metadataReview,'explicit');assert.equal(distances.curationBatch,'bao-standard-ruler-formulas-2026-10-31');
 assert.ok(distances.assumptions.some(x=>/explicitly assumes spatially flat FLRW geometry/.test(x)));
 assert.ok(distances.assumptions.some(x=>/not direct measurements of dark-energy microphysics/.test(x)));
 assert.ok(distances.assumptions.some(x=>/not a DESI measurement or likelihood/.test(x)));
 assert.equal(distances.sourceLocations[0].url,sourceUrl);
 assert.match(distances.sourceLocations[0].locator,/Eq\. \(4\).*Eq\. \(5\).*Eq\. \(3\)/);
 for(const formula of added){
  assert.ok(current.QI_DATA.theories.some(t=>formula.theoryIds.includes(t.id)));
  assert.ok(formula.sourceLocations.every(location=>formula.sourceIds.includes(location.sourceId)&&current.QI_DATA.sources.some(s=>s.id===location.sourceId)));
 }

 const expectedAudit=plain(baseline.QI_FORMULA_AUDIT),lambda=expectedAudit.entries.find(e=>e.theoryId==='lambda-cdm');
 lambda.formulaIds.push(...formulaIds);
 assert.deepEqual(plain(current.QI_FORMULA_AUDIT),expectedAudit,'formula audit changes only through derived Lambda-CDM formula IDs');
 for(const key of Object.keys(baseline))if(!['QI_FORMULAS','QI_FORMULA_AUDIT'].includes(key))assert.deepEqual(plain(current[key]),plain(baseline[key]),key);
 const coverage=JSON.parse(readPreNfwFile('docs/coverage.json','utf8'));
 assert.equal(coverage.formulas,466);assert.equal(coverage.explicitFormulaMetadata,280);
 assert.equal(coverage.theories,485);assert.equal(coverage.sources,612);assert.equal(coverage.formulaCategories,30);
 const priorCoverage=JSON.parse(readPreBaoFile('docs/coverage.json','utf8'));
 assert.equal(priorCoverage.formulas,464);assert.equal(priorCoverage.explicitFormulaMetadata,278);
});

test('BAO projection composes exactly with the older DM-1A checkpoint reader',()=>{
 const file='formulas.js',current=fs.readFileSync(file),preBao=projectPreBao(current,file),preDm=projectPreDm1a(current,file);
 const dmLedger=JSON.parse(fs.readFileSync('research/DM1A_INTEGRATION_INTEGRITY_2026-10-29.json','utf8'));
 assert.equal(hash(preBao),dmLedger.files[file].afterSha256);
 assert.equal(hash(preDm),dmLedger.files[file].beforeSha256);
 assert.equal(hash(readPreDm1aFile(file)),dmLedger.files[file].beforeSha256);
 assert.deepEqual(projectPreDm1a(preDm,file),preDm,'exact older snapshot remains idempotent');
 assert.deepEqual(projectPreDm1a(preBao,file),preDm,'pre-BAO current snapshot projects through DM-1A');
});
