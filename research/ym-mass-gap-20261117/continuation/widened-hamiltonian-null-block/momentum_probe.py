"""Exact SU(2) three-loop probe checks with local cubic padding."""
from collections import defaultdict
from fractions import Fraction as Q
from itertools import product

from second_order import spectral_gram
from first_order import B, E
from dressing import insertion_weights

COEFFS = ((39, 1), (114, 1), (119, -1))


def label(mask, dx=0, dy=0):
    (loop,) = B[mask][0]
    return frozenset(tuple((y+dy, x+dx) for y, x in E[i]) for i, _ in loop)


def face(x, y):
    p = ((y,x), (y+1,x), (y+1,x+1), (y,x+1))
    return frozenset(tuple(sorted(e)) for e in zip(p, p[1:]+p[:1]))


def verify():
    for mask, translated in ((39,78), (114,228), (119,238)):
        assert len(B[mask]) == len(B[translated]) == 1
        assert label(mask, 1) == label(translated)
    assert all(len(label(mask)) == 10 for mask, _ in COEFFS)
    pairs = []
    for dx, dy in product(range(-4,5), range(-3,4)):
        pool = [face(x,y) for x,y in product(range(min(0,dx)-1,max(0,dx)+5),
                                             range(min(0,dy)-1,max(0,dy)+3))]
        pool_set = set(pool)
        for (i,_),(j,_) in product(COEFFS, repeat=2):
            a, c = label(i), label(j,dx,dy)
            assert (a == c) == (i == j and dx == dy == 0)
            if a == c:
                continue
            delta = a ^ c
            seen = set()
            for p in pool:
                q = p ^ delta
                if q in pool_set and q != p:
                    assert not p & q
                    seen.add(frozenset((p,q)))
            if seen:
                assert len(seen) == 1
                pairs.append((i,j,dx,dy))
    assert len(pairs) == 6, pairs

    b = [(m, B[m][0], c) for m,c in COEFFS]
    for dims, offset in [((6,4,2),(1,1,1)),((8,6,3),(2,2,3))]:
        ws, count = insertion_weights(spectral_gram, b, dims, offset)
        assert ws == {12:Q(3,8),18:Q(43,8),21:Q(count,4)*3-Q(25),
                      22:Q(129,8),23:Q(3,2),24:Q(9,8)}
        assert sum(v*(Q(1,e-15)-Q(1,6))**2 for e,v in ws.items()) == Q(14579,56448)
        assert sum(v*Q(1,15-e) for e,v in ws.items())+Q(count,8) == Q(-13,112)
    print("three loops: exact translate labels, six disconnected parity cases, "
          "no resonant weight, dressing 14579/56448, quadratic form -13/112")


if __name__ == "__main__":
    verify()
