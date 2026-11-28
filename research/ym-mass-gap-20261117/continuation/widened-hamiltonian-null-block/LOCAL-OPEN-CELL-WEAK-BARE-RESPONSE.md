# A one-edge Dirichlet stiffness test on a finite 4D open cell

**Scope.** A fixed Wilson cell with one prescribed SU(2) boundary direction; no result about a decimation with arbitrary coarse background, increasing volumes, a continuum limit, or the mass gap. Plaquettes whose four links are fixed boundary links are explicitly omitted.

## Geometry and exact gauge reduction

Use the cubical vertices \(\{0,1,2,3,4\}^4\), coordinates \((x,y,z,w)\), and positively oriented coordinate edges. An edge is boundary-tangential precisely when some transverse coordinate is 0 or 4. Put the identity on all such edges except \((1,2,0,2)\to(2,2,0,2)\), where the value is \(\exp(\theta T)\). Here \(T\in\mathfrak{su}(2)\) has norm 1 in \(\langle X,Y\rangle=-\tfrac12\operatorname{tr}(XY)\). The reverse edge uses the inverse. For the included plaquettes let
\[
S_\theta(U)=\sum_p(1-\tfrac12\operatorname{Re}\operatorname{tr}U_p),\qquad
Z_\beta(\theta)=\int e^{-\beta S_\theta(U)}\,dU,\qquad
F_\beta(\theta)=-\log[Z_\beta(\theta)/Z_\beta(0)] .
\]
All free-link integrals use normalized Haar measure.

Gauge transformations are the identity at boundary vertices and arbitrary at the 81 strict interior vertices. At each interior vertex take the edge directed toward decreasing \(z\), continuing to \(z=0\); this is a forest rooted on the boundary. Neither the perturbed link nor any other tangential boundary link is in the forest. Each interior-vertex gauge value is fixed recursively from its parent gauge value and its realized forest link, uniquely setting all 81 forest links to the identity. This gives an exact global slice, with no residual interior gauge. The gauge reduction preserves the partition integral: at each fixed set of original forest values the gauge transformation on every remaining independent link is multiplication by fixed left/right SU(2) elements, preserving its normalized Haar measure; the action is invariant. Integrating the original normalized forest Haar variables then gives a factor of one. Of 2,000 edges, 1,568 are boundary-fixed, 81 are forest-fixed, and 351 remain. There are 864 included and 1,536 pure-boundary plaquettes.

At \(\theta=0\) the action is nonnegative and the identity configuration has action zero. Every zero forces the included holonomies to be the identity (trace 2 in SU(2)); the omitted holonomies are also identities because all boundary links are then identities. Flatness makes the configuration pure gauge on the whole cube. Explicitly, define transports from the corner origin along positive monotone paths: exchanging adjacent different coordinate steps uses an elementary flat square, hence all such paths to a given vertex have the same transport. Appending a positive coordinate step then recovers every link as a transport difference. The boundary edge graph is connected, so all transports to boundary vertices are the identity. The resulting pure gauge has boundary value identity; on the unique forest slice it is the identity. This argument asserts uniqueness modulo interior gauge at zero, not global classification at general boundary angles.

## Quotient Hessian and response coefficient

In exponential coordinates on the slice the smoothed group variables at the identity are \(a\in\mathfrak{su}(2)^{351}\). Let \(D\) be the signed curl from the remaining edges to included plaquettes, and \(b\) the signed curl of the prescribed edge alone. The quadratic term of the action in \((a,\theta)\) is
\[
\tfrac12\sum_p \|(Da)_p+\theta b_pT\|^2 .
\]
This follows from the linear term of the plaquette logarithm and \(1-\tfrac12\operatorname{tr}e^X=\|X\|^2/2+O(\|X\|^4)\) near zero. If \(Da=0\), extend \(a\) by zero on boundary and forest edges. The omitted curls vanish as well. The additive monotone-path argument makes \(a\) a gradient of an interior potential zero on the boundary; the forest condition makes that potential zero everywhere. Thus \(D^\top D>0\). The slice Hessian is the tensor of this matrix with the 3-dimensional identity.

