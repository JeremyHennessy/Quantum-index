"""Exact symbolic quaternion orientation and gradient checks."""
import sympy as s
x1,x2,x3=s.symbols("x1 x2 x3")
a,b,c=[s.Matrix(s.symbols(f"a{i}x a{i}y a{i}z")) for i in (1,2,3)]
tau=a.dot(b.cross(c))
expr=(-a).dot(-x2*c+b.cross(c))
assert s.expand(expr-(x2*a.dot(c)-tau))==0

def qmul(L,R):
    x,u=L;y,v=R
    return x*y-u.dot(v), x*v+y*u+u.cross(v)
def t(L,R,S):
    return s.expand(qmul(qmul(L,R),S)[0])
qs=[(x1,a),(x2,b),(x3,c)]
invariant=x1*x2*x3-x1*b.dot(c)-x2*a.dot(c)-x3*a.dot(b)
assert s.expand(t(*qs)-(invariant-tau))==0
assert s.expand(t(qs[2],qs[1],qs[0])-(invariant+tau))==0
gram=s.Matrix([[v.dot(w) for w in (a,b,c)] for v in (a,b,c)])
assert s.expand(gram.det()-tau**2)==0
for sign in (1,-1):
    subs=dict(zip(list(a)+list(b)+list(c)+[x1,x2,x3],
                  [1,0,0,0,1,0,0,0,sign,0,0,0]))
    assert tau.subs(subs)==sign and expr.subs(subs)==-sign
print("oriented triple in gradient, reversed word traces, Gram determinant and two reflected fixtures verified")
