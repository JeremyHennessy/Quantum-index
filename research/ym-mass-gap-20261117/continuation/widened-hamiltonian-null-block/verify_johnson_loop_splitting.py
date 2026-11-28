"""Exact incidence and off-diagonal moment checks for first physical multiplets."""
from itertools import combinations
from fractions import Fraction as F
import sympy as s

for M in range(3,9):
    edges=list(combinations(range(M),2))
    B=s.Matrix([[int(i in edge) for edge in edges] for i in range(M)])
    A=s.Matrix([[int(i!=j and len(set(e)&set(f))==1)
                 for j,f in enumerate(edges)] for i,e in enumerate(edges)])
    assert A==B.T*B-2*s.eye(len(edges))
    assert B*B.T==(M-2)*s.eye(M)+s.ones(M)
    z=s.symbols('z')
    target=(z-2*(M-2))*(z-(M-4))**(M-1)*(z+2)**(M*(M-3)//2)
    assert s.expand(A.charpoly(z).as_expr()-target)==0
# Independent quaternion second moments at the triangle give 4 * (1/4)^2 = 1/4.
assert 4*F(1,4)**2==F(1,4)
assert F(1,6)*4*F(1,4)**2==F(1,24)
for u,which in [([2,2,2,4,7],3),([1,2,2,2,6],3),([1,2,3,4,5],1)]:
    sums=[u[i]+u[j] for i,j in combinations(range(len(u)),2)]
    assert sums.count(min(sums))==which and min(sums)==sum(sorted(u)[:2])
print("Johnson spectrum at M=3..8, triangle prefactor, and tied-pair checks passed")
