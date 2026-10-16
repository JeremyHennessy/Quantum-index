# Dark-matter mathematical depth: WIMP freeze-out and stationary fuzzy dark matter

**Review date:** 16 October 2026. **Dependent parent:** PR #82 exact head `fe6f8e79a0b621f569b21aa1bfd56b793f35ae5e`. This branch **must not** be merged ahead of parent PR #82. Its two formula additions are prospective until separate exact-head CI and post-merge acceptance.

## Thermal WIMP chemical freeze-out, one-species Boltzmann equation

[G. Arcadi et al., *The waning of the WIMP? A review of models, searches, and constraints*, EPJC **78**, 203 (2018)](https://link.springer.com/article/10.1140/epjc/s10052-018-5662-y), open-access review, **Section 2 'The WIMP paradigm', equation (1)**. Direct HTML source inspection confirms `dnχ/dt+3H(T)nχ=-<σv>(nχ²−nχ,eq²)`, with n density and equilibrium source defined in Eqs. (2)–(4), and a thermal yield reformulation in Eqs. (5)–(7).

The formula applies to a standard homogeneous thermal-relic **self-conjugate species** annihilating pairwise into a thermal bath. The annihilation loss term is negative when n>n_eq, while inverse production dominates when n<n_eq. For very large H it is *not* a new WIMP observation. Multi-state coannihilation, non-self-conjugate asymmetric relics, late entropy injection, freeze-in and beyond-standard expansion require different equations and should not be silently subsumed. The formula represents a restricted WIMP production mechanism, not all WIMP scenarios or dark matter.

## Fuzzy dark matter: isolated stationary Newtonian eigenstates

[L. Hui, J. P. Ostriker, S. Tremaine, E. Witten, *Ultralight scalars as cosmological dark matter*, Phys. Rev. D **95**, 043541 (2017)](https://doi.org/10.1103/PhysRevD.95.043541); directly inspected arXiv:1610.08297v2 [PDF, Appendix B, printed p. 24, Eq. (B1)](https://arxiv.org/pdf/1610.08297#page=24).

The source displays `−ℏ²/(2m)∇²ψ + mΦψ=mEψ` together with `∇²Φ=4πGm|ψ|²`. Here **ψ is number-density normalized**, so mass density is `ρ=m|ψ|²`, and **E is energy per unit mass**. It is a *stationary*, isolated, Newtonian, nonrelativistic eigenproblem, not the complete relativistic scalar field equation, nonlinear cosmological halo simulation, or evidence that FDM is observed. Keep the original particle-number normalization and factors of m/ℏ, and do not substitute a mass-density-normalized ψ into this equation without changing Poisson's RHS. Solitons are specific eigenstates, not a universal field profile.

## Preservation and acceptance

Parent PR #82: 408 equations, 554 bibliography records, 275 formula-linked theory entries and 160 gaps. This work append-only adds 2 existing-theory representatives and 2 independently registered sources; it does **not** alter the 408 prior formula records, other papers, 481 theories, 29 Passports, 610 directed relations or 16 Evidence items. Candidate totals: **410** formulas, **556** sources, **277** formula-linked theories, **158** gaps, **161** explicit and **249** baseline metadata. No new formula category is required.

A test-only bridge must verify exact parent Git blob fingerprints before reconstructing earlier historical proofs, and browser checks must render both formulas without MathJax merror nodes at desktop/mobile widths. This document is not a merged release receipt.
