"""Phase 8 reproducible exact-head tests of finite-order full SU(2) result.

These checks are evidence for the carefully stated restricted mathematical
calculation, NOT formal proof or external peer review of the Clay problem.
"""
import unittest
from fractions import Fraction as F
from pathlib import Path
import sys
import numpy as np

parent=Path(__file__).resolve().parent.parent
for p in ('phase5','phase6','phase7'):
  sys.path.insert(0,str(parent/p))
from phase5_local import graph,trace_plaquette
from phase6_closed import connected_coefficients,old_Q_resolvent_beta2
from phase7_rational_series import calc as projected_calc
from phase8_probe import states,reps,e,matrices,VERTICES,EDGES
from phase8_two_methods import (
 exact_matrices,grade_calculate,fixed_point_calculate,
 BASIS,METRIC,ELEC,MAX,ORDER,COUNTS,Z,F as FF
)
from phase8_gauge_controls import tests as gauge_check
from phase8_one_face_control import compute as one_face

FULL=F(1504856360495713,3397652693362287360000)
PROJECTION=-F(41497429,42323383872)

class Phase8Tests(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  cls.CG,cls.HAAR=exact_matrices()
  cls.G,cls.energy,cls.norm,cls.state=grade_calculate(cls.CG)

 def test_exact_complete_reachable_basis(self):
  self.assertEqual(len(BASIS),34)
  self.assertEqual(len(set(BASIS)),34)
  self.assertEqual(ELEC[0],0)
  self.assertEqual(sum(v==0 for v in ELEC),1)
  self.assertTrue(all(x>=0 for x in ELEC))
  for st in BASIS:
   r=reps(st)
   self.assertEqual(len(r),13)
   self.assertLessEqual(max(r),2)
   self.assertTrue(all(r[k]<=1 for k in range(8)))
   self.assertTrue(all(r[k]<=1 for k in (8,12)))
   for vertex in VERTICES:
    spin=[r[i] for i,(a,b) in enumerate(EDGES) if vertex in(a,b)]
    if len(spin)==2:
     self.assertEqual(spin[0],spin[1])
    else:
     self.assertLessEqual(abs(spin[0]-spin[1]),spin[2])
     self.assertLessEqual(spin[2],spin[0]+spin[1])
     self.assertEqual(sum(spin)%2,0)

 def test_all_exact_magnetic_matrix_elements(self):
  self.assertEqual(self.CG,self.HAAR)
  self.assertEqual(len(self.CG),4)
  for M in self.CG:
   self.assertEqual(len(M),34)
   for j,col in enumerate(M):
    for i,v in col.items():
     self.assertEqual(v*METRIC[i],M[i][j]*METRIC[j])

 def test_independent_full_link_numeric_gram_and_haar(self):
  S,E,W,Gram=matrices()
  self.assertEqual(S,BASIS)
  self.assertLess(np.max(abs(Gram-np.eye(34))),1e-12)
  for k in range(4):
   self.assertLess(np.max(abs(W[k]-W[k].conj().T)),1e-12)
  self.assertEqual(tuple(F(str(x)) for x in E[:1]),(F(0),))

 def test_center_parity_in_complete_network_matrices(self):
  # Operator parity on original-link representations, not a projected spin-bit model.
  for k,M in enumerate(self.CG):
   for j,col in enumerate(M):
    for i,entry in col.items():
     self.assertNotEqual(entry,0)
     self.assertNotEqual(BASIS[j][0][k],BASIS[i][0][k])
     for face in range(4):
      if face!=k:self.assertEqual(BASIS[j][0][face],BASIS[i][0][face])

 def test_center_flip_original_SU2_link_variables(self):
  rng=np.random.default_rng(20261118)
  field=[q/np.linalg.norm(q) for q in (rng.normal(size=4) for _ in range(13))]
  original=[trace_plaquette(field,4,k) for k in range(4)]
  gg=graph(4)
  for face in range(4):
   pos=gg['edges'].index((f'T{face}',f'T{face+1}'))
   altered=list(field)
   altered[pos]=-altered[pos]
   for k in range(4):
    expected=-original[k] if k==face else original[k]
    self.assertAlmostEqual(trace_plaquette(altered,4,k),expected,places=12)

 def test_full_link_independent_gauge_covariance(self):
  self.assertLess(gauge_check(),1e-12)

 def test_all_27_mixed_multidegrees_agree_independently(self):
  for alpha,s in [(F(1),F(1)),(F(2),F(1,3)),(F(1,2),F(2))]:
   G,E,Norm,V=grade_calculate(self.CG,alpha,s)
   g,e,n=fixed_point_calculate(self.HAAR,alpha,s)
   for p in ORDER:
    self.assertEqual(g.get(p,F()),G[p],(alpha,s,p))
   self.assertEqual(E.get(MAX,F()),e.get(MAX,F()))
   self.assertEqual(Norm[MAX],n.get(MAX,F()))

 def test_positive_nonzero_full_sixth_order(self):
  self.assertEqual(self.G[MAX],FULL)
  self.assertGreater(self.G[MAX],0)

 def test_other_positive_parameter_exact_coefficients(self):
  expected={
   (F(2),F(1,3)):F(2475748752150717325664201,362261816606398699499325014016000),
   (F(1,2),F(2)):F(119576182908291217,11007438334826799001500)}
  for (alpha,s),fraction in expected.items():
   self.assertEqual(grade_calculate(self.CG,alpha,s)[0][MAX],fraction)

 def test_connected_support_for_last_face(self):
  self.assertEqual(self.G[Z],F(1,4))
  # b4 support requires positive powers of BOTH intermediate faces b2 and b3.
  for p in ORDER:
   if p[2] and (not p[0] or not p[1]):
    self.assertEqual(self.G[p],0,p)
   if any(c%2 for c in p):
    self.assertEqual(self.G[p],0,p)

 def test_no_remote_difference_through_order_four(self):
  for p in ORDER:
   if sum(p)<=4 and p[2]:
    self.assertEqual(self.G[p],0,p)

 def test_exact_energy_and_normalization_receipts(self):
  for i in ((2,0,0),(0,2,0),(0,0,2)):
   self.assertEqual(self.energy[i],-F(1,3))
   self.assertEqual(self.norm[i],F(1,9))
  self.assertEqual(self.energy[(2,2,0)],-F(2,1053))
  self.assertEqual(self.energy[(0,2,2)],-F(2,1053))
  self.assertEqual(self.energy[MAX],-F(4909,118272960))
  self.assertEqual(self.norm[MAX],F(1082517997,553517452800))

 def test_projected_halfspin_matrices_match_independent_old_rule(self):
  ids={s[0]:i for i,s in enumerate(BASIS) if 2 not in s[1]}
  self.assertEqual(len(ids),16)
  for face in range(4):
   for bits,i in ids.items():
    flip=tuple((1-x if k==face else x) for k,x in enumerate(bits))
    j=ids[flip]
    near=int(face>0 and bits[face-1]==1)+int(face<3 and bits[face+1]==1)
    self.assertEqual(self.CG[face][i].get(j,F()),F(1,2**near))

 def test_projected_sixth_order_is_not_full(self):
  a,_=projected_calc(3,6)
  b,_=projected_calc(4,6)
  self.assertEqual(b[6]-a[6],PROJECTION)
  self.assertNotEqual(PROJECTION,FULL)
  self.assertLess(PROJECTION,0)

 def test_second_order_full_vs_projected_and_old_physical(self):
  self.assertEqual(one_face(),[F(1,4),F(0),-F(61,648)])
  self.assertEqual(self.G[(2,0,0)],F(7,7920))
  self.assertEqual(-F(61,648)+self.G[(2,0,0)],-F(6647,71280))
  self.assertEqual(connected_coefficients(3)[2],-F(6647,71280))
  self.assertEqual(projected_calc(4,2)[0][2],-F(589,3168))

 def test_phase5_different_unsubtracted_resolvent_negative_control(self):
  self.assertEqual(old_Q_resolvent_beta2(4)-old_Q_resolvent_beta2(3),F(1,704))

 def test_vacuum_shift_and_normalization_are_essential(self):
  without_norm=grade_calculate(self.CG,with_norm=False)[0][MAX]
  without_shift=grade_calculate(self.CG,with_shift=False)[0][MAX]
  self.assertEqual(without_norm,F(856762413715348319,1698826346681143680000))
  self.assertEqual(without_shift,F(4052284029666349297,4152686625220573440000))
  self.assertNotEqual(without_norm,FULL)
  self.assertNotEqual(without_shift,FULL)

 def test_adverse_domain_inputs_fail(self):
  for alpha,s in [(F(0),F(1)),(F(1),F(0)),(F(-1),F(2))]:
   with self.assertRaises(AssertionError):
    grade_calculate(self.CG,alpha,s)

if __name__=='__main__':unittest.main(verbosity=2)
