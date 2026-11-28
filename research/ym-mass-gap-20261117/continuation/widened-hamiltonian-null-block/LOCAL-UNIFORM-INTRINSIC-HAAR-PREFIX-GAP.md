# A sharp uniform intrinsic Haar gap for fixed path products

The [two-scale holonomy criterion](https://github.com/JeremyHennessy/Quantum-index/blob/cf964aa149404d199e1bcacbf231b8e2ee64c16f/research/ym-mass-gap-20261117/continuation/2026-11-27-holonomy-blocking-vacuum-score.md) assumes a conditional Poincaré floor for the actual vacuum. Its companion [score-corrected criterion](https://github.com/JeremyHennessy/Quantum-index/blob/cf964aa149404d199e1bcacbf231b8e2ee64c16f/research/ym-mass-gap-20261117/continuation/2026-11-27-score-corrected-coarse-gap.md) also leaves that floor open. The preceding [free-prefix score fixture](https://github.com/JeremyHennessy/Quantum-index/blob/cf964aa149404d199e1bcacbf231b8e2ee64c16f/research/ym-mass-gap-20261117/continuation/widened-hamiltonian-null-block/LOCAL-FREE-PREFIX-CONDITIONAL-SCORE.md) computes a specific score norm, not a full Haar fiber gap. The corresponding path-product reference bound is proved here, with a quantitative sufficient comparison condition for the true vacuum. This does not prove that comparison.

Use the unit quaternion SU(2) electric metric \(-\frac12\operatorname{Tr}(XY)\) and the vertical energy with **no** electric coefficient. For any length \(b\ge2\) and any \(z\in{\rm SU}(2)\), the intrinsic Haar fiber of \(U_1\cdots U_b=z\) has **exact** Poincaré gap
\[
 \boxed{\qquad \lambda_{\rm Haar,vert}(b,z)=3(b-1)/b.\qquad}
\]
In particular the sharp uniform constant in \(b,z\) is \(3/2\), achieved at \(b=2\). A constrained length-one path has no varying coordinates and imposes no bound requirement.

## Prefix chart and the Dirichlet chain inverse

Use prefix variables \(V_i=U_1\cdots U_i\), \(V_0=1,V_b=z\). The \(b-1\) interior prefixes are free group variables. Their joint reference law on the conditional fiber is normalized product Haar: the change of variables from the full \(U\) variables to \((V_1,\ldots,V_{b-1},V_b)\) is successive left multiplication by the previous prefix, Haar preserving at each step. The ambient coarea normal Jacobian of the product map is constant because \(dZ\,dZ^*=bI\), so this reference probability is also normalized intrinsic volume. Equivalently the metric below has constant determinant in prefix Haar frames.

Write \(X_i=\dot V_i V_i^{-1}\) for left-increment Lie coordinates, with \(X_0=X_b=0\). Differentiating \(U_i=V_{i-1}^{-1}V_i\) gives
\[
 \dot U_i U_i^{-1}=\operatorname{Ad}_{V_{i-1}^{-1}}(X_i-X_{i-1}).
\]
Adjoints are isometries, so the intrinsic tangent metric is \(\sum_{i=1}^b|X_i-X_{i-1}|^2\). In the product prefix frames this is \(D_b\otimes I_3\), where \(D_b\) is the \((b-1)\)-site Dirichlet chain matrix, diagonal 2, off-diagonal \(-1\). Its eigenvalues from the sine vectors are \(2-2\cos(j\pi/b)\), \(1\le j<b\), and
\[
 D_b^{-1}\ge\frac{I}{2+2\cos(\pi/b)}\ge I/4,\qquad
 (D_b^{-1})_{ij}=\frac{\min(i,j)(b-\max(i,j))}{b}.
\]
The Green formula follows by direct substitution into the second-difference equation with zero endpoint entries. In particular \((D_b^{-1})_{ii}=i(b-i)/b\ge(b-1)/b\ge1/2\). The intrinsic gradient energy uses this inverse metric on prefix derivatives, not the tangent matrix itself. Direct comparison with the product Haar gap 3 on the unit quaternion sphere already gives \(3/4\) uniformly, improving the loss from a last-link chart.

## Exact gap from the nonnegative interval decomposition

Decompose product Haar by coordinate occupancy: for a subset \(I\subseteq\{1,\ldots,b-1\}\), its component consists of functions constant in coordinates outside \(I\), and of zero conditional Haar mean in each coordinate in \(I\). This is the orthogonal product decomposition obtained from the separate one-coordinate averaging projections and their complements. Each prefix frame derivative preserves a component or kills it: differentiation in a constant coordinate vanishes, differentiation has zero Haar mean in its own coordinate, and it commutes with averaging in every other coordinate. Consequently distinct components, including their derivatives, are orthogonal for the intrinsic gradient form with the constant coefficient matrix \(D_b^{-1}\).

The Green matrix has the nonnegative interval decomposition
\[
 (D_b^{-1})_{ij}=\frac1b\sum_{0\le d<e\le b-1}
              \mathbf1_{\{d<i\le e\}}\mathbf1_{\{d<j\le e\}} .
\]
Indeed the lower endpoint has \(\min(i,j)\) choices, the upper one \(b-\max(i,j)\) choices. The intrinsic energy is thus \(b^{-1}\) times the sum of squares of the sums of prefix frame gradients over these intervals. Fix a nonempty occupied sector \(I=\{i_1<\cdots<i_k\}\). Put \(i_0=0,i_{k+1}=b\) and \(d_j=i_j-i_{j-1}\) for \(1\le j\le k+1\), all positive integers. The number of intervals containing exactly \(i_j\) from \(I\) is \(d_jd_{j+1}\): their lower endpoint ranges from \(i_{j-1}\) to \(i_j-1\), and upper endpoint from \(i_j\) to \(i_{j+1}-1\). Drop every other interval square, which is nonnegative. For each surviving interval its unique occupied coordinate gives its one-group energy, at least \(3\|f\|^2\) by conditional product Haar and zero mean in that coordinate. Therefore this sector has gap at least
\[
 \frac3b\sum_{j=1}^k d_jd_{j+1}
 \ \ge\ \frac3b\sum_{j=1}^k(d_j+d_{j+1}-1)
 \ =\ \frac3b\left(b+\sum_{j=2}^{k}d_j-k\right)
 \ \ge\ 3(b-1)/b.
\]
The first inequality is \((d_j-1)(d_{j+1}-1)\ge0\). Summing the orthogonal components excludes only the constant \(I=\varnothing\), and smooth density extends the bound to the form domain. For the matching upper bound take any first nonconstant SU(2) Haar eigenfunction of the first prefix \(V_1\) alone. Its energy turns on just the diagonal \((D_b^{-1})_{11}=(b-1)/b\), and its Casimir is 3. This proves the exact gap, not just a uniform lower estimate.

For any number of edge-disjoint path products, apply the same prefix change separately on each path. A reversed oriented link is treated by inversion, a Haar isometry. Unused links remain free reference factors; the constrained reference fiber is their product with the independent path fibers, and its metric is the product intrinsic metric because the fine path link sets are disjoint. Tensorization gives the **minimum** of the exact individual path gaps and of gap 3 if any unused links remain, with a test on the minimizing factor giving equality. Ignore length-one point factors; if no varying coordinates remain the variance is zero. In particular the lower bound \(3/2\) is independent of the number of paths and lengths and the exact reference floor tends to 3 when all the varying constrained path lengths grow. Restricting the inequality to physical gauge-invariant functions cannot weaken it, but may raise the gap; the sharpness assertion concerns the full conditional fiber. No extension to overlapping path metrics follows by this argument.

## A sufficient comparison for the actual Wilson vacuum

At fixed finite volume let \(q_z\) be the actual relative density of the vacuum law \(\Omega^2d\mathrm{Haar}\) conditioned on those disjoint products, with respect to the reference probability \(\sigma_z\) just used. On any given fiber this is \(\Omega^2\) divided by its fiber Haar mean. If \(q_{z,+},q_{z,-}\) are its supremum and infimum (or essential extrema), the variance-minimizing-constant formula and the Haar inequality give
\[
 \operatorname{Var}_{q_z\sigma_z}(f)
     \le q_{z,+}\operatorname{Var}_{\sigma_z}(f)
     \le\frac{2q_{z,+}}{3q_{z,-}}
                 \int|\nabla_v f|^2q_z\,d\sigma_z.
\]
Equivalently the physical conditional floor is at least
\[
 \tfrac32\,c_{\rm el}(a)
    \exp\bigl[-\operatorname{osc}_{\rm fiber}\log(\Omega^2)\bigr],
\]
where the density normalization cancels in the oscillation. In the unit metric convention \(c_{\rm el}(a)=g_0^2/(8a)\), a sufficient bound for a preassigned physical floor \(\gamma_\ell>0\) at block size \(\ell\) is
\[
 \operatorname*{ess\,sup}_{z}
       \operatorname{osc}_{\pi^{-1}(z)}\log(\Omega^2)
    \ \le\ \log\!\left(\frac{3g_0^2}{16a\,\gamma_\ell}\right),
\]
uniformly over compatible volumes and small \(a\) for disjoint paths of lengths of order \(\ell/a\). For the conventional logarithmic running \(g_0^2\) of order \(1/\log(1/a)\), the right side is \(\log(1/a)-\log\log(1/a)+O(1)\) in fixed physical units. A uniform bounded fiber oscillation would be more than sufficient; this comparison only asks it to grow no faster than the displayed threshold, with its constant tracked. Integrating the conditional estimate would give the corresponding physical vertical coercivity on the discarded subspace. It says nothing about the retained marginal or the coupling back to it.

The actual vacuum oscillation can depend on volume, spacing and coarse values; the present result gives no estimate of it, and no claim that this particular sufficient comparison is realistic or necessary. The center/word toy estimates and Gaussian controls do not verify it. What is now proved is that mere lengthening and multiplying **disjoint** Haar path fibers causes no reference vertical gap loss. The exact arithmetic replay checks the chain Green formula, occupied interval count and the \(3/2\) constants. No continuum or full physical gap follows.
