# Local Wilson flag repair: a uniform core event and an exact boundary obstruction

**2026-11-26 UTC. Actual SU(2) link geometry at a fixed coarse level. No estimate of the infinite-volume trace correlation.**

The [local edit bound](2026-11-26-wilson-cover-local-edit-stability.md) would control the rooted denominator if an edit removed the root component without disturbing exterior factors. There are two distinct issues: the geometric flag repair, and whether the repaired flag configuration factors in the required way. The former has a uniform probabilistic interior construction but not the strongest possible boundary version.

## A good core has uniformly positive conditional probability

Use the fundamental SU(2) chord: write U as a unit quaternion q, so c(U)=|q-1|. This is the normalized Frobenius chord and is bi-invariant as a distance d(U,V)=c(UV^{-1}). In particular c(U_1...U_4)≤sum c(U_i), also for inverse links. Fix a finite set of vertices A. Let E_A be the union of edges of every plaquette incident to at least one vertex in A. It includes the one-plaquette halo; write k=|E_A|. Use the actual [flag definition](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Masks.lean#L26-L37), not just plaquettes based at vertices of A.

The event that every bond in E_A is in the Haar ball c(U)<t/4 makes every plaquette incident to A unflagged at threshold t, regardless of the exterior. By the [period-uniform conditional finite-energy bound](2026-11-26-blocked-trace-finite-energy.md), uniformly in the fine cutoff and period at the fixed coarse scale,
\[
 \Pr(A\cap\mathrm{flags}=\varnothing\mid U_{E_A^c})
 \ \ge\ e^{-dk}\,h(t/4)^k,\qquad
 h(r)=\frac{\theta-\frac12\sin(2\theta)}{\pi},\quad \theta=2\arcsin(r/2).
\]
The Haar formula is the spherical cap area on the unit 3-sphere: polar density (2/pi) sin² θ. This is a positive replacement event, not a claim that the repaired law equals the old law or that flags outside A are unchanged. A flag can change only at a vertex touching a plaquette using E_A. Accordingly all flags outside that one-more-plaquette footprint really are unchanged. Payload and eligibility preservation for a forced address requires its **inspected support** to avoid changed reads, as specified by [UsesFinal](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Masks.lean#L74-L98), not just its inventory avoiding A.

## A stronger exact repair cannot be promised at the boundary of a cube

In a large torus with a nonwrapping cube, allow edits only on links with both endpoints in the cube. Pick a boundary link e parallel to direction 1 along the intersection of its outward faces in directions 2 and 3. Two plaquettes sharing e extend outward in directions 2 and 3 respectively. Each meets the editable edge set only at e, and their other three edges are distinct. Set all these exterior edges to I except one in the second plaquette, which is -I. For any value U on e, the two chords are c(U) and c(-U), with inversion permitted without changing them. Since
\[
 c(U)^2=2-2\operatorname{Re}q,\qquad c(-U)^2=2+2\operatorname{Re}q,
\]
at least one chord is at least sqrt(2). Both endpoints of e therefore remain flagged at the pinned thresholds 0<t≤1, for every interior edit. This also holds on an open neighborhood of the chosen exterior data, since the strict margin sqrt(2)-1 is uniform over U and the group is compact; such a finite cylinder has positive probability by finite energy. This is a legitimate SU(2) link configuration, not a toy forced-gas assignment. It does not prevent making a buffered interior core healthy, and does not rule out a repair defined by a different or adaptive region.

## What this gives the rooted argument

If a forced mark at the origin has its support contained in a tested healthy core, it vanishes: eligibility requires a nonempty inventory of actual flags in that support. An arbitrarily long marked address can still contain the origin and a flag outside the core, so a healthy core does not imply the full forced score is zero. Truncating addresses by range makes this distinction exact in the numerator, but dropping their absolute mass is not justified after dividing by the signed covering sum.

Thus a local construction can create a healthy buffer and preserve genuinely exterior reads, but cannot enforce a perfectly clean patch boundary with arbitrary fixed exterior. To exploit the edit comparison one must prove a probabilistic bound for cross-buffer eligible supports **relative to the rooted covering sum**, or a different sufficient screening criterion. No decay, trace-sector gap, or full mass gap follows.
