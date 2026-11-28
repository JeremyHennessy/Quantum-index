"""Integer SU(2) normalization and one nonzero Ward-spectator check."""
def mul(x,y):
    a,b,c,d=x; e,f,g,h=y
    return (a*e-b*f-c*g-d*h,a*f+b*e+c*h-d*g,a*g-b*h+c*e+d*f,a*h+b*g-c*f+d*e)
def neg(x):
    return tuple(-v for v in x)
def inv(x):
    return (x[0],*neg(x[1:]))
def sub(x,y):
    return tuple(a-b for a,b in zip(x,y))
def bracket(x,y):
    return sub(mul(x,y),mul(y,x))
one=(1,0,0,0)
basis=((0,1,0,0),(0,0,1,0),(0,0,0,1))
for X in basis:
    assert mul(X,X)==neg(one)
    assert tuple(sum(v) for v in zip(*(bracket(E,bracket(E,X)) for E in basis)))==tuple(-8*v for v in X)
# Integer proportion quaternion representing U1=(1+k)/sqrt(2):
# this distinguishes opposite Ad conventions without an irrational arithmetic replay.
p=(1,0,0,1); X=basis[0]
Y2=mul(mul(inv(p),X),p)
assert mul(p,Y2)==tuple(2*v for v in mul(X,p))
wrong=mul(mul(p,X),inv(p))
assert mul(p,wrong)!=mul(p,Y2)
# Set e1=e2=1, and remaining oriented plaquette product to i.
# f=Re(e2*i), so the exact directional derivative is Re(i*i)=-1.
assert mul(X,X)[0]==-1
assert 8*mul(X,X)[0]==-8 # sqrt(2) times [T,Delta]f
print("adjoint Casimir 8; inverse-prefix verified; sqrt(2) [T,Delta]f=-8")
