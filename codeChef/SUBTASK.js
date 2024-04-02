function main() {
    let t = cin();
    while (t --) solve ()
}

function solve() {
    const n = cin(), m = cin(), k = cin();
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        arr[i] = cin();
    }
    let cnt = 0
    for (let i = 0; i < n; i ++) {
        if (arr[i] === 1) cnt ++
        else break;
    }
    if (cnt === n) cout(100)
    else if (cnt >= m) cout(k)
    else cout(0)
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}