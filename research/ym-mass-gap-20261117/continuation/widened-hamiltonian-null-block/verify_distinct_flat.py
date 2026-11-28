"""Exact intersections and branch regularity on pairwise-distinct interior flat graph."""
import argparse
import hashlib
import json
from pathlib import Path

import sympy as S

s,t,r,l = S.symbols("s t r l")
R = S.Rational
PIN = "b61b6277291c76af945865d3840271bf32725cbc68521839441ee25c563d8d23"


def prim(f, *xs):
    return S.Poly(f,*xs,domain=S.QQ).clear_denoms()[1].primitive()[1]


def px(p):
    return S.Poly(p,s,domain=S.QQ)


def roots(p):
    return p.intervals(inf=-6,sup=6,eps=R(1,10**10))


def pack(p):
    return [[*exp,str(c)] for exp,c in p.terms()]


def signs(g, I, tests, numer, denom):
    a,b = numer.rem(g),denom.rem(g)
    tests = [[px(c) for c in S.Poly(p,t).all_coeffs()] for p in tests]

    def mul(A,B):
        z=[x*y for x in A for y in B]
        return min(z),max(z)

    def evaluate(poly, J):
        lo=hi=S.S.Zero
        for c in poly.all_coeffs():
            lo,hi=mul((lo,hi),J)
            lo,hi=lo+c,hi+c
        return lo,hi

    def bivar(poly,J,T):
        lo=hi=S.S.Zero
        for c in poly:
            lo,hi=mul((lo,hi),T)
            u,v=evaluate(c,J)
            lo,hi=lo+u,hi+v
        return lo,hi

    for n in (16,32,64,96,128,192,256):
        J=I if I[0]==I[1] else g.refine_root(*I,eps=R(1,10**n))
        x,y=evaluate(b,J)
        if x*y<=0:
            continue
        z=[v/d for v in evaluate(a,J) for d in (x,y)]
        T=min(z),max(z)
        if T[1]-T[0]>R(1,10**10):
            continue
        ranges=[bivar(p,J,T) for p in tests]
        sg=[1 if x>0 else -1 if y<0 else None for x,y in ranges]
        if None in sg:
            continue
        scale=10**10
        def outward(L):
            return S.floor(L[0]*scale)/S.Integer(scale),S.ceiling(L[1]*scale)/S.Integer(scale)
        return sg,outward(J),outward(T)
    raise AssertionError("unresolved exact sign")


