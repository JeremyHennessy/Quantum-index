# Widening the four-square lattice: band detection survives, isolated mode does not carry over

2026-11-27. This is a finite, open continuous-time SU(2) Wilson Hamiltonian. It widens the four-face strip to a spatial rectangle of two rows and four columns; it is not a spatial continuum limit, volume-uniform estimate, or 4D mass-gap result.

## A larger band, not a three-state model

Use H=H0-gV with H0=sum n_e(n_e+2)/2 and V the sum of face half traces, as in the [four-square continuous-time result](../four-square-continuous-time-probe/README.md). The [physical spin-network construction](https://arxiv.org/abs/hep-lat/9906036) assigns each label configuration a multiplicity equal to the product of vertex invariant dimensions. Enumerate all edges under C=sum n_e(n_e+2)<=32 and compute each multiplicity by successive Clebsch–Gordan coupling (integer counts, including four-valent vertices). Higher C cannot affect the energy-15 eigenspace or come within 1 of it. The four-by-one strip has dimension 3 at energy 15. The three-by-two comparison has dimension 25 from 21 binary labels; the four-by-two rectangle has dimension **64** from 56 binary labels, of which eight have multiplicity two. There are no nonbinary energy-15 labels in any of the three checks. Ignoring vertex multiplicity understates the widened band.

Number top-row faces 1–4 and bottom-row faces 5–8 from left to right. The three original states (top masks 1234, 124, 134) still embed isometrically with new edges trivial. At first order a bottom face can share at most one boundary edge with a top-only state, so toggling it cannot keep the boundary at ten edges. The old subspace therefore has no first-order coupling to any of the other states in the band.

## Exact second-order leakage

The state 124 has a top-left two-face loop and a separated elementary loop at face 4. Move that elementary loop to face 8, vertically below it, giving the band state 128 (with each number a face label, not a decimal mask). The left rectangle is a spectator: it has no vertex in common with either face 4 or 8. The first-order path is parity forbidden. The energy-15 reduced-resolvent product for the two-step path has three contributions from the active two adjacent faces. In the convention where each basis loop character is unit normalized:

- If the original face is removed first, the active intermediate is vacuum: product 1/4, denominator 0-6=-6.
- If the new face is added first, multiplication gives one half of the product of the two elementary traces. Its projection onto the joined rectangle has amplitude 1/4 by Haar fundamental contraction. Its squared weight is 1/16 at active energy 9, denominator 3.
- That product's full squared norm is 1/4 by independence of Haar face variables; its remaining weight 3/16 is on the unique spin-1 shared edge channel. Its other six edges have n=1 and the shared edge n=2, giving active energy 13, denominator 7.

The second-order effective Hamiltonian coefficient is minus the sum, **-1/168**. The other odd-basis component 134 has no such contribution to 128 because four, not two, parity flips are required. Thus the old odd vector (124-134)/sqrt(2) has a genuine off-block coefficient -1/(168 sqrt(2)). This is a basis-specific statement about the effective Hamiltonian on the fixed unperturbed projection, not a claim about a unique eigenvector of the 64-dimensional interacting band.

## The probe still detects the band

Take the original probe F=W1 W3-W2 W4, the free vacuum v, and the old odd reference o. Let P(g) be the full energy-15 band projection continued with a radius-1/2 contour and P0(g) the vacuum projection. The analytic bilinear function f(g)=(P(g)o)^T F P0(g)v is odd by the simultaneous face center flip. Its linear coefficient is exactly sqrt(2)/96, the value from the strip: a single bottom-face interaction cannot contribute to a top-only final parity with a top-only probe. The contributing top-face intermediate states satisfy the identical reduced energy denominators and Haar contractions, now tensored with trivial new edges. In the degenerate band the derivative of P(g)o has perpendicular component given by the reduced resolvent and zero in-band component, so this argument does not require diagonalizing the band.

On |g|=.03, ||gV||<=.24 and both radius-1/2 Riesz projections have norm <=1/(1-.48); hence |f(g)|<8. Oddness bounds all terms after degree one by 8*(g/.03)^3/(1-(g/.03)^2). At g=.0001 the positive leading term minus this tail exceeds 1.17e-6. Consequently the original probe has nonzero projection onto the widened band from the true interacting vacuum. It identifies no particular split level there. Next test: resolve which individual widened modes carry the signal, rather than assuming the old odd level stays isolated.

Replay: python3 check.py (standard library only).
