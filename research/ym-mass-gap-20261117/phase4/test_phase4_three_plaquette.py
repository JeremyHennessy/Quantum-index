"""Falsification-first tests for a finite, connected SU2 spatial three-plaquette graph."""
import unittest
import numpy as np
from sympy import Rational, N, sqrt, simplify
from sympy.physics.wigner import wigner_6j
import phase4_three_plaquette as m
from phase4_exact_half import compute as exact_half

class Phase4(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  cls.S,cls.G,cls.haar=m.Haar_matrices(2)
  cls.T,cls.cg=m.CG_matrices(2)
  cls.low,cls.loops=m.halfspin_loops()
  cls.gm,cls.wm,cls.K=exact_half()

 def test_01_graph_is_connected_and_faces_close(self):
  self.assertEqual((len(m.VERTICES),len(m.EDGES),len(m.FACES)),(8,10,3))
  self.assertEqual(len(set(m.EDGES)),10)
  edge_set={frozenset(e) for e in m.EDGES}
  for face in m.FACES:
   self.assertEqual(len(face),4)
   self.assertTrue(all(frozenset([face[i],face[(i+1)%4]]) in edge_set for i in range(4)))

 def test_02_complete_Gauss_basis(self):
  self.assertEqual([len(m.physical_basis(n)) for n in (0,1,2,3)],[1,8,49,187])
  for s in self.S:
   a,t,u,d,v,w=s
   self.assertTrue(all((m.admissible(a,t,v),m.admissible(a,u,v),m.admissible(t,d,w),m.admissible(u,d,w))))
  self.assertEqual(len(self.S),len(set(self.S)))

 def test_03_electric_Casimir_normalization(self):
  self.assertEqual(m.electric((0,0,0,0,0,0)),0)
  self.assertEqual(m.electric((1,0,0,0,1,0)),3)
  self.assertEqual(m.electric((0,1,1,0,1,1)),3)
  self.assertEqual(m.electric((1,1,1,1,0,0)),6)

 def test_04_Haar_24cell_moments(self):
  q=m.quaternions24()
  self.assertAlmostEqual(np.mean(q[:,0]**2),1/4,places=14)
  self.assertAlmostEqual(np.mean(q[:,0]**4),1/8,places=14)
  self.assertAlmostEqual(np.mean(q[:,0]**2*q[:,1]**2),1/24,places=14)
  self.assertAlmostEqual(np.mean(q[:8,0]**4),1/4,places=14)
  self.assertNotAlmostEqual(np.mean(q[:8,0]**4),1/8,places=10)

 def test_05_full_49_state_Haar_Gram_is_orthonormal(self):
  np.testing.assert_allclose(self.G,np.eye(49),atol=3e-13,rtol=0)

 def test_06_independent_49_state_magnetic_matrices(self):
  self.assertEqual(self.S,self.T)
  for a,b in zip(self.haar,self.cg):
   np.testing.assert_allclose(a,b,atol=3e-13,rtol=0)
   np.testing.assert_allclose(a,a.conj().T,atol=3e-13,rtol=0)

 def test_07_halfspin_character_loop_independent_control(self):
  S,G,W=m.Haar_matrices(1)
  self.assertEqual(S,self.low)
  np.testing.assert_allclose(G,np.eye(8),atol=3e-13)
  for a,b in zip(W,self.loops):np.testing.assert_allclose(a,b,atol=3e-13,rtol=0)

 def test_08_Gauss_full_link_local_transform(self):
  rng=np.random.default_rng(345)
  def unitary():
   x=rng.normal(size=4);return m.quaternion_matrix(x/np.linalg.norm(x))
  links=[unitary() for _ in m.EDGES];g={v:unitary() for v in m.VERTICES}
  new=[g[a]@U@g[b].conj().T for (a,b),U in zip(m.EDGES,links)]
  for s in self.S[::7]:
   self.assertLess(abs(m.full_link_value(s,links)-m.full_link_value(s,new)),2e-12)

 def test_09_invalid_naive_6j_sign_formula_rejected(self):
  s=(1,0,2,1,1,1);t=(2,0,2,1,2,1)
  def six(spectator):
   return wigner_6j(Rational(1,2),Rational(spectator,2),Rational(1,2),Rational(2,2),Rational(1,2),Rational(2,2))
  raw=float(N(sqrt((1+1)*(2+1)*(1+1)*(2+1))*six(0)*six(2)))
  correct=m.CG_transition(s,t,0)
  self.assertLess(raw,0)
  self.assertGreater(correct,0)
  self.assertAlmostEqual(abs(raw),correct,places=12)

 def test_10_exact_integer_quaternion_8state_K(self):
  self.assertEqual(self.gm, __import__('sympy').eye(8))
  self.assertEqual(max(self.K.eigenvals()),Rational(13,4))
  self.assertEqual(self.K.trace(),Rational(127,8))

 def test_11_complete_one_step_raw_coupling(self):
  P,Q,A=m.one_step_tail(1)
  self.assertEqual((len(P),len(Q),A.shape),(8,41,(41,8)))
  self.assertAlmostEqual(np.linalg.norm(A,2)**2,13/4,places=12)
  P,Q,A=m.one_step_tail(2)
  self.assertEqual((len(P),len(Q),A.shape),(49,138,(138,49)))
  self.assertAlmostEqual(np.linalg.norm(A,2)**2,4.006901488356139,places=10)

 def test_12_omitted_electric_cost_local_floor(self):
  self.assertEqual(m.local_electric_floor(1),5)
  self.assertEqual(m.local_electric_floor(2),9)
  for n in (1,2):
   excluded=(s for s in m.physical_basis(n+2) if s not in set(m.physical_basis(n)))
   self.assertTrue(all(m.electric(s)>=m.local_electric_floor(n) for s in excluded))

 def test_13_fixed_coupling_weighted_upper_bound(self):
  j=m.weighted_certificate(1,1,.5)
  self.assertTrue(j['admissible'])
  self.assertAlmostEqual(j['global_upper'],13/32,places=12)
  self.assertAlmostEqual(j['weighted_upper'],.294471153846154,places=10)
  self.assertLess(j['weighted_upper'],j['global_upper'])
  k=m.weighted_certificate(2,1,.5)
  self.assertTrue(k['admissible'])
  self.assertAlmostEqual(k['weighted_upper'],.10556530051924,places=10)
  self.assertLess(k['weighted_upper'],j['weighted_upper'])

 def test_14_increasing_volume_worsens_crude_bound(self):
  two=Rational(1,4)*Rational(5,2)/(5-2)
  three=Rational(1,4)*Rational(13,4)/(5-3)
  self.assertEqual(two,Rational(5,24))
  self.assertEqual(three,Rational(13,32))
  self.assertGreater(three,two)

 def test_15_source_dimensional_scaling_can_make_bound_vacuous(self):
  # Source: alpha=g²/2, beta=2/(a²*g²), g² fixed at 2 in 2+1 dimensions.
  for spacing in (1,.5):
   alpha=1;beta=1/spacing**2
   self.assertFalse(m.weighted_certificate(1,alpha,beta)['admissible'])
  self.assertFalse(m.weighted_certificate(2,1,4)['admissible'])

 def test_16_weak_electric_truncated_spectra_are_not_proofs(self):
  self.assertAlmostEqual(m.truncated_gap(1,1,.5),3.15821069,delta=5e-7)
  self.assertAlmostEqual(m.truncated_gap(2,1,.5),3.0846842,delta=5e-7)
  self.assertGreater(m.truncated_gap(2,.01,25),20)
  self.assertGreater(m.truncated_gap(1,.01,25),m.truncated_gap(2,.01,25))

 def test_17_falsification_and_scope_fails_closed(self):
  with self.assertRaises(ValueError):m.physical_basis(-1)
  with self.assertRaises(ValueError):m.physical_basis(5)
  with self.assertRaises(ValueError):m.Haar_matrices(3)
  with self.assertRaises(ValueError):m.weighted_certificate(1,-1,.5)
  with self.assertRaises(ValueError):m.weighted_certificate(3,1,.5)

if __name__=='__main__': unittest.main(verbosity=2)
