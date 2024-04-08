function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    let a = Infinity, b = -Infinity;
    let t = 0
    for (let i = 0; i < n; i ++) {
        const c = Math.abs(cin());
        if (i % 2 === 0) {
            a = Math.min(a, c);
            t += c
        } else {
            b = Math.max(b, c);
            t -= c
        }
    }
    if (b > a) {
        t -= a * 2
        t += b * 2
    }
    cout(t);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}