# Astroparticle / cosmology — three source-verified mathematical representatives

**Review date:** 16 October 2026. **Baseline:** main at `127a8de34f78b13b03dd2d99c6bba45afa78bb7e`. This review adds only 3 formulas and 3 bibliography records. Existing 481 theory IDs, 29 Passports, 610 relation identities, and 405 preexisting formula records are not edited. The sources are reviews, not misclassified as primary discoveries or independent experimental Evidence.

## ΛCDM model-specific background expansion

Primary **review**: [Olive & Peacock, PDG 2025 Big-Bang Cosmology](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf). The PDF was visually inspected at printed p. 2: redshift definition Eq. **(22.5)** and the general Friedmann equation **(22.8)**; printed p. 3 Eq. **(22.15)**: component density/curvature closure; printed p. 4 Eq. **(22.16)**: constant-w scaling of separately conserved fluids.

The catalog's new E(z) expression is a **derived combination**, not presented verbatim in the PDG scan: `H²(z)/H0² = Ωr0(1+z)^4 + Ωm0(1+z)^3 + Ωk0(1+z)^2 + ΩΛ0`. Set `Ωk0=-k/(R0²H0²)` and `ΣΩi0=1`. Background standard fluid assumptions and limitations of the treatment of neutrino transitions are stated in the record. This is not a perturbation spectrum or an independent cosmological observation; the existing general `friedmann` record remains unchanged.

## Canonical single-field inflation potential slow roll

Primary **review**: [Ellis, Vennin & Wands, PDG Inflation (2025)](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-inflation.pdf), visually inspected printed p. 4, Section **23.2.1 Eq. (23.15)**. Printed p. 1, footnote 1 specifies **unreduced** Planck mass `M_P=G_N^(-1/2)`. The new formula uses the source's `ε=M_P²/(16π)(V'/V)²` and `η=M_P²/(8π)(V''/V)`; reducing `M_P` without adjusting coefficients is forbidden. The derivation holds for a canonical minimally coupled scalar in potential slow roll, not all multi-field, noncanonical or feature-rich inflation. No new experimental claim is made and the already-indexed `slow-roll-power` is preserved.

## Canonical homogeneous scalar quintessence

Primary **review**: [Frieman, Turner & Huterer, Dark Energy and the Accelerating Universe (2008)](https://lss.fnal.gov/archive/2008/pub/fermilab-pub-08-613-a.pdf), Fermilab-hosted arXiv:0803.0982v1 scan, visually inspected printed p. 21 (PDF page 21), Section **5.1.2 Eqs. (18)–(20)**. For homogeneous `φ(t)` with positive canonical kinetic energy, `ρφ=φdot²/2+V(φ)`, `pφ=φdot²/2−V(φ)`, and `wφ=pφ/ρφ`. This does not apply to wrong-sign phantom kinetic models or generic k-essence, and does not demonstrate quintessence is experimentally established.

## Integrity and acceptance

Before-after intended inventory: formulas **405→408**, source records **551→554**, formula categories **29→30**, formula-linked theories **272→275**, documented gaps **163→160**, explicitly reviewed formula metadata **156→159**. Prior 29 Passports, 16 Evidence records, 481 theory identities, 610 relationship identities and all historical ledger bytes remain unchanged. The exact approved baseline file prefixes are protected by Git-blob tests, and math tests check limits, sign/unit conventions, source links and browser rendering. This research receipt is not proof of CI or deployment.
