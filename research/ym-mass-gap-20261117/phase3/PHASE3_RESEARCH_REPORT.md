# Yang-Mills Phase 3: complete jmax=1 SU(2) spin networks and cutoff falsifier

Date: 2026-11-17. Research-only. Base Phase 2 SHA: 1988fc7b2151ffbef88c40648ff093abdd82696b. Approved main at intake: a60397f017c5c0bfc2bf88be046320a00c9d28de. DO NOT MERGE OR DEPLOY.

## Scope and source review

Model: one connected six-vertex/seven-link open two-square SU(2) Hamiltonian graph with shared link BE, no external charges, spatial plaquette-chain setting (2+1 dimensions). Primary source: Ebner et al., Physical Review D 110, 014505 (2024), section II equation (1) and p. 2. https://doi.org/10.1103/PhysRevD.110.014505. Electric Casimirs and Wilson terms are standard Kogut-Susskind physics, not original discoveries. Our parameters alpha=g^2/2 and beta=2/(a^2g^2) in the paper's convention, but the numerical examples below use arbitrary alpha,beta and are NOT stated to lie on a physical continuum trajectory. See inherited RESEARCH_CHARTER.md and the two Phase 2 certificates for historical checkpoints.

## Exact basis — all seven links constrained to j<=1

Degree-two vertices force the three outer links on each side to have spins jL and jR. The shared link has jS. The two trivalent vertices admit a single SU(2) singlet iff abs(jL-jR)<=jS<=jL+jR and jL+jR+jS is an integer. Every intertwiner multiplicity is one. Encode (a,b,c)=(2jL,2jR,2jS).

Complete list, in implementation order, with electric energy divided by alpha:

(0,0,0):0; (0,1,1):3; (0,2,2):8; (1,0,1):3; (1,1,0):9/2; (1,1,2):13/2; (1,2,1):9; (2,0,2):8; (2,1,1):9; (2,2,0):12; (2,2,2):14.

Dimension is 11. H=alpha[3C(jL)+3C(jR)+C(jS)]-beta(WL+WR), C(j)=j(j+1). These are 11 basis states of the COMPLETE link-spin cutoff, unlike the prior selective five-state enlargement. The full graph has infinitely many representations.

## Independent magnetic constructions (not two fits to the same numerical data)

A. Symbolic Racah/Wigner-6j recoupling. For WL between states (a,b,c) and (a',b,c') where a'=a+-1 and c'=c+-1 (twice-spin notation), coefficient equals

sqrt[(a+1)(a'+1)(c+1)(c'+1)] * {a/2 b/2 c/2; c'/2 1/2 a'/2}^2.

WR interchanges a and b. Formula follows from the trace of a recoupled SU(2) channel projector and the corresponding 6j overlap; computed symbolically as exact rationals/radicals using SymPy. Example entries include 1/6, 2/3, and sqrt(3)/2. Selection rules and Hermiticity are enforced.

B. Independent Clebsch-Gordan projector/Haar integral. Tree gauge yields two holonomies G,H with simultaneous conjugation. Define f_abc(G,H)=sqrt[(a+1)(b+1)/(c+1)] Tr[P_c(D_(a/2)(G) tensor D_(b/2)(H^-1))]. P_c is built from CG isometries, spin-one matrices from the symmetric square of the fundamental. Integrate f_i f_j and f_i f_j TrFund(G/H) using the 24 quaternion vertices of the S^3 24-cell. A j<=1 spin matrix is polynomial of degree at most 2 in the corresponding quaternion; multiplying two basis functions and a fundamental trace gives degree at most 5 in each independent quaternion. The 24-cell has exactly the spherical moments needed through degree 5; eight signed quaternion axes alone FAIL the fourth moment (1/4 instead of Haar 1/8). Do NOT use this cubature for unqualified higher-spin entries.

Independent local run: all 11 functions orthonormal to ~1.4e-14; complete 11x11 WL and WR matrices agree entrywise with the exact 6j expressions to <=1.5e-14. Verified explicit gauge invariance under simultaneous SU(2) conjugation. Exact-head GitHub acceptance remains conditional on the dedicated workflow passing.

## Independent Phase 2 audit

