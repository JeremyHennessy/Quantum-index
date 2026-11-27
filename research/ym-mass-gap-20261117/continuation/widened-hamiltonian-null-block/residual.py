"""Exact local differential and incidence checks for the uniform residual proof."""
from collections import Counter
from fractions import Fraction as Q
from itertools import combinations, product
from math import prod

import sympy as S
from cubic_locality import cubic_mesh

def verify_s3_leibniz():
    # Left multiplication by imaginary unit quaternions on round S^3.
    w,x,y,z=S.symbols("w x y z")
    v=(w,x,y,z)
    a=((-x,w,-z,y),(-y,z,w,-x),(-z,-y,x,w))
    def X(f,i):
        return S.expand(sum(u*S.diff(f,s) for u,s in zip(a[i],v)))
    def h(f):
        return -sum(X(X(f,i),i) for i in range(3))/2
    pol=[w,x,y,z,*[u*t for i,u in enumerate(v) for t in v[i:]],w*x*y,x*z*z]
    for f in pol:
        for i in range(3):
            assert S.expand(h(X(f,i))-X(h(f),i))==0
    f=w*x+x*y*z; h0=y*y+z
    assert S.expand(h(f*h0)-h(f)*h0-f*h(h0)+sum(X(f,i)*X(h0,i) for i in range(3)))==0
    assert S.expand(h(w)-Q(3,2)*w)==0
    assert S.rem(h(w*w-Q(1,4))-4*(w*w-Q(1,4)),sum(t*t for t in v)-1,w)==0
    assert S.expand(sum(X(w,i)**2 for i in range(3)))==x*x+y*y+z*z

def verify_dressing_leibniz():
    # Independent finite-spin polynomial fixture: Q has ten fundamental
    # factors; V has four, three shared with Q. Factor out eight spectators.
    xs=S.symbols("x0:3")
    left=0
    for terms in product((0,1),repeat=3):
        eig=Q(12+4*sum(terms))
        part=prod(v*v-Q(1,4) if b else Q(1,4) for v,b in zip(xs,terms))
        coeff=1/(eig-15)-Q(1,6)
        left+=(eig-15)*coeff*part
    right=sum((1-v*v)*prod(u*u for j,u in enumerate(xs) if i!=j)
              for i,v in enumerate(xs))/6
    assert S.expand(left-right)==0

def verify_local_counts():
    for dims in [(6,4,2),(8,6,3)]:
        idx,faces=cubic_mesh(*dims)
        per=Counter(e for net in faces.values() for loop in net for e,_ in loop)
        assert len(per)==len(idx) and max(per.values())==4
        assert max(3*4*n for n in per.values())==48
    assert Q(48*4,6)==32

def verify_uniform_residual():
    verify_s3_leibniz()
    verify_dressing_leibniz()
    verify_local_counts()
    # Example exact scales; proof uses a generic C>=1 and K=8C/a.
    a=Q(13,336)
    C=Q(7,3)
    K=8*C/a
    assert K>a/4 and a/2-a/4-C/K==a/8
    assert (a/8)**2/C==a*a/(64*C)
    print("uniform dressed residual: exact SU(2) derivative algebra, local 4/48 incidences, "
          "and shrinking-window moment conversion verified")
