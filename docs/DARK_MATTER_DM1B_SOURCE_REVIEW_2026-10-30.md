# Dark matter DM-1B — atomic matter and dark-acoustic source decisions (30 October 2026)

**Status: research/source proposal only.** Protected intake main: `2beb8fc3e4eb6d45092c4880349b056f9e1b3091`. No production theory, formula, relationship, Evidence, UI, workspace, CI configuration or asset changes are authorized by this document. Details and deterministic proposal structure: [DM1B_ATOMIC_DAO_SOURCE_DECISIONS_2026-10-30.json](../research/DM1B_ATOMIC_DAO_SOURCE_DECISIONS_2026-10-30.json).

## Important origin correction

The earlier DM-0 census cited Cyr-Racine & Sigurdson's *Cosmology of Atomic Dark Matter* (published 2013). This was **not the first identified source for the specific atomic-dark-matter model**. Kaplan, Krnjaic, Rehermann and Wells posted *Atomic Dark Matter*, [arXiv:0909.0753v1](https://arxiv.org/abs/0909.0753) on **3 September 2009** and published the journal paper in 2010 ([JCAP DOI](https://doi.org/10.1088/1475-7516/2010/05/021)). Their hidden-U(1) example has dark charged fermions forming hydrogen-like bound states. Older composite and mirror-sector ideas exist; **2009 is a source-supported origin for this explicit construction, not a universal first invention of dark atoms**. The dated 29 October intake is intentionally immutable; this correction is a later review layer.

Cyr-Racine & Sigurdson, [arXiv:1209.5752](https://arxiv.org/abs/1209.5752) (submitted September 2012; journal 2013), develop the cosmological atomic-dark-matter and recombination picture. Cyr-Racine, de Putter, Raccanelli and Sigurdson, [arXiv:1310.3278](https://arxiv.org/abs/1310.3278) (submitted October 2013; published 2014), constrain dark acoustic oscillations under chosen dark-matter/dark-radiation interaction assumptions. **Do not substitute a journal publication year for the earliest relevant preprint year.**

## Scoped candidate mathematics

Kaplan et al.'s original preprint **PDF page 2, Eq. (2)** gives the Coulombic dark hydrogen binding-energy representative:

`B = (alpha_D^2 / 2) * mu_H`, where `mu_H = (m_e m_p)/(m_e + m_p)`.

This is the nonrelativistic bound-state relation for a hidden-U(1) model with hydrogen-like opposite charges; it is **not** an arbitrary dark sector formula. The source page and equation are text-located, but the page-image screenshot service was unavailable in this review. The record remains **TEXT_LOCATED_VISUAL_HOLD**, not accepted into `formulas.js`. Independent versioned-page visual checking, math conventions and MathJax rendering are still required.

## Distinct taxonomy choices

- **Atomic dark matter:** worthwhile *specific dark bound-state model* candidate; may overlap existing asymmetric dark matter, dark photons and self-interactions without being a duplicate. Its parent/earliest-origin question and mathematical gate are not fully closed.
- **Dark acoustic oscillations:** sound-wave/perturbation signature from interactions with dark radiation; **not a separate dark-matter particle**. Its status as an independent first-class framework versus a model effect remains on HOLD_TAXONOMY. An acoustic-scale relation needs exact source, gauge/decoupling and interaction assumptions.

The often-cited `~5%` fraction in the 2014 DAO study is **specific to that paper's data and strongly interacting dark-radiation parameterization**, not a timeless or universal limit. No empirical Evidence record is added.

## Verification and release boundary

The JSON explicitly records paper versions, source types, dated year distinctions, model assumptions, formula and taxonomy holds, and the current stable parent IDs. A standalone `scripts/dm1b-atomic-dao-source.test.mjs` guards proposal identity, provenance and absence of unreviewed runtime claims. Run `npm test && npm run validate`; full browser tests remain required for any later runtime change. **Research-only publication is separate from science-data acceptance, main CI, Pages publication and served-site parity.** Keep prior approved UI, historic scientific blobs and ledgers immutable.