Phase 2's claimed untruncated fixed-graph bound E1-E0>5/2 at alpha=1,beta=1/2 has a correct minmax comparison under the declared self-adjoint compact-resolvent operator. The whole omitted tail satisfies QHQ>=9/2 and ||QHP||=sqrt(5/2)/2. On the low excited sector a=(15-sqrt(11))/4. Subtracting 5/2 I from the 2x2 comparison matrix gives leading minor (5-sqrt(11))/4>0 and determinant (15-4sqrt(11))/8>0. Therefore the stated restricted-model inequality follows. No Lean formalization or expert peer review is claimed, and no volume or continuum limit is implied. The all-cutoff matrix arithmetic tests below do not improve this into the Clay solution.

## NEW NEGATIVE CONTROL: raw high-spin leakage cannot vanish

Let J=n/2 and P_J be the complete physical link-spin cutoff. The normalized gauge-invariant spin-network state psi_J(G,H)=chi_J(G) belongs to P_J.

Multiplying by WL=chi_(1/2)(G) gives chi_(J+1/2)(G)+chi_(J-1/2)(G). The first term has squared norm one and is excluded from P_J.

Multiplying by WR=chi_(1/2)(H) gives two orthogonal total-spin coupling channels for the shared link; the excluded jS=J+1/2 channel has squared coefficient (J+1)/(2J+1). The excluded terms of WL and WR differ in outer-link labels, so are mutually orthogonal. Thus, exactly for EVERY J>=0:

||Q_J (WL+WR) psi_J||^2 = 1+(J+1)/(2J+1) = 3/2+1/[2(2J+1)] > 3/2.

Consequently for any fixed beta>0, ||Q_J H P_J||>=beta*sqrt(3/2) at every cutoff. Unweighted coupling-norm suppression as J increases is REFUTED for this projection. This is elementary SU(2) character fusion, not a claimed literature novelty, and does not rule out ENERGY-WEIGHTED or local estimates. The formula was checked independently with exact 6j transitions for J=1/2 through J=3.

A positive conditional alternative is Q_J H Q_J >= [alpha*C(J+1/2)-4 beta] Q_J, because every omitted state has at least one larger link spin and ||WL+WR||<=4. At fixed alpha,beta this floor grows ~J^2, so energy-weighted Schur methods may control truncation. No bound has been established uniform in alpha/beta continuum scaling or in the size of a connected lattice. Do NOT claim this proves a Yang-Mills mass gap.

## Adversarial finite-compression spectra — numerical only

all-link jmax | dimension | gap alpha=1,beta=1/2 | gap alpha=0.1,beta=1 | gap alpha=0.01,beta=25
1/2 | 4 | 3.159603 | 1.699465 | 39.538976
1 | 11 | 3.094514 | 1.228266 | 23.766964
3/2 | 23 | 3.091972 | 1.074829 | 17.514074
2 | 42 | 3.091959 | 1.035545 | 13.173882
5/2 | 69 | 3.091959 | 1.027487 | 10.161517
3 | 106 | 3.091959 | 1.025052 | 8.039786

At weak electric coupling the jmax=1 apparent gap is approximately 2.96 times the jmax=3 result: strong falsifier of premature cutoff convergence. Values are NOT certified untruncated spectra. Higher-J numeric Wilson entries are built from the analytic 6j formula; the 24-cell crosscheck only applies to j<=1.

## Tests, uncertainty, and next decision

One locally constructed test fixture initially failed because its expected K matrix used the wrong basis order; the independent calculations agreed once the test fixture ordering was corrected. 18/18 detailed local Python tests passed after that correction (Python 3.13, NumPy 2.3.5, SymPy 1.14.0). This independent repository implementation has its own pinned Python 3.12/NumPy/SymPy test workflow; distinguish local evidence from final exact-head CI. Originality in the mathematical literature has NOT been established. No new four-dimensional physics claim.

Next best bounded question: on the smallest connected three-plaquette graph, derive a gauge-invariant ENERGY-WEIGHTED local tail estimate and test its constants against added volume and a declared physically scaled coupling trajectory. A bound that deteriorates under that test must be rejected. A four-dimensional continuum mass-gap proof for all compact simple G remains open.
