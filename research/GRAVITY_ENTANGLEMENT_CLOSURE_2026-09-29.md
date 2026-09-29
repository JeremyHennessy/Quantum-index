# Research candidate — minimum closure set for tabletop classical-gravity alternatives

**Status:** original Quantum Index synthesis; **not** a verified world-first theorem  
**Baseline:** `cbe65b1f30216565fd93aea838264a4f9838bc6c`  
**Reviewed:** 2026-09-29  
**Production impact:** none; this note is isolated on a research branch

## Question

What is the smallest set of experimentally distinct measurements/interventions that can reject the **explicit classical-gravity alternatives currently represented by, or immediately adjacent to, the Quantum Index gravity-entanglement corpus**?

This is deliberately narrower than “prove gravity is quantum.” A finite set of tests cannot exclude every logically possible classical or hybrid theory. The target here is a closed, auditable hypothesis set.

## Why this question surfaced from Quantum Index

The current graph has enough pieces to ask this, but they are not yet connected as one decision problem:

- `bmv-gravity-entanglement` has only one graph edge and no formula or ResearchQuestion.
- `postquantum-classical-gravity` has only one graph edge and no formula or ResearchQuestion.
- `stochastic-gravity` has a dedicated ResearchQuestion but is weakly connected to the experimental-witness branch.
- the formula atlas does not yet contain the classical–quantum decoherence/diffusion trade-off.
- the quantum-gravity Problem asks for experimentally discriminating observables, but the present 2025 gravity-entanglement Evidence/Development record is one-sided relative to the 2025–2026 dispute.

Those are data-model observations, not scientific conclusions.

## Prior-art rejection log

Several initially promising “new” ideas were rejected during this pass because they already exist in the literature.

1. **Decoherence–diffusion as a classical-gravity discriminator — not new.**  
   Oppenheim, Sparaciari, Šoda and Weller-Davies derive a general trade-off for Markovian completely-positive classical–quantum dynamics and apply it to gravity.  
   Source: https://doi.org/10.1038/s41467-023-43348-2

2. **Source/probe cross-correlation as a discriminator — not new.**  
   Kryhin and Sudhir propose cross-correlation signatures for classical stochastic gravity acting on quantum matter.  
   Source: https://arxiv.org/abs/2309.09105

3. **Use different matter species or block matter propagation to test the Aziz–Howl mechanism — not new.**  
   Vidal and Iyer explicitly derive this control in 2026.  
   Source: https://arxiv.org/abs/2607.03429

4. **A temporal non-classicality witness using one probe — not new.**  
   Temporal-witness programs already exist under explicit conservation-law assumptions.  
   Sources: https://doi.org/10.1088/1751-8121/acda6b and https://arxiv.org/abs/2506.15474

The rejection log is important: the candidate below is **not** a relabeling of one of these known results.

## Contested premise that must not be treated as settled

Aziz and Howl (Nature 2025) argue that classical gravity coupled to quantum field theoretic matter can generate entanglement. That conclusion has been directly challenged by several later analyses. Relevant sources include:

- Aziz & Howl: https://doi.org/10.1038/s41586-025-09595-7
- Marletto, Oppenheim, Vedral & Wilson: https://arxiv.org/abs/2511.07348
- Marletto & Vedral: https://arxiv.org/abs/2510.19969
- Schneider, Huggett & Linnemann: https://doi.org/10.1088/1361-6382/ae6f62
- Lin & Mondal: https://doi.org/10.1103/fv38-kgkb
- Vidal & Iyer: https://arxiv.org/abs/2607.03429

Therefore the Quantum Index 2025 record should eventually be represented as a **contested theoretical claim / interpretation boundary**, not as an uncontested result that classical gravity generically produces entanglement.

## Formal hypothesis set

For this candidate result, define four explicit hypothesis classes.

### H1 — local classical measurement/feedback mediator

A Kafri–Taylor–Milburn-type local classical channel mediates the effective gravitational interaction. Under its stated assumptions, the channel cannot create entanglement between initially unentangled probes; the price of classical mediation is additional noise/decoherence.

