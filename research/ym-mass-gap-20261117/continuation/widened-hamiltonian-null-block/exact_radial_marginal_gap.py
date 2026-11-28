"""Exact quaternion-polynomial replay of the neighboring marginal radial shift."""
from collections import defaultdict
from fractions import Fraction as F
from functools import lru_cache
from itertools import product
import sympy as sm

Z=(0,)*8
ONE={Z:F(1)}
def plus(*ps):
    q=defaultdict(F)
    for p in ps:
        for m,v in p.items(): q[m]+=v
    return {m:v for m,v in q.items() if v}
def scale(p,a): return {m:a*v for m,v in p.items() if a*v}
def em(k):
    return tuple(int(i==k) for i in range(8))
def var(k): return {em(k):F(1)}
def modexp(m,k,d): return m[:k]+(m[k]+d,)+m[k+1:]
@lru_cache(None)
def reduce(m):
    for o in (0,4):
        if m[o]>=2:
            n=modexp(m,o,-2)
            return plus(reduce(n),*(scale(reduce(modexp(n,o+i,2)),-1) for i in (1,2,3)))
    return {m:F(1)}
def mul(p,q):
    r=defaultdict(F)
    for m,a in p.items():
        for n,b in q.items():
            for u,t in reduce(tuple(x+y for x,y in zip(m,n))).items():
                r[u]+=a*b*t
    return {m:v for m,v in r.items() if v}
def fact2(k):
    out=1
    for a in range(k,0,-2): out*=a
    return out
