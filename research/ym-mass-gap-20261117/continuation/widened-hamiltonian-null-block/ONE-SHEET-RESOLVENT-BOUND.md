# One regular sheet gives a quantitative resolvent test

**Scope.** Fixed lattice spacing, odd quadratic effective operator at zero total momentum. This is a sufficient test for the spectral measure of a specified source, not a result about that measure until the actual folded source and defect pass the test. No continuum, finite-coupling decay, or absence-of-atoms claim.

Take the reference \(A\), finite-coordinate isometry \(J\), Hermitian finite matrix \(V\), and perturbed \(H=A+JVJ^*\) from [the defect reduction](ON-SHELL-TEST.md). Write \(f=Jw\). Use a compact patch wholly inside [the regular simple-band sheet](REGULAR-REFERENCE-SHEET.md), with a smooth real spatial cutoff of absolute value at most one. Via the implicit function theorem, parameterize adjacent sheets at energies \(E+s\) over the same chart. Let \(T_s\) restrict Fourier components of \(J\) to that sheet and simple band, multiplying by the cutoff and the square root of the coarea Jacobian. Use a smooth local band frame and the physical metric. Finite support and regularity on the compact patch give \(\|T_s-T_0\|\le L|s|\) for \(|s|\le s_0\). All distances below use the chart \(L^2\) norm.

Let \(d=\operatorname{dist}(T_0 w,T_0\operatorname{Ran}V)\). Fix \(M>0\), and put \(I_M=2\arctan M\). If \(0<M\eta\le s_0\), then
\[
\sqrt{\Im\langle f,(H-E-i\eta)^{-1}f\rangle}
\ \ge\
\frac{\sqrt{I_M}\,[d-LM\eta\|w\|]_+}
     {1+\sqrt{I_M}LM\sqrt{\eta}\|V\|}.
\]
Here the inner product is linear in the second entry and \([x]_+=\max(0,x)\). In particular the liminf of the imaginary part is at least \(\pi d^2\). This argument needs neither an inverse of the boundary defect matrix nor regularity of every reference sheet.

**Proof.** Set \(z=E+i\eta\), \(v=(H-z)^{-1}f\), \(u=w-VJ^*v\), and \(X=\sqrt{\eta}\|v\|\). The spectral theorem gives the displayed imaginary part as \(X^2\). The resolvent identity in equation form gives \(v=(A-z)^{-1}Ju\); thus \(X\) dominates the weighted \(L^2\) norm of \(T_su\) over \(|s|\le M\eta\) with Poisson weight \(\eta/(s^2+\eta^2)\). The triangle inequality bounds this norm below by \(\sqrt{I_M}(\|T_0u\|-LM\eta\|u\|)\). Now \(\|T_0u\|\ge d\) and \(\|u\|\le \|w\|+\|V\|X/\sqrt{\eta}\). Rearrangement gives the bound, which works even with an atom. First take \(\eta\downarrow0\) for fixed \(M\), then \(M\to\infty\). If \(E\) were outside the closed support of the scalar measure, the imaginary part would be \(O(\eta)\). Hence \(d>0\) guarantees support at \(E\).

**Exact prechecks for the actual source.**

1. Try a finite-support exact range certificate \(f=(H-E)q\). The scalar imaginary part is then at most \(\eta\|q\|^2\), by the spectral theorem. This rules out an atom at \(E\) for \(f\) and rules out a positive liminf; it does **not** rule out \(E\) in the closed support. Include the entire stencil halo and defect coordinates in the exact solve. A failed solve only excludes the chosen trial support. The two certificates cannot both hold for the same \(f\).
2. To prove \(d>0\), sample the interior where the cutoff is nonzero. Evaluate a nonzero adjugate row of the energy-subtracted Bloch operator on \(w\) and on a basis of \(\operatorname{Ran}V\), using the physical coordinate metric. The adjugate projects onto the simple eigenline up to a nonzero scalar in an orthonormal frame (or after the corresponding metric conversion). An exactly certified rank increase with the source column proves \(d>0\), since equality almost everywhere of continuous chart functions gives equality at each interior sample, and the nuisance space is finite dimensional and closed. To certify the rank increase by minors, also certify the rank upper bound for the sampled nuisance columns. Do not substitute a local matrix element for the full \(w\).
3. If \(w\) lives entirely in the finite near reference summand, \(T_0w=0\), so this sufficient test is silent. The boundary-matrix approach in [the defect reduction](ON-SHELL-TEST.md) remains available. The [compact spatial controls](COMPACT-SPATIAL-CONTROLS.md) provide positive-control families: choose a trace-image dimension larger than \(\operatorname{rank} V\); at least one compact control then passes. This says nothing about the prescribed probe.

**Current disposition:** the bound is proved. Neither exact certificate has been established for the complete folded cubic source.