Representative source: https://doi.org/10.1088/1367-2630/16/6/065020

### H2 — semiclassical/stochastic classical tidal field

The relevant Newtonian tidal degree of freedom remains classical. Lin & Mondal's 2026 comparison finds no final probe entanglement in the semiclassical and stochastic cases they analyze, while a quantized tidal parity degree of freedom can entangle the probes.

Representative source: https://doi.org/10.1103/fv38-kgkb

### H3 — Markovian completely-positive classical–quantum dynamics

Gravity is classical and quantum matter couples to it through a Markovian CP hybrid dynamics. Oppenheim et al. derive an observable decoherence/back-reaction/diffusion trade-off. In a Hamiltonian first-order back-reaction specialization, their Eq. (27) has the form

[
\left\langle \omega\!\cdot\!\frac{\partial H_I}{\partial z}\right\rangle
\left\langle \omega\!\cdot\!\frac{\partial H_I}{\partial z}\right\rangle^{\dagger}
\preceq 8\langle D_2\rangle\langle D_0\rangle.
]

Here the observable back-reaction strength is bounded by the product of classical diffusion and quantum decoherence, subject to the paper's definitions and assumptions.

Representative source: https://doi.org/10.1038/s41467-023-43348-2

### H4 — Aziz–Howl-type matter-exchange mechanism in a classical gravitational background

For purposes of experimental discrimination, treat the claimed Aziz–Howl entangling contribution as a separate mechanism even though its interpretation is disputed. Vidal & Iyer identify the contribution with quantum-matter cross-propagation and predict that it disappears if the interferometers use distinct, non-interconverting matter fields or an intervention blocks matter-field propagation while preserving the intended gravitational configuration.

Representative sources:
- https://doi.org/10.1038/s41586-025-09595-7
- https://arxiv.org/abs/2607.03429

## Candidate test families

Define three experimentally distinct test families.

### T_E — controlled gravity-mediated entanglement test

Prepare initially separable probes, bound non-gravitational interaction channels, run the gravity-mediated interaction, and perform an entanglement witness/tomographic test.

**Rejects in the positive-entanglement outcome, under the stated isolation/model assumptions:** H1 and H2.

### T_D — simultaneous decoherence / diffusion / back-reaction test

Measure or bound, in a common model and parameter regime:

- quantum decoherence,
- classical gravitational diffusion/noise,
- the strength of quantum-to-classical back-reaction.

Test the Oppenheim et al. CP trade-off rather than studying one observable in isolation.

**Rejects if the measured quantities violate the applicable trade-off with controlled uncertainties:** H3.

### T_X — matter-cross-propagation intervention

Repeat a matched gravity-entanglement protocol while removing the matter-sector exchange channel identified by Vidal & Iyer — for example distinct non-interconverting matter species, or a validated barrier/intervention that suppresses the relevant matter-field propagator without materially changing the gravitational configuration.

**Rejects if an otherwise matched entangling signal persists after that mechanism is removed:** H4, as characterized by the Vidal–Iyer analysis.

## Coverage matrix

| Explicit hypothesis | T_E | T_D | T_X |
|---|---:|---:|---:|
| H1 local classical measurement/feedback | **1** | 0 | 0 |
| H2 semiclassical/stochastic classical tidal field | **1** | 0 | 0 |
| H3 Markovian CP classical–quantum dynamics | 0 | **1** | 0 |
| H4 Aziz–Howl-type matter-exchange mechanism | 0 | 0 | **1** |

A “1” means the corresponding test has a literature-supported incompatibility criterion for that row under the row's assumptions. A “0” means no such universal incompatibility is asserted here.

## Candidate result R1 — minimum explicit-alternative closure set

For the four hypothesis classes above, the unique minimum covering set of the three defined test families is

[
\boxed{\mathcal T_{\min}=\{T_E,\;T_D,\;T_X\}}.
]

### Proof

