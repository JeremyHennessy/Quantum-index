/**
 * Research-only SU(2) single-plaquette class-function toy Hamiltonian:
 * H_{alpha,beta} = diag(alpha*n*(n+2)/4) - beta*(S+S*) on ell^2(N_0).
 * Units alpha and beta are chosen independently; no 4D continuum claim.
 *
 * The analytic lower bound is proven in PLAQUETTE_CERTIFICATE.md. This
 * implementation numerically evaluates it; passing tests is not a proof.
 */
function finitePositive(value, label) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`${label} must be finite and strictly positive`);
  }
}
export function casimir(n) {
  if (!Number.isSafeInteger(n) || n < 0) throw new RangeError('n must be a nonnegative safe integer');
  return n * (n + 2) / 4;
}

export function analyticGapCertificate(alpha, beta) {
  finitePositive(alpha, 'alpha');
  finitePositive(beta, 'beta');
  // Trial ground vector (2,1,0,...)/sqrt(5) and perpendicular w=(-1,2,0,...)/sqrt(5).
  const groundUpper = 3 * alpha / 20 - 4 * beta / 5;
  const excitedTrial = 3 * alpha / 5 + 4 * beta / 5;
  // Bounding the omitted tail n>=2 by the edge and bulk Gershgorin inequalities.
  const tailLower = Math.min(2 * alpha - beta, 15 * alpha / 4 - 2 * beta);
  const bridge = 2 * beta / Math.sqrt(5);
  const excitedLower = (excitedTrial + tailLower - Math.hypot(excitedTrial - tailLower, 2 * bridge)) / 2;
  const gapLower = excitedLower - groundUpper;
  return { groundUpper, excitedTrial, tailLower, bridge, excitedLower, gapLower,
    certifiedPositive: gapLower > 0 };
}

/**
 * Approximate the two lowest eigenvalues of a finite Jacobi principal block.
 * Sturm LDL counting plus bisection; results are numerical, NOT certificates.
 */
export function truncatedEigenvalues(alpha, beta, size, count = 2) {
  finitePositive(alpha, 'alpha');
  finitePositive(beta, 'beta');
  if (!Number.isSafeInteger(size) || size < 2 || size > 4096) {
    throw new RangeError('size must be an integer in 2..4096');
  }
  if (!Number.isSafeInteger(count) || count < 1 || count > size) {
    throw new RangeError('count must be an integer from 1 through size');
  }
  const lower = -2 * beta - 1;
  const upper = alpha * casimir(size - 1) + 2 * beta + 1;
  const sturmCount = (x) => {
    let pivot = -x;
    let result = 0;
    // Tiny negative pivots implement a one-sided numerical convention.
    // No precision claim is made at exact eigenvalues.
    if (Math.abs(pivot) < 1e-13) pivot = -1e-13;
    if (pivot < 0) result++;
    for (let n = 1; n < size; n++) {
      pivot = alpha * casimir(n) - x - beta * beta / pivot;
      if (Math.abs(pivot) < 1e-13) pivot = -1e-13;
      if (pivot < 0) result++;
    }
    return result;
  };
  const roots = [];
  for (let k = 0; k < count; k++) {
    let lo = lower, hi = upper;
    for (let iteration = 0; iteration < 80; iteration++) {
      const mid = (lo + hi) / 2;
      if (sturmCount(mid) > k) hi = mid;
      else lo = mid;
    }
    roots.push((lo + hi) / 2);
  }
  return roots;
}

export function truncatedGap(alpha, beta, size) {
  const [e0, e1] = truncatedEigenvalues(alpha, beta, size, 2);
  return e1 - e0;
}

export function representationWidth(alpha, beta) {
  finitePositive(alpha, 'alpha');
  finitePositive(beta, 'beta');
  // Dimensional scaling heuristic only: electric quadratic growth balances
  // the shifted discrete kinetic term near its low-energy edge.
  return (beta / alpha) ** 0.25;
}