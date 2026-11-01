// Test-only projection from the recovered BAO candidate to its exact baseline.
// The source task's desktop commit is unavailable; this guards only the proven
// before/after byte pairs stored in the independently reviewed manifest.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createBaoProjector} from './bao-projection-core.mjs';

const root=fileURLToPath(new URL('../',import.meta.url));
const manifestPath=new URL('../research/BAO_FORMULA_INTEGRATION_INTEGRITY_2026-11-01.json',import.meta.url);
const manifestBytes=fs.readFileSync(manifestPath);
const nfwManifestPath=new URL('../research/NFW_HALO_INTEGRATION_INTEGRITY_2026-11-01.json',import.meta.url);
const nfwManifestBytes=fs.readFileSync(nfwManifestPath);
const axionManifestPath=new URL('../research/QCD_AXION_INTEGRATION_INTEGRITY_2026-11-01.json',import.meta.url);
const axionManifestBytes=fs.readFileSync(axionManifestPath);
const productPaths=[
  'README.md','docs/CONTINUATION.md','docs/COVERAGE.md','docs/FORMULA_AUDIT.md',
  'docs/FORMULA_COVERAGE.md','docs/RESEARCH_PROFILES.md','docs/coverage.json',
  'docs/responsive-check.html','formulas.js','index.html'
];
const integrationPaths=[
  'tests/browser/filter-controls.spec.mjs','scripts/formula-gaps-source-audit.test.mjs',
  'scripts/ci-project-split.test.mjs','.github/workflows/validate.yml',
  'tests/browser/astro-formula-review.spec.mjs','tests/browser/physics-explorer.spec.mjs',
  'tests/browser/repository-links.spec.mjs'
];
const projector=createBaoProjector(manifestBytes,{
  expectedManifestSha256:'bbc9e7a5655ee76ea34839f0d4240f52071b8121ca3c92d9642e05c6219a5fcc',
  allowedPaths:[...productPaths,...integrationPaths]
});
const nfwPaths=[
  'README.md','docs/CONTINUATION.md','docs/COVERAGE.md','docs/FORMULA_AUDIT.md',
  'docs/FORMULA_COVERAGE.md','docs/RESEARCH_PROFILES.md','docs/coverage.json',
  'docs/responsive-check.html','formulas.js','index.html','theories.js',
  'scripts/bao-integration-scope.test.mjs','scripts/bao-integration.test.mjs',
  'tests/browser/filter-controls.spec.mjs','tests/browser/physics-explorer.spec.mjs',
  'tests/browser/repository-links.spec.mjs','tests/browser/nfw-halo-profile.spec.mjs'
];
const nfwProjector=createBaoProjector(nfwManifestBytes,{
  expectedManifestSha256:'2015487aa1e7781adbca3a7bf5f6b4260c6fdef6ac98f2c0924d404d1983d6b4',
  expectedSchema:'qi-nfw-halo-integration-v1',
  expectedBaseMain:'b4693ddf09738106df60a36ab97579c5cc702da0',
  allowedPaths:nfwPaths
});
const axionProductPaths=[
  'README.md','docs/CONTINUATION.md','docs/COVERAGE.md','docs/FORMULA_AUDIT.md',
  'docs/FORMULA_COVERAGE.md','docs/RESEARCH_PROFILES.md','docs/coverage.json',
  'docs/responsive-check.html','formulas.js','index.html','theories.js'
];
const axionPathAllowlist=[
  'scripts/bao-integration-scope.test.mjs',
  'scripts/nfw-halo-profile.test.mjs',
  'scripts/dm2a-qcd-axion-source.test.mjs','scripts/axion-integration.test.mjs',
  'tests/browser/filter-controls.spec.mjs','tests/browser/axion-misalignment.spec.mjs',
  'tests/browser/physics-explorer.spec.mjs','tests/browser/repository-links.spec.mjs'
];
const axionProjector=createBaoProjector(axionManifestBytes,{
  expectedManifestSha256:'6d81bc7f1e452a7e47cf9e16b92c9ffa68c315e5a9a99c82c0484ea7dc978c2d',
  expectedSchema:'qi-qcd-axion-integration-v1',
  expectedBaseMain:'9e8ae083d0a9906bb9316b1b081cb50df899fecf',
  allowedPaths:[...axionProductPaths,...axionPathAllowlist]
});
assert.deepEqual(axionProjector.manifest.productPaths,axionProductPaths,'QCD axion product path scope changed');
assert.deepEqual(axionProjector.manifest.integrationPaths,axionPathAllowlist,'QCD axion test path scope changed');
assert.deepEqual(projector.manifest.productPaths,productPaths,'BAO product path scope changed');
assert.deepEqual(projector.manifest.integrationPaths,integrationPaths,'BAO integration path scope changed');

