"""Exact finite physical filter for repeated-cosine cross-elementary projections."""
from pathlib import Path
import argparse,hashlib,json
from concurrent.futures import ProcessPoolExecutor
from itertools import combinations
import sympy as S

from cross_elementary_support import x,y,p,F
from cross_projections import load as load_support

PROJ="5435aa89d739fe5c1bec37f0e8801ef53b5e3c75aa7ccb13fcb2395855338b98"
ZERO=S.Poly(0,x,domain=S.QQ)
def px(q):return S.Poly(q,x,domain=S.QQ)
def py(q):return S.Poly(q,y)
def from_pair(d):return S.Poly.from_dict({(i,j):S.Rational(k) for i,j,k in d},x,y,domain=S.QQ)
def from_x(d):return S.Poly.from_list(list(map(S.Rational,d)),x,domain=S.QQ)

def coefficients(A,M):
    A=py(A.as_expr())
    return [px(A.nth(k)).rem(M) for k in range(A.degree()+1)]

def gcd_y(A,B,M):
    def trim(c):
        while c and c[-1].is_zero:c.pop()
        return c
    a,b=trim(coefficients(A,M)),trim(coefficients(B,M))
    while b:
        inv=S.invert(b[-1],M)
        while a and len(a)>=len(b):
            q=(a[-1]*inv).rem(M);n=len(a)-len(b)
            for i,j in enumerate(b):a[n+i]=(a[n+i]-q*j).rem(M)
            trim(a)
        a,b=b,a
    if not a:raise ValueError("identically zero at lift")
    inv=S.invert(a[-1],M)
    return [(k*inv).rem(M) for k in a]

def intervals_in(poly,I):
    a,b=I; lo=hi=S.S.Zero
    for z in poly.all_coeffs():
        zz=(a*lo,a*hi,b*lo,b*hi);lo,hi=min(zz)+z,max(zz)+z
    return lo,hi

def signs_at(f,I,pol):
    pol=[p.rem(f) for p in pol]
    for k in (10,16,24,36,50,75,115,170,250):
        J=f.refine_root(*I,eps=S.Rational(1,10**k)) if I[0]!=I[1] else I
        sig=[];bounds=[]
        for p in pol:
            if p.is_zero:sig.append(0);bounds.append((S.S.Zero,S.S.Zero));continue
            a,b=intervals_in(p,J)
            if a>0:sig.append(1);bounds.append((a,b))
            elif b<0:sig.append(-1);bounds.append((a,b))
            else:break
        if len(sig)==len(pol):
            if sig[4]==0:
                return J,sig,bounds,J
            ygrid=[n/d for n in bounds[1] for d in bounds[0]]
            yr=(min(ygrid),max(ygrid))
            if yr[1]-yr[0]<S.Rational(1,10**8):
                return J,sig,bounds,yr
    raise ValueError("unresolved rational sign interval")

def linear(pair, f,J,den,num,degree_mode):
    pol=[den,num,num+2*den,2*den-num,num-px(x)*den]
    ff=py(F)
    assert ff.degree()==1
    pol.append(px(ff.nth(0))*den+px(ff.nth(1))*num)
    J,signs,boxes,ybox=signs_at(f,J,pol)
    d=signs[0];assert d
    ybox=(S.floor(ybox[0]*10**9)/S.Integer(10**9), S.ceiling(ybox[1]*10**9)/S.Integer(10**9))
    phys=(signs[2]*d==1 and signs[3]*d==1 and signs[4]!=0)
    off=phys and signs[5]!=0
    return {"x_interval":[str(v) for v in J],"y_interval":[str(v) for v in ybox],
            "inequality_signs":[signs[2]*d,signs[3]*d,signs[4]*d],
            "F_sign":signs[5]*d,"strict":phys,"off_F_strict":off,
            "method":degree_mode}

