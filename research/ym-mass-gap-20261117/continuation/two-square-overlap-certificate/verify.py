"""Exact residual/overlap certificate on the two-face Wilson graph."""
from fractions import Fraction as Q
from math import comb, factorial
from functools import lru_cache
import json
from pathlib import Path
from itertools import product

Z=(0,0,0)
X=(1,0,0)
N=5
B=Q(1,100)

def add(p,q,s=1):
    a=p.copy()
    for v,c in q.items(): a[v]=a.get(v,0)+s*c
    return {v:c for v,c in a.items() if c}

def scale(p,s): return {v:c*s for v,c in p.items() if c*s}

def mul(p,q):
    a={}
    for u,c in p.items():
        for v,d in q.items():
            w=tuple(i+j for i,j in zip(u,v))
            a[w]=a.get(w,0)+c*d
    return {v:c for v,c in a.items() if c}

def label(u):
    i,j,k=u
    return i+k,j+k,i+j

def diag(u):
    n,m,k=label(u)
    return n*(n+2)+1000*m*(m+2)+1000000*k*(k+2)

@lru_cache(None)
def lower(u):
    i,j,k=u
    ans={}
    for ex,weights in [((i,k,j),(1,0,2)), ((j,k,i),(1000,1,2)), ((i,j,k),(1000000,0,1))]:
        (a,b,c),(g,d,e)=ex,weights
        for n,m in [(2,0),(0,2),(1,1)]:
            if a<n or b<m: continue
            v=list(u); v[d]-=n; v[e]-=m
            if n==m: v[3-d-e]+=1
            coeff= -g*(a*(a-1) if n==2 else b*(b-1) if m==2 else 2*a*b)
            v=tuple(v)
            ans[v]=ans.get(v,0)+coeff
    return ans

@lru_cache(None)
def eig(u):
    p={u:Q(1)}
    todo=lower(u).copy()
    while todo:
        v=max(todo,key=lambda k:(sum(k),k))
        c=todo.pop(v)
        if not c: continue
        d=Q(c,diag(u)-diag(v))
        p[v]=d
        todo=add(todo,lower(v),d)
    return p

def bess(m):
    def t(k): return Q(1,2)**(m+2*k)/(factorial(k)*factorial(k+m))
    a=sum(t(k) for k in range(11))
    return a,a+2*t(11)

@lru_cache(None)
def eigK(u):
    n,m,k=label(u)
    if n+m>N: return 0
    lo1,hi1=bess(1)
    low=high=Q(1)
    for v,power in [(n,3),(m,3),(k,1)]:
        if not v: continue
        lo,hi=bess(v+1)
        low*= (lo/hi1)**power
        high*= (hi/lo1)**power
    q=Q((low*10**19).__floor__(),10**19)
    assert 0<=high-q<Q(2,10**19)
    return q

def K(p):
    todo=p.copy(); out={}
    while todo:
        v=max(todo,key=lambda k:(sum(k),k))
        c=todo[v]
        e=eig(v)
        todo=add(todo,e,-c)
        out=add(out,e,c*eigK(v))
    return out

M={(i,k-i,0):(B/2)**k*comb(k,i)/factorial(k) for k in range(5) for i in range(k+1)}

def S(p): return mul(M,K(mul(M,p)))

@lru_cache(None)
def scalar(k):
    if k%2:return Q(0)
    n=k//2
    return Q(comb(2*n,n),4**n*(n+1))

@lru_cache(None)
def moment(v):
    i,j,k=v
    def one(n,t):
        return sum((-1)**h*comb(t,h)*scalar(n+2*h) for h in range(t+1))
    return sum(Q(comb(k,l),l+1)*one(i+k-l,l//2)*one(j+k-l,l//2) for l in range(0,k+1,2))

def haar(p): return sum(c*moment(u) for u,c in p.items())

def cert():
    root=Path(__file__).parent
    data=json.loads((root/'vectors.json').read_text())
    results=[]
    assert moment((2,0,0)) == Q(1,4) and moment((1,1,1)) == Q(1,16)
    assert K({Z:Q(1)}) == {Z:Q(1)}
    for e in [X,(0,1,0),(0,0,1)]: assert K({e:Q(1)}) == {e:eigK(e)}
    # All omitted eigenlabels n+m>=6 have kinetic eigenvalue <=4^-18.
    # Taylor remainder <= 2*b^5/5!, M/M_p norms < 2.
    delta=4*(Q(1,4)**18+Q(2,10**19))+8*B**5/factorial(5)
    assert delta < Q("8e-11")
    for key,tol,gap in [('vac',Q("1e-8"),Q("0.9")),('outer',Q("1e-8"),Q("0.0001"))]:
        ev,coef=data[key]
        ev=Q(ev); v={tuple(map(int,u.split(","))):Q(c) for u,c in coef.items()}
        err=add(S(v),v,-ev)
        norm2=haar(mul(v,v))
        assert abs(norm2-1)<tol
        # Supremum bound: all three half traces lie in [-1,1].
        residual=sum(abs(c) for c in err.values())+delta*(1+tol)
        assert residual < Q("1e-9")
        if key=='vac': assert Q("0.999")<ev<Q("1.021")
        else: assert Q("0.00018")<ev<Q("0.00021")
        close=tol+2*residual/gap
        results.append((v,close))
        print(key,'residual <=',float(residual),'vector error <=',float(close))
    (v,dv),(u,du)=results
    approx=haar(mul({X:Q(1)},mul(u,v)))
    err=du*(1+Q("1e-8"))+dv
    print('transition approximation',float(approx),'error <=',float(err))
    assert abs(approx)-err>Q("0.00007")
    print('certified transition magnitude > 0.00007')

def discover():
    import numpy as np
    V=[u for u in product(range(10),repeat=3) if sum(u)+u[2]<=9]
    cols=[S({v:Q(1)}) for v in V]
    A=np.array([[float(Sv.get(u,0)) for Sv in cols] for u in V])
    vals,vecs=np.linalg.eig(A)
    data={}
    for name,target,probe in [('vac',1,Z),('outer',0.000192,(0,0,1))]:
        j=np.argmin(abs(vals-target)); assert abs(vals[j].imag)<1e-12
        c=vecs[:,j].real
        p={u:Q(format(v,'.17g')) for u,v in zip(V,c) if abs(v)>1e-18}
        norm=float(haar(mul(p,p)))**0.5
        sign=1 if haar(mul(p,{probe:Q(1)}))>0 else -1
        data[name]=[format(vals[j].real,'.17g'),{','.join(map(str,u)):format(float(v)*sign/norm,'.17g') for u,v in p.items()}]
    Path(__file__).with_name('vectors.json').write_text(json.dumps(data,indent=2)+'\n')

if __name__=='__main__':
    import sys
    if '--discover' in sys.argv: discover()
    cert()
