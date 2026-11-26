# A localized trace packet can distinguish a scalar threshold from a mass atom

**2026-11-26 UTC. Conditional continuum interpretation, not an estimate on Wilson correlations.**

The [one-insertion trace detector](2026-11-26-trace-sector-detector-and-moment-tests.md) aims first to exclude sufficiently small positive energies. Even if the true large-time rate is later established, an exponential by itself does not establish a particle. A mass atom and a continuous invariant-mass threshold can have the same exponential rate. A localized spatial packet also integrates over momenta, so its time-energy measure typically has **no atom** even if the invariant-mass measure does. The following test specifies what would distinguish these possibilities, once the continuum correlator is controlled.

Assume the selected scalar trace has a positive connected Källén–Lehmann mass-squared measure \(\rho(ds)\) with \(\inf\operatorname{supp}\rho=m^2>0\). This assumption is not a result here. Use the convention \(d^3p/((2\pi)^3\,2E_s(p))\), \(E_s(p)=\sqrt{s+|p|^2}\). Choose a real smooth compactly supported smearing f on strictly positive Euclidean times with
\[
 F(E,p)=\int f(u,x)e^{-uE+ip\cdot x}\,du\,d^3x,
 \qquad F(m,0)\ne0 .
\]
For example a nonzero nonnegative f has the latter property. For the time-curvature observable set \(W(E,p)=|F(E,p)|^2(1-e^{-\Delta E})^2\), \(\Delta>0\). With the vacuum contribution absent, the packet's continuum curvature is
\[
 S(T)=\int \rho(ds)\int\frac{d^3p}{(2\pi)^3 2E_s(p)}\, W(E_s(p),p)e^{-TE_s(p)} .
\]
No coincident distribution product is used. If \(S(T_0)<\infty\) at one \(T_0>0\), then
\[
 \lim_{T\to\infty} T^{3/2} e^{mT}S(T)=
 \frac{m^{1/2}}{2(2\pi)^{3/2}}\, W(m,0)\,\rho(\{m^2\}).
\]
In particular this identity does not require a smooth density, a gap above the atom, or absence of a continuous component touching the same threshold. A nonzero constant detects positive mass-atom weight **in this scalar channel**, not isolation from the continuum or the full theory's lightest excitation.

Proof: restrict first to \(s\in[m^2,(m+\epsilon)^2]\), where \(\rho\) is finite. On that interval \(W\) is bounded (indeed \(|F|\le\|f\|_1\)). For \(|p|\le1\), \(E_s(p)-\sqrt{s}=|p|^2/(E_s(p)+\sqrt s)\ge c|p|^2\) uniformly on the mass interval. For \(|p|>1\) the same identity bounds it below by \(c'|p|\). The momentum integral times \(T^{3/2}e^{mT}\) is therefore uniformly bounded for \(T\ge1\) and tends to zero for each \(s>m^2\). At \(s=m^2\), put \(p=\sqrt{m/T}\,k\) and take the Gaussian limit on \(|p|\le1\) by domination; the rest is exponentially small. Since \(T(E_{m^2}(\sqrt{m/T}k)-m)\to |k|^2/2\), the factor is \(m^{3/2}(2\pi)^{3/2}/[(2\pi)^3 2m]\) times \(W(m,0)\). Dominated convergence then selects the threshold atom. The contribution with \(\sqrt{s}>m+\epsilon\) is bounded by \(S(T_0)e^{-(m+\epsilon)(T-T_0)}\), so vanishes after rescaling. Separately, positivity and nonvanishing of W near (m,0) show that \(-T^{-1}\log S(T)\to m\): there is positive packet measure below each \(m+\epsilon\), while the entire support is above m. The logarithmic rate alone therefore cannot distinguish a pole from a threshold.

As controls, a pure positive atom at \(m^2\) and Lebesgue mass-squared density on \([m^2,m^2+1]\) have the same logarithmic rate and opposite outcomes for the rescaled diagnostic. Their localized time-energy measures are non-atomic because for fixed s an energy level fixes a momentum sphere of Lebesgue measure zero. Thus even for a stable free scalar, asking for an atom in packet *energy* mistakes the relevant variable. In a hidden-sector model a positive trace mass-shell weight might pertain to a \(0^{++}\) glueball, but dark matter would still require a separate model and abundance/stability evidence. For comparison [the numerical SU(2) study, §III.2](https://arxiv.org/html/2402.03959v2#S3.SS2) uses spatial plaquette operators and lattice effective-mass fits. Neither its measurements nor this spectral diagnostic supplies the still-missing uniform physical Wilson decay. No novelty claim for this Laplace asymptotic and no claim about quantum gravity.