def run(source, target):
    raw=Path(source).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PIN
    j=json.loads(raw)
    def ev(seq):
        return S.Poly.from_dict({tuple(a[:-1]):R(a[-1]) for a in seq},s,t,r,domain=S.QQ).as_expr()
    p=(592704000*l**3+(7056000*s+23284800)*l**2+(21000*s*s+100800*s+52920)*l
       -225*s*s+110*s+1000*t+500*r+31)/592704000
    lf=-R(5,336)
    rf=S.solve(p.subs(l,lf),r)[0]
    assert rf==43*s*s/40-69*s/200-2*t-R(19573,4000)
    D6=S.discriminant(p,l).subs(r,rf)
    assert S.expand(D6-43*(10*s-69)**2*(10*s+17)**2*(40*s+111)/22483074023424000000)==0
    H=sum(ev(j['remainder'][n])*l**i for i,n in enumerate('CBA'))
    HF=S.expand(H.subs(r,rf))
    P=S.cancel(p.subs(r,rf)/(l-lf))
    assert S.expand(P-(2822400*l*l+33600*l*s+68880*l+100*s*s-20*s-773)/2822400)==0
    AO,BO=S.Poly(S.rem(HF,P,l),l).all_coeffs()
    F0,A,B,N=[prim(f,s,t) for f in (HF.subs(l,lf),AO,BO,S.resultant(P,AO*l+BO,l))]
    for F in (F0,N):
        assert not roots(px(S.Poly(F.as_expr(),t).LC()))
    X=S.symbols('X')
    DX=S.discriminant(X**3-s*X**2+t*X-rf,X)
    phys=[DX,s+6,t+4*s+12,rf+2*t+4*s+8,6-s,t-4*s+12,8-4*s+2*t-rf,40*s+111]
    FL=px((10*s+17)*(10*s-69)*(40*s+111))
    answer={}
    factors={}
    for k,f,g in [('other_pair',A,B),('mixed_pair',F0,N),
                  ('flat_disc',F0,F0.diff(t)),('other_disc',N,N.diff(t))]:
        sr=S.subresultants(f.as_expr(),g.as_expr(),t)
        res=prim(sr[-1],s)
        assert res.degree()>0
        fac=res.factor_list()[1]
        factors[k]=fac
        out=[]
        for q0,multiplicity in fac:
            q=px(q0)
            row={"factor":pack(q),"projection_multiplicity":multiplicity,"roots":[]}
            for I,m in roots(q):
                assert m==1
                x={"initial_s_interval":list(map(str,I))}
                if k.endswith('_pair'):
                    if not S.gcd(q,FL).is_ground:
                        x['excluded']='elementary degeneracy'
                    else:
                        assert multiplicity==1
                        first=next(a for a in sr if S.degree(a,t)==1)
                        first=S.Poly(first,t)
                        den=px(first.nth(1)).rem(q)
                        num=px(-first.nth(0)).rem(q)
                        assert not den.is_zero
                        assert not px(S.Poly(f.as_expr(),t).LC()).rem(q).is_zero
                        assert not px(S.Poly(g.as_expr(),t).LC()).rem(q).is_zero
                        # Linear specialized gcd gives the finite shared zero. A simple
                        # resultant and this unique shared zero force a nonzero Jacobian.
                        sg,ref,T=signs(q,I,phys,num,den)
                        x.update(s_interval=list(map(str,ref)),t_interval=list(map(str,T)),
                                 physical_signs=sg, strict_physical=all(v==1 for v in sg))
                row['roots'].append(x)
            out.append(row)
        answer[k]=out
        print(k, [(q.degree(),m,len(roots(q))) for q,m in fac],flush=True)
    for a,b in [('other_pair','mixed_pair'),('flat_disc','other_disc')]:
        assert all(S.gcd(q,Rp).is_ground for q,_ in factors[a] for Rp,_ in factors[b])
    assert all(not roots(q) for q,_ in factors['flat_disc'])
    for q,m in factors['other_disc']:
        if m==1 or not roots(q):
            continue
        assert q.degree()==1 and q.eval(-R(111,40))==0 or any(q.monic()==Q.monic() for Q,_ in factors['other_pair'])
    summary={k:sum(x.get('strict_physical',False) for row in answer[k] for x in row['roots'])
             for k in ('other_pair','mixed_pair')}
    for k in summary:
        for row in answer[k]:
            for x in row['roots']:
                if 's_interval' not in x:
                    continue
                I,T=(list(map(R,x[p])) for p in ('s_interval','t_interval'))
                print(k,float(sum(I)/2),float(sum(T)/2),x['physical_signs'],x['strict_physical'])
    ar={"schema":"distinct-interior-flat-graph-v1","source_sha256":PIN,
        "flat_graph":str(rf),"divided_elementary":str(P),
        "polynomials":{k:pack(b) for k,b in zip(('F0','A','B','N'),(F0,A,B,N))},
        "projections":answer,"strict_physical":summary,"physical_tests":list(map(str,phys))}
    out=(json.dumps(ar,sort_keys=True,separators=(',',':'))+'\n').encode()
    with Path(target).open('xb') as f:
        f.write(out)
    print(summary,len(out),hashlib.sha256(out).hexdigest())

if __name__=='__main__':
    ap=argparse.ArgumentParser()
    ap.add_argument('source')
    ap.add_argument('target')
    args=ap.parse_args()
    run(args.source,args.target)
