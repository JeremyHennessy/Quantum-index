"""Phase 3 Gauss-law, recoupling, independent Haar, regression and falsifier tests."""
import unittest
import numpy as np
from sympy import Rational,sqrt,simplify
import phase3_complete_j1 as m

class Phase3Tests(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  cls.S,cls.G,cls.L,cls.R=m.independent_Haar_j1()
  cls.L6,cls.R6=m.analytic_matrices(cls.S)

 def test_complete_j1_no_missing_intertwiners(self):
  self.assertEqual(self.S,((0,0,0),(0,1,1),(0,2,2),(1,0,1),(1,1,0),(1,1,2),
                           (1,2,1),(2,0,2),(2,1,1),(2,2,0),(2,2,2)))
  self.assertEqual(len(self.S),11)
  self.assertEqual((len(m.basis(1)),len(m.basis(3))),(4,23))
  self.assertTrue(all(m.admissible(*s) for s in self.S))
  self.assertFalse(m.admissible(1,1,1))

 def test_graph_orientation_and_gauss(self):
  self.assertEqual(len(m.LINKS),7)
  signs=[e[2] for face in m.FACES for e in face if e[:2]==('B','E')]
  self.assertEqual(signs,[-1,1])
  for f in m.FACES:
   edges=[(a,b) if s==1 else (b,a) for a,b,s in f]
   self.assertTrue(all(edges[i][1]==edges[(i+1)%4][0] for i in range(4)))

 def test_electric_values(self):
  self.assertEqual(tuple(m.electric(s) for s in self.S),
                   (0,3,8,3,Rational(9,2),Rational(13,2),9,8,9,12,14))

 def test_exact_24_point_moments_and_negative_8_axis_rule(self):
  p=m.points24()
  self.assertEqual(p.shape,(24,4))
  self.assertAlmostEqual(np.mean(p[:,0]**2),1/4,places=13)
  self.assertAlmostEqual(np.mean(p[:,0]**4),1/8,places=13)
  self.assertAlmostEqual(np.mean(p[:,0]**2*p[:,1]**2),1/24,places=13)
  self.assertAlmostEqual(np.mean(p[:8,0]**4),1/4,places=13)
  self.assertNotAlmostEqual(np.mean(p[:8,0]**4),1/8,places=8)

 def test_full_gauge_invariant_basis_gram(self):
  np.testing.assert_allclose(self.G,np.eye(11),atol=4e-13,rtol=0)

 def test_all_wilson_entries_independent_6j_vs_Haar(self):
  np.testing.assert_allclose(self.L,np.array(self.L6,dtype=float),atol=4e-13,rtol=0)
  np.testing.assert_allclose(self.R,np.array(self.R6,dtype=float),atol=4e-13,rtol=0)

 def test_hermiticity_and_selection_rules(self):
  np.testing.assert_allclose(self.L,self.L.T,atol=4e-13)
  np.testing.assert_allclose(self.R,self.R.T,atol=4e-13)
  for i,s in enumerate(self.S):
   for j,t in enumerate(self.S):
    if s[1]!=t[1] or abs(s[0]-t[0])!=1:self.assertEqual(self.L6[i,j],0)
    if s[0]!=t[0] or abs(s[1]-t[1])!=1:self.assertEqual(self.R6[i,j],0)

 def test_nontrivial_exact_recoupling(self):
  S=self.S
  self.assertEqual(self.L6[S.index((1,1,2)),S.index((2,1,1))],Rational(1,6))
  self.assertEqual(self.L6[S.index((1,2,1)),S.index((2,2,2))],Rational(2,3))
  self.assertEqual(self.R6[S.index((1,1,0)),S.index((1,2,1))],sqrt(3)/2)

 def test_phase2_four_state_recovered(self):
  idx=[self.S.index(t) for t in ((0,0,0),(1,0,1),(0,1,1),(1,1,0))]
  W=self.L+self.R
  np.testing.assert_allclose(W[np.ix_(idx,idx)],[[0,1,1,0],[1,0,0,.5],[1,0,0,.5],[0,.5,.5,0]],atol=4e-13)

 def test_phase2_infinite_tail_minmax_minor(self):
  x=sqrt(11);a=(15-x)/4;d=Rational(9,2);c2=Rational(5,8)
  minor=a-Rational(5,2);det=simplify(minor*(d-Rational(5,2))-c2)
  self.assertEqual(det,(15-4*x)/8)
  self.assertGreater(float(minor),0);self.assertGreater(float(det),0)

 def test_one_step_full_tail_reproduces_phase2(self):
  P,Q,A=m.full_one_step_tail(1)
  self.assertEqual((len(P),len(Q)),(4,7))
  np.testing.assert_allclose(np.linalg.eigvalsh(A.T@A),[0,1,1.5,2.5],atol=1e-12)

 def test_every_spin_cutoff_has_nonvanishing_raw_leakage(self):
  for n in range(1,7):
   P,Q,A=m.full_one_step_tail(n)
   v=A[:,P.index((n,0,n))]
   self.assertAlmostEqual(float(v@v),float(m.witness_squared(n)),places=12)
   self.assertGreater(float(m.witness_squared(n)),1.5)
  self.assertEqual(m.witness_squared(1),Rational(7,4))
  self.assertEqual(m.witness_squared(2),Rational(5,3))

 def test_finite_cutoff_spectra_not_continuum_claim(self):
  self.assertAlmostEqual(m.finite_gap(1,1,.5),3.1596028310212448,places=10)
  self.assertAlmostEqual(m.finite_gap(2,1,.5),3.0945144066363532,places=10)
  self.assertAlmostEqual(m.finite_gap(2,.1,1),1.228266316443825,places=10)

 def test_adverse_weak_electric_truncation_failure(self):
  g1=m.finite_gap(2,.01,25)
  g3=m.finite_gap(6,.01,25)
  self.assertGreater(g1/g3,2.9)
  self.assertAlmostEqual(g1,23.76696378764356,places=7)
  self.assertAlmostEqual(g3,8.039786116,places=6)

 def test_simple_energy_weighted_floor_does_not_resolve_continuum(self):
  self.assertEqual([m.conditional_tail_floor(n,1,.5) for n in range(1,6)],[0,1.75,4,6.75,10])
  self.assertLess(m.conditional_tail_floor(1,.01,25),0)

 def test_residual_conjugation_is_exact_gauge_symmetry(self):
  G,H,K=[m.fundamental(m.points24()[i]) for i in (8,13,18)]
  G2=K@G@K.conj().T;H2=K@H@K.conj().T
  for a,b,c in self.S:
   P=m.cg(a,b,c)
   def f(x,y):return np.trace(P.conj().T@np.kron(m.rep(a,x),m.rep(b,y.conj().T))@P)
   self.assertLess(abs(f(G,H)-f(G2,H2)),1e-12)

 def test_invalid_inputs_fail_closed(self):
  with self.assertRaises(ValueError):m.basis(-1)
  with self.assertRaises(ValueError):m.basis(9)
  with self.assertRaises(ValueError):m.electric((1,1,1))
  with self.assertRaises(ValueError):m.finite_gap(0,1,1)
  with self.assertRaises(ValueError):m.rep(3,m.fundamental(m.points24()[0]))

if __name__=='__main__':unittest.main(verbosity=2)
