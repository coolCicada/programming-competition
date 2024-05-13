function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const [N, K] = cin(2);
    const ns = cin(N);
    const ks = cin(N);
    const mp = new Map();
    for (let i = 0; i < N; i ++) {
        mp.set(ns[i], Math.min(mp.has(ns[i]) ? mp.get(ns[i]) : Infinity, ks[i]));
    }

    if (mp.size < K) {
        cout(-1)
    }
    else {
        const arr = [...mp.values()].sort((x, y) => x - y)
        let t = 0
        for (let i = 0; i < K; i ++) {
            t += arr[i] 
        }
        cout(t);
    }
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}