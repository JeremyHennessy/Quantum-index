import unittest
from fractions import Fraction as Q
from witness import certify


def moments(support, n, error="0"):
    return [(sum(w*x**j for w, x in support), error) for j in range(1, n+1)]


class WitnessTests(unittest.TestCase):
    support = [(Q("0.0001"), Q("0.9")), (Q("0.9999"), Q("0.25"))]

    def test_exact_control(self):
        data = moments(self.support, 8)
        base = certify("0.5", "0.9", 0, data)
        deep = certify("0.5", "0.9", 3, data)
        self.assertEqual(base.witness_lower, Q("-0.06245775"))
        self.assertEqual(deep.witness_lower, Q("0.140643000576"))
        self.assertEqual(deep.witness_lower, deep.witness_upper)
        self.assertFalse(base.falsifies_proposed_gap)
        self.assertTrue(deep.falsifies_proposed_gap)

    def test_certified_noise(self):
        fine = certify("0.5", "0.9", 3, moments(self.support, 8, "1e-7"))
        coarse = certify("0.5", "0.9", 3, moments(self.support, 8, "1e-6"))
        self.assertTrue(fine.falsifies_proposed_gap)
        self.assertFalse(coarse.falsifies_proposed_gap)
        self.assertEqual(fine.witness_upper - fine.witness_lower, 2*Q("1e-7")*Q("352837.5"))

    def test_negative_witness_does_not_exclude_tail(self):
        c = certify("1/2", "9/10", 0, moments(self.support, 2))
        self.assertLess(c.witness_upper, 0)
        self.assertGreaterEqual(c.tail_upper, self.support[0][0])
        self.assertLess(c.tail_upper, 1)

    def test_adversarial_distributions(self):
        for x in (Q(0), Q(1,4), Q(1,2), Q(3,4), Q(1)):
            for y in (Q(1,9), Q(5,9), Q(8,9)):
                atoms = [(Q(1,3), x), (Q(2,3), y)]
                for k in range(5):
                    c = certify("1/2", "2/3", k, moments(atoms, 2*k+2, "1e-8"))
                    actual = sum(w for w, z in atoms if z >= Q(2,3))
                    self.assertGreaterEqual(c.tail_upper, actual)
                    if all(z <= Q(1,2) for w, z in atoms):
                        self.assertFalse(c.falsifies_proposed_gap)

    def test_reject_bad_input(self):
        for args in [(0.5, "0.9", 0, []), ("0.5", "0.4", 0, []),
                     ("0.5", "0.9", 3, []),
                     ("0.5", "0.9", 0, [(0,-1),(0,0)]),
                     ("0.5", "0.9", 0, [(3,0),(0,0)])]:
            with self.assertRaises((TypeError, ValueError)):
                certify(*args)


if __name__ == "__main__":
    unittest.main()
