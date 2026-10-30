# Nuclear and electronic coupled-cluster theory: shared ansatz, distinct problem setup

**Status:** research-only source review. This note does not add a theory record, formula card, bibliography row, or application behavior.

## Finding

The existing Quantum Index coupled-cluster entry and `cc-ansatz` formula are explicitly framed as quantum-chemical/electronic-structure content. That is a valid specialization, but coupled-cluster methods also have a long-standing nuclear many-body formulation. The two fields share an exponential cluster expansion; they do not thereby share a Hamiltonian, input interaction, reference-state regime, truncation error, or benchmark meaning.

The repository census already treats coupled-cluster theory as a represented family and separately identifies nuclear many-body methods. The evidence reviewed here supports documenting a **nuclear specialization of the existing coupled-cluster family**, rather than adding a duplicate first-class theory identity or presenting the electronic formula card as field-independent.

## Shared mathematical structure

For a chosen fermionic reference determinant \(|\Phi\rangle\), single-reference coupled cluster writes a state as

\[
|\Psi_{\rm CC}\rangle = e^T |\Phi\rangle,
\qquad T=T_1+T_2+\cdots,
\]

and solves projected equations for amplitudes of a similarity-transformed Hamiltonian. In a finite one-particle basis, retaining all excitation ranks recovers the full configuration-interaction state connected to the reference when that state has nonzero overlap; practical CCSD and CCSDT calculations truncate the cluster operator. The shared notation does not make approximate levels from different Hamiltonians interchangeable.

Coester's many-particle bound-state treatment (1958) and Coester and Kümmel's closed-shell nuclear correlation treatment (1960) are primary nuclear antecedents. Čížek's 1966 paper develops the logarithm/exponential wavefunction machinery for atomic and molecular electronic correlation. The historical record is therefore better described as closely related developments across nuclear and electronic many-body physics than as an electronic-only method later imported into nuclei. [Coester 1958](https://doi.org/10.1016/0029-5582(58)90280-3); [Coester & Kümmel 1960](https://doi.org/10.1016/0029-5582(60)90140-1); [Čížek 1966](https://doi.org/10.1063/1.1727484).

## What changes with the physical problem

| Dimension | Molecular electronic structure | Nuclear structure |
| --- | --- | --- |
| Degrees of freedom | Electrons in molecular orbitals; in the usual nonrelativistic Born–Oppenheimer model, nuclei are fixed parameters in the electronic Hamiltonian. | Protons and neutrons in a single-particle basis, with translational center-of-mass motion separated or checked. |
| Hamiltonian input | One-body kinetic/external-potential terms plus electron-electron Coulomb repulsion. | Intrinsic kinetic energy and specified nucleon-nucleon and, when retained, three-nucleon interactions; chiral EFT and resolution transformations are common research choices, not universal assumptions. |
| Practical concerns | Orbital choice, basis convergence, static correlation and the balance between connected excitation rank and cost. | Interaction/regulator and induced-force choices, three-body matrix elements, finite oscillator or continuum bases, center-of-mass contamination, and shell structure. |
| Reference and regime | Closed-shell determinants are common; open-shell chemistry has multireference and symmetry-adapted variants. | Single-reference calculations are particularly efficient near shell closures; equation-of-motion and symmetry-breaking/Bogoliubov references extend applications to open shells. |

These are representative distinctions, not universal rules. A nuclear calculation need not include an explicit three-body force, and neither field is limited to one reference or basis. A nuclear CC study derived amplitude equations for three-body Hamiltonians and applied low-momentum two- and three-nucleon forces to \(^4\mathrm{He}\) [Hagen et al. 2007](https://arxiv.org/abs/0704.2854). A later medium-mass study included explicit chiral three-nucleon interactions and quantified omitted triples, matrix-element, and induced four-body contributions [Binder et al. 2012](https://arxiv.org/abs/1211.4748). Those choices are part of the nuclear calculation's uncertainty story, not properties of the abstract exponential ansatz.

The center-of-mass issue is also a nuclear observable/kinematics concern, not a generic correction to molecular CC. Hagen, Papenbrock, and Dean found approximate factorization of the coupled-cluster nuclear wavefunction into intrinsic and Gaussian center-of-mass parts, with a center-of-mass width that need not equal the oscillator length [Hagen et al. 2009](https://doi.org/10.1103/PhysRevLett.103.062503). A recent direct comparison applies equation-of-motion and symmetry-broken-reference formulations to calcium and nickel isotopes with chiral two- and three-body interactions [Marino et al. 2026](https://arxiv.org/abs/2512.17311v2).

## Interpretation limits for the catalog

1. Keep `|Ψ⟩=e^T|Φ⟩` as the common schematic relationship; do not relabel it as a published domain-specific equation card on the strength of this note.
2. Do not transfer the chemical shorthand “CCSD(T)” or its chemical benchmark reputation to nuclear CC. Nuclear triples corrections, retained 3N interactions, reference choices, and uncertainty estimates must be reported for the particular calculation.
3. Do not state that center-of-mass factorization is exact: the cited nuclear result says “to a very good approximation” for its calculations.
4. Do not infer a universal chiral interaction, explicit 3N force, harmonic-oscillator basis, closed-shell-only domain, or all-orders accuracy from a selected nuclear application.
5. For any future nuclear-specific Passport or formula candidate, identify the intrinsic Hamiltonian and interaction version, reference and basis, retained cluster/force ranks, and reported truncation/basis uncertainties. Keep that work distinct from changing the existing electronic CC formula.

## Primary-source map

- Nuclear many-particle antecedents: F. Coester, *Bound states of a many-particle system*, Nuclear Physics 7 (1958), 421–424, [DOI](https://doi.org/10.1016/0029-5582(58)90280-3); F. Coester and H. Kümmel, *Short-range correlations in nuclear wave functions*, Nuclear Physics 17 (1960), 477–485, [DOI](https://doi.org/10.1016/0029-5582(60)90140-1).
- Molecular-electronic treatment: J. Čížek, *On the Correlation Problem in Atomic and Molecular Systems*, J. Chem. Phys. 45 (1966), 4256–4266, [DOI](https://doi.org/10.1063/1.1727484).
- Three-body nuclear Hamiltonian equations/application: G. Hagen et al., *Coupled-cluster theory for three-body Hamiltonians*, [arXiv:0704.2854](https://arxiv.org/abs/0704.2854).
- Explicit chiral two- plus three-nucleon medium-mass application and truncation study: S. Binder et al., [arXiv:1211.4748](https://arxiv.org/abs/1211.4748).
- Center-of-mass separation: G. Hagen, T. Papenbrock, and D. J. Dean, *Solution of the Center-Of-Mass Problem in Nuclear Structure Calculations*, Phys. Rev. Lett. 103, 062503 (2009), [DOI](https://doi.org/10.1103/PhysRevLett.103.062503).
- Open-shell formulations compared in current nuclear calculations: F. Marino et al., *From closed shells to open shells: Coupled-cluster calculations of atomic nuclei*, Phys. Rev. C 113, 044301 (2026), [arXiv:2512.17311v2](https://arxiv.org/abs/2512.17311v2).

The accompanying test checks that the source note preserves its citations and explicit scope cautions. It is a documentation contract, not a numerical reproduction or independent proof of the cited science.
