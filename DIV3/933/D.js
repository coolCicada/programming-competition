function main() {
    let n = cin();
    while (n --) solve()
}

function solve() {
    const n = cin(), m = cin(), x = cin()
    const dp = new Array(n).fill(0).map(() => new Array(m + 1).fill(false));
    dp[x - 1][0] = true
    for (let i = 1; i <= m; i ++) {
        let a = cin(), b = cinS();
        for (let j = 0; j < n; j ++) {
            if (b === '1') {
                dp[j][i] = dp[(j + a) % n][i - 1]
            } else if (b === '0') {
                dp[j][i] = dp[(j - a + n) % n][i - 1]  
            } else {
                dp[j][i] = dp[(j + a) % n][i - 1] || dp[(j - a + n) % n][i - 1]
            } 
        }
    }
    // cout(dp)
    const res = []
    for (let i = 0; i < n; i ++) {
        if (dp[i][m]) res.push(i + 1)
    }
    cout(res.length)
    cout(...res);
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
    console.log(...args);
}