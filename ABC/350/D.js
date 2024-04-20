function main() {
    const [n, m] = cin(2);
    const arr = new Array(n + 1).fill(0)
    const p = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i ++ ) {
        p[i] = i
    }

    for (let i = 0; i < m; i ++) {
        const [a, b] = cin(2);
        arr[a] ++
        arr[b] ++
        union(a, b);
    }

    function find(x) {
        if (x !== p[x]) p[x] = find(p[x]);
        return p[x];
    }

    function union(a, b) {
        const ap = find(a), bp = find(b);
        p[ap] = bp
    }

    const mp = new Map();
    for (let i = 1; i <= n; i ++) {
        if (mp.has(find(i))) {
            mp.get(find(i)).push(i);
        } else {
            mp.set(find(i), [i])
        }
    }

    let res = 0
    for (const v of mp.values()) {
        if (v.length < 3) continue
        let cnt = 0
        for (let i = 0; i < v.length; i ++) {
            cnt += arr[v[i]]
        }
        res += (v.length * (v.length - 1)) / 2 - cnt / 2
    }

    cout(res)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}