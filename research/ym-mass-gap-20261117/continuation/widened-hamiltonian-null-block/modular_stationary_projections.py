"""Bounded finite-field projection diagnostic; never computes char-zero resultants."""
from pathlib import Path
import argparse
import hashlib
import json
import time

import numpy as np
import sympy as S

PIN="42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9"
s,t,l=S.symbols("s t l")

def polys(path):
    raw=Path(path).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PIN
    dd=json.loads(raw)
    def poly(key):
        return S.Poly.from_dict({(a,b,c):S.Rational(v) for a,b,c,v in dd[key]},s,t,l,domain=S.QQ)
    G=poly("G").as_expr()
    D=S.Poly(poly("e2_discriminant").as_expr(),s,l,domain=S.QQ)
    a,b,c,d=S.Poly(G,t).all_coeffs()
    A=S.Poly(b*b-3*a*c,s,l,domain=S.QQ)
    B=S.Poly(2*b**3-9*a*b*c+27*a*a*d,s,l,domain=S.QQ)
    assert (D.degree(s),D.degree(l))==(11,32)
    assert (A.degree(s),A.degree(l),B.degree(s),B.degree(l))==(4,14,6,21)
    return D,A,B

def grid(p,mod):
    q=np.zeros((p.degree(s)+1,p.degree(l)+1),dtype=np.int64)
    for (a,b),v in p.terms():
        s0,t0=v.as_numer_denom()
        q[a,b]=int(s0)*pow(int(t0),-1,mod)%mod
    assert np.any(q[-1,:]) and np.any(q[:,-1])
    return q

def coefficients(q,x,p):
    o=np.zeros(q.shape[0],dtype=np.int64)
    for i in range(q.shape[1]-1,-1,-1):
        o=(o*x+q[:,i])%p
    return o

def sylv(a,b,p,units):
    # a/b are FIXED-length vectors, low-to-high; never drop degree at a sample.
    n,m=len(a)-1,len(b)-1
    Z=np.zeros((n+m,n+m),dtype=np.int64)
    for i in range(m):Z[i,i:i+n+1]=a[::-1]
    for i in range(n):Z[m+i,i:i+m+1]=b[::-1]
    det=1
    for i in range(n+m):
        k=np.flatnonzero(Z[i:,i])
        if not len(k):return 0
        j=i+int(k[0])
        if j!=i:
            Z[[j,i]]=Z[[i,j]];det=-det
        pivot=int(Z[i,i])
        det=det*pivot%p
        if i+1<n+m:
            Z[i+1:,i+1:]=(Z[i+1:,i+1:]-(Z[i+1:,i]*units[pivot]%p)[:,None]*Z[i,i+1:][None,:])%p
    return det%p

def interp(values,p):
    n=len(values)
    result=np.zeros(n,dtype=np.int64)
    h=np.array([1],dtype=np.int64)
    v=np.array(values,dtype=np.int64)
    for k in range(n):
        result[:len(h)]=(result[:len(h)]+v[0]*h)%p
        if k+1<n:
            w=np.zeros(len(h)+1,dtype=np.int64)
            w[:-1]=(-k*h)%p
            w[1:]=(w[1:]+h)%p
            h=(w*pow(k+1,-1,p))%p
            v=(v[1:]-v[:-1])%p
    return S.Poly.from_list([int(x) for x in result[::-1]],l,modulus=p)

def proj(A,B,p,out_bound,units):
    Q,R=grid(A,p),grid(B,p)
    bound=(Q.shape[0]-1)*(R.shape[1]-1)+(R.shape[0]-1)*(Q.shape[1]-1)
    assert bound<=out_bound and p>bound+12
    def evaluate(x):
        return sylv(coefficients(Q,x,p),coefficients(R,x,p),p,units)
    D=interp([evaluate(x) for x in range(bound+1)],p)
    # Four independent holdouts plus a repeated fixed-shape check at zero.
    checks=[0,bound+1,bound+3,p-1,p-5]
    assert all(int(D.eval(a))%p==evaluate(a) for a in checks)
    assert not D.is_zero
    return D.monic()

def report(F):
    if F.degree()==0:return []
    return [int(x)%int(F.get_modulus()) for x in F.all_coeffs()]

def diagnostics(p,D,A,B):
    assert p>700 and p%4==1 and S.isprime(p)
    started=time.monotonic()
    units=np.array([0]+[pow(j,-1,p) for j in range(1,p)],dtype=np.int64)
    P1=proj(D,D.diff(s),p,672,units)
    P2=proj(D,D.diff(l),p,693,units)
    T=proj(A,B,p,168,units)
    L=S.Poly(S.Poly(D.as_expr(),s).LC(),l,domain=S.QQ)
    LL=S.Poly.from_list([int(x.as_numer_denom()[0])*pow(int(x.as_numer_denom()[1]),-1,p)%p
                         for x in L.all_coeffs()],l,modulus=p)
    assert LL.degree()==L.degree()
    G=P1.gcd(P2).monic()
    SF=G.sqf_part().monic()
    tg=SF.gcd(T).monic()
    lg=SF.gcd(LL).monic()
    lt=tg.gcd(lg)
    covered=tg*lg.exquo(lt)
    rest=SF.exquo(covered).monic()
    # Small residual degree, not a factorization of the large projections.
    fds=[]
    from warnings import catch_warnings,simplefilter
    from sympy.utilities.exceptions import SymPyDeprecationWarning
    with catch_warnings():
        simplefilter("ignore",SymPyDeprecationWarning)
        for f,m in rest.factor_list()[1]:
            assert m==1
            e=0;q=G
            while q.rem(f).is_zero:
                e+=1;q=q.exquo(f)
            fds.append({"degree":int(f.degree()),"gcd_multiplicity":int(e),"coefficients":report(f)})
    print("residual GF factor degrees and gcd multiplicities for",p,[(r["degree"],r["gcd_multiplicity"]) for r in fds],flush=True)
    print("prime",p,"projected degrees",P1.degree(),P2.degree(),T.degree(),
          "gcd",G.degree(),"squarefree",SF.degree(),"overlap triple",tg.degree(),
          "overlap leading",lg.degree(),"overlap both",lt.degree(),"beyond",rest.degree(),
          "seconds",round(time.monotonic()-started,2),flush=True)
    return {"prime":p,"projection_degrees":[int(W.degree()) for W in (P1,P2,T)],
            "projection_coefficients_modp":[report(W) for W in (P1,P2,T)],
            "common":{"gcd":report(G),"squarefree":report(SF),"triple_support":report(tg),
                      "leading_support":report(lg),"both":report(lt),"beyond":report(rest)},
            "beyond_support_factors":fds,
            "common_degrees":{"gcd":int(G.degree()),"squarefree":int(SF.degree()),
                              "triple":int(tg.degree()),"leading":int(lg.degree()),
                              "both":int(lt.degree()),"beyond":int(rest.degree())}}

def main(args):
    D,A,B=polys(args.source)
    results=[diagnostics(p,D,A,B) for p in args.primes]
    data={"schema":"modular-stationary-projection-diagnostic-v1",
          "source_sha256":PIN,"fixed_degree_bounds":[672,693,168],"results":results}
    b=(json.dumps(data,sort_keys=True,separators=(',',':'))+"\n").encode()
    h=hashlib.sha256(b).hexdigest()
    with Path(args.output).open('xb') as f:f.write(b)
    print("artifact",len(b),h,flush=True)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("source");p.add_argument("output")
    p.add_argument("--primes",nargs="+",type=int,default=[1009,1013,1021])
    main(p.parse_args())
