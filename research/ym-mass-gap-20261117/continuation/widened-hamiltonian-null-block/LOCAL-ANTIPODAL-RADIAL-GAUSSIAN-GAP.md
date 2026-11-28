# Antipodal two-square raw slice: exact leading radial gap

Keep the exact separable two-square Wilson graph and the identity raw spectators, with fixed ordered coarse product \(-I\), from the companion antipodal note. Its actual raw prefix density is proportional to \(\psi_t(V)^2\psi_t(-V^{-1})^2\) relative to Haar, and the intrinsic metric is twice round. Physical restrictions at this particular slice are exactly the radial tests. By the center flip assume \(t>0\), and set \(a=t/4,\ h=a^{-1/2},\ m=\pi/2\). The result below proves radial gap \(\sim h^{-1}=\sqrt{|t|}/2\), in dimensionless electric units, and full ambient raw gap \(\to1\).

## Derivative control for the exact vacuum ODE

Let \(\psi>0\) be the normalized central ground eigenfunction of \(-\Delta_G-a\operatorname{Re}U\), with eigenvalue \(e_0\). For \(\theta\in(0,\pi)\) put
\[
 W=1-\cos\theta,\qquad v=\sin\theta\,\psi,\quad
 \lambda=(e_0+a+1)/a=O(h),\quad
 \lambda_0=(e_0+a)/a=O(h).
\]
The shifted one-link ground equation is \(v''=h^{-2}(W-\lambda)v\), with \(v>0\) and Dirichlet endpoints. Bounded \(\lambda,\lambda_0=O(h)\) follows from positivity of \(-\Delta_G\) and a normal-coordinate trial bump of width \(a^{-1/4}\), as in the companion note. With \(M=v'/v\), one has \(M'=(W-\lambda)/h^2-M^2\). Near both endpoints \(M'<0\) since the positive solution has a simple zero, with no quadratic term by the ODE. If \(M'\) vanishes in the open interval then \(M''=W'/h^2>0\) there, so all zeros would be strict crossings from negative to positive, impossible with negative signs near both ends. Thus \(p=-hM\) satisfies \(p'>0\) everywhere.

