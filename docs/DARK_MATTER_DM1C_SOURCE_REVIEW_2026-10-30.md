# DM-1C — early dipolar and superfluid dark-matter source chronology

**30 October 2026; research-only candidate, NOT a shipped scientific release.** Protected `main`: `2beb8fc3e4eb6d45092c4880349b056f9e1b3091`. Machine-readable source decisions: [DM1C_SUPERFLUID_DIPOLAR_SOURCE_DECISIONS_2026-10-30.json](../research/DM1C_SUPERFLUID_DIPOLAR_SOURCE_DECISIONS_2026-10-30.json).

## Dipolar-dark-matter origin correction

The October 29 initial census quoted Blanchet and Le Tiec's **2008** general-relativistic action. However, Luc Blanchet published a preliminary gravitational-polarization model in [arXiv:astro-ph/0605637v1](https://arxiv.org/abs/astro-ph/0605637) on **24 May 2006** (journal publication **2007**). The May 2006 paper is a quasi-Newtonian polarization proposal, not a fully covariant action. Crucially, Blanchet published a **second, different GR dipolar-particle action** in [arXiv:gr-qc/0609121v1](https://arxiv.org/abs/gr-qc/0609121) on **26 September 2006** (journal 2007). Blanchet and Le Tiec's 2008 [PRD 78, 024031](https://doi.org/10.1103/PhysRevD.78.024031) proposes a **third, distinct general-relativistic dipolar-fluid model**, followed by a 2009 revised matter-action formulation. Do not describe 2008 as the first relativistic model of this lineage. This is a source-supported origin chronology for this model lineage, not proof no earlier gravitational-dipole literature exists.

The 2008 author's **first-order cosmological perturbation** equivalence with LambdaCDM and MOND-like **galactic weak-clustering** derivation have explicit limits. Do not turn those into unconditional or current observational validation. Later [2023 canonical-bimetric critique](https://doi.org/10.1103/PhysRevD.107.124021) is scoped to that implementation and must not be reported as falsifying every gravitational-polarization model.

## Superfluid model chronology

Berezhiani and Khoury's short [arXiv:1506.07877](https://arxiv.org/abs/1506.07877) was posted on **25 June 2015** (published in *Physics Letters B* 2016), before their longer [arXiv:1507.01019](https://arxiv.org/abs/1507.01019) posted on **3 July 2015** (published *Physical Review D*, November 2015). The model posits a galactic dark superfluid with a polytropic `P proportional to rho^3` relation and phonon-mediated MOND-like force. The matter can be normal or mixed-phase in higher-temperature galaxy clusters. This is a candidate theoretical explanation, **not a confirmed cold-atom analogue or dark-matter detection**.

The short arXiv paper also discusses how conventional MOND/TeVeS proposals face cosmological and cluster challenges, while subsequent [galactic fits](https://doi.org/10.1051/0004-6361/202243216) identify limitations in examined versions. Model-specific constraints should be connected in a later Evidence/Problem record rather than used to assign an unsupported universal scientific ranking.

## Identity and equation decisions

- `dipolar-dark-matter`: proposed standalone family, **2006** earliest identified source for this Blanchet lineage; distinguish 2008 covariant model and later bimetric submodels, do not equate with MOND or TeVeS.
- `superfluid-dark-matter`: proposed standalone model family **2015** earliest identified Berezhiani–Khoury short paper, not identical to fuzzy/ultralight scalar dark matter.
- **No candidate equation is shipped.** `P∝rho^3` is retained only as a source-limited research placeholder; an actual formula card requires original equation, proportionality constant, field action, units and phase regime. The dipolar action likewise requires original paper's precise source section/equations, with separate nonrelativistic and relativistic cases.

The older DM-0 candidate census and accepted DM-1A records are immutable. No original full PDF mathematical page was visually reviewed during this batch; arXiv source history, full HTML and peer-reviewed abstracts provide only the bounded evidence listed in the machine ledger.

## Regression and next release gates

Three **new** files only (this note, research JSON, standalone source test). No changes to `theories.js`, `formulas.js`, `problems.js`, `app.js`, `styles.css`, UI/workspace, hash assets, generated census, existing source metadata, CI or original historical guards. Tests recheck all existing referenced IDs and source-date/submodel decisions against the active runtime. Merge research-only documentation only after exact-head CI; separate science integration requires source equation-page review, mathematical audit, historical projections, full browsers, merged-main CI, Pages, and served-site parity.
