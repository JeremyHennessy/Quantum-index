# Spatial blocking can discard the light band and even hide the dressed vacuum

**2026-11-27 UTC. Fixed spatial regulator, research branch.** This is a diagnostic for the next blocking step after the [continuous-time Wilson gap bound](2026-11-27-wilson-bridge-hamiltonian-limit.md), not a spatial continuum theorem.

## 1. Exact electric spectrum of straight-path blocking

Take a fine cubic torus with each side divisible by b≥2 and coarse sides at least six. Form each coarse link as the ordered product of b fine links along its straight path. The edge sets used by distinct coarse links are disjoint, and independent Haar products are Haar. The pullback J is therefore isometric; it maps coarse gauge invariants to fine gauge invariants because only the endpoint gauge transformations survive multiplication. Let S=Ran J in the physical Hilbert space.

A matrix coefficient of spin j/2 on a coarse edge pulls back to a sum of products with spin j/2 on each one of its b constituents, and label zero on unused links. Thus S reduces the electric Hamiltonian, with J* A_fine J=b A_coarse. It also reduces the free Wilson transfer K_t: the compressed coarse link convolution multiplier is a_j(t)^b, with a_j=I_(j+1)(t)/I_1(t). All energies are in the original fine time units. The true physical electric gap is 6, while in S it is 6b. In particular, a numerical gap of 6b in this compression would not be a lower bound for the true gap.

A nonconstant gauge-invariant spin-network support has no degree-one vertex. Its smallest support on these graphs is an elementary square with all four spins equal; the fundamental square costs 6 and the next spin on that square costs 16. A support of exactly five edges cannot be leaf-free: a five-cycle does not exist, and a fifth edge adjacent to a square cannot be a chord. Six or more edges cost at least 9, attained by a fundamental 1×2 rectangle. This classifies the full energy-6 band B=span{2W_p}. Every fine elementary face has at least one edge absent from the coarse skeleton. Averaging that independent edge gives both B⊥S and J*W_pJ=0.

If P projects onto S⊕B, the free discarded electric spectrum starts at exactly 9, since even a fundamental 1×2 rectangle has an edge off the skeleton. The corresponding free Wilson transfer on the discarded sector has largest eigenvalue r^6, r=a_1: supports of at least six links have eigenvalue ≤r^6, while a four-link support outside B has eigenvalue ≤a_2^4≤r^8 by the Turán ratio bound. The rectangle attains r^6. These compressed-spectrum statements are exactly at zero magnetic interaction.

## 2. Straight coarse loops have an area-order selection rule

At fixed fine volume and sufficiently small independent real plaquette coefficients g, let Π(g) continue the energy-6 projector and let Ω(g) continue the vacuum, with positive reference overlap. Let C bound the straight b×b fundamental square and study ⟨2W_p,Π(g)Tr(U_C)Ω(g)⟩. Independent fine-link center flips act by conjugation on the Hamiltonian and multiply each coupling at an incident face by −1. They also multiply each fundamental trace by its boundary sign. Analytic covariance and the sign convention for Ω imply that any nonzero Taylor monomial has an odd-multiplicity face set S' satisfying ∂S'=C+∂p over F₂.

Project the chain to the two coordinate axes of C. Faces parallel to C project to unit squares; faces perpendicular to that plane project to zero as 2-chains (their matching projected edges cancel). The projected filling is the selected square XOR the projection of p, or its complement, since the projected torus has only the full torus as its nonzero closed 2-chain. The complement is strictly larger on the stated tori. This forces total Taylor degree ≥b²−1. Equality is possible only with distinct parallel faces. In that case check each layer separately: if p is not in the layer of C, the latter still needs b² faces. If p is in the sheet, the only minimum support is the sheet with p removed. This is a support restriction, not proof that a coefficient is nonzero. The same argument works for the fixed-t Wilson analytic band.

