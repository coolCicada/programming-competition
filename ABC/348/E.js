function main() {
    const n = cin();
    const g = new Array(n + 1).fill(0).map(() => []);
    for (let i = 1; i <= n - 1; i ++) {
        const f = cin(), t = cin();
        g[f].push(t);
        g[t].push(f);
    }
    const dep = new Array(n + 1).fill(0n);
    const size = new Array(n + 1).fill(1n);
    for (let i = 1; i <= n; i ++) {
        size[i] = BigInt(cin());
    }
    function dfs(c, p, d) {
        dep[1] += d * size[c];
        for (const n of g[c]) {
            if (n !== p) {
                dfs(n, c, d + 1n);
                size[c] += size[n];
            }
        }
    }
    dfs(1, 0, 0n);
    function reroot(c, p) {
        for (const n of g[c]) {
            if (n !== p) {
                dep[n] = dep[c] + size[1] - 2n * size[n];
                reroot(n, c);
            }
        }
    }
    reroot(1, 0);
    let mn = dep[1]
    for (let i = 2; i <= n; i ++) {
        if (dep[i] < mn) {
            mn = dep[i]
        }
    }
    cout(mn);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}