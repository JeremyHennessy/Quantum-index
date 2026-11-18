# Phase 13 — Focused formal-to-physical semantics audit

**Research date:** 2026-11-18 UTC. **Classification: B — source-qualified formal partial result recovered; no complete independent semantic certification.** This records one narrow test of the Wilson → selected OS hierarchy → Hilbert field system chain. It proves NO new Yang–Mills theorem, physical mass gap, or Clay solution.

**Immutable Quantum Index parent:** Phase 12 e1dce62a36809e424c4d34530faa29720feda8f5, PR #156. Approved production main a60397f017c5c0bfc2bf88be046320a00c9d28de. All historical research and the charter are preserved.

**External source identities inspected directly:**
- Submitted OpenAI October 28 Lean project: yang-mills-group/OpenAI-YM-20261028 at 3456e5e75cf8d4cd558955a5c7638fba2d68f464.
- Reviewing Yang–Mills group: yang-mills-group/YM at b379615f559643d30b49fb2e05e1efb83d755fc8.
- Independent OSreconstruction definitions: xiyin137/OSreconstruction at cf0904e34a7c146a9f312f601e3707dca4a87697 (not a claim that this current repository revision was the exact pinned dependency used by the reviewers).

## Selected hypothesis and test

Does the actual reviewed target express an ORIGINAL four-dimensional Wilson link-Haar law, the SAME selected continuum construction, and a reconstructed Hilbert system with a dense field-word sector and positive-energy support? One targeted audit followed the exact source definitions, not identifiers or the November 10 group's general opinion.

### 1. Wilson law and finite-lattice matching — source-level link present

Original PublicWilson.lean blob ccf44de9da2ff0010c02be77deff03e447a720bc defines a 4D Wilson plaquette energy (1−ReTr(U_p)/representation_dimension) and a probability law with normalized product Haar and exp(−beta*energy) density. Its WilsonFamily carries spacing, volume, running coupling, regulator-dependent local insertions.

Original WilsonBridge.lean blob e5452589dc52378ccb2e92d0f8e8b537651e4144 proves law_eq, moment_eq, smear_eq and fromWilson: the selected regulator table S.read is a limit of the SAME WilsonFamily smeared observables under an Ordered C S premise.

Independent review checks/LGTWilsonBridge.lean blob 9133454ed54f4951e3773c821f43cfb7b786b152 provides a 4D link/plaquette reindexing and a measure-preserving equivalence with the independently formalized Yang–Mills lattice measure. Its law_preserving theorem includes the necessary factor equal to representation dimension when converting beta. Review AcceptanceSpec.lean blob c8ba61da441bd8052877d789d2f67de78a4cccd6 explicitly retains finite_law, finite_moments, public_limit, ordering and physical scale/reference calibration.

**Qualified result:** This is substantially more than an arbitrary abstract probability law. I inspected the statement and proof skeleton, but did not independently rebuild Lean or prove its upstream measure-theory lemmas.

### 2. Same continuum family and phase — link present, quantifiers restricted

Original Construction.lean blob bc1efd87404a5157687cf1a639ef436071c93fdd proves YangMills.constructed by invoking the enormous underlying Nonperturbative.existence. One family C is fixed before selecting an extraction order. Its theorem returns q,S,F on the same Wilson family, with WilsonRegularity and construction/reconstruction witnesses.

Original YM/Spec/Closed.lean blob 6027d7072cfec66da41393ee45c4d3b570736c defines Spec.Final C f S with calibration, room, sector, OS phase selection, two contours B (unselected) and A (selected), Wightman action and relativistic realization. These are proof obligations in the existential witness, NOT facts obtained merely by declaring a record.

Review AcceptanceSpec.lean and checks/CombinedAcceptance.lean blob 2b22d1c94ca5b21fdfaae89e97e6c05ad7096af9 connect the same C/S/F: finite Wilson law, fixed-volume UV and extracted IR, a phase_average relating the selected ensemble to the UNSELECTED table, and field/OS/source properties on F. A selected pure phase is NOT asserted equal to the unselected mixed state. The submitted UV sequence is selected, and the large-volume extraction remains subsequential; arbitrary-limit uniqueness is not proved.

### 3. OS semantics: four dimensions, but independently adapted trace-only test space

Review RemainingObligations.lean blob b77623bb6b61b909fdd1650a3874c8383902c72c defines E4 ClusterObligation via epsilon-R SPATIAL translations (a 0 = 0), not a common exp(−mt) in physical time. CompleteOS.lean blob 5d81655661e8cbd276a0c4ac13259926bb103606 and ReflectionPositivity.lean blob 96844074f084fb3ac1c7a052fd84a29e558f8ca4 verify a selected CENTERED STRESS-TRACE Schwinger hierarchy against the external OS E0–E4/E0-prime target on ZeroDiagonalSchwartz tests. Such functions vanish to all orders on collision diagonals and do not independently detect contact distributions.

