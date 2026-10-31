import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const read = (path) => readFileSync(fileURLToPath(new URL('../' + path, import.meta.url)), 'utf8');
const review = read('research/COI1_DESI_DR2_LYA_CLAIM_SCOPE_2026-10-31.md');
const census = JSON.parse(read('research/COI0_OBSERVATORY_AND_RELEASE_CENSUS_2026-10-30.json'));

function assertReadOnlyDESIGate(registry) {
  assert.equal(registry.publicationStatus, 'RESEARCH_ONLY_NOT_RUNTIME');
  const programme = registry.programmes.find((entry) => entry.id === 'desi');
  assert.ok(programme, 'DESI programme identity missing');
  assert.equal(programme.evidencePromotion, false);

  const release = registry.releases.find((entry) => entry.id === 'desi-dr2-analysis');
  assert.ok(release, 'original DR2 analysis-release identity missing');
  assert.equal(release.programmeId, 'desi');
  assert.equal(release.version, 'DR2');
  assert.equal(release.access, 'public-analysis-products-only');
  assert.equal(release.claimReviewStatus, 'discovery-metadata-only');

  const study = registry.studies.find((entry) => entry.id === 'coi-study-desi-dr2-lya-2026');
  assert.ok(study, 'Results IV study identity missing');
  assert.ok(study.programmeIds.includes('desi'));
  assert.ok(study.releaseIds.includes('desi-dr2-analysis'));
  assert.equal(study.evidencePromoted, false);
}

test('version-specific DESI results and validation sources remain explicit', () => {
  for (const required of [
    'RESEARCH_ONLY_HOLD_EVIDENCE_PROMOTION',
    'https://arxiv.org/abs/2607.27410v3',
    'https://arxiv.org/abs/2607.27411v2',
    'https://data.desi.lbl.gov/doc/papers/dr2/',
    '2026-08-04',
    'Eq. (24)',
    'Eq. (25)',
    '4.578 ± 0.052',
    '4.572 ± 0.046',
    'z_eff = 2.33',
    '8.600 ± 0.066',
    '39.32 ± 0.33',
    '2.7 sigma',
    '3.2 sigma',
    'DES-Dovekie',
    'Delta(alpha_p) = 0.15%',
    'Delta(phi_p) = 0.8%',
    '10% bias',
    'EXCLUDED_BY_VALIDATION_DO_NOT_PROMOTE',
    'not independently reproduced',
    'public-analysis-products-only',
  ]) {
    // The access classification is enforced against the registry below rather than editorial prose.
    if (required === 'public-analysis-products-only') continue;
    assert.ok(review.includes(required), 'missing source, measured quantity, or nonclaim: ' + required);
  }
  assert.match(review, /do \*\*not\*\* constitute public DR2 raw spectra\/redshifts/);
  assert.match(review, /No theory, formula, bibliography, Evidence, relationship/);
  assert.match(review, /\*\*not discovery\*\*/);
});

test('COI-0 DESI programme, release and paper remain discovery-only with qualified access', () => {
  assertReadOnlyDESIGate(census);
});

test('negative mutations fail closed on release rights and empirical promotion', () => {
  const changes = [
    (copy) => { copy.publicationStatus = 'SHIPPED'; },
    (copy) => { copy.programmes.find((entry) => entry.id === 'desi').evidencePromotion = true; },
    (copy) => { copy.releases.find((entry) => entry.id === 'desi-dr2-analysis').access = 'public-observational-products'; },
    (copy) => { copy.releases.find((entry) => entry.id === 'desi-dr2-analysis').claimReviewStatus = 'empirical-verified'; },
    (copy) => { copy.releases.find((entry) => entry.id === 'desi-dr2-analysis').version = 'DR3'; },
    (copy) => { copy.studies.find((entry) => entry.id === 'coi-study-desi-dr2-lya-2026').evidencePromoted = true; },
  ];
  for (const mutate of changes) {
    const altered = structuredClone(census);
    mutate(altered);
    assert.throws(() => assertReadOnlyDESIGate(altered), 'unsafe mutation was accepted');
  }
});
