# Yang–Mills mass-gap proof-lab: first preflight
Research-only, **not a mass-gap proof**. Snapshot: 2026-11-17.
Frozen baseline: main commit a60397f017c5c0bfc2bf88be046320a00c9d28de.
No changes to the shipped app, UI, existing scientific records, tests, deployment or CI.

## Official target
Jaffe and Witten, [Clay official statement, section 4](https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf#page=6): construct **nontrivial** quantum Yang–Mills on R⁴ **for every compact simple gauge group G** satisfying the specified axioms and with **positive physical mass gap**. A classical Lagrangian, a finite-cutoff gap or an SU(2)-only result does not solve the full problem.

## Current external status
The [Yang–Mills group's 2026-11-10 independent initial assessment](https://github.com/yang-mills-group/YM) supports the October 28 Lean **existence** construction but expressly leaves uniqueness of the infinite-volume limit and the **mass gap** open. This is an initial assessment, not a Clay ruling or independent reproduction by this lab.
Quantum Index's [existing Yang–Mills source review](../YANG_MILLS_SOURCE_REVIEW_2026-10-16.md) reconciles classical sign conventions; it does not prove the quantum problem.
[This November 17 conditional paper](https://hexagonmath.org/2611.00543v1) also says the mass gap is not proved; its proposals are NOT verified here.

## Exact benchmark
We test the invalid inference that *all finite approximations are gapped, therefore the limit is uniformly gapped*. These are elementary three-level diagonal Hamiltonians, **not gauge theories**.

- Uniform: H_n = diag(0,1,2). First spectral gap is exactly 1 for every positive integer n.
- Collapsing: K_n = diag(0,1/n,2). Every finite n has positive first gap 1/n, but the infimum over n is zero: for any δ>0 choose integer n>1/δ.
- For a vacuum-orthogonal state, Euclidean-time correlations are positive sums of e^(-E t). Uniform H_n correlations obey a common decay rate 1. The K_n first-excitation correlation e^(-t/n) has no common positive rate over all n.

The module uses exact rational gaps and BigInt rational comparisons. Floating-point correlations are **illustrations only**, not proof certificates. It does not compute any Yang–Mills observable. The mathematics in this README is an elementary direct derivation, not a new theorem.

### Reproduce
Run from repository root:

    node --test research/ym-mass-gap-20261117/gap-benchmark.test.mjs

Seven isolated local Node tests passed on 2026-11-17. No Lean executable was available and **no formal Lean proof or GitHub CI acceptance is claimed**.

## Claim registry / proof dependencies
See [claim-registry.json](claim-registry.json).

| Gate | Status | Required next evidence |
|---|---|---|
| YM-SPEC-01 official all-G, R⁴ specification | Official | Keep exact quantifiers and physical model |
| YM-EXT-01 2026 existence construction | External initial assessment | Pin source/Lean version, independently audit definitions and assumptions |
| YM-TOY-01 finite uniform gap | Elementary & locally tested | Formalize with a pinned Lean kernel |
| YM-TOY-02 positive finite gaps can collapse | Elementary & locally tested | Retain as rejection / counterexample control |
| **YM-IR-01 noncircular uniform infrared estimate** | **OPEN** | Precisely formulate and prove a physical-scale bound through continuum and infinite-volume limits |
| YM-BRIDGE-01 transfer to reconstructed Hamiltonian | **OPEN** | Prove limit/positivity/phase/operator assumptions; no imported gap assumption |

## Bounded next sequence
1. Audit the original 2026 construction and official Clay problem line-by-line; split assumptions from proved statements.
2. Formalize the elementary spectral/correlation lemma and negative control in **Lean 4**, and compile it. Explicitly reject any sorry or new unreviewed axiom.
3. Select a published SU(2) finite Wilson-lattice bound with exact source locator and physical units; reproduce the calculation without claiming continuum proof.
4. Propose one narrow, falsifiable **open** infrared lemma and check that its hypotheses do not already assume the desired mass gap.

Preservation rule: do not merge research into main or change any approved UI merely because local toy-model tests pass.
