# The matched Wilson trace has an exact blocked conditional response

**2026-11-26. Source-audited finite-cutoff identity and obstruction. Not a new Lean replay, an estimate of decay, or a mass-gap claim.**

This addresses the question left by the [fixed-degree one-link estimate](2026-11-26-fixed-degree-wilson-link-projection.md): what is the actual observable, before and after blocking? All source references below are pinned to 3456e5e75cf8d4cd558955a5c7638fba2d68f464. Take the fixed real, time-even grade-four representative of the [matched continuum trace](2026-11-26-matched-wilson-trace-reflection.md).

## The bare trace really does have cutoff-uniform polynomial degree

[SectionData](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/Source/Local.lean#L81-L101) is fixed before the cutoff: it is a linear map from a finite coordinate space into polynomials in link matrix entries and conjugates on one finite stencil. Take the maximum total link-entry degree of its finitely many basis images. [The bare cylinder](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/Source/Insertion.lean#L63-L78) uses the cutoff-dependent inverse terminal map, coordinate scaling, and the explicit inverse mesh power. These change coefficients only, not that maximum. Translation, packet smearing, centering, and taking a time difference also preserve this degree bound; summing monomials does not multiply them. For the fundamental SU(2) realization the entries and conjugates are linear in quaternion coordinates. This closes the **bare degree** premise of the fixed-degree estimate, but gives no coefficient or squared-norm bound uniformly in cutoff, and does not identify the physical trace with the derivative of the bare Wilson action with respect to its coupling.

## Following exactly the same insertion through the pinned RG

For fine cutoff N, fixed period index p, and levels m from N down to the insertion reference r, let w_m be the unmarked density relative to probability Haar at level m. Write Z for its common integral and K_m for the Markov kernel from fine level m+1 to coarse m. [The history](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/History.lean#L193-L227) gives the bare Wilson law at N and w_m=K_m^*w_{m+1}. [Kernel normalization](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/RG/Push.lean#L13-L38) and Fubini ensure this is an actual joint probability construction, not merely mass bookkeeping.

Let M_m be the marked density at the origin with input terminal-inverse of the *same* trace token. [The marked recurrence](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/Source/Insertion.lean#L79-L104) gives M_N=a_N^4 w_N O_N and M_m=(a_m/a_{m+1})^4 K_m^*M_{m+1}. Thus n_m=M_m/a_m^4 satisfies the same push as w_m, starting from n_N=w_N O_N. Under the actual joint chain starting from w_N/Z,
\[
 h_m(V)=\mathbb E[O_N(U_N)\mid U_m=V]=
 \frac{n_m(V)}{w_m(V)}\quad (w_m\,dH_m\text{-a.e.}).
\]
Indeed pairing either side with a bounded function of V produces the same normalized integral by Fubini. On zero-density sets the numerator vanishes as a signed measure; no pointwise division there is needed. For an arbitrary fine **packet or time difference**, push the signed density with that full fine observable directly. One cannot move its fine anchor to a coarse anchor unless it lies on the embedded coarse grid or one proves the required translation rule. This argument neither changes the Wilson measure nor assumes a map from the noisy block variable to a deterministic exterior shell.

In particular, subtracting the actual finite mean c from the insertion replaces n_m by n_m-cw_m. The exact blocked squared norm and its positive loss are
\[
 Q_m=\frac1Z\int_{w_m>0}\frac{|n_m-cw_m|^2}{w_m}\,dH_m,\qquad
 Q_{m+1}-Q_m=\mathbb E\operatorname{Var}(h_{m+1}(U_{m+1})\mid U_m).
\]
This follows by the Markov property and orthogonality, not an assumption that conditioning on nonnested noisy variables normally has a tower law. Equivalently h_m-c is the first derivative of the log marginal density on tilting the fine probability by the actual centered insertion. These identities concern the **same normalized observable** as the pinned trace; no extra running-coupling derivative is required.

## What would turn the identity into an estimate?

The relevant norm is weighted by **inverse unmarked density**. In the source decomposition the non-forced terms already have a factor w_m, whereas the marked forced piece has an exponential factor and a separate sum; after division, the latter is divided by the unmarked gas wherever w_m>0. See [the density formula](https://github.com/yang-mills-group/OpenAI-YM-20261028/blob/3456e5e75cf8d4cd558955a5c7638fba2d68f464/YM/Source/Insertion.lean#L29-L61). Neither positivity nor a small absolute signed-mass error alone implies a small contribution to Q_m. Exact control: two coarse states with probabilities (epsilon,1-epsilon), signed centered masses (sqrt(epsilon),-sqrt(epsilon)), have L1 signed mass 2 sqrt(epsilon) but Q=1/(1-epsilon). The score is realized by a finite tilt at every fixed epsilon. This is a negative control for the inference from absolute to relative control, not a Wilson example or a claim that the source bounds fail.

There is another distinct obligation: for two separated insertions A,B, pushing one marked density each does not prove that their correlation equals the covariance of their coarse scores. The exact remainder is E Cov(A,B | U_m) by the law of total covariance. Hence even a uniform Q_m estimate for the noisy RG channel cannot simply be substituted into the spatial-shell proof or into the physical-time decay test. It needs a two-mark bound or a genuine screening/sufficiency comparison. Coarsening in resolution is not increasing a shell radius by a fixed physical increment.

Checks on an independent two-step finite Markov chain give exact score norms 6, 36/91, 9/224 from direct summation. The rare-state check above separately falsifies the absolute-mass shortcut. The next focused test is a relative estimate for the forced marked term at one fixed physical blocking scale, and then whether the remaining two-mark conditional covariance can be bounded uniformly along the same ordered Wilson limits. No trace-sector gap or whole-theory gap is proved here.
