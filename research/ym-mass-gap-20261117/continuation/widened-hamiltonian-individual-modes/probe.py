"""Exact detection certificate; this is not a finite-g or continuum bound."""
import sympy as S
from first_order import D, FF, mat, rmat, integrate, restriction
def probe_vec(entries,G):
    b=[]
    for m,n in entries:
        v=0
        for p,(i,j),sgn in ((5,(0,2),1),(10,(1,3),-1)):
            if (m^p).bit_count()==1:
                k=(m^p).bit_length()-1
                v+=S.Rational(sgn,8)*integrate(n,FF[i],FF[j],FF[k])
        b.append(v)
    return -G.inv()*S.Matrix(b)/6
def main():
    entries,G,A=mat(D);T=G.inv()*A
    X,Y=[rmat(entries,G,k) for k in 'XY']
    v=probe_vec(entries,G)
    assert X*v==-v
    observed=[(m,coef) for ((m,_),coef) in zip(entries,v) if coef]
    assert observed==[(m,S.Rational(a,96)) for m,a in ((11,1),(13,-1),(21,-1),(42,1),(69,-1),(138,1))]
    assert (v.T*G*v)[0]==S.Rational(1,1536)
    print('nonzero derivative coefficients', observed)
    x=S.Symbol('x')
    expected={-1:(512*x**4-136*x**2+5)/512,1:(4096*x**6-3136*x**4+328*x**2-3)/4096}
    C=S.diag(*[(-1)**m.bit_count() for m,_ in entries])
    assert C*T==-T*C and C*Y==Y*C and C*X==X*C and C*v==-v
    # Restrict to X odd first, then to Y sectors; exact characteristic
    # squarefreeness away from zero rules out same-sector degeneracy.
    Xn=S.Matrix.hstack(*(X+S.eye(X.rows)).nullspace())
    J=(Xn.T*Xn).inv()*Xn.T
    assert Xn*J*T*Xn==T*Xn and Xn*J*Y*Xn==Y*Xn
    for eps in (-1,1):
        yblock=restriction(J*T*Xn,J*Y*Xn,eps)
        cp=yblock.charpoly(x).as_expr()
        zero_multiplicity={-1:7,1:8}[eps]
        nz=S.cancel(cp/x**zero_multiplicity)
        assert nz.subs(x,0)!=0 and S.gcd(nz,S.diff(nz,x))==1
        assert S.rem(nz,expected[eps],x)==0
        w=(v+eps*Y*v)/2
        assert (w.T*G*w)[0]==S.Rational(1,3072)
        p=S.Poly(x*expected[eps],x)
        powers=[w]
        for _ in range(p.degree()):powers.append(T*powers[-1])
        assert S.Matrix.hstack(*powers[:-1]).rank()==p.degree()
        assert sum((p.nth(i)*p_i for i,p_i in enumerate(powers)),S.zeros(T.rows,1))==S.zeros(T.rows,1)
        print('Y',eps,'minimal cyclic polynomial',S.factor(p.as_expr()),'nonzero simple modes',p.degree()-1)
        if eps==-1:
            moments=[(w.T*G*T**(2*j)*w)[0] for j in range(3)]
            assert moments==[S.Rational(1,3072),S.Rational(1,294912),S.Rational(1,2097152)]
            u=[(17-S.sqrt(129))/128,(17+S.sqrt(129))/128]
            W=S.Matrix([[u[0],u[1]],[u[0]**2,u[1]**2]]).inv()*S.Matrix(moments[1:])
            expected_plusminus=[(129+7*S.sqrt(129))/11888640,(129-7*S.sqrt(129))/11888640]
            assert all(S.simplify(a/2-b)==0 for a,b in zip(W,expected_plusminus))
            assert S.simplify(moments[0]-sum(W))==S.Rational(13,46080)
            print('Y odd individual squared coefficients', expected_plusminus)
if __name__=='__main__':main()
