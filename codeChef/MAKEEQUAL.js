function main() {
    let t = cin();
    while (t -- ) solve ()
}

function solve() {
    const n = cin();
    const arr = new Array(n).fill(0); for (let i = 0; i < n; i ++) arr[i] = cin();
    let mn = arr[0]
    let mx = arr[0]
    for (let i = 1; i < n; i ++) {
        mn = Math.min(mn, arr[i])
        mx = Math.max(mx, arr[i])
    }
    cout(mx - mn);
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin() {return Number(content[cid++])}
function cinS() {return content[cid++]}
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}