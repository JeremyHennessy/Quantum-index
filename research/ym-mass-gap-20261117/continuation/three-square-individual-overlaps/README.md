# Both individually split isotropic states are visible to a single-face probe

November 27, 2026 UTC. Same three-square open Wilson strip as the [rank-two frame certificate](../three-square-isotropic-frame/README.md): β_time=1 on every link, each spatial b=.01. Use a real phase aligning each physical state with its trial vector. For the unnormalized vacuum-subtracted single-face probe F₁, the transition magnitudes to the **individual true eigenstates** are enclosed by:

| State, ordered within target band | Amplitude magnitude | Individual unnormalized spectral weight |
| --- | --- | --- |
| Lower transfer eigenvalue | [3.5527, 4.4350] ×10⁻¹⁰ | [1.2622, 1.9669] ×10⁻¹⁹ |
| Higher transfer eigenvalue | [3.5935, 4.5223] ×10⁻¹⁰ | [1.2913, 2.0452] ×10⁻¹⁹ |

The weight intervals round the exact squared endpoints outward. The lower/upper ordering uses transfer eigenvalues, not energies; normalization by the interacting vacuum does not change the eigenvectors. These are not polar-frame coefficients, and neither eigenstate should be described as a pure perimeter state. This is not an early signal of the four-dimensional continuum gap.

## Why the individual certificate is possible

A generic norm residual error divided by the small internal gap is larger than the observed signal. Instead split the comparison into its component inside and outside the true band P. With a rational trial x, aligned unit eigenvector ψ, trial vacuum v, real vacuum Ω, and F=F₁, use
```
|⟨ψ,FΩ⟩−⟨x,Fv⟩|
 ≤ ‖(I−P)x‖ + ‖Px−ψ‖·‖PFΩ‖ + ‖x‖·‖v−Ω‖.
```
The first term sees the large external gap: full residual r divided by 2.5×10⁻⁶. The second sees the small internal gap, but only the tiny band-projected observable. The exact trial eigenvalue intervals from the previous certificate imply separation from the wrong state of at least 2.7×10⁻⁸. Hence ‖Px−ψ‖ is at most the norm adjustment plus 2r/(2.7×10⁻⁸). The last term uses the already verified 0.9 separation of the vacuum.

To bound ‖PFΩ‖, write P_X=X(X*X)⁻¹X* for the span of the two rational band trials. The verified Gram lower bound .999 implies ‖P_X Fv‖≤1.001‖X*Fv‖. Add ‖P−P_X‖‖v‖ and the vacuum error. Computing the two trial overlaps by outward arithmetic yields ‖PFΩ‖<6.342×10⁻¹⁰. Thus the adverse small-gap eigenvector error multiplies a number on the order of 10⁻¹⁰, not a norm-one bound. The larger external gap now sets the useful uncertainty. Exact subtraction of ⟨Ω,FΩ⟩ leaves every transition to the band unchanged.

Run `python3 individual.py` with SymPy 1.14.0. It reuses the prior directed-rounding full-transfer verification and the exact same rational inputs. Neither floating-point signs nor eigensolver residual claims are assumed. This closes the local visibility test for both states at this finite geometry. A useful next step is to test how this error method scales to a longer strip and how the relevant band separation changes; no uniform lattice-spacing or volume estimate has been obtained.
