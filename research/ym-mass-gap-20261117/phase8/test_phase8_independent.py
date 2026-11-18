"""Independent Phase 8 original-link Gauss enumeration and fusion checks.

This enumerator does NOT call the Phase 8 states() generator or Wigner-3j
tensors to establish physical-state completeness. Comparisons to those
implementations occur only after a complete original-link enumeration.
"""
import unittest
from fractions import Fraction as F
from itertools import product

def enumerate_original_link_spin_networks():
    top = [(f'T{i}', f'T{i+1}') for i in range(4)]
    bottom = [(f'B{i}', f'B{i+1}') for i in range(4)]
    vertical = [(f'T{i}', f'B{i}') for i in range(5)]
    edges = top + bottom + vertical
    vertices = [f'T{i}' for i in range(5)] + [f'B{i}' for i in range(5)]
    incident = {v: tuple(k for k,(x,y) in enumerate(edges) if v in (x,y))
                for v in vertices}
    allowed = set()
    # Upper bounds are derived from two source W1 appearances, two W2,
    # two W3 and two W4 magnetic appearances. Outer spins <=1/2,
    # interior shared-vertical spins <=1. These are twice-spin labels.
    for horiz in product((0,1), repeat=8):
        for vert in product((0,1), (0,1,2), (0,1,2), (0,1,2), (0,1)):
            spins = tuple(horiz + vert)
            def singlet(v):
                abc = [spins[k] for k in incident[v]]
                if len(abc) == 2:
                    return abc[0] == abc[1]
                a,b,c = abc
                return abs(a-b) <= c <= a+b and (a+b+c)%2 == 0
            if all(singlet(v) for v in vertices):
                allowed.add(spins)
    return allowed

def independent_electric_energy(spins):
    return sum((F(n*(n+2),4) for n in spins),F())

class IndependentPhase8Tests(unittest.TestCase):
    def test_original_13_link_gauss_completeness(self):
        # No reliance on Phase 8's hardcoded representation-state generator.
        valid=enumerate_original_link_spin_networks()
        self.assertEqual(len(valid),34)
        from phase8_probe import states,reps,e
        built={reps(x) for x in states()}
        self.assertEqual(valid,built)
        self.assertEqual({x:independent_electric_energy(x) for x in valid},
                         {reps(s):e(s) for s in states()})

    def test_two_face_su2_channel_probabilities(self):
        # Independent character fusion 1/2 tensor 1/2 = 0 plus 1.
        # The two squared recoupling amplitudes are 1/4 and 3/4.
        from phase8_two_methods import BASIS, METRIC, exact_matrices
        matrices,_=exact_matrices()
        source=( (1,0,0,0), (1,0,0) )
        s=BASIS.index(source)
        weights={}
        for shared,expected in [((0,1,0),F(1,4)), ((2,1,0),F(3,4))]:
            dest=BASIS.index(((1,1,0,0),shared))
            a=matrices[1][s].get(dest,F())
            probability=a*a*F(METRIC[dest],METRIC[s])
            self.assertEqual(probability,expected)
            weights[shared[0]]=probability
        self.assertEqual(sum(weights.values()),F(1))

if __name__=='__main__':
    unittest.main(verbosity=2)
