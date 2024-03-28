function main() {
    const n = cin(), q = cin(), k = cin();
    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        arr[i] = cin();
    }
    const dp = new Array(n);
    for (let i = 0; i < n; i ++) {
        if (i === 0) {
            dp[i] = arr[i + 1] - 2
        } else if (i === n - 1) {
            dp[i] = k - arr[n - 2] - 1
        } else {
            dp[i] = arr[i + 1] - arr[i - 1] - 2
        }
    }
    const preDp = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i ++) {
        preDp[i] = preDp[i - 1] + dp[i - 1];
    }
    // cout(preDp)
    // cout(dp)
    for (let i = 0; i < q; i ++) {
        const l = cin(), r = cin();
        if (l === r) {
            cout(k - 1)
            continue
        }
        let total = 0
        total += preDp[r] - preDp[l - 1]
        if (l !== 1) {
            total += arr[l - 2]
        }
        if (r !== n) {
            total += k - arr[r] + 1
        }
        cout(total)
    }
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