# Yang–Mills source and proof-dependency review — 2026-11-17

**Research-only checkpoint:** this note is an evidence and scope audit, not a mathematical discovery.

## Official target
The [Clay Yang–Mills problem](https://www.claymath.org/millennium/yang-mills-the-maths-gap/) requires a nontrivial quantum theory on R⁴ for **every compact simple gauge group**, with a positive *physical* mass gap.

## Independent construction: audited scope, not fully reproduced
The [Yang–Mills group's 2026-11-10 review](https://github.com/yang-mills-group/YM/blob/b379615f559643d30b49fb2e05e1efb83d755fc8/submissions/openai-20261028/docs/checks.md) endorses the October 28 existence construction under the group's interpretation, but explicitly excludes a mass gap and unique infinite-volume limit. Our team has **not** independently rebuilt all external Lean modules.

Scope restrictions that must not be silently strengthened:
1. A5's positive lattice probe and common scale calibration do **not** prove a nonzero intrinsic continuum reference mass.
2. A1's independently checked Osterwalder–Schrader correspondence is explicitly scoped to the *selected centered stress-trace scalar family*, not a separate all-field OS interface.
3. The independently checked OPE endpoint does not identify its witness with the combined endpoint in general.
4. A valid Lean build establishes a statement from declarations; it does not replace scrutiny of whether those declarations represent the intended physics.

## Contemporary competing work (do not duplicate as novelty)
The [November 17, 2026 conditional mass-gap preprint](https://hexagonmath.org/2611.00543v1) says it proves certain logical boundaries and a conditional correlation-rate-to-gap bridge while explicitly NOT proving the Yang–Mills mass gap. This new paper has **not** been independently verified here. Our research must not claim the conditional bridge or finite-gap counterexample as novel without a serious independent literature audit.

## Next real gap: YM-IR-01
Find and rigorously justify a **noncircular uniform physical-scale infrared estimate** across the cutoff and large-volume limits of an actually constructed four-dimensional theory. Prove any necessary link to a sufficiently dense gauge-invariant physical state family. A single finite lattice or a single positive lattice probe is inadequate. An SU(2)-only step is not the all-groups Clay target.

## Current bounded experiment
`lean/YMGapToy.lean` is only a three-level spectral-gap *countercontrol*. The sole purpose is to validate formal proof plumbing and detect the false inference that positive finite gaps imply a common lower bound.

## Next choices with admission gates
1. Confirm the pinned Lean example compiles with **no sorry or project axioms**, and have the theorem statements independently reviewed.
2. Choose an authoritative published finite SU(2) Wilson lattice observable or inequality with exact equation locator, coupling conventions and lattice units.
3. Reproduce one finite-volume quantity or bound with independently computed tests, labeling all continuum extrapolation as unproved.
4. Investigate one precisely stated open inequality using one mathematical hypothesis at a time.

## Locked boundary
All changes in this slice must stay in the separate research folder and new branch-restricted CI workflow. Do **not** merge into main, alter UI, or claim a Millennium Prize solution on test success.
