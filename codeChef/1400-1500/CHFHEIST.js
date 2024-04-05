function main() {
    let t = cin(); while (t --) solve ()
}

function solve() {
    let [D, d, P, Q] = cin(4);
    let total = D * P;
    let t = Math.floor(D / d);
    t --
    if (t < 0) {
        return cout(total)
    } else {
        total += d * Q * (1 + t) * t / 2
    }
    let left = D % d
    total += left * (t + 1) * Q
    cout(total);
    // (Q + 2Q + 3Q + 4Q) * d
    // d * Q * (1 + 2 + 3)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}