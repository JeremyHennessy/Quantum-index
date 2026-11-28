# Exact cross-elementary reduction in the pairwise-distinct interior

This is a setup for the remaining fixed-spacing separated-reference analysis,
not a local bound or a physical classification. Work in elementary invariants
(s,t,r)=(e₁,e₂,e₃) on the chart with pairwise-distinct cosines strictly in
(−2,2). The monic elementary p(λ) has three real simple roots here.
Away from the flat threshold, let q(λ)=Q₉(E−λ;s,t,r). Define its exact
remainder H=Aλ²+Bλ+C modulo p.

For p=λ³+p₂λ²+p₁λ+p₀ the exact identity is

```
A² p − (Aλ+A p₂−B)H = R₁ λ + R₀,
R₁ = B²−AC−p₂AB+p₁A²,
R₀ = BC−p₂AC+p₀A².
```

If A≠0, precisely two distinct elementary branches meet the residual
threshold if and only if R₀=R₁=0. Indeed H then divides p, and cannot
have a repeated root because p is simple. If A=0, at least two shared
roots require B=C=0 as well; all three branches would then meet.
In particular, the spurious A=B=0,C≠0 locus cannot be accepted by the
unconditioned R₀=R₁=0 system.

At a two-branch point, consider the two simple elementary functions
λ_1,λ_2 as functions of the local invariant coordinates. Differentiate the
identity at each, using p(λ_i)=0 and H(λ_i)=R₀=R₁=0. This gives

```
−(Aλ_i+A p₂−B) d[H(λ_i)] = λ_i dR₁ + dR₀ .
```

The coefficient on the left cannot vanish because the quotient would
then share an H root, contradicting simplicity of p. The two-by-two
change of basis on the right is invertible since λ_1≠λ_2.
Therefore the independent-relative-gradient condition is equivalent to
the Jacobian of (R₀,R₁) having rank two. Since q evaluated at an
elementary root equals H there, this is a directional transversality test
for the actual two residual functions; it is not an existence or
absence result. At rank failure one still needs to inspect the signs and
higher-order geometry. Intersections with the flat mode remain separate.

The deterministic replay verifies the division identity coefficientwise.
R₁ and R₀ have total degree 20 and coordinate-degree triples
(20,8,6) and (20,8,7) respectively. The generated 78,871-byte canonical
artifact has SHA-256
`b61b6277291c76af945865d3840271bf32725cbc68521839441ee25c563d8d23`
at seeds 401 and 409; generate it instead of retaining duplicated
coefficients. No physical reality/filter or global limiting absorption,
dressed-source density, or continuum claim is made.

```sh
python distinct_cross_reducer.py global-q.json distinct-cross.json
```