function relativePath(file){
  const absolute=file instanceof URL?fileURLToPath(file):path.resolve(file);
  const relative=path.relative(root,absolute);
  assert.ok(relative!==''&&!relative.startsWith('..'+path.sep)&&relative!=='..'&&!path.isAbsolute(relative),
    'BAO projection path escapes the repository');
  return relative.split(path.sep).join('/');
}

export function projectPreNfw(bytes,relative){
  const current=Buffer.from(bytes),snapshot=nfwProjector.snapshot(relative);
  if(snapshot&&(current.equals(snapshot.before)||current.equals(snapshot.after)))return nfwProjector.project(current,relative);
  return nfwProjector.project(axionProjector.project(current,relative),relative);
}

export function projectPreAxion(bytes,relative){
  const current=Buffer.from(bytes),nfw=nfwProjector.snapshot(relative),bao=projector.snapshot(relative);
  if(nfw&&current.equals(nfw.before))return current;
  if(bao&&current.equals(bao.before))return current;
  return axionProjector.project(current,relative);
}

export function projectPreBao(bytes,relative){
  const snapshot=projector.snapshot(relative),current=Buffer.from(bytes);
  if(snapshot&&current.equals(snapshot.before))return current;
  if(snapshot&&current.equals(snapshot.after))return projector.project(current,relative);
  return projector.project(projectPreNfw(current,relative),relative);
}

export function readPreBaoFile(file,options){
  const relative=relativePath(file),bytes=projectPreBao(fs.readFileSync(file),relative);
  const encoding=typeof options==='string'?options:options?.encoding;
  return encoding?bytes.toString(encoding):bytes;
}

export function readPreNfwFile(file,options){
  const relative=relativePath(file),bytes=projectPreNfw(fs.readFileSync(file),relative);
  const encoding=typeof options==='string'?options:options?.encoding;
  return encoding?bytes.toString(encoding):bytes;
}

export function readPreAxionFile(file,options){
  const relative=relativePath(file),bytes=projectPreAxion(fs.readFileSync(file),relative);
  const encoding=typeof options==='string'?options:options?.encoding;
  return encoding?bytes.toString(encoding):bytes;
}

const runtimeFiles=[
  'theories.js','developments.js','evidence.js','formulas.js','formula-audit.js',
  'profiles.js','questions.js','problems.js','passports.js'
];
export function loadPreBaoRuntime(){
  const sandbox={window:{}};
  vm.createContext(sandbox);
  for(const file of runtimeFiles)vm.runInContext(readPreBaoFile(file,'utf8'),sandbox,{filename:file});
  return sandbox.window;
}
export function loadPreNfwRuntime(){
  const sandbox={window:{}};vm.createContext(sandbox);
  for(const file of runtimeFiles){
    const source=readPreNfwFile(file,'utf8');
    vm.runInContext(source, sandbox,{filename:file});
  }
  return sandbox.window;
}
export function loadPreAxionRuntime(){
  const sandbox={window:{}};vm.createContext(sandbox);
  for(const file of runtimeFiles)vm.runInContext(readPreAxionFile(file,'utf8'),sandbox,{filename:file});
  return sandbox.window;
}

export const baoIntegrationManifest=projector.manifest;
export const baoIntegrationPaths=projector.paths;
export const baoProductPaths=Object.freeze(productPaths);
export const baoIntegrationTestPaths=Object.freeze(integrationPaths);
export const nfwIntegrationManifest=nfwProjector.manifest;
export const nfwIntegrationPaths=nfwProjector.paths;
export const axionIntegrationManifest=axionProjector.manifest;
export const axionIntegrationPaths=axionProjector.paths;
export const axionProductPathList=Object.freeze(axionProductPaths);
export const axionIntegrationTestPathList=Object.freeze(axionPathAllowlist);