On compact interior intervals the elementary constant-coefficient comparison for the positive decaying solution gives \(p\to\sqrt W\) uniformly (see companion note). For clarity the upper comparison trapping \(p(x)\) by \(\sqrt{Q}\coth(\sqrt{Q}\ell/h)\) uses only positivity up to \(x+\ell\) and the bound \(W-\lambda\le Q\); the lower comparison uses \(v'(x+\ell)<0\) and \(\inf_{[x,x+\ell]}(W-\lambda)>0\). The latter holds away from the endpoints for small \(h\), where the convex \(v\) decreases to its right-endpoint zero.

For \(r=p'\) the Riccati derivative is \(h r'=2pr-W'\). Fix a lead length \(\delta_0>0\) for all \(x\) in a given compact interior interval, such that \([x,x+\delta_0]\) stays on an enlarged interior interval. Then
\[
 r(x)=
 e^{-(2/h)\int_x^{x+\delta_0}p}\,r(x+\delta_0)
 +\frac{1}{h}\int_x^{x+\delta_0}
      e^{-(2/h)\int_x^s p}\,W'(s)\,ds .
 \tag{1}
\]
On the enlarged interval \(p\ge c>0\) for small \(h\), by its locally uniform limit, and \(|r|=|(p^2-W+\lambda)/h|\le C/h\). The first term in (1) tends uniformly to zero. Substitute \(s=x+h y\) in the integral. Its integrand is dominated by \(e^{-2cy}\sup|W'|\), and on bounded \(y\)-ranges converges uniformly in \(x\) to \(e^{-2\sqrt{W(x)}y}W'(x)\). Uniform truncation of the tails proves
\[
 p' \ \longrightarrow\ W'/(2\sqrt W)
 \quad\hbox{locally uniformly in }(0,\pi).
 \tag{2}
\]

## Global inward slope of the actual conditional radial density

Write \(\ell(\theta)\) for the logarithm of the unnormalized radial density \(v(\theta)^2v(\pi-\theta)^2/\sin^2\theta\). It is symmetric about \(m\). Exactly,
\[
 \ell'(\theta)=\frac2h[p(\pi-\theta)-p(\theta)]-2\cot\theta,\qquad
 \ell''(\theta)=-\frac2h[p'(\pi-\theta)+p'(\theta)]+2\csc^2\theta .
 \tag{3}
\]
Equation (2) gives a fixed central interval where \(\ell''\le-c_0/h\) for small \(h\), and where \(h\ell''(\theta)\to -2\big[W'(\theta)/(2\sqrt{W(\theta)})+W'(\pi-\theta)/(2\sqrt{W(\pi-\theta)})\big]\) uniformly. At \(m\) the latter limit is \(-2\). On any compact subinterval left of that central interval, the uniform limit of \(p\) and strict increase of \(\sqrt W\) give \(\ell'\ge c_1/h\).

Here is a uniform endpoint estimate to complete the slope argument. Write \(q=-h\psi'/\psi=p+h\cot\theta\). The radial flux equation is
\[
 (\sin^2\theta\,\psi')'=h^{-2}(W-\lambda_0)\sin^2\theta\,\psi .
\]
The integral of the right-hand side is zero over \([0,\pi]\) by smooth radial endpoints, and \(\psi>0\). Thus \(0<\lambda_0<2\) and the right-hand side changes sign once from negative to positive, so every proper prefix integral is negative. Hence \(\psi'<0\) in the interior. For fixed \(L\) and \(0\le\theta\le Lh\), \(|h^{-2}(W-\lambda_0)|\le C_L/h\) for small \(h\), using \(W=O(\theta^2)\) and \(\lambda_0=O(h)\). The same flux equation with \(\psi\le\psi(0)\) gives \(-\psi'(\theta)\le C_L \theta \psi(0)/h\); integration gives \(\psi(\theta)\ge(1-C_L' h)\psi(0)\). Thus \(0\le q(\theta)\le C_L''h\) there.

For \(Lh\le\theta\le\delta\) with fixed small \(\delta\), the positivity-based upper ODE comparison on \([\theta,\theta+\delta]\) gives
\[
 p(\theta)\le\sqrt{W(2\delta)}\coth(\sqrt{W(2\delta)}\,\delta/h).
\]
Since \(h\cot\theta\le 1/L\), we can take \(L\ge4\) and then \(\delta>0\) small enough that \(q(\theta)\le1/2\) on this interval for small \(h\), also on its \([0,Lh]\) complement. On the other hand \(p(\pi-\theta)\ge p(\pi-\delta)>1\) on \((0,\delta]\) by monotonicity and the interior limit \(\sqrt{W(\pi-\delta)}>1\). By (3), now rewritten as \(\ell'=2[p(\pi-\theta)-q(\theta)]/h\), the endpoint slope is at least \(1/h\). Symmetry gives the reflected statement. Combining the endpoint, compact and central estimates, there is a fixed \(c>0\) such that, for all small \(h\),
\[
 \ell'(m+s)\le -cs/h\quad(0<s<m),
 \qquad
 \ell'(m-s)\ge cs/h\quad(0<s<m).
 \tag{4}
\]

## Gaussian form convergence including tail control

Set \(y=(\theta-m)/\sqrt h\), with symmetric interval \(I_h=(-m/\sqrt h,m/\sqrt h)\), and let \(w_h(y)dy\) be the normalized radial law after this change. Uniform convergence in (2) and (3) on the central interval, and \(\ell'(m)=0\), imply
\[
 \ell(m+\sqrt h y)-\ell(m)\longrightarrow -y^2
\]
locally uniformly. By (4) the left side is bounded above globally by \(-cy^2/2\) on \(I_h\). Extend the unnormalized relative density by zero outside \(I_h\); dominated convergence gives normalization tending to \(\sqrt\pi\) and \(w_h\to w(y)=\pi^{-1/2}e^{-y^2}\) locally uniformly, with total mass 1. In the scaled coordinate (4) also gives \(-(\log w_h)'\ge cy\) for \(y>0\), and its reflection.

To justify a lower as well as an upper gap limit, the scalar product and the dimensionless scaled radial form are
\[
 \|f\|_{w_h}^2=\int |f|^2 w_h,\qquad
 {\cal Q}_h(f)=\tfrac12\int |f'|^2 w_h .
\]
The factor \(1/2\) is from the doubled round metric, and \({\cal Q}_h\) is \(h\) times the original radial form. For a fixed \(R>1\), choose \(g=\chi_R f\) on the right, with \(\chi_R=0\) below \(R/2\), equal to 1 above \(R\), and \(|\chi_R'|\le C/R\). In the region where \(g\) is supported, \(-w_h'\ge(cR/2)w_h\). Integration by parts for smooth radial \(f\) gives
\[
 \frac{cR}{2}\int |g|^2 w_h
 \le \int |g|^2(-w_h')
 =\int (|g|^2)'w_h
 \le 2\|g\|_{w_h}\|g'\|_{w_h}.
 \tag{5}
\]
The outer boundary term is zero because \(w_h\) vanishes at the spherical pole and \(f\) is bounded there for fixed \(h\); the inner cutoff boundary is zero as well. If either cutoff region lies outside \(I_h\), the same estimate applies to its intersection (or the corresponding tail is empty). Reflection gives the analogous estimate on the left. Density or smooth approximation gives for the full radial form domain a tail estimate \(C R^{-2}(\|f\|^2_{w_h}+{\cal Q}_h(f))\). In particular bounded-energy normalized sequences cannot lose mass towards the endpoints as \(h\to0\).

For the upper gap bound use a fixed compactly supported smooth odd test approximating \(y\) in the limiting Gaussian form. It is a smooth radial test for small \(h\) since its support avoids the poles, and its mean is zero exactly by symmetry. Local convergence yields \(\limsup h\gamma_{\rm rad}\le 1\). For the lower bound take normalized radial mean-zero first eigenfunctions along a sequence realizing the liminf; they exist by the compact smooth elliptic problem on \(G\) restricted to the closed central subspace. The upper bound makes their scaled energy bounded. Local uniform convergence of the strictly positive densities on compact intervals gives local Rellich compactness and gradient lower semicontinuity. Equation (5) ensures norm and mean are preserved in the limit, using Cauchy--Schwarz for the mean on tails. Expanding the compact intervals proves the limiting Gaussian form is no larger than the liminf. Its first mean-zero quotient is 1: in \(L^2(\pi^{-1/2}e^{-y^2}dy)\) the operator \(-\tfrac12\partial_y^2+y\partial_y\) has spectrum \(0,1,2,\ldots\), for example by multiplication by \(e^{-y^2/2}\) and the one-dimensional oscillator ladder. This gives \(\liminf h\gamma_{\rm rad}\ge1\).

Therefore the exact physical restricted radial gap is \(\gamma_{\rm rad}\sim\sqrt{|t|}/2\). The ambient angular harmonic decomposition is orthogonal for both the norm and form of the exact radial density. All nonzero angular degrees have Rayleigh quotient at least 1, and degree one has first quotient tending to 1. Since the first nonconstant radial mode diverges, the full raw ambient gap now also tends to exactly 1. These different outcomes are for the same small finite graph and the exact antipodal conditioning, not a comparison with the unrestricted lattice physical gap, a large-volume assertion, or a continuum claim.
