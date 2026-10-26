"""Reconstructed bounded checks; current execution, not inherited results.

Original author source retained in conversation. Dependencies: numpy and scipy.
No experimental validation or infinite-system theorem proof is claimed.
"""
import json
import numpy as np
from scipy.linalg import expm
from scipy.integrate import quad

counts = {}
def check(name, actual, expected, atol=2e-9):
    assert np.allclose(actual, expected, atol=atol, rtol=2e-9), (name, actual, expected)
    counts[name] = counts.get(name, 0) + 1

energies = np.array([-0.3, 0.8, 2.1])
H = np.diag(energies)
A = np.array([[0.4, 1 + 0.2j, -0.3j], [1 - 0.2j, -0.1, 0.7], [0.3j, 0.7, 0.2]])
B = np.array([[0.1, 0.3j, 0.5], [-0.3j, -0.2, 1 - 0.1j], [0.5, 1 + 0.1j, 0.4]])

# Hprime=-f B gives an exact impulse exp(+i epsilon B/hbar).
for beta in [0.2, 1.0, 3.0]:
    p = np.exp(-beta * energies); p /= p.sum(); rho = np.diag(p)
    for hbar in [0.7, 1.0, 2.0]:
        for t in [0.2, 0.8, 2.0]:
            U0 = expm(-1j * H * t / hbar)
            At = U0.conj().T @ A @ U0
            response = 1j * np.trace(rho @ (At @ B - B @ At)) / hbar
            eps = 1e-5
            def value(epsilon, coupling_sign=-1):
                pulse = expm(-coupling_sign * 1j * epsilon * B / hbar)
                state = U0 @ pulse @ rho @ pulse.conj().T @ U0.conj().T
                return np.trace(A @ state)
            derivative = (value(eps) - value(-eps)) / (2 * eps)
            reversed_derivative = (value(eps, 1) - value(-eps, 1)) / (2 * eps)
            check('kubo_negative_coupling', derivative, response)
            check('kubo_positive_coupling_reverses_sign', reversed_derivative, -response)
            check('hermitian_response_is_real', response.imag, 0)
            check('post_pulse_state_normalized', np.trace(U0 @ rho @ U0.conj().T), 1)

# Two-sided +i omega t Fourier convention; exact delta-function weights.
for beta in [0.2, 1.0, 3.0]:
    p = np.exp(-beta * energies); p /= p.sum()
    for hbar in [0.7, 1.0, 2.0]:
        for m in range(3):
            for n in range(3):
                if m == n: continue
                omega = (energies[n] - energies[m]) / hbar
                weight = abs(A[m, n]) ** 2
                symmetrized = np.pi * (p[m] + p[n]) * weight
                chi_imag = np.pi * (p[m] - p[n]) * weight / hbar
                unsymmetrized = 2 * np.pi * p[m] * weight
                reverse_unsymmetrized = 2 * np.pi * p[n] * weight
                check('fdt_nonzero_frequency_weights', symmetrized,
                      hbar * chi_imag / np.tanh(beta * hbar * omega / 2))
                check('detailed_balance', reverse_unsymmetrized / unsymmetrized,
                      np.exp(-beta * hbar * omega))
                check('positive_frequency_dissipation', np.sign(chi_imag), np.sign(omega))
                check('spectrum_units_hbar_rescaling', hbar * chi_imag,
                      np.pi * (p[m] - p[n]) * weight)

# Centering cannot remove a conserved observable's elastic zero-frequency peak.
p = np.exp(-energies); p /= p.sum()
centered = energies - np.dot(p, energies)
variance = np.dot(p, centered ** 2)
assert variance > 0.1
counts['zero_frequency_counterexample_nonzero_variance'] = 1
check('zero_frequency_counterexample_zero_response', H @ np.diag(centered) - np.diag(centered) @ H,
      np.zeros((3, 3)))
for omega in [-2.0, -0.5, 0.5, 2.0]:
    beta, hbar = 1e-5, 0.8
    check('classical_limit', beta * omega * hbar / np.tanh(beta * hbar * omega / 2), 2)
    beta = 1000
    check('zero_temperature_limit', hbar / np.tanh(beta * hbar * omega / 2), hbar * np.sign(omega))

# Fermionic single mode; tau and beta are measured in inverse-energy units.
c = np.array([[0.0, 1.0], [0.0, 0.0]])
for beta in [0.3, 1.0, 2.7]:
    for xi in [-1.2, 0.0, 0.7, 2.0]:
        K = np.diag([0.0, xi]); rho = expm(-beta * K); rho /= np.trace(rho)
        occupation = rho[1, 1]
        def G(tau):
            ctau = expm(tau * K) @ c @ expm(-tau * K)
            return (-np.trace(rho @ ctau @ c.T) if tau > 0
                    else np.trace(rho @ c.T @ ctau))
        for fraction in [0.13, 0.4, 0.81]:
            tau = beta * fraction
            check('fermion_green_positive_branch', G(tau), -(1 - occupation) * np.exp(-xi * tau))
            check('fermion_antiperiodicity', G(tau - beta), -G(tau))
        check('fermion_equal_time_jump', -(1 - occupation) - occupation, -1)
        for n in [-2, -1, 0, 1, 2]:
            wn = (2 * n + 1) * np.pi / beta
            integrand = lambda tau: np.exp(1j * wn * tau) * G(tau)
            fourier = (quad(lambda tau: integrand(tau).real, 0, beta, epsabs=1e-11)[0]
                       + 1j * quad(lambda tau: integrand(tau).imag, 0, beta, epsabs=1e-11)[0])
            check('fermion_matsubara_frequency', fourier, 1 / (1j * wn - xi))

# Research-only KMS checks; no KMS formula is proposed in the metadata batch.
for beta in [0.2, 1.0, 3.0]:
    rho = expm(-beta * H); rho /= np.trace(rho)
    for hbar in [0.7, 1.0, 2.0]:
        for t in [-0.3, 0.0, 0.9]:
            alpha = lambda operator, z: expm(1j * H * z / hbar) @ operator @ expm(-1j * H * z / hbar)
            check('kms_positive_strip', np.trace(rho @ A @ alpha(B, t + 1j * beta * hbar)),
                  np.trace(rho @ alpha(B, t) @ A))
            check('kms_negative_shift', np.trace(rho @ alpha(A, t - 1j * beta * hbar) @ B),
                  np.trace(rho @ B @ alpha(A, t)))
print(json.dumps({'passedAssertions': sum(counts.values()), 'checks': counts,
                  'limits': 'Finite-dimensional algebra and a one-mode Green-function fixture, not proof of infinite-system analyticity or experimental validation.'}, indent=2))
