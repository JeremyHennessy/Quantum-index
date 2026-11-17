/**
 * Research-only exact methodological counterexample: N noninteracting copies
 * of the declared single-plaquette Jacobi Hamiltonian. NOT a connected gauge
 * lattice. It tests a GLOBAL projection-and-tail norm shortcut.
 *
 * P_0 projects onto the tensor product |0>^N (trivial characters).
 * Q_0 H_N P_0 maps to -beta sum_i |1_i>, so the global coupling norm is
 * exactly beta * sqrt(N), even though the sum Hamiltonian has an N-independent
 * excitation gap. This refutes global-volume-uniform *coupling norm* assumptions.
 */
function positiveFinite(x, label) {
  if (!Number.isFinite(x) || x <= 0) throw new RangeError(label + ' must be positive and finite');
}
function positiveInteger(n, label) {
  if (!Number.isSafeInteger(n) || n <= 0) throw new RangeError(label + ' must be a positive safe integer');
}

export function globalVacuumLeakageNorm(numberOfPlaquettes, beta) {
  positiveInteger(numberOfPlaquettes, 'numberOfPlaquettes');
  positiveFinite(beta, 'beta');
  return beta * Math.sqrt(numberOfPlaquettes);
}

export function globalVacuumLeakageSquared(numberOfPlaquettes, beta) {
  positiveInteger(numberOfPlaquettes, 'numberOfPlaquettes');
  positiveFinite(beta, 'beta');
  return beta * beta * numberOfPlaquettes;
}

/** Enumerated independent sparse states |1_i> for small N only. */
export function enumerateExcitationAmplitudes(numberOfPlaquettes, beta) {
  positiveInteger(numberOfPlaquettes, 'numberOfPlaquettes');
  positiveFinite(beta, 'beta');
  if (numberOfPlaquettes > 20) throw new RangeError('enumeration limited to 20 plaquettes');
  const states = new Map();
  for (let i = 0; i < numberOfPlaquettes; i++) {
    // State bitmask 1<<i codes one site in character |1>, others |0>.
    states.set(2 ** i, -beta);
  }
  return states;
}

/** Exact two-level finite-plaquette truncation: eigenvalue spacing. */
export function twoLevelSinglePlaquetteGap(alpha, beta) {
  positiveFinite(alpha, 'alpha');
  positiveFinite(beta, 'beta');
  return Math.hypot(3 * alpha / 4, 2 * beta);
}

/** Tensor sum of the two-level truncations: same first gap for every N. */
export function independentTwoLevelTensorGap(numberOfPlaquettes, alpha, beta) {
  positiveInteger(numberOfPlaquettes, 'numberOfPlaquettes');
  return twoLevelSinglePlaquetteGap(alpha, beta);
}
