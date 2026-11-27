"""Exact finite-moment slow-mode certificate. Research control, no Wilson inputs."""

from dataclasses import dataclass
from fractions import Fraction as Q


def _q(value):
    if isinstance(value, bool) or not isinstance(value, (int, str, Q)):
        raise TypeError("use exact rational inputs (int, str, Fraction)")
    return Q(value)


def _mul(a, b):
    out = [Q(0)] * (len(a) + len(b) - 1)
    for i, x in enumerate(a):
        for j, y in enumerate(b):
            out[i + j] += x * y
    return out


def _cheb(k, threshold):
    previous, current = [Q(1)], [-Q(1), 2 / threshold]
    if k == 0:
        return previous
    for _ in range(1, k):
        following = _mul([-Q(2), 4 / threshold], current)
        for i, v in enumerate(previous):
            following[i] -= v
        previous, current = current, following
    return current


def _eval(coefficients, x):
    y = Q(0)
    for c in reversed(coefficients):
        y = c + x * y
    return y


@dataclass(frozen=True)
class Certificate:
    degree: int
    witness_lower: Q
    witness_upper: Q
    tail_upper: Q

    @property
    def falsifies_proposed_gap(self):
        return self.witness_lower > 0


def certify(q, r, k, moments):
    """moments[j-1] = (central estimate, certified absolute error) for C_j.

    Assumes a normalized vacuum-orthogonal source for a positive contraction.
    The returned upper bound concerns mass in [r,1], not all mass above q.
    This is not a feasibility check for a truncated moment problem.
    """
    q, r = _q(q), _q(r)
    if not 0 < q < r <= 1 or type(k) is not int or k < 0:
        raise ValueError("require 0 < q < r <= 1 and integral k >= 0")
    moments = list(moments)
    degree = 2 * k + 2
    if len(moments) < degree:
        raise ValueError("not enough measured moments")
    poly = _cheb(k, q)
    g = _mul([Q(0), -q, Q(1)], _mul(poly, poly))
    lower = upper = Q(0)
    for c, (center, err) in zip(g[1:], moments[:degree]):
        center, err = _q(center), _q(err)
        if err < 0:
            raise ValueError("negative certified error")
        lo, hi = max(Q(0), center - err), min(Q(1), center + err)
        if lo > hi:
            raise ValueError("moment interval outside [0,1]")
        lower += min(c * lo, c * hi)
        upper += max(c * lo, c * hi)
    b = q * q / 4
    if upper < -b:
        raise ValueError("interval contradicts the witness floor")
    a = r * (r - q) * _eval(poly, r) ** 2
    return Certificate(degree, lower, upper, min(Q(1), (upper + b) / (a + b)))