Let \(m(\theta)\) be the nearby minimal action on the slice. The positive Hessian gives a unique analytic stationary branch by the implicit function theorem. It is the global minimum for all sufficiently small \(|\theta|\): the complement of any sufficiently small coordinate neighborhood at zero has a strictly positive gap by compactness and uniqueness; choose the parameter interval so the gap persists while the stationary value stays near zero. Within the coordinate neighborhood there are no other stationary points by shrinking it in the implicit function theorem. In the unit normalization above, differentiating the minimum or directly minimizing the quadratic yields
\[
m''(0)=\min_v\|b-Dv\|^2=\|b\|^2-b^\top D(D^\top D)^{-1}D^\top b.
\]
Indeed the two Lie components perpendicular to \(T\) contribute independent nonnegative squared curls minimized at zero. The oriented \(4\times4\) \(x\)-\(z\) membrane at \(y=w=2\) consists of 16 included plaquettes. Its oriented boundary has only fixed tangential edges, and contains the prescribed edge positively, so its indicator vector \(m_\mathrm{mem}\) has \(m_\mathrm{mem}^\top D=0\), \(m_\mathrm{mem}^\top b=1\). Cauchy-Schwarz gives \(m''(0)\ge1/16\), independent of solving the linear system.

Exact replay gives
\[
\boxed{m''(0)=\frac{551981}{958272}\;\approx 0.5760170390.}
\]
The retained certificate `boundary-flux-certificate.json` with `verify_boundary_flux_certificate.py` checks the rational normal equations \(D^\top(b-Dv)=0\), \(b^\top b=1\), and the stiffness. Independently, `verify_open_cell.py` constructs the geometry and solves these equations over \(\mathbb Q\), checking the exact residual.

## Differentiated Laplace limit, with uniformity stated

The slice is a compact product of 351 SU(2) factors. Its dimension is \(n=1053\). Exponential coordinates have a smooth positive Haar density near the identity and the parameter-dependent minimizing point lies in this chart. Use a fixed small closed parameter interval inside the implicit-function neighborhood. Translate the coordinate origin to the minimizer \(x_\theta\), so the action locally is exactly
\[
 S_\theta(x_\theta+u)-m(\theta)=\tfrac12 u^\top M(\theta,u)u,\qquad
 M(\theta,u)=2\int_0^1(1-t)\operatorname{Hess}_x S_\theta(x_\theta+tu)\,dt.
\]
For small \(u\), \(M\) is uniformly positive. Its smooth positive matrix square root defines the local change \(v=M(\theta,u)^{1/2}u\), with nonsingular derivative at zero. The inverse function theorem with parameter gives smooth coordinate inverses on a common small ball in \(v\), after possibly shrinking the interval. Choose a smooth cutoff equal to 1 near \(v=0\), compactly supported in that common ball, and pull it back to the compact slice. The normalized action \(S_\theta-m(\theta)\) has a strictly positive uniform minimum on the support of the complementary cutoff: the parameter interval is compact, the minimizing branch is unique, and a common neighborhood of the branch is excluded. Thus the complementary contribution to \(e^{\beta m(\theta)}Z_\beta(\theta)\), including up to two \(\theta\)-derivatives, is \(O((1+\beta^2)e^{-c\beta})\); cutoff derivatives also have support away from the minimum. Boundedness of the required derivatives on the compact slice justifies differentiation under the integral.

On the local support the only \(\theta\)-dependence after change of variables is the smooth compactly supported density (Haar and Jacobian times cutoff). Integrate against \(e^{-\beta|v|^2/2}\); for the density and each of its first two \(\theta\)-derivatives Taylor-expand in \(v\) at zero, use odd linear Gaussian integral zero, and bound the uniform quadratic remainder, with exponentially small tail beyond the coordinate ball. Consequently
\[
e^{\beta m(\theta)}Z_\beta(\theta)=\beta^{-n/2}\bigl(A(\theta)+O_{C^2}(\beta^{-1})\bigr),
\]
where \(A(\theta)=(2\pi)^{n/2}\) times the transformed Haar density at \(v=0\), uniformly bounded below by a positive constant. Taking the log in \(C^2\) proves \(\beta^{-1}F_\beta(\theta)=m(\theta)-m(0)+O_{C^2}(\beta^{-1})\). In particular, \(\lim_{\beta\to\infty}\beta^{-1}F_\beta''(0)=551981/958272\). Direct differentiation at finite \(\beta\) gives the equivalent identity \(\beta^{-1}F_\beta''=\mathbb E_\theta[S_{\theta\theta}]-\beta\operatorname{Var}_\theta(S_\theta')\), where primes mean parameter derivatives.

All uniformity here is in a small boundary-angle interval **for this fixed cell** only. The lower bound is a scalar response to a local boundary perturbation in an included fine-plaquette membrane, not an arbitrary-background response operator, a flow or scale comparison, or evidence of continuum convergence.
