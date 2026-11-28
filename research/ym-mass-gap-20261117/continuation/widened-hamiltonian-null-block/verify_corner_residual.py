"""Check the eight corners through four exact cubic representatives."""
from itertools import product
import sympy as S
from residual_symmetry_lines import char_at,stencils,E,L,lam

def run():
    B=stencils()
    # The exact stencil transport makes this cover 1+3+3+1 corners.
    signs=[]
    for k in range(4):
        y=(2,)*(3-k)+(-2,)*k
        a,b=char_at(y,S.Integer(1),B)
        P,Q=S.Poly.from_list(a,lam),S.Poly.from_list(b,lam)
        q=Q.compose(S.Poly(E-lam,lam))
        assert P.gcd(q).degree()==0
        assert P.eval(E-L)!=0
        R=-S.resultant(P,q)
        signs.append(int(S.sign(R)))
        print(y,"R sign",signs[-1],"F nonzero",flush=True)
    assert signs==[-1,1,1,-1]

if __name__=="__main__":
    run()
