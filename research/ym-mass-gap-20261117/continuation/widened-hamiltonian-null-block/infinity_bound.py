"""Exact Newton valuation certificate for degree bounds of pair-curve projections."""
import argparse
from collections import defaultdict
from fractions import Fraction as Q
import hashlib
import json
from math import comb
from pathlib import Path
import sympy as S

def hull(d):
    out=[]
    for k,j in sorted(d.items()):
        while len(out)>=2 and Q(j-out[-1][1],k-out[-1][0])<=Q(out[-1][1]-out[-2][1],out[-1][0]-out[-2][0]):
            out.pop()
        out.append((k,j))
    return out

def run(src):
    raw=Path(src).read_bytes()
    assert hashlib.sha256(raw).hexdigest()=='2d7dfdd2512d2af55542e4f7a558e3c18d5aa29bd69ae2381b6b839650c23b23'
    Y=S.symbols('Y')
    e=S.I*S.sqrt(S.Rational(27,10))
    R=json.loads(raw)['poly']
    P=defaultdict(int)
    for i,j,c in R:
        assert i+j<=43
        for k in range(j+1):
            P[k,43-i-j]+=int(c)*comb(j,k)*(-1)**(j-k)*168**(43-j)
    d={k:min(j for (kk,j),v in P.items() if kk==k and v) for k in range(44)}
    assert hull(d)==[(0,13),(18,4),(30,0),(43,0)]
    I=[Q(0)]*13+[Q(1,3)]*12+[Q(1,2)]*18
    sep=sum(2*min(x,y) for k,x in enumerate(I) for y in I[k+1:])
    assert sep==341
    g=S.Poly(sum(c*Y**i for (i,j),c in P.items() if Q(i,2)+j==13),Y)
    f=(40*Y**2-1697)*(170*Y**2+14899)*(16070*Y**2+180569)*(10*Y**2+27)**6
    assert g.monic()==S.Poly(f,Y).monic()
    # h=w^2, y=w*(e+y1), removing common w^26.
    A=defaultdict(Q)
    for (i,j),c in P.items():
        if not c:
            continue
        w=i+2*j-26
        assert w>=0
        for k in range(i+1):
            n=i-k
            A[k,w,n%2]+=c*comb(i,k)*Q(-27,10)**(n//2)
    def val(T):
        return {k:min(j for (kk,j,b),a in T.items() if kk==k and a) for k in range(44)}
    def edge(T, slope, order):
        return S.Poly(sum(S.Rational(c)*Y**i*e**b for (i,j,b),c in T.items()
                          if j+i*slope==order),Y,extension=e).monic()
    assert hull(val(A))==[(0,6),(6,0),(18,0),(30,4),(43,17)]
    assert edge(A,1,6)==S.Poly((Y+S.Rational(111,20))**6,Y,extension=e)
    B=defaultdict(Q) # y1=−111w/20+y2
    for (i,j,b),c in A.items():
        for k in range(i+1):
            B[k,j+i-k,b]+=c*comb(i,k)*Q(-111,20)**(i-k)
    assert hull(val(B))==[(0,12),(6,0),(18,0),(30,4),(43,17)]
    g=edge(B,2,12)
    fac=S.Poly(Y-S.Rational(321,80)*e,Y,extension=e)
    co,rem=g.div(fac**2)
    assert rem.is_zero and co.degree()==4 and co.gcd(co.diff()).degree()==0 and co.gcd(fac).degree()==0
    C=defaultdict(Q) # y2=(321e/80) w^2+y3
    for (i,j,b),c in B.items():
        for k in range(i+1):
            n=i-k
            C[k,j+2*n,(n+b)%2]+=c*comb(i,k)*Q(321,80)**n*Q(-27,10)**((n+b)//2)
    assert hull(val(C))==[(0,16),(2,8),(6,0),(18,0),(30,4),(43,17)]
    # Two groups of six roots improve twice by 1/2 in h. Each group
    # retains one pair, improving by one more in h.
    deficit=sep+2*2*comb(6,2)*2*Q(1,2)+2*2
    assert deficit==405 and 43*42-deficit==1401
    print('valuation deficits 341+30+30+4=405; both degrees <=1401 via bounded Puiseux derivatives')

if __name__=='__main__':
    a=argparse.ArgumentParser();a.add_argument('projection');u=a.parse_args()
    run(u.projection)
