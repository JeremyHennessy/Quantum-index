import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync,spawnSync} from 'node:child_process';

const base='d0e51baaf8611263ddbb9e1a97a8478ca63e8d96';
const approvedNfwMain='9e8ae083d0a9906bb9316b1b081cb50df899fecf';
const expected=[
 'README.md','docs/CONTINUATION.md','docs/COVERAGE.md','docs/FORMULA_AUDIT.md',
 'docs/FORMULA_COVERAGE.md','docs/RESEARCH_PROFILES.md','docs/coverage.json',
 'docs/responsive-check.html','formulas.js','index.html','theories.js',
 '.github/workflows/validate.yml',
 'research/BAO_FORMULA_INTEGRATION_INTEGRITY_2026-11-01.json',
 'research/NFW_HALO_INTEGRATION_INTEGRITY_2026-11-01.json',
 'scripts/bao-integration-baseline.mjs','scripts/bao-integration-scope.test.mjs',
 'scripts/bao-integration.test.mjs','scripts/bao-projection-core.mjs',
 'scripts/ci-project-split.test.mjs',
 'scripts/dm1a-integration-baseline.mjs','scripts/dm1a-integration.test.mjs',
 'scripts/formula-gaps-source-audit.test.mjs','scripts/physics-explorer-preview.test.mjs','scripts/nfw-halo-profile.test.mjs','tests/browser/bao-formulas.spec.mjs',
 'tests/browser/filter-controls.spec.mjs','tests/browser/astro-formula-review.spec.mjs',
 'tests/browser/physics-explorer.spec.mjs','tests/browser/repository-links.spec.mjs','tests/browser/nfw-halo-profile.spec.mjs'
].sort();

test('complete BAO candidate change scope contains no unlisted tracked or new files',t=>{
 const available=spawnSync('git',['cat-file','-e',base],{stdio:'ignore'});
 assert.ifError(available.error);
 assert.equal(available.status,0,`pinned scope base ${base} is missing; run this check in a full-history checkout containing that commit`);
 const accepted=spawnSync('git',['cat-file','-e',approvedNfwMain],{stdio:'ignore'});
 assert.ifError(accepted.error);
 assert.equal(accepted.status,0,`approved NFW merge ${approvedNfwMain} is missing; historical scope verification requires full history`);
 // This is the immutable BAO -> approved NFW release scope, not the current PR's changed-file list.
 const tracked=execFileSync('git',['diff','--name-only','-z',base,approvedNfwMain,'--'],{encoding:'buffer'}).toString('utf8').split('\0').filter(Boolean);
 assert.deepEqual([...new Set(tracked)].sort(),expected,'candidate file scope changed');
});
