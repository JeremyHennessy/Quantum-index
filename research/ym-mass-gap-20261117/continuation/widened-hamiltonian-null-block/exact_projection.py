import argparse
import hashlib
import json
from pathlib import Path
from fractions import Fraction
import sympy as S
from sympy.polys.rings import ring

p=argparse.ArgumentParser(); p.add_argument('values');p.add_argument('output');args=p.parse_args()
vals=[tuple(map(int,x.split())) for x in Path(args.values).read_text().splitlines()]
assert len(vals)==161 and len({x for x,_ in vals})==161
s=S.Symbol('s')
RR,x=ring('s',S.QQ)
f=RR.zero;q=RR.one
for u,y in vals[:157]:
 f+=(S.QQ(y)-f.evaluate(x,u))/q.evaluate(x,u)*q
 q*=x-u
assert all(c.denominator==1 for c in f.values())
assert all(f.evaluate(x,u)==y for u,y in vals)
p=S.Poly.from_dict(dict(f),s,domain=S.ZZ).primitive()[1]
print('degree',p.degree(),flush=True)
p,rem=p.div(S.Poly(80*s-1001,s,domain=S.ZZ));assert rem.is_zero
p=S.Poly(p,s,domain=S.ZZ).primitive()[1]
assert p.degree()==147 and p.eval(S.Rational(1001,80))!=0
g=S.Poly(p,s,modulus=1009)
assert g.degree()==147 and S.gcd(g,g.diff()).is_ground
print('primitive finite factor',p.degree(),flush=True)
ir=p.intervals(inf=-6,sup=6,eps=S.Rational(1,10**11))
print('real projections',[(float((a+b)/2),m)for ((a,b),m) in ir],flush=True)
d={'schema':'distinct-interior-triple-projection-v1','degree_bound':156,'rational_polynomial': [str(z) for z in p.all_coeffs()], 'stripped_factor':'80*s-1001','isolating_intervals':[[str(a),str(b),m] for ((a,b),m) in ir]}
data=(json.dumps(d,sort_keys=True,separators=(',',':'))+'\n').encode()
with Path(args.output).open('xb')as f:f.write(data)
print(len(data),hashlib.sha256(data).hexdigest(),flush=True)