The fixed-volume map from Ran Π(g) to the reference band given by the reference orthogonal projection has a bounded inverse near g=0. For a uniform coupling, the dressed coarse square therefore has light-band norm O(|g|^(b²−1)) and spectral weight O(|g|^(2b²−2)). There is no assertion that the constants are uniform in b or volume, or that the exponent read from an infinite-time correlator is necessarily larger. A tiny nonzero weight can still reveal the light energy at infinite time. Exact control: on a 3×3×3 site box enumerate all 36 endpoints and all subsets of the 36 faces of size at most three. All 281,052 XOR comparisons recover exactly four matches, each the sheet minus its endpoint.

## 3. Repairing the free band does not justify a fixed bare complement

Even S⊕B can fail as an interacting Schur projection in a volume-uniform estimate. The following uses an actual nonuniform, strong-electric SU(2) Hamiltonian in the proved gap window, not a toy two-level replacement.

On each of a growing sequence of tori choose N→∞ vertex-disjoint fundamental faces parallel to xy in layers z≡1 modulo b, for example by taking well-separated faces in such layers. Every edge of each selected face is outside the straight skeleton. Put equal g with 0<|g|≤1/400 on these faces and zero elsewhere. The Hamiltonian factors over independent four-link subsystems and free links. The single-face operator A_face−gW has a simple normalized positive vacuum ψ, by the strictly positive elliptic heat kernel (bounded potential does not destroy strict positivity). It is invariant under the gauge action at all four corners by uniqueness. The full physical vacuum is the product Ω=⊗ψ on selected faces times constants on the rest. Since W is not constant, ψ cannot be constant at g≠0, so a=⟨1,ψ⟩ satisfies 0<a<1. Put d=⟨2W,ψ⟩.

The S-component of Ω is a^N times the constant by Haar conditional expectation. Among the B components, the selected face coefficient is d a^(N−1); each unselected face has at least one free edge (the selected faces are vertex-disjoint), which kills its coefficient. Thus the exact overlap is

    η_N = ||PΩ||² = a^(2N) + N |d|² a^(2N−2) → 0.

Let Q=I−P. On Q, the normalized QΩ is an admissible form-domain test vector. The electric part of PΩ lies in energies 0 and 6; the potential has norm ≤N|g| and the vacuum energy E_0 is ≥−N|g|. Using (H−E_0)Ω=0 gives

    0 ≤ inf σ_form(Q(H−E_0)Q)
      ≤ ⟨QΩ,(H−E_0)QΩ⟩ / ||QΩ||²
      = ⟨PΩ,(H−E_0)PΩ⟩ / (1−η_N)
      ≤ (6+2N|g|)η_N/(1−η_N) → 0,

where the infimum is on the range of Q. Meanwhile the full Hamiltonian retains the uniform positive physical gap from the prior note. The discrepancy is vacuum leakage into the bare discarded space, not a soft physical excitation or a closing of the true gap. It occurs for arbitrarily small fixed nonzero |g|. Thus a general volume-uniform discarded-sector estimate relative to the interacting vacuum cannot simply start from the free gap of 9 and retain this bare projection. A richer construction must handle vacuum dressing as well as the missing plaquette band. In this decoupled control it can factor the dressing face by face; extending such a local construction to the full interacting lattice is open.

## Comparison and scope

Minimal-area selection in Wilson expansions and the need to improve the overlaps of glueball operators are established ideas; see [surface representations of Wilson loops](https://www.sciencedirect.com/science/article/pii/0550321386906097) and [Barca et al., two-level glueball calculations](https://arxiv.org/abs/2406.12656). The checks here concern the exact straight-path isometry, a mixed dressed-band matrix element, and the bare-complement vacuum leakage control in the project's normalization. No priority claim. The sparse nonuniform example does not rule out a carefully dressed homogeneous block construction, and none of the estimates establishes a uniform spatial-refinement bound or solves the Clay problem.
