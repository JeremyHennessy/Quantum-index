import argparse
import json
import sympy as S
from pathlib import Path
from hashlib import sha256
s,t,r,l,m=S.symbols('s t r l m')
a=argparse.ArgumentParser(description='Exact pairwise-distinct elementary cross reducer')
a.add_argument('source');a.add_argument('output');args=a.parse_args()
D=Path(args.source).read_bytes()
assert sha256(D).hexdigest()=="dd22b182d55a1a01c21dda984cedcd476363de0478413852ab97e89097aa73b7"
j=json.loads(D)
def ev(fs):
 return S.Poly.from_dict({tuple(a[:-1]):S.Rational(a[-1]) for a in fs},s,t,r,domain=S.QQ).as_expr()
E=-S.Rational(13,336)
P=(592704000*l**3+(7056000*s+23284800)*l**2+(21000*s*s+100800*s+52920)*l-
   225*s*s+110*s+1000*t+500*r+31)/592704000
Q=S.Poly.from_list([ev(k) for k in j['q9']],m).as_expr().subs(m,E-l)
H=S.Poly(S.rem(Q,P,l),l)
A,B,C=H.all_coeffs()
for label,f in zip('ABC',(A,B,C)):
 T=S.Poly(f,s,t,r,domain=S.QQ); print(label,T.degree_list(),T.total_degree(),len(T.terms()),flush=True)
p2,p1,p0=S.Poly(P,l).all_coeffs()[1:]
R1=(B*B-A*C-p2*A*B+p1*A*A)
R0=(B*C-p2*A*C+p0*A*A)
assert S.expand(A*A*P-(A*l+A*p2-B)*H.as_expr()-(R1*l+R0))==0
for label,f in (('R1',R1),('R0',R0)):
 T=S.Poly(f,s,t,r,domain=S.QQ);print(label,T.degree_list(),T.total_degree(),len(T.terms()),flush=True)
print('A-zero branch H degree ≤1; ≥2 common roots requires A=B=C=0, which is all three elementary branches, not an ordinary pair.',flush=True)

def pack(expr):
    T=S.Poly(expr,s,t,r,domain=S.QQ)
    return [[*exp,str(c)] for exp,c in T.terms()]
data={"schema":"distinct-interior-cross-reduction-v1","source_sha256":sha256(D).hexdigest(),
      "remainder":{k:pack(f) for k,f in zip("ABC",(A,B,C))},
      "pair":{k:pack(f) for k,f in (("R0",R0),("R1",R1))}}
raw=(json.dumps(data,sort_keys=True,separators=(',',':'))+"\n").encode()
with Path(args.output).open("xb") as f:
    f.write(raw)
print(len(raw),sha256(raw).hexdigest())
