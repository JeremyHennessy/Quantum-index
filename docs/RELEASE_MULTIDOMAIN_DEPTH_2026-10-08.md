# Multidomain scientific-depth release — 2026-10-08

## Baseline and scope

This candidate builds on the state-integrity tree merged as `483d507225c2632a995c9c6317cb0f690c20d920` (candidate parent `6bb3cbf29222879f51c0236fbce0c38087f45997`). It is an additive scientific-depth release, not a redesign.

It adds:
- **7 Theory Passports**: Bose–Hubbard, Jaynes–Cummings, Hartree–Fock, neutrino mixing, Brans–Dicke gravity, BCS theory, and density-functional theory.
- **3 source-located formula records**, closing the documented formula gaps for neutrino mixing and Brans–Dicke gravity.
- **3 empirical Evidence records**: optical-lattice superfluid→Mott transition, photon-number-resolved cavity Rabi oscillations, and the Cassini PPN light-propagation constraint.
- **6 bibliography records** supporting the new formulas/evidence.

No theory entity, graph edge, existing formula, existing Passport, existing Evidence record, app renderer, CSS, research workspace, dependency, or publishing workflow is intentionally changed.

## Scientific boundaries

### Neutrino mixing
The 2026 Particle Data Group review supplies the displayed flavor-basis relation and the full relativistic vacuum transition probability. The cards state the practical light-neutrino unitarity assumption, coherent relativistic propagation, and the absence of matter effects. Oscillation evidence does not determine the absolute neutrino mass scale.

### Brans–Dicke gravity
The displayed action is the no-potential source normalization of Kozak & Wojnar (2021), which keeps `xi` explicit and discusses metric/Palatini interpretations. It is not presented as a quantum-gravity action. Cassini directly constrains the PPN light-propagation parameter; translating that result to a constant massless Brans–Dicke parameter is explicitly model-dependent.

### Bose–Hubbard and Jaynes–Cummings evidence
The Greiner et al. optical-lattice experiment supports the interaction-driven superfluid/Mott regime but does not prove that every optical lattice is exactly one single-band Hamiltonian. Brune et al. resolve square-root photon-number-dependent cavity Rabi frequencies, but this does not make the lossless single-mode Jaynes–Cummings approximation exact at arbitrary coupling or damping.

### Methodological Passports
Hartree–Fock, BCS and DFT Passports separate exact/framework statements from approximation-dependent practical use. They do not attach a single experiment as universal validation.

## Expected generated inventory

- 481 theories
- 610 relationships: 122 source-backed / 488 editorial
- 549 bibliography records
- 405 formula records
- 272 theory entries with formulas
- 163 documented formula gaps
- 150 explicitly reviewed formula metadata records / 255 baseline records
- 59 reading profiles / 5 learning paths
- 23 Theory Passports
- 5 Problems
- 16 Evidence records
- 60 structured Research Questions

## Verification controls

`docs/MULTIDOMAIN_DEPTH_2026-10-08.json` records all added IDs, expected count deltas and the protected baseline Git blob identities. `scripts/multidomain-depth.test.mjs` verifies that the release is additive, checks source/regime/limitation language, independently tests the two-flavor limit of the neutrino probability, and checks the two formula-gap transitions.

Older immutable release tests use `scripts/multidomain-depth-baseline.mjs` only in tests. It removes exactly the declared additions before comparing older fingerprints; it does not change runtime data or weaken prior assertions.

Browser acceptance covers a four-domain Passport comparison, both neutrino formulas, the Brans–Dicke action, all three new Evidence records, mobile equation scrolling and existing comparison-return semantics. Existing all-equation MathJax regression still checks every formula.

## Rollback

After merge, roll back only this release with a first-parent revert of its merge commit, after checking for later main changes. There is no storage migration. Reverting the release should not require undoing the state-integrity documentation release or any October 7 scientific release.
