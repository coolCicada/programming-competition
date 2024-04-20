function main() {
    let [L, R] = cinS(2).map(BigInt);
    const res = []
    if (L === 0n) {
        let cnt = 0n
        while (BigInt(2n ** cnt) < R) {
            cnt ++
        }
        while (BigInt(2n ** cnt) * BigInt(L + 1n) > R) {
            cnt --
            L *= 2n
        }
        res.push([0, BigInt(2n ** cnt)]);
        L = BigInt(2n ** cnt);
    }
    while (L < R) { 
        let cnt = 0n
        while (L >= 2n && L % 2n === 0n) {
            cnt ++
            L /= 2n
        }
        while (BigInt(2n ** cnt) * BigInt(L + 1n) > R) {
            cnt --
            L *= 2n
        }
        res.push([BigInt(2n ** cnt) * L, BigInt(2n ** cnt) * (L + 1n)])
        L = BigInt(2n ** cnt) * (L + 1n)
    }
    cout(res.length)
    for (let i = 0; i < res.length; i ++) {
        cout(res[i][0], res[i][1])
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