# The least visible stiffness tends to zero as the open box grows

Keep the open side-\(b\) four-dimensional cubical cell and omit all pure-boundary plaquettes, as in the general clamp result. Work in one unit real Lie direction. Let \(Q_b(h)=\min_a\|Da+Bh\|_2^2\) be the identity stiffness on active boundary edge data \(h\), with the same unit Hessian normalization. The clamp characterization says its kernel on active edges is exactly the graph gradients. Equip the quotient by those gradients with the norm of the Euclidean edge-space orthogonal projection onto the cycle space. Write \(\lambda_b^+\) for the smallest strictly positive stiffness eigenvalue in this metric. The other two real Lie components have the same scalar form. This is not a statement about a continuum-normalized boundary metric.

## A trial extension

Take the bulk one-form \(A_x(v)=y/b\) on positively oriented \(x\)-edges, and zero on all other axes, including the axial \(-z\) gauge forest. Let \(h\) be its restriction to active boundary edges; inactive values do not affect the action. Its only nonzero plaquette curls are \(-1/b\) on \(x\)-\(y\) plaquettes. There are \(b^2(b-1)^2\) included plaquettes of that type, so
\[
Q_b(h)\le \|dA\|_2^2=(b-1)^2.
\]

## A boundary norm lower bound by disjoint cycles

Use each of the four facet choices \(z=0,b\) and \(w=0,b\), with the other of \(z,w\) taking any one of its \(b-1\) interior values. In each resulting \(x\)-\(y\) section take perimeter cycles of the nested squares \([j,b-j]^2\), \(1\le j\le\lfloor(b-1)/2\rfloor\). Every edge is active: the normal facet coordinate is its only fixed boundary coordinate. Section choices are disjoint (in particular the common edges of two different facet families would require both \(z,w\) to be boundary values). Distinct nested cycles in each section have disjoint edges. The signed edge vector of each cycle annihilates gradients and, after division by its Euclidean norm, these vectors constitute an orthonormal family.

For a square of side \(L=b-2j>0\), the oriented circulation of \(h\) has magnitude \(L^2/b\) and the signed perimeter vector has squared norm \(4L\). Bessel's inequality on the projected boundary data gives
\[
\|[h]\|_{\rm quot}^2
\ \ge\ \frac{b-1}{b^2}\sum_{j=1}^{\lfloor(b-1)/2\rfloor}(b-2j)^3
=\frac{b-1}{8b^2}\bigl(b^2(b-2)^2-\mathbf1_{b\;\rm odd}\bigr).
\]
The sum is of consecutive even cubes when \(b\) is even and odd cubes when it is odd. It is strictly positive for \(b\ge3\). The Rayleigh principle yields the exact upper bound
\[
\boxed{\lambda_b^+\le \frac{8b^2(b-1)}{b^2(b-2)^2-\mathbf1_{b\;\rm odd}}\qquad(b\ge3).}
\]
In particular \(\lambda_b^+\le 13/b\) for \(b\ge8\), and \(\limsup_{b\to\infty} b\lambda_b^+\le8\). For the uniform numerical bound set \(t=1/b\in(0,1/8]\), replace the parity indicator by 1 in the denominator, and compare \(8(1-t)\) with \(13[(1-2t)^2-t^4]\). Their latter-minus-former difference is \(5-44t+52t^2-13t^4\), decreasing and positive at \(1/8\).

`python verify_stiffness_upper.py` independently reconstructs finite examples \(b=3,\ldots,10\), checking every included flux, the active/disjoint perimeter supports, their vertex divergence, exact pairings, and rational Rayleigh bounds. The displayed proof works at every \(b\ge3\), including beyond that replay.

Thus the unrescaled active Euclidean cycle quotient does **not** admit a positive lower coercivity constant independent of the number of edges per side, even at identity. No matching lower order, weak-bare block theorem uniform in background, continuum norm comparison, or continuum observable has been established by this calculation.
