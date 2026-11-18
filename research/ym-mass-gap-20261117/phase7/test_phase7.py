"""Phase7 evidence gates: exact finite-cutoff independent diagnostics and graph algebra.
The mathematical full-Hilbert theorem is written separately and must not be
confused with the j<=1/2 projected rational matrix calculation.
"""
import unittest
from fractions import Fraction as F
from itertools import product
import numpy as np
from phase7_support import (even_multiindex,supports_local_cluster,compositions,
                            last_face_connected_terms,first_allowed_remote_order)
from phase7_rational_series import calc, matrices
from pathlib import Path
import sys
sys.path.insert(0,str(Path(__file__).resolve().parent.parent/'phase6'))
from phase6_closed import connected_coefficients,old_Q_resolvent_beta2

class Phase7Tests(unittest.TestCase):
    def test_center_flip_on_original_link_holonomies(self):
        # A test in original SU2 link variables, independent of the loop-bit basis.
        sys.path.insert(0,str(Path(__file__).resolve().parent.parent/'phase5'))
        from phase5_local import graph, trace_plaquette
        import numpy as np
        rng=np.random.default_rng(20261117)
        for n in (3,4):
            gg=graph(n)
            field=[]
            for unused in gg['edges']:
                q=rng.normal(size=4);q=q/np.linalg.norm(q)
                field.append(tuple(float(x) for x in q))
            facevals=[trace_plaquette(field,n,i) for i in range(n)]
            for i in range(n):
                edge=(f'T{i}',f'T{i+1}')
                k=gg['edges'].index(edge)
                altered=field[:]
                altered[k]=tuple(-x for x in field[k])
                newvals=[trace_plaquette(altered,n,j) for j in range(n)]
                for j in range(n):
                    self.assertAlmostEqual(newvals[j],-facevals[j] if i==j else facevals[j],places=12)

    def test_phase6_physical_beta2_original(self):
        for n in (2,3,4,5):
            self.assertEqual(connected_coefficients(n)[2],-F(6647,71280))
        self.assertEqual(old_Q_resolvent_beta2(4)-old_Q_resolvent_beta2(3), F(1,704))

    def test_link_spin_half_cutoff_different_from_untruncated(self):
        truncated=calc(4,2)[0][2]
        self.assertEqual(truncated,-F(589,3168))
        self.assertNotEqual(truncated,connected_coefficients(4)[2])
        self.assertEqual(connected_coefficients(4)[2]-truncated,F(1201,12960))

    def test_independent_center_parity_each_face(self):
        for n in (2,3,4):
            bits,e,w=matrices(n)
            for k in range(n):
                # Z_k multiplies state |bitstring> by (-1)^(bit_k)
                for i,(j,a) in enumerate(w[k]):
                    self.assertEqual((-1)**(bits[i][k]+bits[j][k]),-1)
                for other in range(n):
                    if k==other:continue
                    for i,(j,a) in enumerate(w[other]):
                        self.assertEqual((-1)**(bits[i][k]+bits[j][k]),1)

    def test_exact_parity_of_vacuum_centered_cutoff_response(self):
        for n in (3,4,5):
            g,_=calc(n,6)
            self.assertEqual([g[k] for k in (1,3,5)],[0,0,0])

    def test_graph_theorem_remote_order_exhaustive_support(self):
        for n in (2,3,4,5):
            d=first_allowed_remote_order(n)
            for k in range(d):
                self.assertEqual(last_face_connected_terms(n,k),(),(n,k))
            possible=last_face_connected_terms(n,d)
            self.assertTrue(possible)
            self.assertIn(tuple([0]+[2]*(n-1)),possible)

    def test_proof_target_four_plaquette_beta4(self):
        self.assertEqual(first_allowed_remote_order(4),6)
        self.assertEqual(last_face_connected_terms(4,4),())
        self.assertEqual(last_face_connected_terms(4,6),((0,2,2,2),))

    def test_connected_support_requires_all_intermediate_faces(self):
        self.assertTrue(supports_local_cluster((0,2,2,2)))
        self.assertFalse(supports_local_cluster((0,2,0,2)))
        self.assertFalse(supports_local_cluster((0,0,2,2)))
        self.assertFalse(supports_local_cluster((0,2,2,1)))
        self.assertTrue(even_multiindex((0,0,4,0)))

    def test_exact_rational_fourth_order_half_cutoff_confirmation(self):
        a,_=calc(3,4);b,_=calc(4,4)
        self.assertEqual(a[4],F(8133173,52690176))
        self.assertEqual(b[4],a[4])
        self.assertEqual(b[4]-a[4],0)

    def test_nondistant_beta4_can_change_in_cutoff_control(self):
        a,_=calc(2,4);b,_=calc(3,4)
        self.assertEqual(b[4]-a[4],F(314467,52690176))
        self.assertNotEqual(b[4]-a[4],0)

    def test_cutoff_sixth_order_can_reach_remote_face(self):
        a,_=calc(3,6);b,_=calc(4,6)
        self.assertEqual(b[6]-a[6],-F(41497429,42323383872))
        # NOTE: this is the j<=1/2 compression, NOT full SU2 coefficient.

    def test_inactive_appended_plaquette_factorizes_exactly_in_cutoff(self):
        for n in (3,4):
            v,_=calc(n,4,couplings=[1]*n)
            w,_=calc(n+1,4,couplings=[1]*n+[0])
            self.assertEqual(w,v)

    def test_disconnected_active_cluster_has_zero_effect_in_cutoff(self):
        a,_=calc(3,4,couplings=[1,0,1])
        b,_=calc(4,4,couplings=[1,0,1,1])
        c,_=calc(4,4,couplings=[1,0,0,0])
        self.assertEqual(a,b)
        self.assertEqual(b,c)

    def test_adversarial_broken_subtraction(self):
        a,_=calc(3,4,include_centering=False)
        b,_=calc(4,4,include_centering=False)
        self.assertEqual(a[2],b[2])  # uncentered is a different observable, but still factorizes
        self.assertNotEqual(a[2],calc(3,4)[0][2])
        a,_=calc(3,4,include_energy_shift=False)
        b,_=calc(4,4,include_energy_shift=False)
        self.assertNotEqual(a[2],b[2])

    def test_other_alpha_s_exact_cutoff_volume_difference(self):
        for alpha,s in [(F(1,2),F(2)),(F(2),F(1,3))]:
            a,_=calc(3,4,alpha=alpha,s=s)
            b,_=calc(4,4,alpha=alpha,s=s)
            self.assertEqual(a[4],b[4])

    def test_fail_closed(self):
        with self.assertRaises(ValueError):first_allowed_remote_order(1)
        with self.assertRaises(ValueError):list(compositions(0,2))
        with self.assertRaises(ValueError):calc(1,6,alpha=-1)
        with self.assertRaises(ValueError):calc(4,6,s=0)

if __name__=='__main__':unittest.main(verbosity=2)
