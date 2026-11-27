"""Exact scalar and spectral inputs to the direct-probe interval proof."""
from fractions import Fraction as Q

def verify_interval(nonzero_slopes, odd_curvatures, k, loop_count, norm_sq):
    g=Q(1,10**12)
    band_gap=Q(1,2)
    V=8
    slope_gap=Q(1,100)
    K=256
    delta=Q(23,8400)
    r=delta/4
    err=Q(1,75000)
    assert loop_count==6 and norm_sq==6 and k==Q(-73,336)
    assert nonzero_slopes.eval(-slope_gap) and nonzero_slopes.eval(slope_gap)
    assert nonzero_slopes.count_roots(-slope_gap,slope_gap)==0
    assert odd_curvatures.eval(k-delta) and odd_curvatures.eval(k+delta)
    assert odd_curvatures.count_roots(k-delta,k+delta)==0
    assert abs(k)+r<1

    # First Schur complement: norm (e-QHQ)^-1 <= 4 throughout |s|<=1.
    assert band_gap-V*g-g*g>Q(1,4)
    assert 4*V*V==K
    K_change=8*V*V*(V*g+g*g)
    # Second Schur: inverse on the nonzero-slope free band <= 200.
    assert slope_gap-g*(K+1)>Q(1,200)
    assert K_change+200*K*K*g<err<r
    leak=err/(delta-r)
    assert leak<Q(7,1000)
    M_tail=200*K*g
    Q_tail=4*V*g
    # Vacuum resolvent and total normalized vector distance:
    assert band_gap-2*V*g>Q(1,4)
    vac_tail=4*V*g
    # The amplitude lower bound uses sqrt(6) > 12/5.
    assert Q(12,5)**2<norm_sq
    error=2*loop_count*2*(leak+M_tail+Q_tail+vac_tail)
    assert error<Q(2,5)
    print("direct probe: unique sector branch and amplitude >2 for 0<|g|<=10^-12")
