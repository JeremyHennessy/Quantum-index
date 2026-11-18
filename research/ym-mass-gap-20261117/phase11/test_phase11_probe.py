"""Exact independent finite-dimensional falsifiers of the Phase 11 probe identity.

A two-level TOY, not a spin truncation of the SU(2) ladder:
H(z)=[[0,-z],[-z,2]], O=[[1,1],[1,-1]], s=3/2.
At z=0, <O>=1, so omitting the vacuum subtraction cannot pass.
Method A uses the non-orthogonal complex Riesz projection and resolvent.
Method B independently differentiates the 4x4 probe characteristic polynomial
at its isolated eigenvalue. Neither asserts volume-uniform SU2 analyticity.
"""
import unittest
import sympy as sp

I=sp.I
EYE=sp.eye(2)
O=sp.Matrix([[1,1],[1,-1]])
SIGX=sp.Matrix([[0,1],[1,0]])
S=sp.Rational(3,2)
VALUES=(sp.Integer(0),sp.Rational(1,3),I/5)

def original(z):
    return sp.Matrix([[0,-z],[-z,2]])

def eigen_projection(z):
    r=sp.sqrt(1+z*z)
    e=1-r
    h=original(z)
    p=sp.simplify(((1+r)*EYE-h)/(2*r))
    return h,e,p

def direct_response(z,s=S):
    h,e,p=eigen_projection(z)
    r=(h+(s-e)*EYE).inv()
    mu=sp.simplify(sp.trace(p*O))
    uncentered=sp.simplify(sp.trace(p*O*r*O))
    centered=sp.simplify(sp.trace(p*(O-mu*EYE)*r*(O-mu*EYE)))
    return mu,uncentered,centered

def probe_coefficient_by_characteristic_polynomial(z,s=S):
    """Independent implicit determinant derivative, no Riesz/Green matrix."""
    h=original(z)
    e=1-sp.sqrt(1+z*z)
    lam=sp.symbols('lambda')
    x=sp.symbols('x')
    aug=sp.kronecker_product(h,EYE)+sp.kronecker_product(EYE,sp.diag(0,s))
    aug+=lam*sp.kronecker_product(O,SIGX)
    charpoly=(aug-x*sp.eye(4)).det(method='berkowitz').expand()
    second=charpoly.coeff(lam,2).subs(x,e)
    derivative=sp.diff(charpoly,x).subs(lam,0).subs(x,e)
    if sp.simplify(derivative)==0:
        raise ValueError("isolated eigenbranch assumption failed")
    return sp.simplify(-second/derivative)

def source_first_coefficient_by_characteristic_polynomial(z):
    h=original(z)
    e=1-sp.sqrt(1+z*z)
    x,b=sp.symbols('x b')
    polynomial=(h-b*O-x*EYE).det().expand()
    return sp.simplify(-sp.diff(polynomial,b).subs({x:e,b:0})/
                       sp.diff(polynomial,x).subs({x:e,b:0}))

class Phase11ProbeTests(unittest.TestCase):
    def test_nonzero_vacuum_mean_and_correct_vacuum_pole(self):
        mu,u,f=direct_response(sp.Integer(0))
        self.assertEqual(mu,1)
        self.assertEqual(u,sp.Rational(20,21))
        self.assertEqual(f,sp.Rational(2,7))
        self.assertEqual(sp.simplify(u-f),sp.Rational(2,3))
        self.assertEqual(probe_coefficient_by_characteristic_polynomial(0),
                         -sp.Rational(20,21))

    def test_independent_probe_eigenvalue_and_centered_formula(self):
        for z in VALUES:
            mu,u,f=direct_response(z)
            a=probe_coefficient_by_characteristic_polynomial(z)
            self.assertEqual(sp.simplify(a+u),0,(z,a,u))
            self.assertEqual(sp.simplify(f+a+mu**2/S),0,z)

    def test_correct_analytic_left_right_projection(self):
        for z in VALUES:
            h,e,p=eigen_projection(z)
            self.assertEqual(sp.simplify(p*p-p),sp.zeros(2))
            self.assertEqual(sp.simplify(h*p-e*p),sp.zeros(2))
            self.assertEqual(sp.simplify(sp.trace(p)),1)
        _,_,p=eigen_projection(I/5)
        self.assertNotEqual(p,p.H)
        self.assertEqual(sp.simplify(sp.trace(p*O)),sp.sqrt(6)*(5+I)/12)

    def test_independent_local_source_first_energy_derivative(self):
        for z in VALUES:
            mean,_,_=direct_response(z)
            source_coeff=source_first_coefficient_by_characteristic_polynomial(z)
            self.assertEqual(sp.simplify(source_coeff+mean),0)
        self.assertEqual(source_first_coefficient_by_characteristic_polynomial(0),-1)

    def test_wrongly_uncentered_identity_is_rejected(self):
        for z in VALUES:
            mu,u,f=direct_response(z)
            self.assertNotEqual(sp.simplify(mu),0)
            self.assertNotEqual(sp.simplify(f-u),0)
            self.assertEqual(sp.simplify(f-u+mu**2/S),0)

    def test_spectral_exclusion_necessary(self):
        h,e,_=eigen_projection(0)
        self.assertEqual(sp.simplify((h-e*EYE).det()),0)  # s=0: probe vacuum degeneracy
        self.assertEqual(sp.simplify((h+(sp.Integer(-2)-e)*EYE).det()),0)
        self.assertEqual(sp.simplify((h+(S-e)*EYE).det()),sp.Rational(21,4))

    def test_uniform_energy_shift_bound_is_only_conditional_complex(self):
        # If |D|<=CD in |lambda|<rho and |E(z,h)-E(z)|<=Ch in |h|<eta
        # uniformly on a common z disk, Cauchy bounds only the coefficients.
        cd,rho,ch,eta,s=map(sp.Rational,(3,sp.Rational(1,2),2,sp.Rational(1,4),S))
        estimate=cd/rho**2+(ch/eta)**2/s
        self.assertEqual(estimate,sp.Rational(164,3))
        # These numeric constants are a pure algebraic example, NOT SU2 bounds.

    def test_phase8_full_spin_control_unmodified(self):
        from pathlib import Path
        import sys
        sys.path.insert(0,str(Path(__file__).resolve().parent.parent/'phase8'))
        from phase8_two_methods import exact_matrices,grade_calculate,MAX
        cg,haar=exact_matrices()
        self.assertEqual(cg,haar)
        self.assertEqual(grade_calculate(cg)[0][MAX],
                         sp.Rational(1504856360495713,3397652693362287360000))

if __name__=='__main__':
    unittest.main(verbosity=2)
