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
const productPaths=[
  'README.md','docs/CONTINUATION.md','docs/COVERAGE.md','docs/FORMULA_AUDIT.md',
  'docs/FORMULA_COVERAGE.md','docs/RESEARCH_PROFILES.md','docs/coverage.json',
  'docs/responsive-check.html','formulas.js','index.html'
];
const integrationPaths=['tests/browser/filter-controls.spec.mjs','scripts/formula-gaps-source-audit.test.mjs','scripts/ci-project-split.test.mjs','.github/workflows/validate.yml'];
const projector=createBaoProjector(manifestBytes,{
  expectedManifestSha256:'2124964d5a0762fb219523fb0f69ca1149529ef983279df517416ac1c330e629',
  allowedPaths:[...productPaths,...integrationPaths]
});
assert.deepEqual(projector.manifest.productPaths,productPaths,'BAO product path scope changed');
assert.deepEqual(projector.manifest.integrationPaths,integrationPaths,'BAO integration path scope changed');

function relativePath(file){
  const absolute=file instanceof URL?fileURLToPath(file):path.resolve(file);
  const relative=path.relative(root,absolute);
  assert.ok(relative!==''&&!relative.startsWith('..'+path.sep)&&relative!=='..'&&!path.isAbsolute(relative),
    'BAO projection path escapes the repository');
  return relative.split(path.sep).join('/');
}

export function projectPreBao(bytes,relative){
  return projector.project(bytes,relative);
}

export function readPreBaoFile(file,options){
  const relative=relativePath(file),bytes=projectPreBao(fs.readFileSync(file),relative);
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

export const baoIntegrationManifest=projector.manifest;
export const baoIntegrationPaths=projector.paths;
export const baoProductPaths=Object.freeze(productPaths);
export const baoIntegrationTestPaths=Object.freeze(integrationPaths);
