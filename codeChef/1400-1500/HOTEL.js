function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    const a = cin(n), b = cin(n);
    const arr = new Array(1001).fill(0)
    for (let i = 0; i < n; i ++) {
        arr[a[i]] += 1
        arr[b[i]] -= 1
    }
    let mx = 0
    for (let i = 1; i < 1001; i ++) {
        arr[i] += arr[i - 1]
        mx = Math.max(mx, arr[i])
    }
    cout(mx);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}