@lru_cache(None)
def moment(m):
    val=F(1)
    for o in (0,4):
        a=m[o:o+4]
        if any(k%2 for k in a): return F(0)
        num=1;den=1
        for k in a: num*=fact2(k-1)
        for j in range(sum(a)//2): den*=4+2*j
        val*=F(num,den)
    return val
def integ(p): return sum(v*moment(m) for m,v in p.items())
def inn(p,q): return integ(mul(p,q))

def qmul(x,y):
    a,b,c,d=x;e,f,g,h=y
    return (a*e-b*f-c*g-d*h,a*f+b*e+c*h-d*g,a*g-b*h+c*e+d*f,a*h+b*g-c*f+d*e)
@lru_cache(None)
def vf_terms(o,side,i):
    a=tuple(int(i==j) for j in range(4))
    out=[[] for k in range(8)]
    for k in range(4):
        v=tuple(int(k==j) for j in range(4))
        w=qmul(a,v) if side=='l' else qmul(v,a)
        for j,s in enumerate(w):
            if s:out[o+j].append((o+k,s))
    return out
def vf(p,o,side,i):
    r=defaultdict(F)
    for m,v in p.items():
        for j,terms in enumerate(vf_terms(o,side,i)):
            if not m[j]: continue
            for k,s in terms:
                for u,t in reduce(modexp(modexp(m,j,-1),k,1)).items():
                    r[u]+=m[j]*v*s*t
    return {m:v for m,v in r.items() if v}
def shared(p,i): return plus(vf(p,0,'l',i),scale(vf(p,4,'r',i),-1))
def delta(p):
    h=[]
    for i in (1,2,3):
        for o in (0,4):
            h.append(scale(vf(vf(p,o,'l',i),o,'l',i),3))
        h.append(shared(shared(p,i),i))
    return plus(*h)

def monobasis(n):
    return [m for m in product(range(2),range(n+1),range(n+1),range(n+1)) if sum(m)<=n and (sum(m)-n)%2==0]
@lru_cache(None)
def inverse_plan(da,db):
    basis=[a+b for a in monobasis(da) for b in monobasis(db)]
    store={m:i for i,m in enumerate(basis)}
    M=sm.zeros(len(basis))
    for j,m in enumerate(basis):
        h=scale(delta({m:F(1)}),-1)
        if Z in store:h=plus(h,{Z:moment(m)})
        for k,v in h.items():
            assert k in store
            M[store[k],j]=sm.Rational(v.numerator,v.denominator)
    return basis,M.inv()
def pinv(p,degree):
    assert not integ(p)
    if not p:return {}
    basis,M=inverse_plan(*degree)
    assert set(p)<=set(basis)
    y=M*sm.Matrix([p.get(m,F(0)) for m in basis])
    x={m:F(int(v.p),int(v.q)) for m,v in zip(basis,y) if v}
    assert not integ(x) and scale(delta(x),-1)==p
    return x

A,B=(1,0),(0,1)
key0=(0,0)
totals=[(j,k) for n in range(1,5) for j in range(3) for k in range(3) if j+k==n]
def sub(a,b): return (a[0]-b[0],a[1]-b[1])
def strictly_below(k):
    return [i for i in product(range(k[0]+1),range(k[1]+1)) if i!=key0 and i!=k]

def main():
    w1,w2=var(0),var(4)
    o12=plus(mul(w1,w2),*(scale(mul(var(i),var(i+4)),-1) for i in (1,2,3)))
    assert delta(mul(w1,w2))==plus(scale(mul(w1,w2),-26),scale(o12,2))
    assert delta(o12)==scale(o12,-18)
    psi={key0:ONE};rho={key0:ONE};E={}
    for k in totals:
        forcing=plus(mul(w1,psi.get(sub(k,A),{})),mul(w2,psi.get(sub(k,B),{})),
                     *(scale(psi[sub(k,i)],E[i]) for i in strictly_below(k)))
        E[k]=-integ(forcing)
        mean=-sum(inn(psi[i],psi[sub(k,i)]) for i in strictly_below(k))/2
        psi[k]=plus(pinv(plus(forcing,scale(ONE,E[k])),k),scale(ONE,mean))
        rho[k]=plus(scale(psi[k],2),*(mul(psi[i],psi[sub(k,i)]) for i in strictly_below(k)))
        assert not integ(rho[k])
    assert psi[(1,1)]==plus(scale(mul(w1,w2),F(1,156)),scale(o12,F(1,1404)))
    dots=plus(*(mul(var(i),var(i+4)) for i in (1,2,3)))
    rr=[]
    for i0,j0 in ((0,4),(4,0)):
        leng=plus(*(mul(var(i0+i),var(i0+i)) for i in (1,2,3)))
        rr.append(plus(scale(mul(var(j0),leng),-F(3361,1617408)),
                       scale(mul(var(i0),dots),-F(647,3234816)),
                       scale(var(j0),F(29,18432))))
    assert rho[(2,1)]==rr[0] and rho[(1,2)]==rr[1]
    def marg(p):
        q=defaultdict(F)
        for m,v in p.items():
            q[m[:4]+(0,)*4]+=v*moment((0,)*4+m[4:])
        return {m:v for m,v in q.items() if v}
    m22=marg(rho[(2,2)])
    m12=marg(rho[(1,2)])
    beta=F(4,3)*m22.get(Z,F(0))
    assert m22==scale(plus(mul(w1,w1),scale(ONE,-F(1,4))),beta)
    assert beta==F(16187,8074100736)==16*inn(mul(w1,w1),m22)
    assert m12==scale(w1,F(1,67392))
    groups=[
        scale(psi[(2,2)],2),
        scale(mul(psi[(1,0)],psi[(1,2)]),2),
        scale(mul(psi[(0,1)],psi[(2,1)]),2),
        scale(mul(psi[(2,0)],psi[(0,2)]),2),
        mul(psi[(1,1)],psi[(1,1)]),
    ]
    components=[16*inn(mul(w1,w1),marg(g)) - 4*integ(g) for g in groups]
    assert sum(components)==beta
    print("beta components after removing each constant:",*components)
    result=-beta+F(7,5)*F(1,6)*F(1,67392)
    assert result==F(58841,40370503680)
    print("marginal rho22 beta",beta)
    print("radial gap reduced coefficient",result)
    print("radial gap physical coefficient times c^3",4*result)
if __name__=='__main__':main()
