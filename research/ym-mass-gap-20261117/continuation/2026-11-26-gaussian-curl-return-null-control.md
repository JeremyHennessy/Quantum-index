# A purely Gaussian null control for the connected two-step return

**2026-11-26 UTC. Linearized spatial curl benchmark, not an interacting Wilson limit.**

The [one-plaquette joint-coupling benchmark](2026-11-26-one-plaquette-isotropic-gaussian-closure.md) has a single radial oscillator and no limiting rank-one return for its centered squared flux. In a spatial array a return can occur even in an exactly Gaussian theory.

Consider the free lattice Gaussian gauge field in transverse coordinates on a spatial three-torus of side L≥4 and infinite discrete time, with the spatial zero mode omitted. For each spatial momentum p, let d_j=e^(ip_j)−1 and λ=Σ|d_j|². The Fourier action on a transverse polarization has inverse covariance 2(1−cos k_0)+λ; the temporal recurrence then gives the covariance e^(−E(p)|n|)/(2 sinh E(p)), with cosh E(p)=1+λ/2. This follows by solving the decay recurrence and imposing the unit source at time zero. For a fixed local 12-flux X, its temporal covariance is C(n)=Σ_p w_p e^(−E(p)|n|), with w_p=(|d_1|²+|d_2|²)/(L³·2 sinh E(p))≥0. The curl covector annihilates longitudinal fields, so this weight does not depend on a choice of transverse polarization basis. Independent color components would only multiply the squared-flux covariance by a constant.

Gaussian pairing gives Cov(X_0²,X_n²)=2 C(n)². Interpret this via the positive Gaussian transfer in equilibrium. For the unit vector f of the centered squared flux, the connected two-step diagonal omitted by the compression onto f is exactly

`<f,T²f>−<f,Tf>² = [C(2)/C(0)]²−[C(1)/C(0)]⁴.`

With normalized weights w_p/C(0) this is (E q²−(E q)²)(E q²+(E q)²), q=e^(−E(p)). It is strictly positive: p=(2π/L,0,0) and p=(2π/L,2π/L,0) both carry flux weight but have different λ. For two equal abstract weights at q=1/2 and 1/3, direct substitution gives 17/6912 as an exact arithmetic check. A single frequency gives zero, consistent with the one-plaquette oscillator. The nonabelian return derivative in the [finite Wilson calculation](2026-11-26-connected-adjoint-return-coefficient.md) is exact, but a raw positive two-step return in a spatial array is not by itself evidence of a nonabelian mass mechanism: Gaussian mode dispersion already supplies it.

Indeed in infinite spatial volume the flux weight is positive on open sets with arbitrarily small positive E; the squared flux has spectral support down to zero because its measure is the self-convolution of the flux measure. Thus positive rank-one return is compatible with no gap even for this one observable. A next comparison must isolate a non-Gaussian part, for example by separating the Wick factor from the genuine connected four-flux cumulant in a matched gauge-invariant construction. Neither a gauge-dependent flux from the full Wilson model nor unproved Gaussian convergence along the full continuum tuning is licensed by this control.
