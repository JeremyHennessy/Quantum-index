import unittest
from sympy import Rational,symbols,simplify
from phase6_closed import *
from phase6_sparse import second_order,build
import numpy as np

class ExactPhase6(unittest.TestCase):
 def test_phase5_original_resolvent_reproduced(self):
  self.assertEqual(old_Q_resolvent_beta2(3),Rational(743,190080))
  self.assertEqual(old_Q_resolvent_beta2(4),Rational(1013,190080))
  self.assertEqual(old_Q_resolvent_beta2(4)-old_Q_resolvent_beta2(3),Rational(1,704))

 def test_connected_beta2_exact_rational_at_alpha_one_s_one(self):
  for n in [2,3,4,5]:
   g0,g1,g2,_=connected_coefficients(n)
   self.assertEqual((g0,g1,g2),(Rational(1,4),0,-Rational(6647,71280)))

 def test_symbolic_alpha_s_formula_and_volume_cancel(self):
  a,s=symbols('a s',positive=True)
  for n in [2,3,4,5]:
   self.assertEqual(simplify(connected_coefficients(n,a,s)[2]-second_order_general_formula(a,s)),0)

 def test_two_independent_symbolic_implementations(self):
  for n in [2,3,4,5]:
   a=second_order(n)
   b=connected_coefficients(n)
   self.assertEqual(a[:3],b[:3])

 def test_all_five_remote_terms_cancel_exactly(self):
  a,s=symbols('a s',positive=True)
  vals=distant_per_plaquette(a,s)
  self.assertEqual(simplify(sum(vals.values())),0)
  self.assertEqual(len(vals),5)

 def test_vacuum_energy_shift_only_not_enough(self):
  a,s=symbols('a s',positive=True)
  terms=distant_per_plaquette(a,s)
  without_norm=sum(x for k,x in terms.items() if k!='normalized_state_second_order')
  self.assertNotEqual(simplify(without_norm),0)

 def test_normalized_state_only_not_enough(self):
  a,s=symbols('a s',positive=True)
  terms=distant_per_plaquette(a,s)
  without_energy=sum(x for k,x in terms.items() if k!='ground_energy_shift')
  self.assertNotEqual(simplify(without_energy),0)

 def test_ground_state_energy_shift_and_centering(self):
  for n in [2,3,4,5]:
   meta=second_order(n)[4]
   self.assertEqual(meta['e2'],-Rational(n,3))
   self.assertEqual(meta['o1'],Rational(2,3))
   self.assertEqual(meta['o2'],0)
   self.assertEqual(meta['u1norm'],Rational(n,9))

 def test_laplace_parameters_adverse_fail_closed(self):
  for args in [(3,0,1),(3,1,0),(1,1,1)]:
   with self.assertRaises(ValueError):connected_coefficients(*args)
  with self.assertRaises(ValueError):old_Q_resolvent_beta2(4,1,6)

 def test_conservative_fusion_cutoff_gates(self):
  self.assertEqual(safe_spin_upper(2),4)
  self.assertEqual(safe_spin_upper(4),6)
  with self.assertRaises(ValueError):safe_spin_upper(-1)

 def test_numeric_adverse_omitted_sector_distinction(self):
  # The 1/704 high-spin Q correction is NOT an observable subtraction term.
  self.assertNotEqual(old_Q_resolvent_beta2(4)-old_Q_resolvent_beta2(3),
                      connected_coefficients(4)[2]-connected_coefficients(3)[2])

 def test_independent_finite_beta_remainder_and_sign_symmetry(self):
  # Small two-insertion surrogate: correct through beta², NOT an all-order SU2 cutoff.
  def value(n,beta,s=1):
   basis,index,H,W,faces=build(n)
   H=np.array(H,dtype=float)-float(beta)*np.array(W,dtype=float)
   O=np.array(faces[0],dtype=float)
   e,U=np.linalg.eigh(H)
   omega=U[:,0]
   v=O@omega-(omega@(O@omega))*omega
   return float(np.sum((U.T@v)**2/(e-e[0]+s)))
  for n in [3,4]:
   for beta in [.05,.025]:
    self.assertAlmostEqual(value(n,beta),value(n,-beta),places=12)
   target=float(connected_coefficients(n)[2])
   error1=abs((value(n,.05)-.25)/.05**2-target)
   error2=abs((value(n,.025)-.25)/.025**2-target)
   self.assertLess(error2,error1/3)

 def test_beta_evenness_on_two_insertion_electric_basis(self):
  # A center flip on each unique top edge reverses every W_i, and O=W1.
  for n in [3,4,5]:
   labels,_,H,W,faces=build(n)
   parity=np.array([1 if s[0] in ('vac','adjoint','pair_sing','pair_trip','pair_far') else -1 for s in labels])
   D=np.diag(parity)
   np.testing.assert_array_equal(D@np.array(H,dtype=float)@D,np.array(H,dtype=float))
   np.testing.assert_array_equal(D@np.array(W,dtype=float)@D,-np.array(W,dtype=float))
   np.testing.assert_array_equal(D@np.array(faces[0],dtype=float)@D,-np.array(faces[0],dtype=float))

if __name__=='__main__':unittest.main(verbosity=2)
