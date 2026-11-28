"""Exact quasimode replay at a nontrivial rational fixture (both central modes)."""
from collections import defaultdict
from fractions import Fraction as F
from functools import lru_cache
from itertools import product

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

def L(p):
    return scale(plus(*(scale(vf(vf(p,o,'l',i),o,'l',i),u if o==0 else w)
                        for o in (0,4) for i in (1,2,3))),-1)
def K(p):
    return scale(plus(*(shared(shared(p,i),i) for i in (1,2,3))),-1)
def proj(p,op,spec,e):
    if not p:return {}
    z=p
    for j in spec:
        if j!=e:
            z=scale(plus(op(z),scale(z,-j)),F(1,e-j))
        if not z:break
    return z
def maxdegree(p):
    return max(map(sum,p),default=0)
def cap(p):return [n*(n+2) for n in range(maxdegree(p)+1)]
def P(p):return proj(p,K,cap(p),0)
def Q(p):return plus(p,scale(P(p),-1))
def invK(p):
    p=Q(p)
    spec=cap(p)
    out=plus(*(scale(proj(p,K,spec,e),F(1,e)) for e in spec if e))
    assert K(out)==p and not P(out)
    return out
def invL(p,e):
    spec=[(u+w)*s for s in cap(p)]
    assert P(p)==p and (e not in spec or not proj(p,L,spec,e))
    out=plus(*(scale(proj(p,L,spec,j),F(1,j-e)) for j in spec if j!=e))
    assert plus(L(out),scale(out,-e))==p and P(out)==out
    return out
def V(p): return mul(p,pot)
def H0(p): return plus(L(p),V(p))
def A(p): return scale(P(V(invK(V(p)))),-1)

def solve(f,e):
    assert inn(f,f)==1 and P(f)==f and L(f)==scale(f,e)
    q1=scale(invK(V(f)),-1)
    e1=inn(f,A(f))
    f1=scale(invL(plus(A(f),scale(f,-e1)),e),-1)
    assert not inn(f,f1)
    q2=scale(invK(plus(Q(V(f1)),Q(H0(q1)),scale(q1,-e))),-1)
    rhs=plus(P(V(q2)),scale(f1,-e1))
    e2=inn(f,rhs)
    f2=scale(invL(plus(rhs,scale(f,-e2)),e),-1)
    q3=scale(invK(plus(Q(V(f2)),Q(H0(q2)),scale(q2,-e),scale(q1,-e1))),-1)
    if not q3: raise AssertionError("nontrivial third corrector expected")
    a1=plus(f1,q1);a2=plus(f2,q2)
    assert plus(K(q1),H0(f),scale(f,-e))=={}
    assert plus(K(q2),H0(a1),scale(a1,-e),scale(f,-e1))=={}
    assert plus(K(q3),H0(a2),scale(a2,-e),scale(a1,-e1),scale(f,-e2))=={}
    return e1,e2
if __name__=="__main__":
    u,w=1,2
    t1,t2=F(2,3),F(-3,4)
    pot=plus(scale(var(0),-t1),scale(var(4),-t2))
    perimeter=plus(mul(var(0),var(4)),*(scale(mul(var(i),var(i+4)),-1) for i in (1,2,3)))
    e10,e20=solve(ONE,0)
    e11,e21=solve(scale(perimeter,2),3*(u+w))
    a=(t1*t1+t2*t2)/12;b=t1*t2/6;m=u+w;g=(u*t1*t1+w*t2*t2)/12
    assert e10==e11==-a
    assert e20==g-b*b/(12*m) and e21==g+b*b/(30*m)
    assert e21-e20==7*b*b/(60*m)
    print("full residual coefficients through epsilon^2 vanish in both central modes")
    print("ground and first (linear, quadratic):", (e10,e20), (e11,e21))
    print("gap quadratic coefficient:", e21-e20)
