function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const [n, s] = cin(2);
    const arr = new Array(32).fill(0);
    let cnt = 0
    for (let i = 0; i < 32; i ++) {
        arr[i] = (s >> i) & 1
        if (i > 0 && arr[i]) {
            cnt += 2
        }
    }
    if (cnt < n || arr[0] === 1) return cout(-1)
    else {
        cout('0')
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