def proc(case,A,B):
    name=case["name"]
    Sres=[from_pair(r["polynomial"]) for r in case["subresultants"] if r["degree_y"]==1]
    assert len(Sres)==1
    SRlin=py(Sres[0].as_expr())
    h=[];seen=[]
    for m,cs in case["factors"]:
        f=from_x(cs)
        qs=f.intervals(inf=-2,sup=2,eps=S.Rational(1,10**9))
        for I,k in qs:
            assert k==1
            if I[0]==I[1] and abs(I[0])==2:
                h.append({"factor":cs,"projection_multiplicity":m,"x_interval":[str(v) for v in I],
                          "strict":False,"off_F_strict":False,"method":"excluded x endpoint"})
                continue
            assert -2<I[0]<=I[1]<2
            la=px(py(A.as_expr()).LC()).rem(f)
            lb=px(py(B.as_expr()).LC()).rem(f)
            den=px(SRlin.nth(1)).rem(f)
            b=px(SRlin.nth(0)).rem(f)
            if not la.is_zero and not lb.is_zero and not den.is_zero:
                # Fixed-degree subresultant specialization: resultant zero,
                # nonzero first subresultant with nonzero leading coefficient.
                num=-b;note="fixed-degree linear subresultant"
            else:
                gg=gcd_y(A,B,f)
                if len(gg)==1:
                    print(name,"reject projective/drop candidate",f.degree(),I,flush=True)
                    h.append({"factor":cs,"projection_multiplicity":m,"x_interval":[str(v) for v in I],
                              "strict":False,"off_F_strict":False,"method":"no finite y after exact degree-drop gcd"})
                    continue
                if len(gg)!=2:
                    print(name,"unresolved non-linear lift",f.degree(),len(gg)-1,I,flush=True)
                    h.append({"factor":cs,"projection_multiplicity":m,"x_interval":[str(v) for v in I],
                              "gcd_y_degree":len(gg)-1,"method":"nonlinear or exceptional y lift left open"})
                    continue
                num,den=-gg[0],px(1);note="exact specialized field gcd"
            r=linear(name,f,I,den,num,note)
            if r["off_F_strict"]:assert m==1
            r.update({"factor":cs,"projection_multiplicity":m})
            h.append(r)
            a,b=map(S.Rational,r["x_interval"]);c,d=map(S.Rational,r["y_interval"])
            print(name,"factor degree",f.degree(),"x/y approx",float((a+b)/2),float((c+d)/2),
                  "strict",r["strict"],"off-F",r["off_F_strict"],"domain",r["inequality_signs"],flush=True)
    print("done",name,"projections",len(h),"strict off-F",sum(k.get("off_F_strict",False) for k in h),
          "unresolved",sum("off_F_strict" not in k for k in h),flush=True)
    return {"name":name,"candidates":h}

def run(args):
    raw=Path(args.proj).read_bytes()
    assert hashlib.sha256(raw).hexdigest()==PROJ
    ar=json.loads(raw)["cases"];support=load_support(args.support)
    with ProcessPoolExecutor(args.workers) as e:
        jobs=[e.submit(proc,c,*support[c["name"]]) for c in ar if c["name"] in args.cases]
        out=[f.result() for f in jobs]
    d={"schema":"repeated-cross-elementary-physical-lifts-v1","projections_sha256":PROJ,"cases":out}
    raw=(json.dumps(d,sort_keys=True,separators=(',',':'))+"\n").encode()
    with Path(args.output).open('xb') as f:f.write(raw)
    print(len(raw),hashlib.sha256(raw).hexdigest(),flush=True)

if __name__=="__main__":
    ap=argparse.ArgumentParser();ap.add_argument("support");ap.add_argument("proj");ap.add_argument("output")
    ap.add_argument("--cases",nargs="+",default=["CC","L1C1","L1C2","L2C1","L2C2"])
    ap.add_argument("--workers",type=int,default=5)
    run(ap.parse_args())
