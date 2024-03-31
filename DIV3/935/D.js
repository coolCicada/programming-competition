function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin(), m = cin();
    const aArr = new Array(n + 1); for (let i = 1; i <= n; i ++) aArr[i] = cin();
    const bArr = new Array(n + 1); for (let i = 1; i <= n; i ++) bArr[i] = cin();

    const mArr = new Array(n + 2).fill(0);
    for (let i = n; i >= 0; i --) {
        mArr[i] = mArr[i + 1] + Math.min(aArr[i], bArr[i]);
    }

    let res = mArr[m] + Math.max(aArr[m] - bArr[m], 0)
    for (let i = 1; i < m; i ++) {
        res = Math.min(res, mArr[i] + Math.max(aArr[i] - bArr[i], 0))
    }
    cout(res)
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.trim().split(/\s+/), cid=0;
    main();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    console.log(args.join(' '));
}