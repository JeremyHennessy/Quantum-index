import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const reviewPath = fileURLToPath(new URL('../research/NUCLEAR_ELECTRONIC_CC_SCOPE_REVIEW_2026-10-30.md', import.meta.url));
const review = await readFile(reviewPath, 'utf8');

test('nuclear/electronic CC source review distinguishes the shared ansatz from problem-specific inputs', () => {
  assert.match(review, /\|\\Psi_\{\\rm CC\}\\rangle = e\^T \|\\Phi\\rangle/);
  for (const citation of [
    'https://doi.org/10.1016/0029-5582(58)90280-3',
    'https://doi.org/10.1016/0029-5582(60)90140-1',
    'https://doi.org/10.1063/1.1727484',
    'https://arxiv.org/abs/0704.2854',
    'https://arxiv.org/abs/1211.4748',
    'https://doi.org/10.1103/PhysRevLett.103.062503',
    'https://arxiv.org/abs/2512.17311v2',
  ]) assert.ok(review.includes(citation), `missing primary source citation: ${citation}`);

  for (const distinction of [
    'shared mathematical structure',
    'molecular electronic structure',
    'nuclear structure',
    'three-nucleon interactions',
    'center-of-mass',
    'symmetry-breaking',
    'Do not transfer the chemical shorthand “CCSD(T)”',
    'not a numerical reproduction or independent proof',
  ]) assert.ok(review.toLowerCase().includes(distinction.toLowerCase()), `missing scope distinction: ${distinction}`);
});

test('review recommends a domain specialization without adding a duplicate theory identity or formula card', () => {
  assert.match(review, /existing coupled-cluster family/i);
  assert.match(review, /rather than adding a duplicate first-class theory identity/i);
  assert.match(review, /do not relabel it as a published domain-specific equation card/i);
  assert.match(review, /does not add a theory record, formula card, bibliography row, or application behavior/i);
});
