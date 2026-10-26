# DGLAP: one source-qualified representative-formula proposal

**Status: LOCAL PROPOSAL ONLY. No repository edits, branch changes, commits, pushes, pull requests, merge or deployment.**

## Result and integration delta

The existing `dglap-evolution` entity has no linked formula at accepted main `1ca99e424959e2238448335ccd7b6143c376e94d`. The gap persists at response draft `3e3bc1b6da8eed0e43ab96e98d69f990362b2f72` and local KMS/instrument successor `50c5b434d4f249b7a17d7cfa616a602d2ac258df`.

Recommend **one LO spacelike PDF-evolution formula, two primary bibliography records, and zero edits to existing entities, sources or formulas**. Formula ID: `dglap-spacelike-lo-pdf-evolution`. The `dglap-evolution` audit alone would change from documented gap to formula-bearing. Do not call this complete DGLAP mathematical coverage.

| Frozen base | Sources | Formulas | Explicit metadata | Formula gaps |
|---|---:|---:|---:|---:|
| Accepted main | 603 -> 605 | 457 -> 458 | 268 -> 269 | 114 -> 113 |
| Response draft | 605 -> 607 | 457 -> 458 | 271 -> 272 | 114 -> 113 |
| Unpublished combined successor | 608 -> 610 | 459 -> 460 | 273 -> 274 | 112 -> 111 |

All rows are **non-mutating VM simulations**, not shipped metrics. There are still 483 entities. No IDs or new-source identities collide on those three committed snapshots. All existing runtime records, relationships, and unrelated audit rows are unchanged.

## Equation and conventions

For `i,j = g,q_a,qbar_a`, `a=1,...,n_f`, use

\[
\frac{\partial f_i(x,\mu_F^2)}{\partial t}
= a_s(\mu_F^2)\sum_j\int_x^1\frac{dz}{z}\,
P^{(0)}_{ij}(z) f_j(x/z,\mu_F^2),\qquad
 t=\ln\frac{\mu_F^2}{\mu_0^2},\quad a_s=\frac{\alpha_s}{2\pi},\quad\mu_R=\mu_F.
\]

This equality defines the **LO-truncated evolution model**: higher-order `a_s^2` kernel terms are not included. `f_i` is a number density per dimensionless momentum fraction, **not** `F_i=x f_i` and not a normalized one-particle probability. The kernel's first index is the observed child; the second is the parent. Its `z` is child/parent momentum fraction. An individual `q_a <- g` entry must not include the singlet multiplicity `2 n_f`.

The `P^(0)` in the card excludes the coupling. A full kernel `K=a_s P^(0)+a_s^2 P^(1)+...` instead gives `df/dt=K convolution f`; attaching another `a_s` would double count it. HOPPET and QCDNUM use different meanings of their symbol `P`; the candidate makes that mapping explicit. Also `d/d ln(mu_F)` is twice `d/d ln(mu_F^2)`.

The four SU(3) kernels are recorded in candidate metadata. With `D=[1/(1-z)]_+`, `C_F=4/3`, `C_A=3`, `T_R=1/2`,

\[
\begin{aligned}
P_{qq}^{(0)}&=C_F[(1+z^2)D+\tfrac32\delta(1-z)],\\
P_{q_a g}^{(0)}&=T_R[z^2+(1-z)^2],\qquad
P_{gq_a}^{(0)}=C_F[1+(1-z)^2]/z,\\
P_{gg}^{(0)}&=2C_A[zD+(1-z)/z+z(1-z)]
 +\frac{11C_A-4T_Rn_f}{6}\delta(1-z).
\end{aligned}
\]

The antiquark analogues agree at LO; different-flavor and quark-antiquark entries vanish at this order. For the singlet `Sigma=sum_a(q_a+qbar_a)`, the `Sigma <- g` entry is `2 n_f P_{q_a g}`.

### Endpoint and density conversion checks

Define the plus distribution by its action on a smooth test function, not by separately divergent integrals:

\[
\int_0^1 D(z)\phi(z)dz=\int_0^1\frac{\phi(z)-\phi(1)}{1-z}dz.
\]

On `x<z<1`, this is the subtracted integral plus `phi(1) ln(1-x)`. Thus `C_F[(1+z^2)/(1-z)]_+`, with the **whole fraction** under the plus, is equivalent to the displayed `P_qq` **without an additional delta**. Adding `3 C_F/2` again violates valence conservation. These kernels are not pointwise probabilities at `z=1`.

Multiplying the number-density equation by `x` gives

\[
\partial_t F_i(x)=a_s\sum_j\int_x^1 dz\,P_{ij}^{(0)}(z)F_j(x/z).
\]

The explicit `1/z` disappears. This matters because the software implementations and Botje's Appendix A use momentum densities even though the main defining equations use number densities. No assertion about a finite `x=0` or `x=1` pointwise value is made.

## Scope, units and exclusions

