#include <algorithm>
#include <cassert>
#include <iostream>
#include <vector>
using namespace std;
using P=vector<int>;
int p;
int red(long long a){return (a%p+p)%p;}
int pw(int x,int k){int y=1;while(k){if(k&1)y=y*x%p;x=x*x%p;k>>=1;}return y;}
void trim(P &a){while(!a.empty()&&a.back()==0)a.pop_back();}
int eval(const P& a,int x){int y=0;for(auto i=a.rbegin();i!=a.rend();++i)y=(y*x+*i)%p;return y;}
P diff(const P& a){P d(max(0,(int)a.size()-1));for(size_t i=1;i<a.size();i++)d[i-1]=a[i]*i%p;return d;}
int res(P a,P b){
 int v=1;
 while(b.size()>1){
  if(a.empty())return 0;
  int m=a.size()-1,n=b.size()-1,iv=pw(b.back(),p-2);
  P r=a;
  for(int i=m;i>=n;i--)if(r[i]){
   int f=r[i]*iv%p;
   for(int j=0;j<=n;j++)r[i-n+j]=red(r[i-n+j]-f*b[j]);
  }
  trim(r);
  if(r.empty())return 0;
  if((m*n)&1)v=red(-v);
  v=v*pw(b.back(),m+1-r.size())%p;
  a=move(b);b=move(r);
 }
 return b.empty()?0:v*pw(b[0],a.size()-1)%p;
}
int main(){
 int nd,ns;cin>>p>>nd>>ns;
 vector<P> A(nd+1,P(ns+1)),B;
 for(auto &row:A)for(int &x:row)cin>>x;
 for(const auto &row:A)B.push_back(diff(row));
 assert(A[nd][0] && all_of(A[nd].begin()+1,A[nd].end(),[](int a){return a==0;}));
 const int maxdeg=nd*(nd-1);
 P q{1},h(maxdeg+1),g(maxdeg+1);
 int surplus=0;
 for(int u=0;u<p;u++){
  P a(nd+1),b(nd+1);
  for(int i=0;i<=nd;i++){a[i]=eval(A[i],u);b[i]=eval(B[i],u);}
  P az=diff(a); trim(b);trim(az);
  if((int)b.size()!=nd || (int)az.size()!=nd)continue;
  int x=res(a,az),y=res(a,b);
  if((int)q.size()==maxdeg+2){
   assert(eval(h,u)==x && eval(g,u)==y);
   if(++surplus==9)break;
   continue;
  }
  int qi=pw(eval(q,u),p-2);
  int dx=red(x-eval(h,u))*qi%p,dy=red(y-eval(g,u))*qi%p;
  for(size_t j=0;j<q.size();j++){
   h[j]=(h[j]+q[j]*dx)%p;g[j]=(g[j]+q[j]*dy)%p;
  }
  q.push_back(0);
  for(int j=(int)q.size()-1;j>=0;j--)q[j]=red((j?q[j-1]:0)-u*q[j]);
 }
 assert(surplus==9);
 for(const auto &v:{h,g}){for(int z:v)cout<<z<<' ';cout<<'\n';}
}
