"""Standalone finite-matrix KMS fixtures; standard library only.

These computations test conventions. Analyticity and the all-observables finite
identity follow from the derivation in PROPOSAL.md, not from sampled values.
No repository files, network services, or external state are changed.
"""
import cmath
import json
import math
import random


def zeros(d):
    return [[0j for _ in range(d)] for _ in range(d)]


def unit(d, i, j):
    a = zeros(d)
    a[i][j] = 1
    return a


def mul(a, b):
    d = len(a)
    return [[sum(a[i][k] * b[k][j] for k in range(d))
             for j in range(d)] for i in range(d)]


def adj(a):
    return [[a[j][i].conjugate() for j in range(len(a))]
            for i in range(len(a))]


def diagonal(values):
    a = zeros(len(values))
    for i, value in enumerate(values):
        a[i][i] = value
    return a


def tr(a):
    return sum(a[i][i] for i in range(len(a)))


def expectation(rho, a):
    return tr(mul(rho, a))


def gibbs(energies, beta):
    # Stable normalization; a common energy origin is immaterial.
    weights = [math.exp(-beta * (e - min(energies))) for e in energies]
    return diagonal([w / sum(weights) for w in weights])


def alpha(a, energies, z, hbar):
    return [[a[i][j] * cmath.exp(1j * (energies[i] - energies[j]) * z / hbar)
             for j in range(len(a))] for i in range(len(a))]


def F(rho, a, b, energies, z, hbar):
    return expectation(rho, mul(a, alpha(b, energies, z, hbar)))


def boundary_rhs(rho, a, b, energies, t, hbar):
    return expectation(rho, mul(alpha(b, energies, t, hbar), a))


def check_pair(rho, a, b, energies, beta, hbar, t):
    lhs = F(rho, a, b, energies, t + 1j * beta * hbar, hbar)
    rhs = boundary_rhs(rho, a, b, energies, t, hbar)
    residual = abs(lhs - rhs)
    assert residual <= 2e-11 * max(1, abs(lhs), abs(rhs)), (lhs, rhs)
    return residual


def rotate(u, a):
    return mul(mul(u, a), adj(u))


