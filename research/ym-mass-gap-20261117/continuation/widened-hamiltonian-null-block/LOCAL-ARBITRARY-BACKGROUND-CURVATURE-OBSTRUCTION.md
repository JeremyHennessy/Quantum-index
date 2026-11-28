# A periodic-twist obstruction to positive Hessian at every background

Use the same side-4 open-cell one-edge fixture. All tangential links are prescribed as the identity except the chosen active link, whose holonomy is \(\exp(\theta T)\) for a unit \(T\in\mathfrak{su}(2)\) in \(-\tfrac12\operatorname{tr}(T^2)\). Pure-boundary plaquettes are omitted. For \(\beta>0\) let \(G_\beta(\theta)=\beta^{-1}F_\beta(\theta)\), where \(F_\beta=-\log[Z_\beta(\theta)/Z_\beta(0)]\).

The unit normalization gives \(T^2=-I\); the prescribed holonomy is exactly \(2\pi\)-periodic in \(\theta\), so \(G_\beta\) is periodic. It is smooth at every real \(\theta\) since the finite-link action is smooth, the integration domain is compact, and \(Z_\beta>0\). It is also even: conjugation by a fixed SU(2) element taking \(T\) to \(-T\) conjugates every link, preserves Haar and each trace, and leaves the other prescribed links unchanged. Thus \(G_\beta'(0)=G_\beta'(\pi)=0\).

Set \(q=551981/958272\). The established fixed-cell differentiated Laplace limit gives \(G_\beta''\to m''\) uniformly on a small neighborhood of zero, with \(m''(0)=q>0\). Choose \(\delta\in(0,\pi)\) fixed, small enough that \(m''\ge 3q/4\) on \([0,\delta]\), and then choose \(\beta_0\) such that
\[
 G_\beta''(\theta)\ge q/2\quad (0\le\theta\le\delta,\ \beta\ge\beta_0).
\]
For every such \(\beta\), the fundamental theorem of calculus yields
\[
 \int_\delta^\pi G_\beta''(\theta)\,d\theta
 =-\int_0^\delta G_\beta''(\theta)\,d\theta
 \le -q\delta/2.
\]
In particular
\[
 \min_{\theta\in[\delta,\pi]}\beta^{-1}F_\beta''(\theta)
 \le -\frac{q\delta}{2(\pi-\delta)}<0 .
\]
The negative margin is independent of sufficiently large \(\beta\) for this cell; a minimizing angle may depend on \(\beta\). No extension of the differentiated Laplace limit away from the small identity neighborhood is needed.

This rules out even nonnegativity of the ordinary fixed-link angular Hessian over every background in this family, let alone a uniform positive lower Hessian bound, despite positive stiffness at identity. It is not a statement about the magnitude of absolute or mixed response, a gauge-adjusted background criterion, or a fixed weak-bare minimizer branch at the offending angles. It is a finite open-cell obstruction, not a continuum result.
