/**
 * Two intentionally trivial diagonal Hamiltonian families. NOT Yang--Mills.
 * Used to reject the invalid inference "every finite cutoff has a gap,
 * therefore the continuum limit has a uniform positive gap".
 *
 * H_n = diag(0, 1, 2) or diag(0, 1/n, 2).
 * The rational energies are exact; exponential correlations are illustrative
 * floating-point evaluations, not rigorous numerical certificates.
 */
export const FAMILIES = Object.freeze(['uniform', 'collapsing']);

function checkIndex(n) {
  if (!Number.isSafeInteger(n) || n < 1 || n > 1_000_000_000) {
    throw new RangeError('n must be an integer from 1 through 1,000,000,000');
  }
}
function checkFamily(family) {
  if (!FAMILIES.includes(family)) throw new TypeError('unknown toy family');
}

// Numerator and denominator are exact nonnegative integers; no floats.
export function gapFraction(family, n) {
  checkFamily(family);
  checkIndex(n);
  return family === 'uniform' ? { numerator: 1, denominator: 1 } : { numerator: 1, denominator: n };
}

export function isGapBelow(family, n, candidate) {
  checkFamily(family);
  checkIndex(n);
  if (!candidate || !Number.isSafeInteger(candidate.numerator) ||
      !Number.isSafeInteger(candidate.denominator) ||
      candidate.numerator <= 0 || candidate.denominator <= 0) {
    throw new RangeError('candidate must be a strictly positive rational');
  }
  const gap = gapFraction(family, n);
  return BigInt(gap.numerator) * BigInt(candidate.denominator) <
    BigInt(candidate.numerator) * BigInt(gap.denominator);
}

/**
 * Construct n > 1/delta for a rational delta > 0, so 1/n < delta.
 * Returns an exact witness whenever its index fits the supported range.
 * This constructive witness disproves a proposed positive uniform floor in
 * the collapsing family, despite every fixed n being gapped.
 */
export function collapsingCounterexample(candidate) {
  if (!candidate || !Number.isSafeInteger(candidate.numerator) ||
      !Number.isSafeInteger(candidate.denominator) ||
      candidate.numerator <= 0 || candidate.denominator <= 0) {
    throw new RangeError('candidate must be a strictly positive rational');
  }
  const n = Math.floor(candidate.denominator / candidate.numerator) + 1;
  checkIndex(n);
  if (!isGapBelow('collapsing', n, candidate)) throw new Error('failed to construct witness');
  return { n, gap: gapFraction('collapsing', n) };
}

export function approximateConnectedCorrelation(family, n, time, weights = [1, 0]) {
  const gap = gapFraction(family, n);
  if (!Number.isFinite(time) || time < 0) throw new RangeError('time must be finite and nonnegative');
  if (!Array.isArray(weights) || weights.length !== 2 ||
      weights.some(x => !Number.isFinite(x) || x < 0)) {
    throw new RangeError('weights must be two finite nonnegative squared amplitudes');
  }
  const e1 = gap.numerator / gap.denominator;
  return weights[0] * Math.exp(-e1 * time) + weights[1] * Math.exp(-2 * time);
}

export function observedMinimum(family, indices) {
  checkFamily(family);
  if (!Array.isArray(indices) || indices.length === 0) throw new RangeError('supply a nonempty finite index set');
  const gaps = indices.map(n => {
    const g = gapFraction(family, n);
    return { n, value: g.numerator / g.denominator };
  });
  return gaps.reduce((best, row) => row.value < best.value ? row : best);
}
