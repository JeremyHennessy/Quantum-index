import test from 'node:test';
import assert from 'node:assert/strict';
import {casimir, analyticGapCertificate, truncatedEigenvalues,
  truncatedGap, representationWidth} from './plaquette-certificate.mjs';

const close = (actual, expected, atol = 1e-9) =>
  assert.ok(Math.abs(actual - expected) <= atol, `${actual} not within ${atol} of ${expected}`);

test('character-labelled SU(2) Casimir values are correct', () => {
  close(casimir(0), 0); close(casimir(1), 3 / 4);
  close(casimir(2), 2); close(casimir(3), 15 / 4);
});
test('ground trial and perpendicular variational energies match exact rational values', () => {
  const c = analyticGapCertificate(1, 0.5);
  close(c.groundUpper, -1 / 4);
  close(c.excitedTrial, 1);
  close(c.tailLower, 3 / 2);
  close(c.bridge, 1 / Math.sqrt(5));
});
test('analytic certificate agrees with closed form and strictly exceeds 79/80', () => {
  const c = analyticGapCertificate(1, 0.5);
  close(c.excitedLower, 5 / 4 - Math.sqrt(21 / 20) / 2);
  close(c.gapLower, 3 / 2 - Math.sqrt(21 / 20) / 2);
  assert.ok(c.gapLower > 79 / 80);
  assert.ok(c.certifiedPositive);
  // Exact rational inequality: (41/40)^2 - 21/20 = 1/1600.
  assert.equal(41 ** 2 - 21 * 80, 1);
});
test('finite 2x2 block agrees with exact two eigenvalues -1/4 and 1', () => {
  const [a, b] = truncatedEigenvalues(1, 0.5, 2);
  close(a, -0.25); close(b, 1);
});
test('larger principal truncations respect analytical infinite-tail certificate', () => {
  const c = analyticGapCertificate(1, 0.5);
  for (const n of [2, 3, 4, 8, 16, 64]) {
    const g = truncatedGap(1, 0.5, n);
    assert.ok(g > c.gapLower, `cutoff ${n} violates analytic lower bound`);
  }
});
test('independent diagonalization fixtures confirm finite spectrum numerics', () => {
  // Python/numpy symmetric-eigensolver reference, *not* proof.
  close(truncatedGap(1, 0.5, 3), 1.1084990457494468, 2e-10);
  close(truncatedGap(1, 0.5, 8), 1.0982430963107073, 2e-10);
  close(truncatedGap(1, 0.5, 64), 1.0982430963107033, 2e-10);
});
test('certificate reports lack of proof at weaker electric coupling', () => {
  assert.equal(analyticGapCertificate(0.2, 0.5).certifiedPositive, false);
  assert.equal(analyticGapCertificate(0.01, 25).certifiedPositive, false);
});
test('fixed eight-representation truncation badly overestimates physical-gap-scale trajectory', () => {
  const g8 = truncatedGap(0.01, 25, 8);
  const g128 = truncatedGap(0.01, 25, 128);
  assert.ok(g8 / g128 > 8, `expected false positive by factor > 8, found ${g8 / g128}`);
  close(g128, 0.9968669423410859, 5e-8);
});
test('scale-adaptive basis improves the numerical approximation but is not proof', () => {
  const alpha = 0.01, beta = 25;
  const width = representationWidth(alpha, beta);
  close(width, Math.sqrt(50), 1e-10);
  const n = Math.ceil(5 * width);
  const gAdaptive = truncatedGap(alpha, beta, n);
  const gRef = truncatedGap(alpha, beta, 128);
  assert.ok(Math.abs(gAdaptive / gRef - 1) < 0.005);
});
test('extremely weak electric coefficient and fixed magnetic coupling collapse numerically', () => {
  const g8 = truncatedGap(0.0002, 0.5, 8);
  const g128 = truncatedGap(0.0002, 0.5, 128);
  assert.ok(g8 / g128 > 8);
});
test('reject invalid parameters and cutoffs instead of returning plausible numbers', () => {
  assert.throws(() => analyticGapCertificate(-1, 0.5), RangeError);
  assert.throws(() => analyticGapCertificate(1, 0), RangeError);
  assert.throws(() => truncatedGap(1, 0.5, 1), RangeError);
  assert.throws(() => truncatedGap(1, 0.5, 99999), RangeError);
  assert.throws(() => truncatedEigenvalues(1, 0.5, 4, 5), RangeError);
});