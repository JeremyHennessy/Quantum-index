# Massless Gaussian shell control with the ultraviolet limit in the right order

**2026-11-26 UTC. Exact negative control in a different model. It is not a Wilson counterexample.**

In the [Wilson shell-pair test](2026-11-26-local-wilson-shell-pair-test.md), small conditional variance at a distant shell is not enough: it must lose a nonzero fraction over a fixed physical increment. The four-dimensional massless Gaussian free field gives a control with the same type of time difference of a dimension-four quadratic observable. The cancellation and coefficient can be computed without numerical simulation. The result is for limits of *conditional responses*, not an unregularized local quadratic random variable.

## Set-up and ordering

Let the Gaussian field on \(\mathbb R^4\) have covariance \(G(x,y)=\kappa|x-y|^{-2}\), \(\kappa>0\). Fix a smooth real compactly supported f with integral one and a nonzero translation distance s. Set \(w(x)=f(x)-f(x-se_0)\), supported in a fixed bounded region independent of R. Define \(D_\epsilon=\int w(x):|\nabla\phi_\epsilon(x)|^2:\,dx\) by compactly supported smooth mollification and whole-space Wick centering. For R larger than the support plus the mollifier radius, condition on the exterior of the centered ball \(B_R\). By the [Gaussian domain Markov decomposition](https://arxiv.org/abs/math/0312099) the field inside the ball is an independent Dirichlet field plus a random smooth harmonic field h determined by the exterior. Hence the conditional expectation is \(\int w(x):|\nabla h_\epsilon(x)|^2:\,dx\), Wick centered using the covariance of h. This follows by expanding the square, integrating the independent field, and cancelling exactly its own Wick constant. It converges in L² as \(\epsilon\to0\) for each fixed R by smooth covariance on a neighborhood of the support. Define \(Q(R)\) to be the resulting exterior-response squared norm.

One cannot justify this by first taking an L² limit of \(D_\epsilon\). Indeed the full gradient covariance off the diagonal is \(2\kappa |u|^{-4}(I-4\hat u\hat u^T)\), \(u=x-y\). Its Wick-square covariance is \(96\kappa^2|u|^{-8}\), not locally integrable in dimension four. For nonzero w, its autocorrelation is positive for sufficiently small u, approaches \(\int w^2\) there, and the nonnegative squared mollified gradient kernel has diverging integrated mass there (Fatou away from the origin). Contributions bounded away from u=0 remain bounded. Thus \(D_\epsilon\) itself does not converge in ordinary Euclidean L². Exterior projection removes this obstacle in this Gaussian control because h is smooth. No analogous Wilson smoothing estimate is inferred.

## Exact leading conditional variance

The covariance of h is the whole-space Green function minus the zero-boundary Green function of the ball, namely
\[
 H_R(x,y)=\frac{\kappa}{R^2}
 \left(1-\frac{2x\cdot y}{R^2}
      +\frac{|x|^2|y|^2}{R^4}\right)^{-1}.
\]
This is the Kelvin image term: for y nonzero it is \(\kappa(R/|y|)^2|x-R^2y/|y|^2|^{-2}\), harmonic in x inside the ball, and equals G on \(|x|=R\); the y=0 extension is continuous. Put \(K_R=(\partial_{x_i}\partial_{y_j}H_R)_{ij}\). On fixed support its expansion is uniform with derivatives:
\[
 K_R=\frac{2\kappa}{R^4}I+\frac{\kappa}{R^6} K_4+O(R^{-8}),\qquad
 (K_4)_{ij}=\partial_{x_i}\partial_{y_j}
 \big[4(x\cdot y)^2-|x|^2|y|^2\big].
\]
The trace of \(K_4\) is \(36 x\cdot y\) in four dimensions: the first term supplies \(8(4+1)x\cdot y\) and the second subtracts \(4x\cdot y\). Wick's pairings for the squared gradient give \(2\|K_R(x,y)\|_{\rm F}^2\). Its constant \(32\kappa^2R^{-8}\) contributes nothing since \(\int w=0\). Its next term is \(288\kappa^2R^{-10}(x\cdot y)\); integrating gives
\[
 Q(R)=288\kappa^2 s^2 R^{-10}+O(R^{-12})
 \quad\text{for observable } :|\nabla\phi|^2: .
\]
The first moment \(\int x w(x)\,dx=-s e_0\) fixes the coefficient. For observable \(2:|\nabla\phi|^2:\) the coefficient is 1152 instead, since variance scales quadratically with normalization.

For every fixed positive physical increment a, \(Q(R+a)/Q(R)=1-10a/R+O(R^{-2})\), so there is no eventual fixed fractional loss. Yet \(Q(R)\to0\). Scaling the radius by a fixed factor \(\lambda>1\) instead yields ratio \(\lambda^{-10}\), showing that even fixed fractional loss on successively larger *multiplicative* shells can coexist with zero gap. The relevant Wilson target still calls for a uniform loss at a fixed *additive physical distance*, after the prescribed cutoff and volume limits, and its starting bound must be genuinely for the projected response. This Gaussian calculation establishes neither requirement for Yang–Mills.
