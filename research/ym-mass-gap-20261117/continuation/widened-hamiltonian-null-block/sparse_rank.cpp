// Exact finite-field sparse rank with separate last-column witness.
#include <algorithm>
#include <cassert>
#include <cstdint>
#include <fstream>
#include <iostream>
#include <queue>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>

int main(int count,char** args) {
    if(count!=2 && (count!=3 || std::string(args[2])!="--expect-full-inconsistent")) return 1;
    std::ifstream f(args[1]);
    int nr=0,nc=0,nnz=0,p=0; f>>nr>>nc>>nnz>>p;
    assert(nr>0 && nc>0 && (p==1009 || p==1013));
    std::vector<std::unordered_map<int,int>> rows(nr);
    std::vector<std::unordered_set<int>> cols(nc);
    std::vector<int> rhs(nr),inv(p);
    inv[1]=1;
    for(int a=2;a<p;++a) inv[a]=p-(p/a)*inv[p%a]%p;
    for(int k=0;k<nnz;++k) {
        int i,j,a; f>>i>>j>>a;
        assert(f && 0<=i && i<nr && 0<=j && j<=nc && 0<=a && a<p);
        if(j==nc) { assert(!rhs[i]); rhs[i]=a; }
        else if(a) {assert(rows[i].emplace(j,a).second); cols[j].insert(i);}
    }
    std::priority_queue<std::pair<int,int>, std::vector<std::pair<int,int>>,std::greater<>> queue;
    for(int i=0;i<nr;++i) if(!rows[i].empty()) queue.emplace(rows[i].size(),i);
    int rank=0;
    while(!queue.empty()) {
        const auto [n,i]=queue.top(); queue.pop();
        auto &row=rows[i];
        if(row.empty() || n!=int(row.size())) continue;
        int j=-1, degree=nr+1;
        for(const auto& [c,a]:row) {
            int d=cols[c].size();
            if(d<degree || (d==degree && c<j)) {j=c; degree=d;}
        }
        assert(j>=0 && cols[j].count(i));
        const int unit=inv[row[j]];
        assert(unit);
        std::vector<std::pair<int,int>> pivot; pivot.reserve(row.size());
        for(const auto &[c,a]:row) {
            if(c!=j) pivot.emplace_back(c,a*unit%p);
            assert(cols[c].erase(i)==1);
        }
        const int y=rhs[i]*unit%p;
        row.clear(); rhs[i]=0;
        std::vector<int> active(cols[j].begin(),cols[j].end());
        for(int u:active) {
            auto &x=rows[u];
            const int mul=x.at(j); x.erase(j);
            for(const auto &[c,a]:pivot) {
                auto z=x.find(c);
                const int v=(p-(mul*a)%p)%p;
                if(z==x.end()) {
                    if(v) {x.emplace(c,v); cols[c].insert(u);}
                } else {
                    const int w=(z->second+v)%p;
                    if(!w){x.erase(z); assert(cols[c].erase(u)==1);}
                    else z->second=w;
                }
            }
            rhs[u]=(rhs[u]+p-y*mul%p)%p;
            if(!x.empty()) queue.emplace(x.size(),u);
        }
        cols[j].clear();
        ++rank;
        if(rank%1000==0) std::cerr<<"pivots "<<rank<<"/"<<nc<<" last degree "<<n<<"/"<<degree<<"\n";
    }
    assert(std::all_of(rows.begin(),rows.end(),[](const auto& v){return v.empty();}));
    const int defect=std::any_of(rhs.begin(),rhs.end(),[](int a){return a!=0;});
    std::cout<<p<<" coefficient rank "<<rank<<" augmented rank "<<rank+defect
             <<" coefficient columns "<<nc<<"\n";
    if(count==3 && (rank!=nc || defect!=1)) return 2;
}
