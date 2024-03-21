#include<bits/stdc++.h>
using namespace std;

void solve() {
    int n; cin >> n;
    string s; cin >> s;
    vector<int> L(n + 1), R(n + 1);
    for (int i = 1; i <= n; i ++) {
        cin >> L[i] >> R[i];
    }
    
    function<int(int)> dfs = [&](int i) -> int {
        if (L[i] == 0 && R[i] == 0) return 0;

        int res = 1e9;
        if (L[i] != 0) {
            res = min(res, dfs(L[i]) + (s[i - 1] != 'L'));
        }
        if (R[i] != 0) {
            res = min(res, dfs(R[i]) + (s[i - 1] != 'R'));
        }

        return res;
    };

    cout << dfs(1) << endl;
}

int main() {
    int t;
    cin >> t;

    while (t --) solve();
    
    return 0;
}