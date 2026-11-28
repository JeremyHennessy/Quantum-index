# First mixed radial conditional energy for adjacent closed loops

Use the same regular class angle and metric as in
[the closed-loop conditional calculation](LOCAL-CLOSED-LOOP-CONDITIONAL-SCORE.md).
Write x=cos(theta), y=sin(theta), v=Re(W), and p=n·Im(W). Work first in
dimensionless couplings t1=g1/c, t2=g2/c. Let q be the vacuum density
conditional on the regular angle, relative to conditional reference
Haar. The same q, evaluated at a full coarse holonomy of that angle,
is its fixed-holonomy density: simultaneous conjugation makes the
normalizer a class function.

The mixed electric calculation for two squares uses only their
shared link and is unchanged by this choice of blocking. It gives
[t1 t2] Omega = xv/156 + Re(WZ)/1404, where Re(WZ)=xv-yp. Here
[t1]Omega=x/12 and [t2]Omega=v/12, so for rho=Omega² one obtains

    [t1 t2] rho = (79/2808) xv - yp/702.

Under Haar disintegration at this angle both v and p have mean zero.
Thus the first coefficients of the coarse marginal density relative
to reference Haar are m10=x/6, m01=0 and m11=0. Dividing rho by m gives

    q10=0,  q01=v/6,  q11=xv/2808-yp/702.

Along the unit radial horizontal derivative T, T theta=2, Tn=0,
Tv=p/2, and Tp=-v/2. The precise normalized-density score
identity is q s=Tq (the radial reference divergence depends only
on the angle). The fixed conditional reference measure has mean zero
for this source. In particular

    b01=p/12,   b11=-5xp/1872=-(5x/156)b01,

where b=Tq. In differentiating q11 the two v terms cancel exactly.

Let A(q) be the unscaled, density-weighted vertical Dirichlet operator
on fixed reference Haar; e.g. A(q)=-div_v(q grad_v) using the induced
regular-fiber metric. Then the physical inverse-score energy is
c⁻¹⟨b,A(q)⁻¹b⟩. Neither b10 nor A10 is present; hence at degree
t1 t2² the only contribution is 2⟨b01,A(1)⁻¹ b11⟩, with the same c
prefactor. The ratio to the t2² coefficient is -5 cos(theta)/78.

In physical couplings the true class-fiber expansion at a fixed
regular angle and fixed c>0 is therefore

    E_theta =
      g2² / [576 c³ (63/4 + (360/47) cot²(theta))]
      × [1 - 5 g1 cos(theta)/(78 c)]
      + O_theta(g2²(g1²+g2²)).

For the *radial direction of the finer, fixed-holonomy fiber*, the
same bracket multiplies g2²/(6480 c³); this uses its own operator
A(1), not that of the class fiber. Evenness in g2 and vanishing at
g2=0 give the error orders via the fixed-fiber analytic expansion.
A center flip in an exclusive coarse link exchanges theta and
pi-theta while changing g1's sign. The odd-in-g1 coefficient
vanishes at the midpoint and has the expected antisymmetry away
from it. The formula does not control singular endpoints, simultaneous
volume/coupling limits, or a weak-bare continuum regime.
