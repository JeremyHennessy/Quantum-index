"""Phase 9 independently check finite-graph embedding and conditional math only.

These tests NEVER assert that the published theorem itself was proven by tests,
that a numerical beta threshold is known, or that physical G_N has uniform
complex analyticity. Those remain separate theorem and open-lemma gates.
"""
import unittest
from fractions import Fraction as F
from pathlib import Path
import sys

def link_sites(n):
    assert n>=2
    labels={}
    for i in range(n):
        labels[('top',i)]=3*i
        labels[('bottom',i)]=3*i+1
        labels[('vertical',i)]=3*i+2
    labels[('vertical',n)]=3*n+2
    return labels

def face_support(n,k):
    assert 0<=k<n
    x=link_sites(n)
    return frozenset((x[('top',k)],x[('bottom',k)],
                      x[('vertical',k)],x[('vertical',k+1)]))

def site_distance(A,B):
    return min(abs(a-b) for a in A for b in B)

class Phase9MappingTests(unittest.TestCase):
    def test_uniform_original_link_locality(self):
        for n in range(2,25):
            sites=link_sites(n)
            self.assertEqual(len(sites),3*n+1)
            self.assertEqual(len(set(sites.values())),3*n+1)
            usage={v:0 for v in sites.values()}
            for k in range(n):
                supp=face_support(n,k)
                self.assertEqual(len(supp),4)
                self.assertEqual(max(abs(x-3*k) for x in supp),5)
                for x in supp:usage[x]+=1
            self.assertLessEqual(max(usage.values()),2)
            self.assertTrue(all(c>0 for c in usage.values()))

    def test_embedded_last_face_has_exact_support_distance(self):
        for n in range(2,25):
            Y=face_support(n,0)
            X=face_support(n,n-1)
            expect=0 if n==2 else 3*(n-1)-5
            self.assertEqual(site_distance(Y,X),expect)
            self.assertEqual(Y,frozenset((0,1,2,5)))
            self.assertEqual(max(X),3*n+2)

    def test_zero_coupling_on_site_spectrum(self):
        for alpha in (F(1,2),F(1),F(3)):
            spectrum=[alpha*F(n*(n+2),4) for n in range(8)]
            self.assertEqual(spectrum[0],0)
            self.assertEqual(min(spectrum[1:]),3*alpha/4)
            self.assertTrue(all(e>=3*alpha/4 for e in spectrum[1:]))

    def test_conditional_cauchy_tail_arithmetic(self):
        # Checks ONLY the geometric-series implication if a uniform analytic
        # disk and bound M were already proved. Does NOT establish that premise.
        M,r,beta0=F(3),F(2),F(1,2)
        t=beta0/r
        A=2*M/(1-t)
        q=t*t
        self.assertTrue(0<q<1)
        for d in range(1,20):
            upper_from_cauchy=2*M*t**(2*d)/(1-t)
            self.assertEqual(upper_from_cauchy,A*q**d)

    def test_exact_phase8_coefficient_is_retained_as_lower_order_control(self):
        sys.path.insert(0,str(Path(__file__).resolve().parent.parent/'phase8'))
        from phase8_two_methods import exact_matrices,grade_calculate,MAX
        mat,_=exact_matrices()
        full=grade_calculate(mat)[0][MAX]
        self.assertEqual(full,F(1504856360495713,3397652693362287360000))
        self.assertGreater(full,0)

    def test_adverse_continuum_ratio_fixed_dimensionful_g_squared(self):
        # alpha=g²/2, beta=2/(a²*g²), ratio=4/(a²*(g²)^2).
        coupling_squared=F(2)
        def ratio(a):
            alpha=coupling_squared/2
            beta=2/(a*a*coupling_squared)
            return beta/alpha
        self.assertEqual(ratio(F(1,2)),4*ratio(F(1)))
        self.assertEqual(ratio(F(1,4)),4*ratio(F(1,2)))

if __name__=='__main__':
    unittest.main(verbosity=2)
