function main() {
    const n = cin(), A = cin(), B = cin();
    let MOD = A + B
    const arr = new Array(n); for (let i = 0; i < n; i ++) arr[i] = cin() % MOD;
    arr.sort((x, y) => x - y);

    for (let i = 1; i < n; i ++) {
        if (arr[i] - arr[i - 1] > B) {
            return cout('Yes')
        }
    }
    
    if (arr[n - 1] - arr[0] < A) cout('Yes')
    else cout('No')
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