**Verified dimension convention:** the external OSreconstruction Specification.lean says d is the number of SPATIAL dimensions; the spacetime domain is SpacetimeDim d with d+1 coordinates. Hence OsterwalderSchraderAxioms 3 and NPointDomain 3 n mean four-dimensional spacetime, not a three-dimensional-theory error.

**Scope limitation:** The independent adapter concerns ONE selected scalar trace hierarchy, NOT an independent all-field OS certification, nor arbitrary Euclidean contact-term extension. The submitted proof also asserts a broader native Wightman construction. The fact that the independent adapter is narrower is not a refutation of that native proof.

### 4. Physical Hilbert fields, density and positive energy — formal statements traced

Original YM/Fields/System.lean blob c4c7af14bcdeedd8e3443a619ea48d8e7eeac147 defines a Hilbert H, common field domain, vacuum, smeared field operators, recursive field-word vector and Fields.Total obligations: everywhere density and cyclic equality to the span of all word vectors.

Original YM/Nonperturbative/HeadlineSpec.lean blob 21d692f3dbdbe053ad6da4593381400689484e7c defines WightmanAxioms with norm, dense, cyclic, tempered, adjoints, moments from the SAME correlation surface, positivity, local commutation, symmetry, spectrum, forward light-cone spectral support and translation-invariant vacuum uniqueness. Its Reconstruction links selected F.A.world to F.action, unselected F.B.world to S, and the phase-ensemble average to the mixed correlations.

Review checks/CompletenessAudit.lean blob c0ffbcf5bb77523b9a854b368c0e6927a1cfddda proves dense registered field words using F.realization.qt.total.cyclic and .everywhere; it relies on the submitted reconstruction rather than proving a new Hilbert-space model independently. Original PublicView.lean blob 37b509f4e507f0142c1175d8012a91ee7e45e36e has a vector_eq theorem identifying the public field-word vectors with the original field-word vectors.

**Meaning:** The source states positive-energy spectral SUPPORT and density of the chosen field-word domain, not a positive spectral distance above vacuum. I did not independently reconstruct the full selfadjoint time generator and its domain from every upstream construction theorem.

### 5. Decisive MassLimit semantic check — NOT a spectral gap

Review checks/NonzeroPhysicalObservable.lean blob 37ebcfeb31a7d56c2594bae114f6591e314ad25d defines exactly:
\[
\operatorname{massMagnitude}(D,z)=\|z\|^{1/D}.
\]
Review checks/TwoPointPhysicalObservable.lean blob 10e3d2a6058066c928f1e20fb50f913f42b3f312 defines MassLimit F as existence of a FIXED separated two-point test and a POSITIVE finite limit M for massMagnitude(8, smeared centered TRACE two-point correlation) along the selected regulator order. Its own comment states that **no intrinsic scale or spectral gap is asserted**.

AcceptanceSpec.lean field positive_lattice_probe has EXACTLY this MassLimit type. There is no Hilbert-spectrum quantifier or gap bound in this field. Interpreting its name as a proved physical mass gap is **falsified by the definition** (this is not an allegation that the reviewers made that interpretation).

### 6. Three acceptance gates — remain distinct

**Kernel (reported, not rerun):** group Nov 10 assessment reports a clean Lean 4.32.0 rebuild, permitted-axiom inventory and successful Comparator checks on public and stronger combined targets. Merely reading checks/AxiomAudit.lean #print axioms commands is NOT execution.

**Semantics (partially independently inspected here):** original 4D Wilson law and independent law equivalence, same C/S/F, selected versus mixed, correct d+1 spacetime dimension, trace-only diagonal-flat OS adapter, Hilbert field-word/density record and the exact non-gap meaning of MassLimit were directly traced. Full RG arguments, OS reconstruction internals, all labels-to-classical-curvature identifications and whole kernel dependencies were NOT separately proved here.

**Independent scientific acceptance:** The group's Nov 10 review is positive for continuum existence but explicitly says its authors do not fully understand the proof and that the mass gap/IR uniqueness remain open. This audit neither independently certifies the entire construction nor finds an exact source-level contradiction that disproves it.

**Primary classification: B — partial formal result accurately recovered within audited semantic scope. Full gate A NOT achieved.**

**Primary references:** Nov 10 assessment https://alexisdpc.github.io/yang-mills/references/assessment-1-2026-11-10.pdf §§4–6,9–11; official Jaffe–Witten https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf §4; exact pinned repository files above. No claim of source completeness or publication novelty.
