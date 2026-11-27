"""Independent exact cubic loop-channel endpoint replay."""
from collections import Counter, defaultdict
from fractions import Fraction as Q
from functools import cache
from itertools import combinations, product

import sympy as S
from second_order import spectral_gram
from cubic_parity import sign

O=(0,0,0)
def add(a,b):return tuple(x+y for x,y in zip(a,b))
def sub(a,b):return tuple(x-y for x,y in zip(a,b))
axes=[tuple(int(i==j) for i in range(3)) for j in range(3)]
steps=axes+[sub(O,x) for x in axes]
def e(a,b):return tuple(sorted((a,b)))
def shift(A,z):return frozenset(e(add(a,z),add(b,z)) for a,b in A)
def anchor(A):
    m=tuple(min(a[i] for p in A for a in p) for i in range(3))
    return shift(A,sub(O,m)),m
def face(v,i,j):
    a,b=axes[i],axes[j]
    points=(v,add(v,a),add(add(v,a),b),add(v,b))
    return frozenset(e(x,y) for x,y in zip(points,points[1:]+points[:1]))
@cache
def around(a,b):
    i=next(i for i in range(3) if a[i]!=b[i])
    return frozenset(face(v,i,j) for j in range(3) if i!=j
                     for v in (a,sub(a,axes[j])))
@cache
def touching(A):return frozenset(p for a,b in A for p in around(a,b))
def loop_types(n):
    res=set()
    for start in product(range(3),repeat=3):
        def dfs(path):
            port=path[-1]
            if len(path)==n:
                if sub(port,start) in steps:
                    A=frozenset(e(a,b) for a,b in zip(path,path[1:]+path[:1]))
                    C,_=anchor(A)
                    res.add(tuple(sorted(C)))
                return
            for x in steps:
                goal=add(port,x)
                if all(0<=j<=2 for j in goal) and goal not in path:dfs(path+(goal,))
        dfs((start,))
    return list(map(frozenset,sorted(res)))
@cache
def loop(A):
    at=defaultdict(list)
    for a,b in A:at[a].append(b);at[b].append(a)
    assert all(len(x)==2 for x in at.values())
    u=min(at)
    start=u;v=min(at[u]);out=[]
    while True:
        out.append((e(u,v),u<v))
        if v==start:break
        u,v=v,next(w for w in at[v] if w!=u)
    assert len(out)==len(A)
    return (tuple(out),)
def gsign(A):
    x=1
    for a,b in A:x*=sign(a,b)
    return x
def span(A):
    return tuple(max(a[i] for p in A for a in p) for i in range(3))
def coef(src,p,dst,r,twice):
    xs=spectral_gram((loop(dst),loop(r)),(loop(src),loop(p)))
    return sum((x*Q(1,2*(twice-k)) for k,x in xs.items() if k!=twice),Q(0))

def build(n):
    shapes=loop_types(n)
    which={A:i for i,A in enumerate(shapes)}
    T=defaultdict(Q)
    B=defaultdict(Q)
    for i,A in enumerate(shapes):
        J=touching(A)
        assert spectral_gram((loop(A),),(loop(A),))=={3*n:Q(1)}
        for p in J:
            B[i,i,O]+=coef(A,p,A,p,3*n)+Q(1,24)
            dst=A^p
            if len(dst)==n:
                C,delta=anchor(dst)
                assert C in which
                W=spectral_gram((loop(dst),),(loop(A),loop(p)))
                assert W=={3*n:Q(1,2)}
                T[which[C],i,delta]+=W[3*n]/2
        pairs={frozenset((p,r)) for p in J for r in touching(p) if p!=r}
        for p,r in pairs:
            dst=A^p^r
            if len(dst)!=n:continue
            C,delta=anchor(dst)
            # At E9 and E6 all binary admissible supports are one simple
            # loop. Some candidate toggles are inadmissible and project out.
            if C not in which:continue
            B[which[C],i,delta]+=coef(A,p,dst,r,3*n)+coef(A,r,dst,p,3*n)
    B={k:v for k,v in B.items() if v};T={k:v for k,v in T.items() if v}
    for mat in (T,B):
        for (j,i,z),v in mat.items():assert mat[i,j,sub(O,z)]==v
    return shapes,T,B

