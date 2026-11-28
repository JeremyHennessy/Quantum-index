"""Exact polynomial checks of adjacent SU(2) joint-conjugacy coefficients."""
import sympy as s
x,v,d=s.symbols('x v d')
a,b=1-x*x,1-v*v
G=a*b-d*d
M=s.Matrix([[4*a,-d,-4*x*d+v*a],
            [-d,4*b,-4*v*d+x*b],
            [-4*x*d+v*a,-4*v*d+x*b,
             3*(a+b-2*d*d)+x*x*b+v*v*a-2*x*v*d]])
xs=(x,v,d)
B=s.Matrix([-12*x,-12*v,-20*d-6*x*v])
assert all(s.expand(sum(s.diff(M[i,j],xs[i]) for i in range(3))-B[j])==0 for j in range(3))
assert all(s.expand(e)==0 for e in M*s.Matrix([s.diff(G,q) for q in xs])-G*s.Matrix([-8*x,-8*v,-4*(3*d+x*v)]))
assert s.expand(M.det()-6*G*(16-d*d+5*d*x*v-4*x*x*v*v-6*x*x-6*v*v))==0
def lap(f):
    return s.expand(sum(B[i]*s.diff(f,xs[i]) for i in range(3))+
                    sum(M[i,j]*s.diff(f,xs[i],xs[j]) for i in range(3) for j in range(3)))
assert lap(x*v)==-24*x*v-2*d
assert lap(x*v-d)==-18*(x*v-d)
print("drift/divergence, Gram-boundary tangency, determinant and perimeter Casimir checked")
