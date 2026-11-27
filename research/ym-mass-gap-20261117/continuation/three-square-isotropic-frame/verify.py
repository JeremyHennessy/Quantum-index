"""Outward checks of the rank-two isotropic perimeter frame at b=.01."""
from functools import lru_cache
from fractions import Fraction as Q
from math import isqrt
import json
from pathlib import Path
import sys

root=Path(__file__).resolve().parent
sys.path.insert(0,str(root.parent/"three-square-overlap-verification"))
import certify as base
from budget import bounds

@lru_cache(None)
def iso_kp(a):
    if base.ac.weight(a)>22:return (0,0)
    lo=Q(1)
    for n,e in zip(a,base.ac.LENGTHS):lo*=bounds(n,False,e)[0]
    return base.interval(Q((lo*10**20).__floor__(),10**20))

base.kp=iso_kp

def exact_dot(a,b):
    return sum(a[k]*b[k] for k in a.keys()&b.keys())

def plus(*args):
    acc=(0,0)
    for a in args: acc=base.add(acc,a)
    return acc

def minus(a,b):return base.add(a,base.neg(b))

def widen(a,error):
    rad=base.interval(error)[1]
    return (a[0]-rad,a[1]+rad)

def sqrt(a):
    assert 0<a[0]<=a[1]
    return isqrt(a[0]*base.S),isqrt(a[1]*base.S)+1

def ratio(a,b):
    assert b[0]>0
    terms=[Q(x*base.S,y) for x in a for y in b]
    return min(terms).__floor__(),max(terms).__ceil__()

def residual(psi,e):
    p,dp=base.moul(psi)
    z,lost=base.drop({k:base.mul(v,iso_kp(k)) for k,v in p.items() if base.ac.weight(k)<=22})
    out,do=base.moul(z)
    error=base.norm_upper(base.vee(out,base.scale(psi,base.interval(e)),sign=-1))
    # The full norm is < 1.001 by the exact squared-norm check below.
    return error+Q(200,197)*(dp+lost)+do+Q("2.197e-18")*Q("1.001")

def verify(data):
    v,x,y=[{tuple(map(int,k.split(","))):Q(w) for k,w in data[n]["vector"].items()}
           for n in ("vacuum","band_low","band_high")]
    vnorm=exact_dot(v,v);a,b,d=exact_dot(x,x),exact_dot(x,y),exact_dot(y,y)
    assert Q(".999")<vnorm<Q("1.001") and min(a,d)-abs(b)>Q(".999") and max(a,d)+abs(b)<Q("1.001")
    assert a*d>b*b
    ev,ex,ey=[Q(data[n]["energy"]) for n in ("vacuum","band_low","band_high")]
    assert Q(".999")<ev<Q("1.032")
    assert Q("1.0676e-5")<ex<ey<Q("1.1733e-5")
    vv,xx,yy=[{k:base.interval(z) for k,z in p.items()} for p in (v,x,y)]
    rv,rx,ry=[residual(w,e) for w,e in [(vv,ev),(xx,ex),(yy,ey)]]
    assert rv<Q("1e-12") and max(rx,ry)<Q("1.2e-16")
    # Equal rank plus external spectral separation and the exact Gram
    # bound on ||(X^*X)^(-1/2)||. No internal splitting denominator.
    delta_p=Q("1.001")*base.ds(sqrt(base.interval(rx*rx+ry*ry))[1])/Q("2.5e-6")
    delta_v=abs(vnorm-1)+2*rv/Q(".9")
    separation=ey-ex-2*(rx+ry),ey-ex+2*(rx+ry)
    assert Q("2.7697e-8")<separation[0]<separation[1]<Q("2.7698e-8")
    print("isolated-band eigenvalue split",*[float(z) for z in separation],flush=True)
    print("full residuals",*[float(q) for q in (rv,rx,ry)],"projector error",float(delta_p),flush=True)
    det=a*d-b*b
    inverse=((d/det,-b/det),(-b/det,a/det))
    e1,e2=base.ac.PERIMETER,base.ac.ENDS
    refs=[(x.get(e,Q(0)),y.get(e,Q(0))) for e in (e1,e2)]
    weights=[tuple(sum(row[i]*inverse[i][j] for i in range(2)) for j in range(2)) for row in refs]
    # P_X forms on the reference span, then interval to true P.
    g11=widen(base.interval(sum(weights[0][i]*refs[0][i] for i in range(2))),delta_p)
    g12=widen(base.interval(sum(weights[0][i]*refs[1][i] for i in range(2))),delta_p)
    g22=widen(base.interval(sum(weights[1][i]*refs[1][i] for i in range(2))),delta_p)
    fv=base.faces(vv,[base.ac.FACE[0]])
    overlaps=[base.dot(u,fv) for u in (xx,yy)]
    q1,q2=[widen(plus(*(base.mul(base.interval(w[i]),overlaps[i]) for i in range(2))),delta_p+delta_v)
           for w in weights]
    s=sqrt(minus(base.mul(g11,g22),base.mul(g12,g12)))
    den=base.mul(s,sqrt(plus(g11,g22,s,s)))
    num=minus(base.mul(base.add(g22,s),q1),base.mul(g12,q2))
    ans=ratio(num,den)
    print("perimeter polar-frame interval",*[float(base.ds(v)) for v in ans],flush=True)
    assert Q("5e-10")<base.ds(ans[0])<=base.ds(ans[1])<Q("6.4e-10")
    return ans

if __name__=="__main__":
    verify({n:json.loads((root/(n+".json")).read_text())
            for n in ("vacuum","band_low","band_high")})
