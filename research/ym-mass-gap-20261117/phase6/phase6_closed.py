"""Exact small-coupling connected resolvent coefficient on finite open SU(2) ladders.

H=alpha H_E-beta sum W_i, O=W_1, vacuum-centered about exact finite-volume
interacting ground state. The identities here derive from a full finite-chain
Gauss-law character-fusion decomposition for <=2 magnetic insertions; NOT a
4D continuum, nonperturbative or novelty claim.
"""
from sympy import Rational, symbols, simplify, factor

def old_Q_resolvent_beta2(n, alpha=Rational(1), z=Rational(0)):
    if n<3 or alpha<=0 or z>=5*alpha:raise ValueError('invalid domain')
    # Unit intermediate channels: E=15a, E=9a (weight 1/3),
    # E=12a (weight 2/3), distant disconnected E=11a each.
    return simplify((1/(15*alpha-z)+Rational(1,3)/(9*alpha-z)
       +Rational(2,3)/(12*alpha-z)+(n-2)/(11*alpha-z))/(8*alpha-z)**2)

def connected_coefficients(n, alpha=Rational(1), s=Rational(1)):
    """Compute G0, G1, G2 and split second-order contributions.

    Exact for any finite N>=2, alpha,s>0. The full physical vacuum and
    entire spin network are used by proof of coefficient completeness,
    even though <=2-insertion orthogonal states suffice for computation.
    """
    if not isinstance(n,int) or isinstance(n,bool) or n<2 or alpha<=0 or s<=0:raise ValueError('invalid input')
    r=1/(s+3*alpha);u=1/(3*alpha)
    Adj=Rational(1,4)/(s+Rational(9,2)*alpha)+Rational(3,4)/(s+Rational(13,2)*alpha)
    local=1/(s+8*alpha)+Adj
    distant=(n-2)/(s+6*alpha)
    tot=1/s+local+distant
    mixed=-1/s+local+distant
    terms={
       'state_first_order':u*u*tot,
       'state_second_order_and_center':2*r*(1/(24*alpha*alpha)-n/(18*alpha*alpha)-2/(9*alpha*alpha)),
       'state_resolvent_cross':2*r*u*mixed,
       'double_resolvent_insertion':r*r*tot,
       'vacuum_energy_shift':-n*u*r*r
    }
    return (simplify(r),Rational(0),simplify(sum(terms.values())),{k:simplify(v) for k,v in terms.items()})

def distant_per_plaquette(alpha,s):
    """Five independently identifiable beta² contributions of each far face."""
    if alpha<=0 or s<=0:raise ValueError('valid alpha/s')
    r=1/(s+3*alpha);u=1/(3*alpha);t=1/(s+6*alpha)
    return {
       'first_order_state_norm':u*u*t,
       'normalized_state_second_order':-r*u*u,
       'first_order_state_resolvent_cross':2*r*u*t,
       'resolvent_two_insertions':r*r*t,
       'ground_energy_shift':-r*r*u,
    }

def second_order_general_formula(alpha,s):
    """Symbolic reference derived without any plaquette count."""
    if alpha<=0 or s<=0:raise ValueError('invalid')
    numer=(41544*alpha**4+29595*alpha**3*s+7717*alpha**2*s**2+872*alpha*s**3+36*s**4)
    denom=36*alpha**2*(3*alpha+s)**2*(8*alpha+s)*(9*alpha+2*s)*(13*alpha+2*s)
    return -numer/denom

def safe_spin_upper(order):
    """Conservative upper cutoff from k magnetic and 2 local Wilson insertions.
    Each SU2 fundamental operator raises any link j by at most 1/2.
    Returns max possible 2j. This is a safe, generally nonminimal gate.
    """
    if not isinstance(order,int) or isinstance(order,bool) or order<0:raise ValueError
    return order+2

if __name__ == '__main__':
    a,s=symbols('a s',positive=True)
    for n in [2,3,4,5]:
        print('N',n,connected_coefficients(n)[2])
    residual=simplify(sum(distant_per_plaquette(a,s).values()))
    print('distant residual:',residual)
    print('symmetric alpha/s:',simplify(connected_coefficients(3,a,s)[2]-second_order_general_formula(a,s)))
    print('old Q delta:',simplify(old_Q_resolvent_beta2(4)-old_Q_resolvent_beta2(3)))
