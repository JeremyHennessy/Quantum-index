# Actual two-square Wilson vacuum: antipodal raw-slice angular gap

Take two square plaquettes with edge sets disjoint and with exactly one shared vertex. Orient a length-two path that enters this vertex along one edge of the first square and exits it along one edge of the second. Use the unit-quaternion \(SU(2)\) metric and dimensionless Wilson Hamiltonian with equal magnetic coupling \(t\) on both squares and ordinary electric energy on every link. Retain the ordered path product \(z=-I\) and fix all other links to identity. The result is for this fixed finite graph and this particular raw slice; its actual conditional density has a canonical smooth positive disintegration version.

## Exact conditional and physical functions

Base the square holonomies \(A,B\) at the common vertex, with orientations chosen to use the path edges in their respective directions. Given the fixed spectator values, these holonomies on the raw slice are \(A=V\) and \(B=-V^{-1}\) for the first prefix \(V\); possible changes of based products by inversion do not change the Wilson traces. The graph with all its link variables unfixed has exact product vacuum \(\psi_t(A)\psi_t(B)\). In fact the electric operator on a function of just one square holonomy is four times its single-group electric operator, since its four links are distinct. The normalized positive ground state \(\psi_t\) of
\[
 h_t=-\Delta_G-(t/4)\operatorname{Re}U
\]
is central. The product pullback is a positive eigenfunction of the full two-square operator (edge sets disjoint), hence its positive ground state by simplicity. Independence of the two Haar products also verifies its normalization. The common vertex does not affect the electric independence.

The raw conditional law of \(V\) is therefore
\[
 d\nu_t(V)\ \propto\ \psi_t(V)^2\psi_t(-V^{-1})^2\,dV,
 \tag{1}
\]
with twice the round metric, since both fine links have the same tangent speed for a varying single prefix. Here and below the angular part of round Haar is uniform on \(S^2\), with radial Haar proportional to \(\sin^2\theta\,d\theta\) for \(\theta=d_G(I,V)\). Replacing \(t\) by \(-t\) multiplies the argument of \(\psi_t\) by \(-I\), which exchanges the two factors in the radial conditional density. It thus suffices to consider \(t>0\).

The graph quotient is the pair of square holonomies modulo **simultaneous** conjugation at the common vertex: choose a spanning tree and leave one link from each cycle; the remaining gauge at the root conjugates both. The raw-slice pair \((V,-V^{-1})\) has simultaneous conjugacy determined by \(\theta\). Thus restrictions of physical functions to this slice are radial, and conversely every smooth central function of \(V\) is the restriction of a smooth central function of \(A\). In particular the angular test below is an ambient raw-slice test, not a physical restriction. This also follows from the stabilizer: simultaneous constant gauge changes preserve all identity raw spectators and preserve the retained central product, and act on \(V\) by conjugation.

## Exact radial ODE and concentration

Put \(a=t/4\), \(h=a^{-1/2}\), \(W(\theta)=1-\cos\theta\), and \(v_h(\theta)=\sin\theta\,\psi_t(\theta)>0\) in the open interval. For a radial function, the round Laplacian is \(\partial_\theta^2+2\cot\theta\,\partial_\theta\). With \(e_0(t)\) the lowest eigenvalue of \(h_t\), the ODE and boundary conditions are
\[
 v_h''=h^{-2} (W-\lambda_h)v_h,\qquad
 \lambda_h=(e_0(t)+a+1)/a=O(h),\qquad
 v_h(0)=v_h(\pi)=0.
 \tag{2}
\]
For the asserted bound on \(\lambda_h\), \(e_0(t)\ge-a\) by positivity of the electric energy. A radial bump of width \(a^{-1/4}\) at the identity has kinetic and shifted potential Rayleigh energies \(O(\sqrt a)\), using the round normal metric comparison there. This proves \(0\le\lambda_h=O(h)\) without invoking a matching oscillator limit.

