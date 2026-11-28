"""Exact rational checks of the fixed-test energy and strict Jensen loss."""
from fractions import Fraction as F

# K acts in the basis (P,d) with columns (24,2), (6,20).
p,d=F(-1,78),F(2,39)
assert (24*p+6*d,2*p+20*d)==(0,1)
nP,nD=F(1,16),F(3,16)
assert nP*6==nD*2
assert d*nD==F(1,104)
loss=d*nD/9
assert loss==F(1,936)
# Leading optimizer h/t = P/234 - 2d/117.
hP,hD=-p/3,-d/3
assert (hP,hD)==(F(1,234),-F(2,117))
# T P=-2 y v + (x p_axis)/2; T d=-(y v)/2 + 2 x p_axis.
assert -2*hP-hD/2==0
fluct=hP/2+2*hD
assert fluct==-F(5,156)
assert fluct**2*F(1,16)==F(25,389376)
# Integral I/pi >= (5/16)/(7a/8+b/8) by convexity at sin^6 weighting.
a,b=F(63,4),F(360,47)
jensen_lower=F(5,2)/(7*a+b)/18
assert jensen_lower>loss
print("true loss:",loss,"Jensen-loss lower bound:",jensen_lower,
      "horizontal fluctuation:",fluct**2/F(16))
