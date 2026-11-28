import sympy as S,json,hashlib,argparse
from pathlib import Path
s,t,r,v,z,l=S.symbols('s t r v z l')
PIN='b61b6277291c76af945865d3840271bf32725cbc68521839441ee25c563d8d23'
def run(input_path,output):
 raw=Path(input_path).read_bytes()
 assert hashlib.sha256(raw).hexdigest()==PIN
 p=(592704000*l**3+(7056000*s+23284800)*l**2+(21000*s*s+100800*s+52920)*l-225*s*s+110*s+500*v+31)/592704000
 p2,p1=S.Poly(p,l).all_coeffs()[1:3]
 V=S.solve(p.subs(l,z),v)[0]
 def ev(a): return S.Poly.from_dict({tuple(m[:-1]):S.Rational(m[-1]) for m in a},s,t,r,domain=S.QQ).as_expr()
 A,B,C=[ev(json.loads(raw)['remainder'][n]) for n in 'ABC']
 def prim(x,*sym):return S.Poly(x,*sym,domain=S.QQ).clear_denoms()[1].primitive()[1]
 U,W=[prim(g.subs(r,V-2*t),s,z,t) for g in [B-A*(p2+z),C-A*(p1+p2*z+z*z)]]

 U3,W3=[S.Poly(f.as_expr(),t).LC() for f in (U,W)]
 z0=(-300*s*s+4165*s+51306)/(420*(80*s-1001))
 assert S.cancel(U3.subs(z,z0))==0
 n,d=S.fraction(S.cancel(W3.subs(z,z0)))
 expected=(10*s+87)*(10*s+141)*(1600*s*s-107920*s+2003077)**2
 assert S.Poly(n,s).monic()==S.Poly(expected,s).monic()
 assert S.Poly(d,s).monic()==S.Poly((80*s-1001)**3,s).monic()
 assert S.discriminant(1600*s*s-107920*s+2003077,s)<0
 print('V',S.factor(V))
 for b in (U,W):
  print(b.degree_list(),len(b.terms()),'t lead',S.factor(S.Poly(b.as_expr(),t).LC()))
 from time import monotonic
 T=monotonic(); Q=S.subresultants(U.as_expr(),W.as_expr(),t); print('PRS',[(S.degree(f,t),S.degree(f,z),S.degree(f,s))for f in Q],monotonic()-T,flush=True)
 q=prim(Q[-1],s,z)
 print('factor…',q.degree_list(),len(q.terms()),flush=True)
 print("total",q.total_degree(),"zLC",S.factor(S.Poly(q.as_expr(),z).LC()),flush=True); Path(output).open("x").write(json.dumps({"source":PIN,"poly":[[*a,str(b)]for a,b in q.terms()]},separators=(",",":"),sort_keys=True)+"\n")
 f=q.factor_list()
 assert len(f[1])==1 and f[1][0][1]==1 and f[1][0][0].monic()==q.monic()
 assert q.degree_list()==(43,43) and q.total_degree()==43
 for p,m in f[1]:print(p.degree_list(),m,len(p.terms()),str(p.as_expr()) if len(p.terms())<35 else '',flush=True)

if __name__=='__main__':
 a=argparse.ArgumentParser(); a.add_argument('input');a.add_argument('output');u=a.parse_args();run(u.input,u.output)