def at_endpoint(stencil,n,last=False):
    A=S.zeros(n)
    for (j,i,z),v in stencil.items():
        A[j,i]+=v*(-1 if last and sum(z)%2 else 1)
    return A

def verify():
    p,T6,B6=build(4)
    h,T9,B9=build(6)
    assert len(p)==3 and len(h)==22 and not T6
    assert all(gsign(A)==-1 for A in p)
    assert Counter(B6.values())=={Q(-11,840):3,Q(-1,168):36}
    assert Counter(B9.values())=={Q(-1,42):6,Q(1,96):72,Q(7,192):12,
                                  Q(1,48):48,Q(-1,48):48,Q(17,448):4}
    cube=[i for i,A in enumerate(h) if span(A)==(1,1,1)]
    rect=[i for i,A in enumerate(h) if i not in cube]
    assert len(cube)==16 and len(rect)==6
    assert all(gsign(h[i])==1 for i in rect)
    assert len(T9)==48 and set(T9.values())=={Q(1,4)}
    assert all(i in cube and j in cube and z==O for j,i,z in T9)
    assert all(gsign(h[i])*gsign(h[j])==-1 for j,i,z in T9)
    assert all(gsign(h[i])==gsign(h[j]) for j,i,z in B9)
    even=[i for i in cube if gsign(h[i])==1]
    odd=[i for i in cube if gsign(h[i])==-1]
    assert (len(even),len(odd))==(12,4)
    M=at_endpoint(T9,len(h))
    assert M==M.T
    incidence=4*M.extract(odd,even)
    assert incidence*incidence.T==4*S.eye(4)+2*S.ones(4)
    x=S.Symbol("x")
    assert S.factor(M.charpoly(x).as_expr())==S.factor(x**14*(x*x-Q(3,4))*(x*x-Q(1,4))**3)
    N=S.Matrix.hstack(*M.nullspace())
    C=S.diag(*map(gsign,h))
    assert C*N==N and Counter(sum(bool(v) for v in M[:,i]) for i in cube)=={2:12,6:4}
    G=N.T*N
    lo6=at_endpoint(B6,3)
    hi6=at_endpoint(B6,3,True)
    assert (lo6+S.eye(3)*Q(71,840)).rank()==2
    assert (lo6+S.eye(3)*Q(71,840)).is_positive_semidefinite
    assert hi6==S.eye(3)*Q(3,280)
    poly=lambda A:S.Poly(A.charpoly(x).as_expr(),x)
    t=x*x-Q(15,448)*x-Q(1,448)
    lo=(x+Q(3,64))**3*(x+Q(1,42))**4*(x-Q(23,192))**3*t**2
    hi=(x+Q(3,64))**3*(x+Q(1,42))**6*(x-Q(1,64))**2*(x-Q(23,192))**3
    for high,expect in [(False,lo),(True,hi)]:
        A=at_endpoint(B9,22,high)
        assert A*C==C*A
        assert poly(G.inv()*N.T*A*N)==S.Poly(expect,x)
    assert S.Poly(t,x).count_roots(-Q(3,64),-Q(1,42))==1
    assert S.Poly(t,x).count_roots(-Q(1,42),Q(23,192))==1
    rlo,rhi=S.solve(t,x)
    spans=[(-Q(883,6720),-Q(81,2240)),(rlo-Q(71,840),-Q(11,840)),
           (rhi-Q(71,840),Q(59,2240))]
    assert all(b>a for a,b in spans)
    assert spans[0][0]<spans[1][0]<spans[0][1]<spans[1][1]
    assert spans[1][0]<spans[2][0]<spans[1][1]<spans[2][1]
    assert spans[0][0]<-Q(13,336)<spans[2][1]
    assert all(m.bit_count()%2==0 for m in (39,114,119))
    print("separated channel: 39/190 coefficients, exact endpoints, all E6×ker T9 center odd")
    print("separated channel: interval [-883/6720, 59/2240] in center-odd quadratic spectrum")
if __name__=="__main__":verify()
