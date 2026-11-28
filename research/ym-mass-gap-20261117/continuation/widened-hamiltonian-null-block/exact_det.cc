#include <gmpxx.h>
#include <iostream>
#include <vector>
#include <utility>
using namespace std;
using Z=mpz_class;
using M=vector<vector<Z>>;

Z det(M A){
 int n=A.size(), parity=1;
 Z prev=1, x;
 for(int k=0;k+1<n;k++){
   if(A[k][k]==0){
     int i=k+1;
     while(i<n && A[i][k]==0) i++;
     if(i==n) return Z(0);
     swap(A[i],A[k]); parity=-parity;
   }
   for(int i=k+1;i<n;i++){
     for(int j=k+1;j<n;j++){
       x=A[k][k]*A[i][j]-A[i][k]*A[k][j];
       if(k) mpz_divexact(x.get_mpz_t(),x.get_mpz_t(),prev.get_mpz_t());
       A[i][j]=x;
     }
     A[i][k]=0;
   }
   prev=A[k][k];
 }
 return parity*A.back().back();
}
int main(){
 int N,K;cin>>N>>K;
 vector<int>I(K);
 for(int &i:I)cin>>i;
 vector<vector<vector<Z>>> C(N,vector<vector<Z>>(N));
 for(int i=0;i<N;i++){
  int r;cin>>r;
  while(r--){int j,p;cin>>j>>p; C[i][j].resize(p);
   for(Z &a:C[i][j]) cin>>a;
  }
 }
 int count=0;
 for(int q=0;count<161 && q<250;q++){
  int s=(q%2)?(q+1)/2:-q/2;
  M U(N,vector<Z>(N)),V(K,vector<Z>(K));
  for(int i=0;i<N;i++)for(int j=0;j<N;j++)for(auto k=C[i][j].rbegin();k!=C[i][j].rend();k++)
   U[i][j]=U[i][j]*s+*k;
  for(int i=0;i<K;i++)for(int j=0;j<K;j++)V[i][j]=U[I[i]][I[j]];
  Z b=det(V);
  if(b==0)continue;
  Z a=det(U);
  if(!mpz_divisible_p(a.get_mpz_t(),b.get_mpz_t()))return 1;
  mpz_divexact(a.get_mpz_t(),a.get_mpz_t(),b.get_mpz_t());
  cout<<s<<" "<<a<<endl;
  count++;
 }
 return count==161?0:1;
}
