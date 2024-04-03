function main() {
    let t = cin();
    while (t --) solve ();
}

function solve() {
    const n = cin(), l = cin(), r = cin();
    const arr = new Array(n)
    for (let i = 0; i < n; i ++) {
        arr[i] = cin();
    }
    let cnt = 0;
    let mn = 0
    let mx = 0
    for (let i = 0; i < n; i ++) {
        if (arr[i] < l || arr[i] > r) {
            cnt --
        } else {
            cnt ++
        }
        mn = Math.min(mn, cnt)
        mx = Math.max(mx, cnt)
    }
    cout(mx, mn)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}