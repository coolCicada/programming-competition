function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin();
    let total = (1 + n) * (n / 2) / 2
    if (total % 1 === 0) {
        cout('YES')
        const A = []
        const B = []
        for (let i = 0; i < n / 4; i ++) {
            A.push(i + 1)
        }
        for (let i = n / 4; i < n / 2; i ++) {
            B.push(i + 1)
        }
        for (let i = n / 2; i < n / 4 * 3; i ++) {
            B.push(i + 1)
        }
        for (let i = n / 4 * 3; i < n; i ++) {
            A.push(i + 1)
        }
        cout(...A)
        cout(...B);
    } else {
        cout('NO');
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