function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const [n, m, k] = cin(3);
    const a = cin(n);
    const b = cin(m);
    const mp = new Map();
    for (const i of b) {
        mp.set(i, (mp.get(i) || 0) + 1)
    }
    let cnt = 0
    let res = 0
    for (let i = 0; i < n; i ++) {
        if (mp.has(a[i])) {
            mp.set(a[i], (mp.get(a[i]) || 0) - 1)
        }
        if (mp.has(a[i]) && mp.get(a[i]) >= 0) {
            cnt ++
        }
        if (i >= m) {
            const sv = a[i - m]
            if (mp.has(sv)) {
                mp.set(sv, (mp.get(sv) || 0) + 1)
                if (mp.get(sv) > 0) cnt --
            }
        }
        if (i >= m - 1) {
            if (cnt >= k) res ++
        }
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