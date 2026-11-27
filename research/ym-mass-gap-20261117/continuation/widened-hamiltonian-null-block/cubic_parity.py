"""Exact checks of the cubic (third-order) folded sign and center selection rule."""
from collections import defaultdict
from math import prod

import sympy as S

from first_order import B, E
from cubic_locality import cubic_mesh

def axis(a,b):
    changes=[i for i,(x,y) in enumerate(zip(a,b)) if x!=y]
    assert len(changes)==1
    return changes[0]

def sign(a,b):
    i=axis(a,b)
    return (-1)**sum(a[:i])

def verify_center_assignment(dims):
    index,faces=cubic_mesh(*dims)
    signs={idx:sign(a,b) for (a,b),idx in index.items()}
    assert all(prod(signs[e] for e,_ in net[0])==-1 for net in faces.values())
    vertices=sorted({v for edge in index for v in edge})
    bounds=tuple(reversed(dims))
    # Compare each center-sign mirror with the original. Their ratio is
    # vertex gauge, so C commutes with all three mirrors on physical vectors.
    for i in range(3):
        def mir(v):
            return tuple(bounds[j]-x if j==i else x for j,x in enumerate(v))
        graph=defaultdict(list)
        for a,b in index:
            z=sign(a,b)*sign(mir(a),mir(b))
            graph[a].append((b,z))
            graph[b].append((a,z))
        vertex_sign={vertices[0]:1}
        stack=[vertices[0]]
        while stack:
            a=stack.pop()
            for b,s in graph[a]:
                want=vertex_sign[a]*s
                if b in vertex_sign:assert want==vertex_sign[b]
                else:
                    vertex_sign[b]=want
                    stack.append(b)
        assert len(vertex_sign)==len(vertices)
    print("cubic center flip:",dims,len(faces),"negative plaquettes; three mirrors modulo gauge")

def verify_folded_model():
    # 4 band states at 15, 2 external states at 12. Grading signs alternate.
    C=S.diag(1,-1,1,-1,1,-1)
    H0=S.diag(15,15,15,15,12,12)
    V=S.zeros(6)
    for i,j,c in [(0,1,2),(2,5,1),(3,4,1),(0,5,2),(1,4,3),(4,5,1)]:
        V[i,j]=V[j,i]=c
    assert C*H0==H0*C and C*V==-V*C
    T=V[:4,:4];W=V[4:,:4];D=V[4:,4:]
    R=S.eye(2)/3
    K=W.T*R*W
    S2=W.T*R**2*W
    B3=W.T*R*D*R*W-(T*S2+S2*T)/2
    assert C[:4,:4]*B3==-B3*C[:4,:4]
    g,x=S.symbols("g x")
    # Direct analytic graph recursion and positive metric normalization.
    X1=-R*W
    X2=R*D*R*W-R**2*W*T
    H=H0-g*V
    XP=g*X1+g**2*X2
    Hraw=H[:4,:4]+H[:4,4:]*XP
    defect=H[4:,:4]+H[4:,4:]*XP-XP*Hraw
    assert all(S.expand(k).coeff(g,i)==0 for k in defect for i in range(3))
    metric_pm=lambda m:S.eye(4)+m*g**2*(X1.T*X1)/2
    HH=metric_pm(1)*Hraw*metric_pm(-1)
    assert HH.applyfunc(lambda c:S.expand(c).coeff(g,3))==-B3
    # Independent asymptotic check from the exact determinant: two slopes
    # T=±2, two null branches with common quadratic coefficient 1/3.
    fold=K[2:,:2]*T[:2,:2].inv()*K[:2,2:]
    cubic=-B3[2:,2:]+fold
    assert K[2:,2:]==S.eye(2)/3
    assert -B3[2:,2:]==S.Matrix([[0,-S.Rational(1,9)],[-S.Rational(1,9),0]])
    assert fold==S.Matrix([[0,S.Rational(1,3)],[S.Rational(1,3),0]])
    assert cubic==S.Matrix([[0,S.Rational(2,9)],[S.Rational(2,9),0]])
    e=15+g**2/3+g**3*x
    p=S.Poly((e*S.eye(6)-H).det(method="domain-ge"),g)
    assert all(p.nth(i)==0 for i in range(8))
    assert S.expand(p.nth(8)+36*(x*x-S.Rational(4,81)))==0
    print("folded cubic model: exact characteristic slopes ±2/9, not canonical-only ±1/9")

def verify_cubic_parity():
    # The geometric link flip agrees with the existing planar band grading.
    for mask,nets in B.items():
        for net in nets:
            observed=prod(sign((0,*E[e][0]),(0,*E[e][1]))
                          for loop in net for e,_ in loop)
            assert observed==(-1)**mask.bit_count()
    verify_center_assignment((4,2,1))
    verify_center_assignment((6,4,2))
    verify_center_assignment((8,6,3))
    verify_folded_model()
