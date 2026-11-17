import unittest
from fractions import Fraction
from itertools import product
import numpy as np
import phase5_local as m

class Phase5(unittest.TestCase):
    def test_01_graph_geometry(self):
        for n in (3,4):
            G=m.graph(n)
            self.assertEqual(tuple(map(len,(G['vertices'],G['edges'],G['faces']))),(2*(n+1),3*n+1,n))
            self.assertEqual(len(set(G['edges'])),len(G['edges']))
            self.assertTrue(all(frozenset((face[k],face[(k+1)%4])) in [frozenset(e) for e in G['edges']] for face in G['faces'] for k in range(4)))

    def test_02_complete_gauss_cutoffs(self):
        self.assertEqual([len(m.states(p,n)) for p,n in ((3,1),(3,2),(4,1),(4,2))],[8,49,16,233])
        for n in (3,4):
            S=m.states(n,1)
            self.assertEqual(set(S),{m.bits_label(b) for b in product((0,1),repeat=n)})
            self.assertEqual(len(S),len(set(S)))
        self.assertTrue(all(m.triangle(1,1,2) for _ in range(1)))
        self.assertFalse(m.triangle(1,1,1))

    def test_03_electric_spectrum_and_independent_bit_formula(self):
        for n in (3,4):
            for b in product((0,1),repeat=n):
                self.assertEqual(m.electric(n,m.bits_label(b)),m.bits_electric(b))
        energies=[m.electric(4,s) for s in m.states(4,2)]
        self.assertEqual(len(energies),233)
        self.assertEqual(min(energies),0)
        self.assertEqual(m.electric(4,m.bits_label((1,0,0,0))),3)
        self.assertEqual(m.electric(4,m.bits_label((1,1,1,1))),Fraction(15,2))

    def test_04_two_independent_full_halfspin_Hamiltonians(self):
        for n in (3,4):
            states,haar=m.halfspin_haar(n)
            bits,clebsch=m.halfspin_character_rule(n)
            self.assertEqual(states,bits)
            self.assertEqual(haar,clebsch)
            self.assertEqual(len(haar),n)
            for W in haar:
                A=np.array([[float(x) for x in row] for row in W])
                np.testing.assert_array_equal(A,A.T)

    def test_05_independent_3plaquette_previous_control(self):
        bits,w=m.halfspin_haar(3)
        i=bits.index((1,0,0))
        j=bits.index((1,1,0))
        self.assertEqual(w[1][i][j],Fraction(1,2))
        self.assertEqual(w[0][bits.index((0,0,0))][i],1)

    def test_06_far_plaquette_acts_inside_retained_linkspin(self):
        bits,w=m.halfspin_haar(4)
        i=bits.index((1,0,0,0))
        for k in (2,3):
            target=tuple(int(x==0 or x==k) for x in (0,1,2,3))
            self.assertEqual(w[k][i][bits.index(target)],Fraction(1))

    def test_07_local_one_step_tail_is_exactly_volume_independent(self):
        three=m.local_one_step_tail(n=3)
        four=m.local_one_step_tail(n=4)
        self.assertEqual(three,four)
        self.assertEqual(three['leakage_squared'],Fraction(7,4))
        self.assertEqual(three['weighted_bare'],Fraction(25,416))
        self.assertEqual(three['high_energies'],(Fraction(8),Fraction(13,2)))

    def test_08_adverse_energy_floor_and_z_rejection(self):
        with self.assertRaises(ValueError):m.local_one_step_tail(alpha=0)
        with self.assertRaises(ValueError):m.local_one_step_tail(z=9)
        with self.assertRaises(ValueError):m.disconnected_second_order(4,z=11)
        with self.assertRaises(ValueError):m.far_extra_exact(z=11)

    def test_09_exact_unsubtracted_local_resolvent_second_order_changes_with_volume(self):
        a=m.disconnected_second_order(3)
        b=m.disconnected_second_order(4)
        self.assertEqual(a['R0'],Fraction(1,8))
        self.assertEqual(b['R0'],Fraction(1,8))
        self.assertEqual(a['R1'],0)
        self.assertEqual(b['R1'],0)
        self.assertEqual(b['R2']-a['R2'],Fraction(1,704))
        self.assertEqual(b['R2']-a['R2'],m.far_extra_exact())

    def test_11_su2_wigner_recoupling_cross_checks_second_order_weights(self):
        from sympy import Rational, sqrt, simplify
        from sympy.physics.wigner import wigner_6j
        # Right-face fundamental Wilson action on a left spin-1 loop.
        # Exchange left/right labels relative to the standard 2-plaquette 6j.
        amp=[]
        for cp in (1,3):
            six=wigner_6j(Rational(0),Rational(1),Rational(1),Rational(cp,2),Rational(1,2),Rational(1,2))
            a=simplify(sqrt(1*2*3*(cp+1))*six**2)
            amp.append(simplify(a*a))
        self.assertEqual(amp,[Fraction(1,3),Fraction(2,3)])

    def test_12_quartic_haar_moment_requires_24_point_rule(self):
        # chi_(spin 1)(G) = chi_fund(G)^2 - 1; normalized Haar squared norm is 1.
        a=m.haar24();p=m.axis_quaternions()
        avg=lambda arr:sum(((2*q[0])**2-1)**2 for q in arr)/len(arr)
        self.assertEqual(avg(a),1)
        self.assertEqual(avg(p),3)  # eight axes are invalid for adjoint quadratic norms
        self.assertEqual(sum((2*q[0])**2 for q in a)/len(a),1)

    def test_14_each_additional_distant_face_contributes_identical_disconnected_term(self):
        # n=5 is a separate analytic control; not a constructed high-cutoff Hamiltonian.
        r3=m.disconnected_second_order(3)['R2']
        r4=m.disconnected_second_order(4)['R2']
        r5=m.disconnected_second_order(5)['R2']
        self.assertEqual(r4-r3,Fraction(1,704))
        self.assertEqual(r5-r4,Fraction(1,704))
        self.assertEqual(m.local_one_step_tail(n=5)['weighted_bare'],Fraction(25,416))

    def test_15_numerical_low_spin_gaps_not_promoted_to_spectral_proofs(self):
        # Illustrative finite-projection eigenvalues; numerical cross-check only.
        for n,reference in ((3,3.158210687471031),(4,3.157513951213358)):
            basis,W=m.halfspin_character_rule(n)
            A=sum(np.array([[float(x) for x in row] for row in wi]) for wi in W)
            h=np.diag([float(m.bits_electric(b)) for b in basis])-0.5*A
            eig=np.linalg.eigvalsh(h)
            self.assertAlmostEqual(float(eig[1]-eig[0]),reference,places=10)

    def test_13_all_four_original_plaquettes_respect_vertex_gauge_symmetry(self):
        rng=np.random.default_rng(1729)
        n=4;g=m.graph(n)
        def unit():
            q=rng.normal(size=4);return tuple((q/np.linalg.norm(q)).tolist())
        f=tuple(unit() for _ in g['edges']);local={v:unit() for v in g['vertices']}
        ft=m.transform_links(f,local,n)
        for i in range(n):
            self.assertAlmostEqual(m.trace_plaquette(f,n,i),m.trace_plaquette(ft,n,i),places=11)

    def test_10_resolvent_admissible_only_in_verified_neumann_domain(self):
        self.assertTrue(m.admissible_resolvent_beta(4,1,0,Fraction(1,10)))
        self.assertFalse(m.admissible_resolvent_beta(4,1,0,1))
        self.assertFalse(m.admissible_resolvent_beta(4,Fraction(1,100),0,1))
        self.assertTrue(m.admissible_resolvent_beta(3,1,0,Fraction(1,10)))

if __name__ == '__main__': unittest.main(verbosity=2)
