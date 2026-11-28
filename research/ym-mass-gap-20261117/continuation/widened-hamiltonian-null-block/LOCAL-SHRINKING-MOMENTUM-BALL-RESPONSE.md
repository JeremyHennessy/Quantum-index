# Band-projected response on a shrinking positive-measure momentum ball

Fixed spacing. This is a corollary of the exact thermodynamic band and
the local three-loop observable comparison. It gives positivity and
strict attenuation at a prescribed imaginary regulator in a momentum
ball of radius c|g|³, not a uniform momentum neighborhood, a real-axis
density, or the full local dynamical structure factor.

Use the exact physical E15 band representative
H15(g,k)=15+B(g,k) and the canonical Fourier section ψ_g(k) of the
band-projected local A_loc vacuum vector. At k=0 the preceding result
gives, for fixed a>0 and E=−13/336,

    0 < liminf_(g→0) Y_g(0) ≤ limsup_(g→0) Y_g(0) < 1/a,
    Y_g(k)=g⁴ Im⟨ψ_g(k),(H15(g,k)−15−g²E−i a g⁴)^(-1)ψ_g(k)⟩.

All limits use nonzero real g and vacuum-relative energies.

## Uniform fibre Lipschitz bounds

The translated, vacuum-subtracted band interaction used to define
B(g) comes from integrating the uniformly local first derivative of
the transported Hamiltonian. Thus it has every fixed incident
support moment bounded by C_m|g|, not just an O(|g|) total operator
bound. Group terms by integer diameter layer r. Its P15-compressed
translation-covariant operator L_r has

    ||L_r|| ≤ C_m |g| (1+r)^(-m),

using the earlier vacuum-subtracted excitation form estimate.
Its translation-anchor displacement satisfies |δ|≤C(1+r):
the input and output both have an occupied edge inside the support,
and the exterior is unchanged, so the coordinatewise minimum anchor
can move no farther than the support diameter. Its trigonometric
polynomial therefore has at most C(1+r)³ translation shifts.
Every operator coefficient at one shift is a compression of
L_r between two fixed anchor sectors, with norm ≤||L_r||.
The k derivative norm of this layer is at most
C(1+r)^4 ||L_r|| by summing the absolute shift factors.
Take m>5; the layers and their derivatives then converge
uniformly in k. In particular, with the usual angular torus
distance in a coordinate neighborhood of zero,

    ||B(g,k)−B(g,0)|| ≤ C_B |g||k||.

For the source use the local spectral-flow shell expansion of
α_g(A_loc)−A_loc. A shell at radius r has norm O_m(|g|(1+r)^−m)
and its P15 vacuum vector has at most C(1+r)³ anchors, each at
distance O(1+r) from the fixed local probe. Fourier Cauchy–Schwarz
followed by multiplication by one anchor coordinate gives the
derivative norm bound O_m(|g|(1+r)^(5/2−m)) on that shell. Summing
and including the finite Fourier polynomial at g=0 proves

    ||ψ_g(k)−ψ_g(0)|| ≤ C_ψ ||k||,
    sup_k ||ψ_g(k)|| ≤ C_0,

uniformly for small real g. No slope gap or slow-space
projection at k≠0 is used for either estimate.

## Resolvent comparison and positive measure

The two E15 fibre resolvents at the same
z_g=15+g²E+i a g⁴ obey the self-adjoint resolvent bound
1/(a g⁴). By the exact resolvent identity their difference has
norm at most

    C_B |g|||k|| / (a² |g|⁸).

After multiplication by g⁴ and adding the source variation,
this gives

    |Y_g(k)−Y_g(0)|
        ≤ C_1 ||k||/(a² |g|³) + C_2 ||k||/a.

Choose m₀>0 so that m₀≤Y_g(0)≤1/a−m₀ for all sufficiently small
nonzero g, which the strict limiting estimates allow.
Then choose c>0 independent of g small enough that
c(C₁/a²+C₂/a)≤m₀/2. For |g|≤1 the comparison yields

    m₀/2 ≤ Y_g(k) ≤ 1/a−m₀/2
    whenever ||k|| ≤ c |g|³.

This is a positive-Haar-measure ball for every sufficiently small
nonzero g (its volume has order |g|⁹), with constants independent
of the sign of g. Its radius is only a sufficient comparison
scale, not an optimal dispersion or width claim. The statement
uses the whole exact isolated E15 band near but not at k=0,
not an asserted nearby limiting slow-sector decomposition.
There is no assertion about the unprojected spectrum or probe
outside the band, zero regulator at fixed g, or the continuum.
