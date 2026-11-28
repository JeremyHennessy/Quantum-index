# Exact score-energy saturation in a free-prefix Wilson plaquette

Consider a finite SU(2) product configuration space with electric metric
`-tr(XY)/2`. The only magnetic term is `-g Re(W)`, where `W=G U_b`
is the oriented holonomy of a four-link plaquette, written so that the
link `U_b` is traversed positively and last. The other three plaquette
links are distinct and are not in the coarse path. The coarse path
`Z=U_1 ... U_b` has `b>=2` links; its first `b-1` links are free.
Other links, if present, are also free. The Hamiltonian is
`H=-c Delta-g Re(W)` with fixed `c>0`.

The positive normalized ground state is a function `omega(W)`. To
see this, solve the one-holonomy ground state problem
`[-4c Delta_W-g Re(W)]omega=E omega` and lift the positive solution.
Each of the four distinct plaquette coordinates contributes the same
Laplacian on a function of W, so the lift is an everywhere positive
eigenfunction and therefore the product-space ground state. Haar
measure of W is normalized. Denote its tilted law by `mu=omega^2 dW`.

## Exact conditional reduction

For the product Haar metric the coarse map Z has horizontal unit lift
of a left unit direction X given by the sum of the b inverse-prefix
rotated left link fields divided by sqrt(b). On a function of W this
has only its U_b term, which acts on W by right multiplication with
`B=Ad_(Z^-1)X`, divided by sqrt(b). Given Z, the complete active
plaquette law is independent of Z: a free prefix link integrates out
against Haar to make Z Haar independently of every active coordinate.
In particular the score is the centered function
`s=(R_B log(omega^2))/sqrt(b)` of W, since Haar integration kills
`R_B(omega^2)`.

The inverse metric on functions of (Z,W), written in right-increment
frames for both variables, has blocks `[[b I, I],[I, 4 I]]`: independent
link variations contribute b and 4 to the diagonal blocks, and only
the shared right variation of U_b contributes to the mixed block.
Projecting off Z thus gives vertical energy coefficient `4-1/b` on W.
Here the resulting form reduces the operator, not just its compression.
For a smooth function F of W its ambient gradient decomposes as
`grad F=V_F+H_F`, with V_F vertical. If R_j is the right-increment
field of Z in basis direction j and its horizontal unit lift is
`T_j`, then `H_F=sum_j (R_j F)(W) T_j/sqrt(b)`, with R_j F
in this formula a right-increment derivative on W. A right-increment
horizontal lift is built from suffixes: its link-e term is a right link
field with coefficient rotated by the suffix, which does not contain
link e. Consequently each T_j has zero ambient Haar divergence, and
`T_j F(W)=(R_j F)(W)/sqrt(b)`. The ambient weighted divergence of
`V_F` is therefore exactly `(4-1/b) [Delta_W F+
grad log(omega^2) dot grad F]`. This divergence also represents the
intrinsic weighted conditional divergence: test ambient integration
by parts against arbitrary smooth test functions times a test function
of Z (V_F kills the latter) and disintegrate. Thus if
`L_W=-(1/omega^2) div(omega^2 grad)`, using c in the conditional
operator gives `L_Z F=c(4-1/b)L_W F`. The smooth conditional
density is positive on the connected compact fibre (solve for U_1),
so its inverse on centered functions exists at every finite g.
Inverting on this reducing holonomy space gives the exact identity
`<s,L_Z^-1 s>=Q_g/[bc(4-1/b)]`, where
`Q_g=<R_B log(omega^2), L_W^-1 R_B log(omega^2)>_mu`.

## Exact upper bound and a sharp localized limit

The variational formula and Haar integration by parts give
`Q_g=sup_f [ -2 integral R_B f dmu - integral |grad f|^2 dmu ]`.
Writing the right field of B as `B^R`, the integrand equals
`1-|grad f+B^R|^2`. This yields `0<=Q_g<1` at finite g:
the smooth centered Poisson solution attains the supremum, and equality
would require `R_B f=-1` everywhere, impossible upon integration
around a closed right one-parameter orbit. This uses the normalized
unit direction, not an average over the three color directions.

As g tends to positive infinity at fixed c, mu concentrates at the
identity. Indeed `E+g=4c integral |grad omega|^2 + g integral
(1-Re W) dmu`; a normalized smooth trial bump supported within an
arbitrarily small fixed radius of the identity bounds
`limsup (E+g)/g` by the maximum of `1-Re W` on its support.
Shrinking the radius proves `integral (1-Re W) dmu -> 0`, which
implies concentration since the identity is the unique zero.
Choose a fixed smooth function f whose gradient at the identity is
`-B` (a cutoff exponential coordinate). The variational expression
for this single f converges to 1 under the concentration just proved.
Combining the bounds gives
`lim_(g->+infinity) <s,L_Z^-1 s>=1/[c(4b-1)]`.
The negative-g limit is identical by flipping one nonpath plaquette
link by the center, which sends W to -W, preserves the metric and Z,
and intertwines the right derivative.

At small g, `omega=1+g Re(W)/(12c)+O(g^2)`, because the
fundamental normalized trace has `-Delta_W` eigenvalue 3.
Its right derivative has Haar squared norm 1/4 (the second moment
of one coordinate on the unit quaternion 3-sphere). Hence
`Q_g=g^2/(432 c^2)+O(g^4)`, and
`<s,L_Z^-1 s>=g^2/[432 c^3(4b-1)]+O(g^4)`
for fixed b,c. Compact elliptic analytic perturbation gives the
ground-state expansion and analytic inverse after ground-state
conjugation and adding the ground-state projection; center symmetry
makes this analytic quadratic form even in g. For b=2 the c-weighted
leading coefficient is `1/(3024 c^3)`.

The one-plaquette Hamiltonian reduction itself is established in the
literature; for example, [Mathur and Sreeraj, loop formulation](https://arxiv.org/abs/1509.04033).
This note uses that reduction to check the conditioned score-energy
quantity and does not assert priority for it.

This is a finite free-prefix diagnostic, not a claim about a full
Wilson lattice, where the other links on the coarse path are active
and the ground state need not factor through one holonomy. The
concentration limit varies a single plaquette coefficient at fixed
electric scale. It is not a weak-bare continuum limit of an actual
many-plaquette vacuum and does not prove the vertical or marginal
uniform inequality needed for a mass-gap argument.
