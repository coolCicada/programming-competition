function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin();
    const arr = new Array(n);
    let total = 0
    for (let i = 0; i < n; i ++) {
        arr[i] = cin();
        total += arr[i]
    }
    const total2 = total / n * (n - 2)
    const add = total - total2
    const mp = new Map();
    let r = 0
    for (let i = 0; i < n; i ++) {
        if (mp.has(add - arr[i])) {
            r += mp.get(add - arr[i])
        }
        mp.set(arr[i], (mp.get(arr[i]) || 0) + 1)
    }
    cout(r);
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