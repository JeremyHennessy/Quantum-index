"""Bounded mathematical fixtures for the three-card thermal metadata proposal."""
import math
import json


def near(a, b):
    return abs(a - b) < 1e-12


checks = 0
for beta in [.1, .5, 1, 2]:
    for gap in [.2, 1, 3]:
        p = [1 / (1 + math.exp(-beta * gap)), 1 / (1 + math.exp(beta * gap))]
        assert near(sum(p), 1) and all(x > 0 for x in p)
        checks += 1
        shifted = [math.exp(-beta * (e + 2.3)) for e in [0, gap]]
        z = sum(shifted)
        shifted = [x / z for x in shifted]
        assert all(near(a, b) for a, b in zip(p, shifted))
        checks += 1

for beta in [.1, .5, 1, 2]:
    for ei in [.2, 1, 3]:
        for ef in [.3, 1.5]:
            for theta in [0, .2, .9, math.pi / 2]:
                c, s = math.cos(theta) ** 2, math.sin(theta) ** 2
                p_transition = [[c, s], [s, c]]
                zi, zf = 1 + math.exp(-beta * ei), 1 + math.exp(-beta * ef)
                avg = sum(
                    math.exp(-beta * [0, ei][i]) / zi * p_transition[j][i]
                    * math.exp(-beta * ([0, ef][j] - [0, ei][i]))
                    for i in range(2) for j in range(2)
                )
                assert near(avg, zf / zi)
                checks += 1


def binary_entropy(p):
    return -p * math.log(p) - (1 - p) * math.log(1 - p)


# Swap an unbiased memory with a finite-temperature two-level reservoir.
# Final states remain products: mutual information = 0, but reservoir D > 0.
for beta in [.2, 1, 2]:
    for gap in [.3, 1, 3]:
        q = 1 / (1 + math.exp(beta * gap))
        heat = gap * (.5 - q)
        entropy_decrease = math.log(2) - binary_entropy(q)
        relative_entropy = .5 * math.log(.5 / q) + .5 * math.log(.5 / (1 - q))
        assert near(beta * heat, entropy_decrease + relative_entropy) and beta * heat > entropy_decrease and q > 0
        checks += 1

# Sudden quench H_i = sigma_z -> H_f = sigma_x, U=I, beta=1.
# Partition functions coincide, so the exact TPM exponential average is 1.
# The single operator H_f-H_i has squared value 2I; its exponential average is:
operator_counterexample = math.cosh(math.sqrt(2)) - math.sinh(math.sqrt(2)) / math.sqrt(2) * math.tanh(1)
assert abs(operator_counterexample - 1) > .01
checks += 1

# Coupled Gibbs state H_total=diag(0,0,0,1), beta=1, has nonuniform marginal
# even though each chosen bare Hamiltonian is zero.
interacting_marginal = 2 / (3 + math.exp(-1))
assert abs(interacting_marginal - .5) > .01
checks += 1

biased_entropy = binary_entropy(.1)
assert biased_entropy < math.log(2)
checks += 1

print(json.dumps({
    'checks': checks, 'passed': True,
    'single_work_operator_exponential_counterexample': operator_counterexample,
    'TPM_exponential_average': 1.0,
    'interacting_gibbs_marginal_p0': interacting_marginal,
    'bare_zero_hamiltonian_gibbs_p0': .5,
    'biased_bit_entropy_nats': biased_entropy,
    'ln2': math.log(2)
}, indent=2))
