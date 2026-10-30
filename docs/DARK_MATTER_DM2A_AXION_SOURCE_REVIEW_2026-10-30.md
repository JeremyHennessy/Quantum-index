# DM-2A — QCD axion source-located mathematics (research proposal)

**30 October 2026. Source-reviewed, NOT SHIPPED.** Approved intake `main` = `2beb8fc3e4eb6d45092c4880349b056f9e1b3091`. The existing `axion` entry (origin year **1978**) is source-backed but currently links **zero** formula records in the generated 485-theory/464-formula catalog. This candidate does not modify that historical state.

## Original source and exact mathematical locators

Grilli di Cortona, Hardy, Pardo Vega and Villadoro, *The QCD axion, precisely*, originally submitted 9 Nov 2015 and independently checked in the authors' **arXiv:1511.02867v2**, 8 Jan 2016, journal [JHEP 01 (2016) 034](https://doi.org/10.1007/JHEP01(2016)034). Source: [version-pinned author HTML](https://arxiv.org/html/1511.02867v2). The versioned author HTML equation and surrounding text were checked directly. The original **PDF image parity and full physics derivation are still pending**; no page number is invented.

Four proposed canonical/source-scoped mathematical records:

1. **Gluonic anomaly interaction** — Section 2, Eq. **(1)**, **second term only**: `(a/f_a) (alpha_s/8pi) G Gtilde`. Source defines anomaly-normalized `f_a`; the *complete* Eq (1) also contains axion kinetic, photon and derivative matter-current interactions. This is not a standalone full Lagrangian, nor an arbitrary ALP coupling.
2. **Topological susceptibility mass** — Section 2.1 Eq. **(22)**, final equality `m_a²=chi_top/f_a²` for the zero-temperature QCD axion. Separate finite-temperature susceptibilities and non-QCD ALP masses are not covered.
3. **2016 numerical mass result** — Section 2.1 Eq. **(26)**: `m_a=5.70(7) micro-eV ×(10^12 GeV/f_a)`. The authors' separate errors `5.70(6)(4)` and combined uncertainty are explicitly preserved. It is a **dated 2016 theoretical estimate**, not an automatically current 2026 precision value.
4. **Photon coupling** — Section 2.3 Eq. **(45)**, first equality: `g_aγγ = alpha_em/(2pi f_a) [E/N - 1.92(4)]`. The model-dependent electromagnetic/color anomaly ratio **E/N** is not silently fixed or conflated with the QCD correction. Near-cancellation is possible.

Every proposal includes versioned source locator, variables, units, assumptions and nonclaims. Source ID `dm2-dicortona-qcd-axion-2016` is **proposed and not yet appended** to the main bibliography.

## 2026 PDG current-reference comparison (independently checked)

The official **2026 Particle Data Group** review, *Axions and Other Similar Particles* (authors O'Hare, Rybka, Safdi and Winslow; revised August 2025, PDF stamped **1 June 2026**) was inspected as an actual PDF page image, [source](https://pdg.lbl.gov/2026/reviews/rpp2026-rev-axions.pdf).

- **Printed p.2 / PDF index 1, Eq. (89.2):** the unshifted-`barTheta` axion–gluon effective coupling `(a/f_a - barTheta)*alpha_s/(8pi)*G*Gtilde`. The 2016 author Eq. (1) writes the theta-shifted form; these are different field conventions, **not contradictory anomaly physics**.
- **Printed p.2 / PDF index 1, Eq. (89.3):** `m_a = 5.691(51) meV × (10^9 GeV/f_a)`, equivalent to **5.691(51) micro-eV** for `f_a=10^12 GeV`. This is a **more recent reviewed numerical estimate** than the preserved 2016 `5.70(7) micro-eV`, rather than a second independent QCD axion theory.
- **Printed p.3 / PDF index 2, Eqs. (89.5)–(89.6):** source defines the axion-photon tensor convention and writes `g_agammagamma=alpha/(2pi f_a)*(E/N - 1.92(4))`. The anomaly ratio **E/N** remains model-dependent.

One future canonical mass formula should carry versioned source-era estimates; **do not ship two duplicative mass formulas** merely because a central value changed. The **2016 formula proposal remains unchanged** in the machine ledger; the 2026 PDG evidence is an added comparison, not a silent replacement. The 2026 PDG review is not the 1978 original axion proposal and does not prove that axions make up dark matter.

## Distinct hold: axion as dark matter

The 2016 paper explains nonthermal axion misalignment, finite-temperature potential uncertainty, and the distinction between PQ breaking before/after inflation. **Do not invent a universal axion relic-abundance relation.** Direct review of the 1983 original production papers and their assumptions comes next. No experiment or dark-matter detection is claimed. The presence of `axion` as a QFT node is not the same as proving it is the cosmic dark matter.

## Release and preservation contract

This branch adds only three files: this note, machine-readable candidate JSON and tests. No changes to catalog, equations, sources, Evidence, graph, Passports, UI, CSS, workspace, asset hashes, dependencies or workflow. Historical approved main bytes and the 1978 theory origin are protected. CI checks should execute `npm test` and `npm run validate`. Full browser and independent page-image review are required for a later *separate* runtime release. If a source/normalization check fails, hold the candidate; do not weaken an existing historical guard. Rollback: revert only this new-files-only research commit.
