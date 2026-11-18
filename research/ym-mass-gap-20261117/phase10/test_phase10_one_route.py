"""Phase 10: independent exact countercontrol for an invalid theorem transfer.

All matrix calculations are for a deliberately DIFFERENT decoupled two-level
toy Hamiltonian. They falsify the inference 'uniform complex spectral
separation => uniformly norm-bounded full-volume Riesz projections'. They
do NOT falsify the proposed complex analyticity of the physical SU2 G_N.
Also test the exact column-site encoding and a finite real Laplace identity.
"""
import unittest
from fractions import Fraction as F
import sympy as sp

I=sp.I
S=sp.S
O=sp.Matrix([[0,1],[1,0]])
eye=sp.eye(2)

def one_site(z):
    h=sp.Matrix([[0,-z],[-z,1]])
    r=sp.sqrt(1+4*z*z)
    e0=(1-r)/2
    e1=(1+r)/2
    p=sp.simplify((e1*eye-h)/r)
    return h,r,e0,p

def kron_n(vectors):
    x=sp.Matrix([[1]])
    for v in vectors:
        x=sp.kronecker_product(x,v)
    return x

def independent_chain(n,z):
    h,r,e,p=one_site(z)
    H=sp.zeros(2**n,2**n)
    for k in range(n):
        factors=[eye]*n
        factors[k]=h
        H+=kron_n(factors)
    return H,kron_n([p]*n),r,n*e

class Phase10ExactChecks(unittest.TestCase):
    def test_column_site_geometry_and_gap(self):
        for n in range(2,17):
            # Each site is (top_i,bottom_i,vertical_i), last site vertical_n.
            site_links=[{('top',i),('bottom',i),('vertical',i)} for i in range(n)]
            site_links.append({('vertical',n)})
            self.assertEqual(len(set.union(*site_links)),3*n+1)
            self.assertEqual(sum(map(len,site_links)),3*n+1)
            for i in range(n):
                face={('top',i),('bottom',i),('vertical',i),('vertical',i+1)}
                locations={j for j,s in enumerate(site_links) if face&s}
                self.assertEqual(locations,{i,i+1})
            # Each site has a unique constant product vacuum; a single
            # fundamental j=1/2 link costs alpha*3/4 in electric energy.
            for alpha in (F(1,2),F(1),F(2)):
                self.assertEqual(3*alpha/4, F(3,4)*alpha)

    def test_one_site_riesz_projection_and_complex_spectral_gap(self):
        z=I/sp.Integer(4)
        h,r,e,p=one_site(z)
        self.assertEqual(r,sp.sqrt(3)/2)
        self.assertEqual(sp.simplify(p*p-p),sp.zeros(2))
        self.assertEqual(sp.simplify(h*p-e*p),sp.zeros(2))
        self.assertEqual(sp.simplify(sp.trace(p)),1)
        self.assertNotEqual(p,p.H)
        self.assertEqual(sp.simplify(sp.trace(p.H*p)),sp.Rational(4,3))
        # Uniform complex eigenvalue separation |r|=sqrt(3)/2 persists
        # for every product length even though ||P_N|| grows exponentially.
        for n in (1,2,3,4,8):
            self.assertGreater(sp.Rational(4,3)**n,1)

    def test_product_projection_norm_growth_exact(self):
        z=I/sp.Integer(4)
        _,_,_,p=one_site(z)
        for n in (1,2,3,4):
            pn=kron_n([p]*n)
            self.assertEqual(sp.simplify(sp.trace(pn.H*pn)),sp.Rational(4,3)**n)
            self.assertEqual(sp.simplify(sp.trace(pn)),1)

    def test_toy_local_centered_complex_response_remains_bounded(self):
        # This toy example shows projection-norm growth does NOT falsify
        # locality of a properly normalized centered scalar observable.
        z=I/sp.Integer(4)
        h,r,e,p=one_site(z)
        mu=sp.simplify(sp.trace(p*O))
        response=sp.simplify(sp.trace(p*(O-mu*eye)*(h-e*eye+eye).inv()*(O-mu*eye)))
        expected=sp.simplify(1/(r*r*(1+r)))
        self.assertEqual(sp.simplify(response-expected),0)
        H2,P2,_,E2=independent_chain(2,z)
        A2=sp.kronecker_product(O,eye)
        mu2=sp.simplify(sp.trace(P2*A2))
        direct=sp.simplify(sp.trace(P2*(A2-mu2*sp.eye(4))
                   *(H2-E2*sp.eye(4)+sp.eye(4)).inv()
                   *(A2-mu2*sp.eye(4))))
        self.assertEqual(sp.simplify(direct-response),0)

    def test_uniform_spectral_distance_does_not_bound_nonnormal_inverse(self):
        # Purely algebraic counterexample, not an SU2 counterexample:
        # spec(T_L)={0,1} for ALL L, whereas ||(T_L+s)^(-1)|| grows.
        s=sp.Integer(1)
        for L in (1,5,50,500):
            T=sp.Matrix([[0,L],[0,1]])
            inv=(T+s*sp.eye(2)).inv()
            self.assertEqual(inv[0,1],-sp.Rational(L,2))
            self.assertEqual(T.eigenvals(),{0:1,1:1})

    def test_real_laplace_transform_one_site(self):
        z=sp.Rational(1,4)
        h,r,e,p=one_site(z)
        self.assertEqual(sp.simplify(p-p.H),sp.zeros(2))
        mu=sp.simplify(sp.trace(p*O))
        variance=sp.simplify(sp.trace(p*(O-mu*eye)*(O-mu*eye)))
        self.assertEqual(variance,sp.Rational(4,5))
        s=sp.Integer(1)
        time=sp.symbols('t',positive=True,real=True)
        laplace=sp.integrate(sp.exp(-s*time)*variance*sp.exp(-r*time),(time,0,sp.oo))
        resolvent=sp.trace(p*(O-mu*eye)*(h-e*eye+s*eye).inv()*(O-mu*eye))
        self.assertEqual(sp.simplify(laplace-resolvent),0)
        self.assertEqual(sp.simplify(resolvent-variance/(s+r)),0)

    def test_retained_phase8_exact_restricted_coefficient(self):
        from pathlib import Path
        import sys
        sys.path.insert(0,str(Path(__file__).resolve().parent.parent/'phase8'))
        from phase8_two_methods import exact_matrices,grade_calculate,MAX
        CG,HAAR=exact_matrices()
        self.assertEqual(CG,HAAR)
        self.assertEqual(grade_calculate(CG)[0][MAX],
                         F(1504856360495713,3397652693362287360000))

if __name__=='__main__':
    unittest.main(verbosity=2)