if __name__ == '__main__':
    counts = {'matrix_unit_boundary_checks': 0, 'dense_complex_boundary_checks': 0,
              'energy_shift_checks': 0, 'unitary_basis_checks': 0,
              'negative_controls': 0}
    max_residual = 0.0
    for energies in [[0, 1], [-2, .5], [0, 0, 2], [-1, .4, 2.3], [0, .3, 1, 2]]:
        d = len(energies)
        basis = [unit(d, i, j) for i in range(d) for j in range(d)]
        for beta in [.1, .7, 1.4]:
            rho = gibbs(energies, beta)
            assert abs(tr(rho) - 1) < 1e-14
            for hbar in [.6, 1, 2.3]:
                for t in [-1.1, 0, .37, 2.4]:
                    for a in basis:
                        for b in basis:
                            max_residual = max(max_residual, check_pair(
                                rho, a, b, energies, beta, hbar, t))
                            counts['matrix_unit_boundary_checks'] += 1

    rng = random.Random(20261026)
    for d in [2, 3, 4]:
        energies = [0.4 * i * i - .7 for i in range(d)]
        for _ in range(20):
            a = [[complex(rng.uniform(-1, 1), rng.uniform(-1, 1))
                  for _ in range(d)] for _ in range(d)]
            b = [[complex(rng.uniform(-1, 1), rng.uniform(-1, 1))
                  for _ in range(d)] for _ in range(d)]
            beta, hbar, t = .83, 1.71, -.42
            rho = gibbs(energies, beta)
            max_residual = max(max_residual, check_pair(
                rho, a, b, energies, beta, hbar, t))
            counts['dense_complex_boundary_checks'] += 1
            shifted = [e + 8.2 for e in energies]
            z = t + 1j * beta * hbar
            lhs = F(rho, a, b, energies, z, hbar)
            shifted_lhs = F(gibbs(shifted, beta), a, b, shifted, z, hbar)
            assert abs(lhs - shifted_lhs) < 2e-11
            counts['energy_shift_checks'] += 1
            # Discrete Fourier U yields a generally non-diagonal Hermitian H.
            u = [[cmath.exp(2j * math.pi * i * j / d) / math.sqrt(d)
                  for j in range(d)] for i in range(d)]
            # Compute both complex exponentials separately. For complex z,
            # exp(-i H z/hbar) is NOT the adjoint of exp(+i H z/hbar).
            exp_plus = rotate(u, diagonal([cmath.exp(1j * e * z / hbar) for e in energies]))
            exp_minus = rotate(u, diagonal([cmath.exp(-1j * e * z / hbar) for e in energies]))
            rotated_alpha = mul(mul(exp_plus, rotate(u, b)), exp_minus)
            rotated_lhs = expectation(rotate(u, rho), mul(rotate(u, a), rotated_alpha))
            rotated_rhs = expectation(rotate(u, rho), mul(
                rotate(u, alpha(b, energies, t, hbar)), rotate(u, a)))
            assert abs(rotated_lhs - lhs) < 2e-11
            assert abs(rotated_lhs - rotated_rhs) < 2e-11
            counts['unitary_basis_checks'] += 1

    # Exact transparent witness: A=|0><1|, B=|1><0|, beta=ln3,
    # gap=1, hbar=2. Correct upper-boundary value is p1=1/4 at t=0.
    energies, beta, hbar, t = [0, 1], math.log(3), 2, 0
    rho, a, b = gibbs(energies, beta), unit(2, 0, 1), unit(2, 1, 0)
    correct = boundary_rhs(rho, a, b, energies, t, hbar)
    assert abs(correct - .25) < 1e-14
    wrong = {
        'negative_imaginary_shift': abs(F(rho, a, b, energies, -1j * beta * hbar, hbar) - correct),
        'missing_hbar_in_shift': abs(F(rho, a, b, energies, 1j * beta, hbar) - correct),
        'unchanged_operator_order': abs(F(rho, a, b, energies, 0, hbar) - correct),
        'spurious_fermionic_minus': abs(correct - (-correct)),
    }
    # A and B can be realized as c and c-dagger in a one-mode CAR algebra.
    # The un-time-ordered KMS boundary has no extra fermionic sign.
    nonthermal = diagonal([.6, .4])
    wrong['stationary_not_kms_at_specified_beta'] = abs(
        F(nonthermal, a, b, energies, 1j * beta * hbar, hbar) -
        boundary_rhs(nonthermal, a, b, energies, t, hbar))
    # Degenerate populations unequal: stationary, but not Gibbs for ANY beta.
    deg_e, deg_rho = [0, 0, 1], diagonal([.5, .2, .3])
    deg_a, deg_b = unit(3, 0, 1), unit(3, 1, 0)
    wrong['nonuniform_degenerate_eigenspace'] = abs(
        F(deg_rho, deg_a, deg_b, deg_e, 1j * beta * hbar, hbar) -
        boundary_rhs(deg_rho, deg_a, deg_b, deg_e, 0, hbar))
    # A restricted commuting algebra can give false reassurance: diagonal
    # A,B obey the boundary in ANY diagonal state. Full algebra is required.
    check_pair(nonthermal, diagonal([1, 2]), diagonal([3, 4]), energies, beta, hbar, 0)
    for residual in wrong.values():
        assert residual > .1, residual
        counts['negative_controls'] += 1

    print(json.dumps({'passed': True, 'counts': counts,
        'maximum_positive_residual': max_residual,
        'negative_control_residuals': wrong,
        'correct_two_level_upper_boundary': correct.real,
        'scope': 'Finite-model convention checks, not proof of infinite-system existence, uniqueness, or thermalization.'}, indent=2))