For any fixed \(0<\delta<\pi\), (2) makes \(v_h\) strictly convex on \([\delta,\pi]\) for small enough \(h\). Positivity and the endpoint zero force \(v_h'<0\) there. For \(x\) in a compact subset of \((0,\pi)\) and sufficiently short fixed \(\ell>0\) with \(y=x+\ell<\pi\), bound \(W-\lambda_h\) on \([x,y]\) between constants \(0<m\le M\). Then
\[
 \sqrt m\tanh(\sqrt m\,\ell/h)
 \le -h\,v_h'(x)/v_h(x)
 \le \sqrt M\coth(\sqrt M\,\ell/h).
 \tag{3}
\]
Indeed, comparing with the constant-coefficient solution with the same initial value and derivative, the forward Duhamel formula for \(w''-m h^{-2}w\) has positive kernel, and so does its derivative kernel. Thus \(v_h'(y)\) is at least the derivative there of the \(m\)-solution; since \(v_h'(y)<0\), the latter formula gives the lower bound in (3). For \(M\), the forcing is nonpositive and the \(M\)-solution at \(y\) is at least \(v_h(y)>0\), giving the upper bound. That upper comparison requires only the upper bound \(W-\lambda_h\le M\) and positivity, not convexity. With \(\ell\) arbitrarily short after taking \(h\to0\), uniform continuity and (3) prove locally uniform convergence
\[
 -h\,v_h'(\theta)/v_h(\theta)\ \longrightarrow\ \sqrt{1-\cos\theta}.
\]
Let \(S(\theta)=\int_0^\theta\sqrt{1-\cos s}\,ds\), and \(F(\theta)=S(\theta)+S(\pi-\theta)-2S(\pi/2)\). Integration implies, uniformly on compact subintervals,
\[
 h\log\frac{v_h(\theta)v_h(\pi-\theta)}{v_h(\pi/2)^2}
 \ \longrightarrow\ -F(\theta).
 \tag{4}
\]
The function \(F\) has its unique minimum zero at \(\pi/2\): \(F'(\theta)=S'(\theta)-S'(\pi-\theta)\), with \(S'\) strictly increasing. In particular \(F(0)>0\).

To handle actual endpoints without imposing a compact cutoff on the measure, the upper comparison in (3) with \(M=3\), \(\ell=\pi/4\) gives \(-h v_h'/v_h\le C\) for all \(0<x\le\delta\), for small \(h\) and fixed \(\delta<\pi/4\). Thus \(v_h(\theta)\le v_h(\delta)e^{C\delta/h}\) there. Convexity of \(v_h\) on \([\pi-\delta,\pi]\) and \(v_h(\pi)=0\) give \(v_h(\pi-\theta)\le (\theta/\delta)v_h(\pi-\delta)\). The unnormalized radial density in (1) is
\[
 \frac{v_h(\theta)^2v_h(\pi-\theta)^2}{\sin^2\theta}\,d\theta .
 \tag{5}
\]
The factor \((\theta/\delta)^2/\sin^2\theta\) is bounded for fixed \(\delta\). Choose \(\delta\) small so that \(F(\delta)>C\delta\). Equations (4)–(5) then bound the integral near each endpoint by \(v_h(\pi/2)^4\) times a fixed constant times \(e^{-c/h}\), for some \(c>0\). Away from the two endpoints and any fixed neighborhood of the equator, (4) gives the same kind of bound, since \(F\) has positive minimum there. The denominator in (5) is at least a positive fixed interval length times \(v_h(\pi/2)^4e^{-\varepsilon/h}\), for any fixed \(\varepsilon>0\) and all sufficiently small \(h\), by selecting an interval about \(\pi/2\) on which \(F\) is small and using (4). Taking \(\varepsilon\) below the off-neighborhood exponent proves exponentially small normalized radial mass outside every fixed equatorial neighborhood. In particular the radial marginal converges weakly to \(\delta_{\pi/2}\). All comparisons use the exact square vacuum ODE, not a Gibbs surrogate or an unverified WKB formula.

## Ambient degree-one sector and scope

Let \(\omega\in S^2\) denote the quaternion imaginary direction and let \(Y_1(\omega)\) be a real degree-one spherical harmonic, normalized in spherical probability measure. Choose a fixed smooth \(\chi(\theta)\) supported away from the poles and equal to 1 near the equator. The smooth ambient test \(f=\chi Y_1\) has mean zero. In the doubled round metric its Rayleigh quotient is
\[
 \frac{\int[\tfrac12|\chi'|^2+\chi^2/\sin^2\theta]\,d\nu_t^{\rm rad}}
      {\int\chi^2\,d\nu_t^{\rm rad}}
 \ \longrightarrow\ 1.
\]
Here the \(S^2\) eigenvalue for degree one is 2; the radial derivative is supported away from the concentrating equator. Conversely the entire degree-one sector has quotient at least 1 because \(1/\sin^2\theta\ge1\) and the radial part is nonnegative. Thus its first spectral value converges to exactly 1, and the true full raw ambient gap has \(\limsup\le1\). More generally any positive angular degree \(\ell\) has first value tending to \(\ell(\ell+1)/2\) by the same cutoff argument and lower bound. This does not identify the limit of the full gap without controlling the first nonconstant radial mode. Since the physical restrictions here are precisely radial, none of these angular test functions establishes a physical conditional upper bound. The result is a finite-graph competing-preference stress test and makes no claim for long paths, continuum, or Phase 15.
