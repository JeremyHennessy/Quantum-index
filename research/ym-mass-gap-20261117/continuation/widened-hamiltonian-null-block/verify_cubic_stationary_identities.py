"""Small exact identities only; no elimination or stationary solve."""
from pathlib import Path
import argparse, hashlib,json
import sympy as S

PIN="42da7a91cb2421f081e93966fe275e12849aeccd920581c787fdb9f475469df9"
s,t,l,y=S.symbols("s t l y")

def main(inp):
    b=Path(inp).read_bytes()
    assert hashlib.sha256(b).hexdigest()==PIN
    p=json.loads(b)
    def poly(data):
        return S.Poly.from_dict({(i,j,k):S.Rational(v) for i,j,k,v in data},s,t,l,domain=S.QQ)
    G=poly(p["G"]).as_expr()
    D=poly(p["e2_discriminant"]).as_expr()
    a,b,c,d=S.Poly(G,t).all_coeffs()
    assert S.diff(a,s)==0
    assert S.factor(a)==-(112*l-3)**2*(1344*l+325)/S.Integer(91215037658033943478272)
    assert -S.Rational(325,1344)<-S.Rational(71,840)<S.Rational(3,280)<S.Rational(3,112)
    A=b*b-3*a*c
    B=2*b**3-9*a*b*c+27*a*a*d
    Y=3*a*t+b
    assert S.expand(Y**3-3*A*Y+B-27*a*a*G)==0
    assert S.expand(27*a*a*D-4*A**3+B**2)==0
    a0=S.diff(G,t)
    a1=b*t*t+2*c*t+3*d
    assert S.expand(a1-3*G+t*a0)==0
    assert S.expand(3*a*a1-b*a0-((-2*A)*t+9*a*d-b*c))==0
    dl=S.diff(a,l)
    q2=S.diff(b,s)*t*t+S.diff(c,s)*t+S.diff(d,s)
    q3=(3*a*S.diff(b,l)-2*dl*b)*t*t+(3*a*S.diff(c,l)-dl*c)*t+3*a*S.diff(d,l)
    assert S.expand(q2-S.diff(G,s))==0
    assert S.expand(q3-3*a*S.diff(G,l)+dl*t*a0)==0
    for label,k in (("a",a),("b",b),("c",c),("d",d),("Delta0",A),("Delta1",B)):
        q=S.Poly(k,s,l,domain=S.QQ)
        print(label,q.degree(s),q.degree(l),len(q.terms()))
    print("Verified input discriminant and depressed/derivative identities; no projection or solve run.")
if __name__=="__main__":
    q=argparse.ArgumentParser()
    q.add_argument("artifact");main(q.parse_args().artifact)