Use an unpolarized, leading-twist **collinear**, spacelike QCD representative; fixed massless active-flavor count; MSbar factorization/coupling convention; equal renormalization/factorization scales; perturbative input and evolution scales well above `Lambda_QCD`. Leading twist is a conservative restriction adopted for this card, not a claim that either software paper proves a factorization theorem. Independent review additionally inspected the explicit leading-power/twist-two statement in [Gehrmann, von Manteuffel and Yang, arXiv:2302.00022v1, Sec. 2.2, printed p. 3/PDF p. 4](https://arxiv.org/pdf/2302.00022v1#page=4); this contextual corroboration is not proposed as another bibliography addition.

The full formula has dimensionless `x,z,t,alpha_s,P,f`; all scales have energy units and the logarithm contains a ratio. The independent variable is scale, not physical time. Suitable endpoint behavior and finite relevant moments are required for moment manipulations. A numerical LO solution still needs actual input PDFs and a consistently defined LO running coupling.

No heavy-flavor threshold matching, higher-order precision, cross sections, fitted data, parameter inference, new physics or numerical phenomenology is claimed. No identification with polarized, time-like fragmentation, transverse-momentum, BFKL, nonlinear saturation or higher-twist evolution is made. Enhanced endpoint logarithms can call for more than the displayed fixed-order kernel. The nonperturbative starting PDFs are not derived by DGLAP.

## Primary-source qualification

1. **Salam and Rojo, HOPPET** (journal 2009; inspected arXiv:0804.3755v1, 2008). [Sec. 1, printed/PDF p. 4, Eq. (1)](https://arxiv.org/pdf/0804.3755v1#page=4) establishes matrix convolution and index ordering. [Sec. 2, p. 7, Eqs. (3)-(4)](https://arxiv.org/pdf/0804.3755v1#page=7) gives the external coupling convention; p. 8 states MSbar. The p. 6 implementation convention is kept separate from the number-density equation. DOI: `10.1016/j.cpc.2008.08.010`.
2. **Botje, QCDNUM** (journal 2011; inspected arXiv:1005.1481v3, 2010). [Sec. 2.2, pp. 7-9, Eqs. (2.4)-(2.7), (2.14)-(2.15)](https://arxiv.org/pdf/1005.1481v3#page=8) specifies scale, density, convolution and full-kernel conventions. [Appendix A, p. 62, Eqs. (A.2)-(A.5)](https://arxiv.org/pdf/1005.1481v3#page=62) supplies LO SU(3) kernels and plus prescription. [P. 26, Eq. (4.1) and following paragraph](https://arxiv.org/pdf/1005.1481v3#page=26) identifies input sum rules and preservation; it warns that finite-grid coverage cannot certify integrals below the lowest x point. DOI: `10.1016/j.cpc.2010.10.020`.

The relevant equations were inspected in extracted text **and rendered page pixels**. Versioned arXiv PDFs were openly downloaded; bibliographic dates/DOIs were checked against arXiv and INSPIRE metadata. Local source files are reference working copies, not proposed repository assets.

**Altarelli-Parisi 1977:** existing `wave3-altarelli-parisi-1977` stays untouched as entity provenance. The publisher full-text retrieval returned HTTP 403; INSPIRE record 119585 exposed no open full-text document. No paywall/access bypass was attempted. Neither a guessed equation number nor a full-text review claim is attached to that source. The two inspected primary implementation papers are sufficient for this modern representative.

## Verification outcomes and limits

`dglap-math-check.py` passes **17 exact positive checks, 6 negative mutations, and 3 numerical synthetic convolution points**. In particular:

- Valence: `integral P_qq = 0`.
- Momentum: `integral z P_qq = -16/9`, `integral z P_gq = 16/9`; `integral z P_{q_a g}=1/6`, `integral z P_gg=-n_f/3`. Therefore every parent column conserves total momentum, with the proper `2 n_f` flavor count.
- These identities preserve valid initial normalizations; arbitrary initial functions are not made normalized. Quark momentum alone is not conserved, and total parton number is not asserted to be conserved.
- The analytic fixture `P(z)=z`, `f(x)=x^2` gives `(P convolution f)(x)=x-x^2`; its Mellin moments factorize under `M_N=integral x^(N-1)f(x)dx`.
- Incorrect `1/z`, density conversion, double coupling, omitted endpoint logarithm, omitted/double delta, transposed off-diagonal indices and omitted flavor multiplicity are detected. Delta identity and log-scale factor two also pass.

`runtime-check.mjs` passes immutable-baseline hashes, candidate metadata, source references, duplicate checks, full existing-record preservation and the single-audit transition on all three frozen bases. This is an isolated VM simulation, **not** an integrated repository test suite or browser/render test. No renderer module was present at the inspected local project paths; formula rendering remains unrun. Independent review outputs are linked by the final receipt once complete.

Reproduce from this directory:

```sh
python build-candidate.py
python dglap-math-check.py
node runtime-check.mjs
```

## Future integration recommendation and stopping condition

Research stops at a source-qualified, independently reviewed standalone proposal. A future authorized integration should append the two source records and one formula via established project conventions, preserve historical snapshots and unrelated metadata, regenerate current coverage only, add candidate-focused regression tests, run the full repository acceptance suite, and inspect rendered formula/locator links in a real browser. Reconcile against the then-accepted response/KMS/instrument base; do not rewrite their branches. **This packet supplies no publication authority and does not remove those release gates.**
