"""An edge-disjoint control for the exact conditioned inverse-score coefficient."""
from fractions import Fraction as F
from itertools import product
import exact_plaquette_mixed_gram as q

def metric(which):
    return (F(4), F(0)) if which == 'E' else (F(3), F(1, 2))

def score(p):
    return q.plus(q.vf(p, 0, 'l', 1), q.vf(p, 4, 'r', 1))

def main():
    q.metric = metric
    q.inverse_plan.cache_clear()
    a, b = (1, 0), (0, 1)
    w1, w2 = q.var(0), q.var(4)
    # Actual factorized vacuum, with dimensionless magnetic couplings.
    # Single-group density: 1+t*w/6+t²*7*(w²-1/4)/576+O(t³).
    # Verify the normalized ground-state second coefficient directly.
    rho = {(0, 0): q.ONE}
    for k, w in ((a, w1), (b, w2)):
        w2c = q.plus(q.mul(w, w), q.scale(q.ONE, -F(1, 4)))
        g2 = q.plus(q.scale(w2c, F(1,384)), q.scale(q.ONE, -F(1,1152)))
        assert q.scale(q.delta(g2,'E'),-1) == q.scale(w2c,F(1,12))
        assert 2*q.integ(g2) + q.inn(q.scale(w,F(1,12)),q.scale(w,F(1,12))) == 0
        rho[k] = q.scale(w, F(1, 6))
        rho[(2*k[0],2*k[1])] = q.plus(q.scale(g2, 2), q.scale(q.mul(w,w),F(1,144)))
    assert rho[(2,0)] == q.scale(q.plus(q.mul(w1,w1),q.scale(q.ONE,-F(1,4))),F(7,576))
    for j,k in ((1,1),(2,1),(1,2)):
        rho[(j,k)] = q.mul(rho[(j,0)],rho[(0,k)])
    assert all(not q.integ(p) for idx,p in rho.items() if idx != (0,0))
    bs = {k:score(v) for k,v in rho.items()}
    u = {k:q.pinv(bs[k],k,'V') for k in (a,b)}
    assert all(q.inn(bs[k],u[k])/2 == F(1,3024) for k in (a,b))
    def apply(r,x):
        return q.scale(q.plus(q.mul(r,q.delta(x,'V')),q.carré(r,x,'V')),-1)
    rs={k:q.plus(bs[k],*(q.scale(apply(rho[q.sub(k,i)],u[i]),-1)
        for i in (a,b) if q.sub(k,i) in rho)) for k in ((2,0),(0,2),(1,1))}
    rsol={k:q.pinv(v,k,'V') for k,v in rs.items()}
    k=(2,2)
    first=sum(q.inn(v,rsol[q.sub(k,j)]) for j,v in rs.items())
    second=2*sum(q.inn(u[j],bs[q.sub(k,j)]) for j in (a,b))
    third=-sum(q.integ(q.mul(rho[q.sub(q.sub(k,j),i)],q.carré(u[j],u[i],'V')))
               for j,i in product((a,b),repeat=2))
    assert (first,second,third) == (F(1,16765056),0,F(1,2286144))
    assert (first+second+third)/2 == F(25,100590336)
    assert F(473147,296723202048)-(first+second+third)/2 == F(627631,466279317504)
    print('Edge-disjoint control and shared-edge minus control verified exactly.')

if __name__ == '__main__':
    main()