1. H3 is covered only by T_D in the defined matrix, so every complete cover must contain T_D.
2. H4 is covered only by T_X, so every complete cover must contain T_X.
3. H1 and H2 are not covered by T_D or T_X and are both covered by T_E, so every complete cover must contain T_E.
4. Therefore any complete cover contains all three tests.
5. The set {T_E, T_D, T_X} covers all four rows, so it is sufficient.

Hence the minimum cardinality is three and the minimum set is unique **for this explicitly defined hypothesis/test matrix**.

This proof is a finite logical/set-cover result. It does not depend on claiming that any of the underlying papers is a final theory of gravity.

## What a three-positive-outcome campaign would establish

If all of the following were experimentally demonstrated with assumptions and systematics independently validated:

1. T_E: probe entanglement attributable to the intended gravitational interaction,
2. T_D: violation of the applicable Markovian classical–quantum decoherence/diffusion/back-reaction constraint,
3. T_X: persistence of the signal after the specified quantum-matter exchange channel is removed,

then the four explicit classical alternatives H1–H4 would all be incompatible with the observations.

That would be materially stronger than a single “we saw entanglement” claim.

It would **not** logically prove that every possible classical, retrocausal, non-Markovian, nonlocal, superdeterministic or otherwise unmodeled account is impossible.

## The uncovered class

### H5 — unrestricted non-Markovian / nonlocal classical-hybrid alternatives

Oppenheim et al. explicitly note that non-Markovian behavior can evade the simple Markovian trade-off logic; fully quantum theories can also exhibit false decoherence followed by recoherence.

Temporal witnesses under conservation-law assumptions add another useful axis, but they do not establish a universal no-go theorem for every imaginable classical-hybrid dynamics.

Therefore:

[
\text{closure}(H1\ldots H4)=\text{solved by the 3-test cover above},
]

while

[
\text{closure}(\text{all conceivable classical-gravity models})=\text{open}.
]

That boundary is part of the result, not a caveat to hide.

## Novelty status

**Confirmed:** the individual ingredients T_E, T_D and T_X have prior art.

**New in this Quantum Index research pass:** the explicit conversion of the current classical-gravity alternatives into a hypothesis–test coverage matrix and the minimality proof for the three-test closure set.

**Not confirmed:** that no paper in the full literature has independently formulated the same three-row/three-test hitting-set construction. The targeted searches performed in this pass did not surface an equivalent packaged result, but that is not an exhaustive novelty search.

Accordingly this should be described as an **original candidate synthesis**, not a discovery claim.

## Immediate Quantum Index follow-up if this survives review

Without changing the approved visual baseline:

1. Correct the 2025 gravity-entanglement Evidence/Development record so the Aziz–Howl claim and direct rebuttals are represented together.
2. Add a dedicated ResearchQuestion for gravity-mediated entanglement experimental closure.
3. Add source-linked formula coverage for the classical–quantum decoherence/diffusion trade-off.
4. Link BMV, postquantum classical gravity, stochastic gravity, open systems and experimental evidence explicitly in the graph.
5. Add a “discriminating tests” structure to the Quantum Gravity Problem page, with assumptions visible beside every inference.
6. Keep this R1 result labeled **candidate** until a physicist-level literature/derivation review and a broader novelty search are complete.

## Falsification / review checklist

R1 should be rejected or revised if any of the following is shown:

- a current H1 or H2 model can satisfy the exact experimental conditions of T_E and still generate the claimed entanglement without adding a nonclassical mediator/resource;
- the experimental observables chosen for T_D do not map to the same coefficients/regime required by the Oppenheim trade-off;
- the T_X intervention changes the gravitational interaction enough that the matched comparison is invalid;
- H4 does not, after full field-theory treatment, actually predict removal of the entangling contribution under the specified intervention;
- an existing publication already gives the same explicit hypothesis matrix and minimal closure proof;
- an important currently indexed classical alternative belongs in the target set but is not covered by T_E, T_D or T_X.

The last item is especially important: adding a newly relevant hypothesis can increase the minimum test set. The result is versioned to the hypothesis set above.
