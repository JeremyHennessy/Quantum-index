# Removing periodic-time wrap from a proposed slow-mode witness

November 27, 2026 UTC. This is a finite-geometry error bound for the [moment witness](2026-11-27-finite-correlator-soft-mode-witness.md), not a bound on the 4D continuum gap. Use the gauge-invariant Hilbert space and the [positive Wilson transfer construction](https://bib-pubdb1.desy.de/record/396349) where applicable.

Let T be a positive self-adjoint contraction normalized so a simple vacuum Ω has eigenvalue 1; write Q=I−|Ω⟩⟨Ω|. Where finite, R_s=Tr(QT^s), and Z_N=1+R_N. For bounded self-adjoint insertion F, center A=F−⟨Ω,FΩ⟩ and choose a certified M≥‖A‖ (2‖F‖ always works). Let c_j=⟨AΩ,T^j AΩ⟩ and let h_j be the connected periodic correlation at separation j in period N. Thermal centering is unchanged by adding a constant to the insertion. Write d=Tr(T^N A)/Z_N; then |d|≤M R_N/Z_N. For 0≤j≤N/2, expanding each transfer power into vacuum and excited parts gives the exact decomposition
```
Z_N (h_j + d²) = c_j + c_(N−j) + B_j
B_j = Tr(QT^(N−j) A QT^j A) ≥ 0.
```
The vacuum-vacuum term is zero by the choice of A. Nonnegativity of B_j follows by writing the trace as a squared Hilbert–Schmidt norm. In particular
```
B_j ≤ M² R_(N−j) min(1,R_j)     (use factor 1 at j=0).
c_(N−j) ≤ M² R_(N−j).
```
For the first bound take the trace norm of the long excited transfer and the operator norm of the short one. The second bound uses positivity on the excited space. Also h_j≥0: in a basis diagonalizing T the diagonal terms give the thermal variance of the diagonal entries of A and off-diagonal terms are nonnegative. This argument can be read in a finite-dimensional spectral cutoff and passed to the trace-class limit; equivalently Cauchy–Schwarz gives the same result.

Let l≤h_j≤u be certified (clip l to zero), and U_s≥R_s safe upper bounds. Define E_j=M² U_(N−j) min(1,U_j) (factor 1 at j=0). For 2j<N, exact intervals are enclosed by
```
max(0, l − M² U_(N−j) − E_j) ≤ c_j
c_j ≤ (1+U_N)u + M² U_N²/(1+U_N).
```
Here the last term bounds Z_N d² and increases with U_N. At the midpoint 2j=N, replace the lower expression by max(0,(l−E_j)/2) and divide the upper expression by two, because the forward and backward vacuum terms are identical. The intervals may be loose. Use the unnormalized c_j directly for the sign of the polynomial witness, since division by a positive vacuum variance leaves its sign unchanged. For a normalized spectral tail bound, certify c_0>0 first and propagate its interval through division; if the lower endpoint is zero, do not report a normalized tail certificate.

A possible independent tail input at fixed geometry is an upper bound Z_s^raw for the unnormalized transfer trace and a positive lower bound ℓ for its vacuum eigenvalue, from a separately verified Rayleigh quotient on the physical space. Then R_s≤Z_s^raw/ℓ^s−1 for a suitably normalized definition of the same raw transfer operator throughout. This avoids assuming the gap to test it, but the quotient may be too large to help; a raw trace or Rayleigh lower bound with no certified numerical error is insufficient.

## Exact negative control

Take T=diag(1,2/5), F exchanging the basis states, N=4 and q=1/2. The true vacuum correlator is c_j=(2/5)^j; c_2−q c_1=−1/25. Raw periodic data give h_j=((2/5)^j+(2/5)^(N−j))/(1+(2/5)^N), so h_2−q h_1=55/641>0. The naive periodic test therefore falsely rejects an actually valid proposed gap. The exact midpoint formula recovers c_2 at this control's known zero B and zero mean. Independent rational checks enclosed c_j in 225 three-level examples, including nonzero diagonal excited insertions, various off-diagonal terms, and midpoint or nonmidpoint separations.

Next: qualify a bound on the physical trace and Rayleigh normalization for one bounded real Wilson geometry before applying the witness to it. This argument supplies the error conversion, not those inputs. No finite temporal period should be substituted for the vacuum limit in a continuum claim.
