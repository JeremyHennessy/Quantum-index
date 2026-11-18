"""Combinatorial SUPPORT audit for finite SU(2) plaquette-ladder perturbation.

The operator-theoretic proof (gauge-invariant disconnected cluster factorization
and independent SU2 center flips) lives in PHASE7_RESEARCH_REPORT.md.
This code checks the arithmetic implication, NOT the continuum physics.
"""
from itertools import product


def even_multiindex(m):
    """Independent center symmetry on each unique top horizontal edge."""
    return all(isinstance(x,int) and x>=0 and x%2==0 for x in m)


def supports_local_cluster(m):
    """On a path, support of perturbations must connect to face 1."""
    if not even_multiindex(m):return False
    used=[i for i,x in enumerate(m) if x]
    if not used:return True
    return all(m[i]>0 for i in range(1,max(used)+1))


def compositions(n,degree):
    if not isinstance(n,int) or n<1 or not isinstance(degree,int) or degree<0:
        raise ValueError('invalid degree')
    for values in product(range(degree+1),repeat=n):
        if sum(values)==degree:yield values


def last_face_connected_terms(n,degree):
    """Potentially NONZERO Taylor coefficients involving last face.
    This is a necessary support condition, not proof they are nonzero.
    """
    if n<2:raise ValueError('require at least 2 faces')
    return tuple(m for m in compositions(n,degree)
                 if m[-1]>0 and supports_local_cluster(m))


def first_allowed_remote_order(n):
    if not isinstance(n,int) or n<2:raise ValueError('n>=2')
    return 2*(n-1)

if __name__=='__main__':
    for n in range(2,7):
        print(n,first_allowed_remote_order(n),last_face_connected_terms(n,2*(n-1))[:3])
